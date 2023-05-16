import {
  cascadePosition,
  centerPosition,
  isWindowOutsideBounds,
} from "components/system/Window/functions";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { useState } from "react";
import type { Position, Props } from "react-rnd";
import { useTheme } from "styled-components";
import { pxToNum } from "utils/functions";

export type Size = NonNullable<Props["size"]>;

type Draggable = [Position, React.Dispatch<React.SetStateAction<Position>>];

const useDraggable = (id: string, size: Size): Draggable => {
  const {
    sizes: {
      taskbar: { height: taskbarHeight },
      window: { cascadeOffset },
    },
  } = useTheme();
  const { processes } = useProcesses();
  const { stackOrder, windowStates: { [id]: windowState } = {} } = useSession();
  const { position } = windowState || {};
  const isOffscreen = isWindowOutsideBounds(windowState, {
    x: window?.innerWidth || 0,
    y: (window?.innerHeight || 0) - pxToNum(taskbarHeight),
  });
  const [{ x, y }, setPosition] = useState<Position>(
    (!isOffscreen && position) ||
      cascadePosition(id, processes, stackOrder, cascadeOffset) ||
      centerPosition(size, taskbarHeight)
  );

  return [{ x, y }, setPosition];
};

export default useDraggable;
