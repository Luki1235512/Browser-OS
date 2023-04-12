import { centerPosition } from 'components/system/Window/functions';
import rndDefaults from 'components/system/Window/RndWindow/rndDefaults';
import useDraggable from 'components/system/Window/RndWindow/useDraggable';
import useResizable from 'components/system/Window/RndWindow/useResizable';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';
import { useTheme } from 'styled-components';

const useRnd = (id: string, maximized = false): Props => {
  const {
    processes: { [id]: { autoSizing = false, lockAspectRatio = false } = {} }
  } = useProcesses();
  const { windowStates: { [id]: WindowState } = {} } = useSession();
  const { position: statePosition, size: stateSize } = WindowState || {};
  const {
    sizes: {
      taskbar: { height: taskbarHeight }
    }
  } = useTheme();
  const [size, setSize] = useResizable(autoSizing, stateSize);
  const [position, setPosition] = useDraggable(
    statePosition || centerPosition(size, taskbarHeight)
  );
  const onDragStop: DraggableEventHandler = (
    _event,
    { x: positionX, y: positionY }
  ) => setPosition({ x: positionX, y: positionY });

  const onResizeStop: RndResizeCallback = (
    _event,
    _direction,
    { style: { height: elementHeight, width: elementWidth } },
    _delta,
    { x: positionX, y: positionY }
  ) => {
    setSize({ height: elementHeight, width: elementWidth });
    setPosition({ x: positionX, y: positionY });
  };

  return {
    disableDragging: maximized,
    enableResizing: !maximized && (!autoSizing || lockAspectRatio),
    lockAspectRatio,
    onDragStop,
    onResizeStop,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
