import type { WebampCI } from "components/apps/Webamp/types";
import { centerPosition } from "components/system/Window/functions";
import { parseBuffer } from "music-metadata-browser";
import type { Position } from "react-rnd";
import { HOME, MP3_MIME_TYPE } from "utils/constants";
import { bufferToBlob, cleanUpBufferUrl } from "utils/functions";
import type { Track } from "webamp";

const WEBAMP_SKINS_PATH = `${HOME}/Documents/Winamp Skins`;

export const BASE_WEBAMP_OPTIONS = {
  availableSkins: [
    { name: "Cuteamp", url: `${WEBAMP_SKINS_PATH}/cuteamp.wsz` },
    { name: "Morbamp", url: `${WEBAMP_SKINS_PATH}/Morbamp.wsz` },
    { name: "Bathory", url: `${WEBAMP_SKINS_PATH}/Bathory.wsz` },
  ],
};

const BASE_WINDOW_SIZE = {
  height: 116,
  width: 275,
};

const CONTAINER_WINDOW = "#webamp";

export const MAIN_WINDOW = "#main-window";

export const PLAYLIST_WINDOW = "#playlist-window";

export const cleanBufferOnSkinLoad = (
  webamp: WebampCI,
  url = ""
): Promise<void> =>
  webamp.skinIsLoaded().then(() => {
    if (url) cleanUpBufferUrl(url);
  });

export const closeEqualizer = (webamp: WebampCI): void =>
  webamp.store.dispatch({
    type: "CLOSE_WINDOW",
    windowId: "equalizer",
  });

export const getWebampElement = (): HTMLDivElement | null =>
  document.querySelector<HTMLDivElement>(CONTAINER_WINDOW);

export const updateWebampPosition = (
  webamp: WebampCI,
  taskbarHeight: string,
  position?: Position
): void => {
  const { height, width } = BASE_WINDOW_SIZE;
  const { x, y } =
    position || centerPosition({ height: height * 2, width }, taskbarHeight);

  webamp.store.dispatch({
    positions: {
      main: { x, y },
      playlist: { x, y: height + y },
    },
    type: "UPDATE_WINDOW_POSITIONS",
  });
};

export const focusWindow = (webamp: WebampCI, window: string): void =>
  webamp.store.dispatch({
    type: "SET_FOCUSED_WINDOW",
    window,
  });

export const unFocus = (webamp: WebampCI): void =>
  webamp.store.dispatch({
    type: "SET_FOCUSED_WINDOW",
    window: "",
  });

export const parseTrack = async (
  file: Buffer,
  fileName: string
): Promise<Track> => {
  const {
    common: { album = "", artist = "", title = fileName },
    format: { duration = 0 },
  } = await parseBuffer(
    file,
    {
      mimeType: MP3_MIME_TYPE,
      size: file.length,
    },
    { duration: true, skipCovers: true, skipPostHeaders: true }
  );

  return {
    blob: bufferToBlob(file),
    duration: Math.floor(duration),
    metaData: { album, artist, title },
  };
};
