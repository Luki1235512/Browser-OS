import { useMenu } from "contexts/menu";
import type {
  ContextMenuCapture,
  MenuItem,
} from "contexts/menu/useMenuContextState";
import { useProcesses } from "contexts/process";
import { useMemo } from "react";
import { MENU_SEPARATOR } from "utils/constants";
import { toggleFullScreen, toggleShowDesktop } from "utils/functions";

const useTaskbarContextMenu = (onStartButton = false): ContextMenuCapture => {
  const { contextMenu } = useMenu();
  const { minimize, open, processes = {} } = useProcesses();

  return useMemo(
    () =>
      contextMenu?.(() => {
        const processArray = Object.entries(processes);
        const allWindowsMinimized =
          processArray.length > 0 &&
          !processArray.some(([, { minimized }]) => !minimized);
        const toggleLabel = allWindowsMinimized
          ? "Show open windows"
          : "Show the desktop";
        const menuItems: MenuItem[] = [
          {
            action: () => toggleShowDesktop(processes, minimize),
            label: onStartButton ? "Desktop" : toggleLabel,
          },
        ];

        if (onStartButton) {
          menuItems.unshift(
            {
              action: () => open("Terminal"),
              label: "Terminal",
            },
            MENU_SEPARATOR,
            {
              action: () => open("FileExplorer"),
              label: "File Explorer",
            },
            {
              action: () => open("Run"),
              label: "Run",
            },
            MENU_SEPARATOR
          );
        } else {
          menuItems.unshift(
            {
              action: toggleFullScreen,
              label: document.fullscreenElement
                ? "Exit full screen"
                : "Enter full screen",
            },
            MENU_SEPARATOR
          );
        }

        return menuItems;
      }),
    [contextMenu, minimize, onStartButton, open, processes]
  );
};

export default useTaskbarContextMenu;
