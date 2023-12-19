import { getIconByFileExtension } from "components/system/Files/FileEntry/functions";
import type { FolderActions } from "components/system/Files/FileManager/useFolder";
import type {
  SortBy,
  SortByOrder,
} from "components/system/Files/FileManager/useSortBy";
import { useFileSystem } from "contexts/fileSystem";
import { useMenu } from "contexts/menu";
import type {
  ContextMenuCapture,
  MenuItem,
} from "contexts/menu/useMenuContextState";
import { EMPTY_BUFFER, FOLDER_ICON, MENU_SEPARATOR } from "utils/constants";

const NEW_FOLDER = "New Folder";
const NEW_TEXT_DOCUMENT = "New Text Document.txt";
const NEW_RTF_DOCUMENT = "New Rich Text Document.whtml";

const richTextDocumentIcon = getIconByFileExtension(".whtml");
const textDocumentIcon = getIconByFileExtension(".txt");

const updateSortBy =
  (value: SortBy, defaultIsAscending: boolean) =>
  ([sortBy, isAscending]: SortByOrder): SortByOrder =>
    [value, sortBy === value ? !isAscending : defaultIsAscending];

const useFolderContextMenu = (
  url: string,
  {
    addToFolder,
    newPath,
    pasteToFolder,
    sortByOrder: [[sortBy, isAscending], setSortBy],
  }: FolderActions
): ContextMenuCapture => {
  const { contextMenu } = useMenu();
  const { mapFs, pasteList = {}, updateFolder } = useFileSystem();
  const ADD_FILE = { action: () => addToFolder(), label: "Add file" };
  const MAP_DIRECTORY = {
    action: () =>
      mapFs(url).then((mappedFolder) => updateFolder(url, mappedFolder)),
    label: "Map directory",
  };
  const FS_COMMANDS =
    typeof FileSystemHandle === "function"
      ? [ADD_FILE, MAP_DIRECTORY]
      : [ADD_FILE];

  const menuItems: MenuItem[] = [
    {
      label: "Sort by",
      menu: [
        {
          action: () => setSortBy(updateSortBy("name", true)),
          label: "Name",
          toggle: sortBy === "name",
        },
        {
          action: () => setSortBy(updateSortBy("size", false)),
          label: "Size",
          toggle: sortBy === "size",
        },
        {
          action: () => setSortBy(updateSortBy("type", true)),
          label: "Item type",
          toggle: sortBy === "type",
        },
        {
          action: () => setSortBy(updateSortBy("date", false)),
          label: "Date modified",
          toggle: sortBy === "date",
        },
        MENU_SEPARATOR,
        {
          action: () => setSortBy(([value]) => [value, true]),
          label: "Ascending",
          toggle: isAscending,
        },
        {
          action: () => setSortBy(([value]) => [value, false]),
          label: "Descending",
          toggle: !isAscending,
        },
      ],
    },
    { action: () => updateFolder(url), label: "Refresh" },
    MENU_SEPARATOR,
    ...FS_COMMANDS,
    { action: () => addToFolder(), label: "Add File" },
    {
      action: () => pasteToFolder(),
      disabled: Object.keys(pasteList).length === 0,
      label: "Paste",
    },
    MENU_SEPARATOR,
    {
      label: "New",
      menu: [
        {
          action: () => newPath(NEW_FOLDER, undefined, true),
          icon: FOLDER_ICON,
          label: "Folder",
        },
        MENU_SEPARATOR,
        {
          action: () => newPath(NEW_RTF_DOCUMENT, EMPTY_BUFFER, true),
          icon: richTextDocumentIcon,
          label: "Rich Text Document",
        },
        {
          action: () => newPath(NEW_TEXT_DOCUMENT, EMPTY_BUFFER, true),
          icon: textDocumentIcon,
          label: "Text Document",
        },
      ],
    },
  ];

  return contextMenu?.(menuItems);
};

export default useFolderContextMenu;
