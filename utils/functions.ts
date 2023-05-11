import { stripUnit } from "polished";
import {
  DOUBLE_CLICK_TIMEOUT_IN_MILLISECONDS,
  ONE_TIME_PASSIVE_EVENT,
} from "utils/constants";

export const bufferToBlob = (buffer: Buffer): Blob =>
  new Blob([new Uint8Array(buffer)]);

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(bufferToBlob(buffer));

export const cleanUpBufferUrl = (url: string): void => URL.revokeObjectURL(url);

export const loadScript = (src: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedScripts = [...document.scripts];

    if (loadedScripts.some((script) => script.src.endsWith(src))) {
      resolve(new Event("Already loaded."));
    } else {
      const script = document.createElement("script");

      script.async = false;
      script.src = src;
      script.addEventListener("error", reject, ONE_TIME_PASSIVE_EVENT);
      script.addEventListener("load", resolve, ONE_TIME_PASSIVE_EVENT);

      document.head.appendChild(script);
    }
  });

export const loadFiles = async (files: string[]): Promise<Event[]> =>
  Promise.all(files.map((file) => loadScript(file)));

export const pxToNum = (value: string | number = 0): number =>
  Number(stripUnit(value));

export const doubleClick = (
  handler: React.MouseEventHandler,
  singleClick = false,
  timeout = DOUBLE_CLICK_TIMEOUT_IN_MILLISECONDS
): React.MouseEventHandler => {
  let timer: NodeJS.Timeout | undefined;

  return (event) => {
    const runHandler = () => {
      event.stopPropagation();
      handler(event);
    };
    const clearTimer = () => {
      timer = undefined;
    };

    if (singleClick) {
      runHandler();
    } else if (timer === undefined) {
      timer = setTimeout(clearTimer, timeout);
    } else {
      clearTimeout(timer);
      runHandler();
      clearTimer();
    }
  };
};
