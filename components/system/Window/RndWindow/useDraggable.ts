import { useState } from 'react';
import type { Position, Props } from 'react-rnd';
import { DEFAULT_WINDOW_POSITION } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Draggable = [Position, React.Dispatch<React.SetStateAction<Position>>];

const useDraggable = (position = DEFAULT_WINDOW_POSITION): Draggable => {
  const [{ x, y }, setPosition] = useState<Position>(position);

  return [{ x, y }, setPosition];
};

export default useDraggable;
