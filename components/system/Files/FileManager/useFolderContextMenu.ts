import type { FolderActions } from "components/system/Files/FileManager/useFolder";
import { useMenu } from "contexts/menu";
import type { MenuItem } from "contexts/menu/useMenuContextState";
import { MENU_SEPARATOR } from "utils/constants";

const useFolderContextMenu = (
  { newPath }: FolderActions,
  updateFiles: (appendFile?: string | undefined) => void
): { onContextMenuCapture: React.MouseEventHandler<HTMLElement> } => {
  const { contextMenu } = useMenu();
  const menuItems: MenuItem[] = [
    { label: "Refresh", action: () => updateFiles() },
    MENU_SEPARATOR,
    {
      label: "New",
      menu: [
        {
          label: "Folder",
          action: () => newPath("New Folder"),
        },
        MENU_SEPARATOR,
        {
          label: "Text Document",
          action: () => newPath("New Text Document.txt", Buffer.from("")),
        },
      ],
    },
  ];

  return {
    onContextMenuCapture: contextMenu?.(menuItems),
  };
};

export default useFolderContextMenu;
