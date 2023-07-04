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
      action: () => setCollapsed((collapsedState) => !collapsedState),
      heading: true,
      icon: <SideMenu />,
      name: "START",
      tooltip: "Expand",
    },
    { active: true, icon: <AllApps />, name: "ALL apps" },
  ];
  const bottomButtons: SidebarButtons = [
    {
      action: () =>
        open(
          "FileExplorer",
          "/Users/Public/Documents",
          "/System/Icons/documents.png"
        ),
      icon: <Documents />,
      name: "Documents",
    },
    {
      action: () => resetFs().finally(() => window.location.reload()),
      icon: <Power />,
      name: "Power",
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
      {Object.entries({ bottomButtons, topButtons }).map(([key, buttons]) => (
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
