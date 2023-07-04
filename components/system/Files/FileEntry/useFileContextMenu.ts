import type { ExtensionType } from "components/system/Files/FileEntry/extensions";
import extensions from "components/system/Files/FileEntry/extensions";
import { getProcessByFileExtension } from "components/system/Files/FileEntry/functions";
import useFile from "components/system/Files/FileEntry/useFile";
import type { FocusEntryFunctions } from "components/system/Files/FileManager/useFocusableEntries";
import type { FileActions } from "components/system/Files/FileManager/useFolder";
import { useFileSystem } from "contexts/fileSystem";
import { useMenu } from "contexts/menu";
import type { MenuItem } from "contexts/menu/useMenuContextState";
import { useProcesses } from "contexts/process";
import processDirectory from "contexts/process/directory";
import { useSession } from "contexts/session";
import { basename, dirname, extname, join } from "path";
import {
  IMAGE_FILE_EXTENSIONS,
  MENU_SEPARATOR,
  MOUNTABLE_EXTENSIONS,
  SHORTCUT_EXTENSION,
} from "utils/constants";

const useFileContextMenu = (
  url: string,
  pid: string,
  path: string,
  setRenaming: React.Dispatch<React.SetStateAction<string>>,
  {
    archiveFiles,
    deleteFile,
    downloadFiles,
    extractFiles,
    newShortcut,
  }: FileActions,
  { blurEntry, focusEntry }: FocusEntryFunctions,
  focusedEntries: string[]
): { onContextMenuCapture: React.MouseEventHandler<HTMLElement> } => {
  const { open } = useProcesses();
  const { setWallpaper } = useSession();
  const urlExtension = extname(url);
  const baseName = basename(path);
  const isFocusedEntry = focusedEntries.includes(baseName);
  const { process: [extensionProcess, ...openWith] = [] } =
    urlExtension in extensions ? extensions[urlExtension as ExtensionType] : {};
  const openWithFiltered = openWith.filter((id) => id !== pid);
  const { icon: pidIcon } = processDirectory[pid] || {};
  const openFile = useFile(url);
  const { copyEntries, moveEntries } = useFileSystem();
  const absoluteEntries = (): string[] =>
    focusedEntries.length === 1 || !isFocusedEntry
      ? [path]
      : [
          ...new Set([
            path,
            ...focusedEntries.map((entry) => join(dirname(path), entry)),
          ]),
        ];
  const menuItems: MenuItem[] = [
    { action: () => moveEntries(absoluteEntries()), label: "Cut" },
    { action: () => copyEntries(absoluteEntries()), label: "Copy" },
    MENU_SEPARATOR,
  ];
  const pathExtension = extname(path);
  const isShortcut = pathExtension === SHORTCUT_EXTENSION;
  const { contextMenu } = useMenu();
  const defaultProcess =
    extensionProcess || getProcessByFileExtension(urlExtension);

  if (defaultProcess || isShortcut || (!pathExtension && !urlExtension)) {
    menuItems.push({
      action: () =>
        absoluteEntries().forEach((entry) =>
          newShortcut(entry, defaultProcess || "FileExplorer")
        ),
      label: "Create shortcut",
    });
  }

  menuItems.push(
    {
      action: () => absoluteEntries().forEach((entry) => deleteFile(entry)),
      label: "Delete",
    },
    { action: () => setRenaming(baseName), label: "Rename" }
  );

  if (url) {
    menuItems.unshift(MENU_SEPARATOR);

    if (MOUNTABLE_EXTENSIONS.has(pathExtension)) {
      menuItems.unshift({
        action: () => extractFiles(path),
        label: "Extract Here",
      });
    }

    menuItems.unshift(
      {
        action: () => archiveFiles(absoluteEntries()),
        label: "Add to archive...",
      },
      {
        action: () => downloadFiles(absoluteEntries()),
        label: "Download",
      }
    );
  }

  if (IMAGE_FILE_EXTENSIONS.has(pathExtension)) {
    menuItems.unshift({
      label: "Set as desktop background",
      menu: [
        {
          action: () => setWallpaper(path, "fill"),
          label: "Fill",
        },
        {
          action: () => setWallpaper(path, "fit"),
          label: "Fit",
        },
        {
          action: () => setWallpaper(path, "stretch"),
          label: "Stretch",
        },
        {
          action: () => setWallpaper(path, "tile"),
          label: "Tile",
        },
        {
          action: () => setWallpaper(path, "center"),
          label: "Center",
        },
      ],
    });
  }

  menuItems.unshift(MENU_SEPARATOR);

  if (!pid && openWithFiltered.length === 0) {
    openWithFiltered.push("MonacoEditor");
  }

  if (openWithFiltered.length > 0) {
    menuItems.unshift({
      label: "Open with",
      menu: openWithFiltered.map((id): MenuItem => {
        const { icon, title: label } = processDirectory[id] || {};
        const action = (): void => openFile(id, icon);

        return { action, icon, label };
      }),
    });
  }

  if (pid) {
    if (isShortcut && url && url !== "/") {
      const isFolder = extname(url) === "";

      menuItems.unshift({
        action: () => open("FileExplorer", dirname(url), ""),
        label: `Open ${isFolder ? "folder" : "file"} location`,
      });
    }

    menuItems.unshift({
      action: () => openFile(pid, pidIcon),
      icon: pidIcon,
      label: "Open",
      primary: true,
    });
  }

  return {
    onContextMenuCapture: (event) => {
      if (!isFocusedEntry) {
        blurEntry();
        focusEntry(baseName);
      }
      contextMenu?.(menuItems)(event);
    },
  };
};

export default useFileContextMenu;
