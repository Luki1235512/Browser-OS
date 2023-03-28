import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback, useMemo } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { foregroundId, setForegroundId } = useSession();
  const isForeground = useMemo(() => id === foregroundId, [foregroundId, id]);
  const {
    linkElement,
    minimize,
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();
  const linkTaskbarEntry = useCallback(
    (taskbarEntry: HTMLButtonElement) =>
      linkElement(id, 'taskbarEntry', taskbarEntry),
    [id, linkElement]
  );
  const onClick = useCallback(() => {
    if (minimized || isForeground) {
      minimize(id);
    }

    setForegroundId(isForeground ? nextFocusableId : id);
  }, [id, isForeground, minimize, minimized, nextFocusableId, setForegroundId]);

  return (
    <StyledTaskbarEntry foreground={isForeground}>
      <Button onClick={onClick} ref={linkTaskbarEntry}>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
