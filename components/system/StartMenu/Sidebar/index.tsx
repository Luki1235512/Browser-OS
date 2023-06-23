import type { SidebarButtons } from "components/system/StartMenu/Sidebar/SidebarButton";
import SidebarButton from "components/system/StartMenu/Sidebar/SidebarButton";
import {
  AllApps,
  Documents,
  Power,
  SideMenu,
} from "components/system/StartMenu/Sidebar/SidebarIcons";
import StyledSidebar from "components/system/StartMenu/Sidebar/StyledSidebar";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { useEffect, useRef, useState } from "react";

const Sidebar = (): JSX.Element => {
  const { resetFs } = useFileSystem();
  const { open } = useProcesses();
  const [collapsed, setCollapsed] = useState(true);
  const expandTimer = useRef<NodeJS.Timer>();
  const clearTimer = (): void => {
    if (expandTimer.current) clearTimeout(expandTimer.current);
  };
  const topButtons: SidebarButtons = [
    {
      name: "START",
      icon: <SideMenu />,
      tooltip: "Expand",
      heading: true,
      action: () => setCollapsed((collapsedState) => !collapsedState),
    },
    { name: "ALL apps", icon: <AllApps />, active: true },
  ];
  const bottomButtons: SidebarButtons = [
    {
      name: "Documents",
      icon: <Documents />,
      action: () =>
        open(
          "FileExplorer",
          "/Users/Public/Documents",
          "/System/Icons/documents.png"
        ),
    },
    {
      name: "Power",
      icon: <Power />,
      action: () => resetFs().finally(() => window.location.reload()),
    },
  ];

  useEffect(() => clearTimer, []);

  return (
    <StyledSidebar
      className={collapsed ? "collapsed" : undefined}
      onMouseEnter={() => {
        expandTimer.current = setTimeout(() => setCollapsed(false), 700);
      }}
      onMouseLeave={() => {
        clearTimer();
        setCollapsed(true);
      }}
    >
      {Object.entries({ topButtons, bottomButtons }).map(([key, buttons]) => (
        <ol key={key}>
          {buttons.map((button) => (
            <SidebarButton
              key={button.name}
              collapsed={collapsed}
              {...button}
            />
          ))}
        </ol>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
