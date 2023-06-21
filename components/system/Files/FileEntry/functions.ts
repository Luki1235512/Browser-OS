import type { FSModule } from "browserfs/dist/node/core/FS";
import { monacoExtensions } from "components/apps/MonacoEditor/config";
import type { ExtensionType } from "components/system/Files/FileEntry/extensions";
import extensions from "components/system/Files/FileEntry/extensions";
import type { FileInfo } from "components/system/Files/FileEntry/useFileInfo";
import processDirectory from "contexts/process/directory";
import ini from "ini";
import { join } from "path";
import {
  EMPTY_BUFFER,
  IMAGE_FILE_EXTENSIONS,
  MP3_MIME_TYPE,
  SHORTCUT_EXTENSION,
  SYSTEM_FILES,
} from "utils/constants";
import { bufferToUrl } from "utils/functions";

type InternetShortcut = {
  InternetShortcut: {
    BaseURL: string;
    IconFile: string;
    URL: string;
  };
};

const getDefaultFileViewer = (extension: string): string => {
  if (monacoExtensions.has(extension)) return "MonacoEditor";
  if (IMAGE_FILE_EXTENSIONS.has(extension)) return "Photos";

  return "";
};
export const getIconByFileExtension = (extension: string): string => {
  const { icon: extensionIcon = "", process: [defaultProcess = ""] = [] } =
    extension in extensions ? extensions[extension as ExtensionType] : {};

  if (extensionIcon) return `/System/Icons/${extensionIcon}.png`;

  return (
    processDirectory[defaultProcess || getDefaultFileViewer(extension)]?.icon ||
    "/System/Icons/unknown.png"
  );
};

export const getProcessByFileExtension = (extension: string): string => {
  const [defaultProcess = ""] =
    extension in extensions
      ? extensions[extension as ExtensionType].process
      : [getDefaultFileViewer(extension)];

  return defaultProcess;
};

const getShortcutInfo = (contents: Buffer): FileInfo => {
  const {
    InternetShortcut: { BaseURL: pid = "", IconFile: icon = "", URL: url = "" },
  } = ini.parse(contents.toString()) as InternetShortcut;

  if (!icon && pid) {
    return { icon: processDirectory[pid]?.icon, pid, url };
  }

  return { icon, pid, url };
};

export const getInfoWithoutExtension = (
  path: string,
  isDirectory: boolean
): FileInfo => ({
  icon: `/System/Icons/${isDirectory ? "folder.png" : "unknown.png"}`,
  pid: isDirectory ? "FileExplorer" : "",
  url: path,
});

export const getInfoWithExtension = (
  fs: FSModule,
  path: string,
  extension: string,
  callback: React.Dispatch<React.SetStateAction<FileInfo>>
): void => {
  const getInfoByFileExtension = (icon?: string): void =>
    callback({
      icon: icon || getIconByFileExtension(extension),
      pid: getProcessByFileExtension(extension),
      url: path,
    });

  if (extension === SHORTCUT_EXTENSION) {
    fs.readFile(path, (error, contents = EMPTY_BUFFER) => {
      if (error) {
        getInfoByFileExtension();
      } else {
        callback(getShortcutInfo(contents));
      }
    });
  } else if (IMAGE_FILE_EXTENSIONS.has(extension)) {
    getInfoByFileExtension("/System/Icons/photo.png");
    fs.readFile(path, (error, contents = EMPTY_BUFFER) => {
      if (!error) getInfoByFileExtension(bufferToUrl(contents));
    });
  } else if (extension === ".mp3") {
    getInfoByFileExtension("System/Icons/music.png");
    fs.readFile(path, (error, contents = EMPTY_BUFFER) => {
      if (!error) {
        import("music-metadata-browser").then(({ parseBuffer, selectCover }) =>
          parseBuffer(
            contents,
            {
              mimeType: MP3_MIME_TYPE,
              size: contents.length,
            },
            { skipPostHeaders: true }
          ).then(({ common: { picture } = {} }) => {
            const { data: coverPicture } = selectCover(picture) || {};

            if (coverPicture) getInfoByFileExtension(bufferToUrl(coverPicture));
          })
        );
      }
    });
  } else {
    getInfoByFileExtension();
  }
};

export const filterSystemFiles =
  (directory: string) =>
  (file: string): boolean =>
    !SYSTEM_FILES.has(join(directory, file));
