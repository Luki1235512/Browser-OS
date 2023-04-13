import FileManager from 'components/system/Files/FileManager';
import Sidebar from 'components/system/StartMenu/Sidebar';
import StyledStartMenu from 'components/system/StartMenu/StyledStartMenu';
import { useSession } from 'contexts/session';
import { useEffect, useRef } from 'react';
import { PREVENT_SCROLL } from 'utils/constants';

const StartMenu = (): JSX.Element => {
  const { toggleStartMenu } = useSession();
  const menuRef = useRef<HTMLElement | null>(null);
  const maybeCloseMenu: React.FocusEventHandler<HTMLElement> = ({
    relatedTarget
  }) => {
    const focusedElement = relatedTarget as HTMLElement | null;
    const focusedInsideMenu =
      focusedElement && menuRef.current?.contains(focusedElement);

    if (!focusedInsideMenu) {
      const focusedTaskbar = focusedElement === menuRef.current?.nextSibling;
      const focusedStartButton =
        focusedElement?.parentElement === menuRef.current?.nextSibling;

      if (!focusedTaskbar && !focusedStartButton) {
        toggleStartMenu(false);
      } else {
        menuRef.current?.focus(PREVENT_SCROLL);
      }
    }
  };

  useEffect(() => menuRef.current?.focus(), []);

  return (
    <StyledStartMenu onBlur={maybeCloseMenu} tabIndex={-1} ref={menuRef}>
      <Sidebar />
      <FileManager url="/start" view="list" />
    </StyledStartMenu>
  );
};

export default StartMenu;
