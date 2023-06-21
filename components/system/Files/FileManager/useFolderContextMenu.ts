import { getIconByFileExtension } from "components/system/Files/FileEntry/functions";
import type { FolderActions } from "components/system/Files/FileManager/useFolder";
import { useFileSystem } from "contexts/fileSystem";
import { useMenu } from "contexts/menu";
import type { MenuItem } from "contexts/menu/useMenuContextState";
import { EMPTY_BUFFER, MENU_SEPARATOR } from "utils/constants";

const NEW_FOLDER = "New Folder";
const NEW_TEXT_DOCUMENT = "New Text Document.txt";
const NEW_RTF_DOCUMENT = "New Rich Text Document.whtml";

const useFolderContextMenu = (
  url: string,
  { addToFolder, newPath, pasteToFolder, setSortBy }: FolderActions
): { onContextMenuCapture: React.MouseEventHandler<HTMLElement> } => {
  const { contextMenu } = useMenu();
  const { pasteList = {}, updateFolder } = useFileSystem();
  const menuItems: MenuItem[] = [
    {
      label: "Sort by",
      menu: [
        {
          label: "Name",
          action: () => setSortBy("name"),
        },
        {
          label: "Size",
          action: () => setSortBy("size"),
        },
        {
          label: "Item type",
          action: () => setSortBy("type"),
        },
        {
          label: "Date modified",
          action: () => setSortBy("date"),
        },
      ],
    },
    { label: "Refresh", action: () => updateFolder(url) },
    MENU_SEPARATOR,
    { label: "Add File", action: () => addToFolder() },
    {
      disabled: Object.keys(pasteList).length === 0,
      label: "Paste",
      action: () => pasteToFolder(),
    },
    MENU_SEPARATOR,
    {
      label: "New",
      menu: [
        {
          label: "Folder",
          icon: "/System/Icons/folder.png",
          action: () => newPath(NEW_FOLDER, undefined, true),
        },
        MENU_SEPARATOR,
        {
          label: "Rich Text Document",
          icon: getIconByFileExtension(".whtml"),
          action: () => newPath(NEW_RTF_DOCUMENT, EMPTY_BUFFER, true),
        },
        {
          label: "Text Document",
          icon: getIconByFileExtension(".txt"),
          action: () => newPath(NEW_TEXT_DOCUMENT, EMPTY_BUFFER, true),
        },
      ],
    },
  ];

  return {
    onContextMenuCapture: contextMenu?.(menuItems),
  };
};

export default useFolderContextMenu;
