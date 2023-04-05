import type { Position } from 'react-rnd';

type WebampCloseWindowDispatch = {
  windowId: string;
};

type WebampUpdatePositionDispatch = {
  absolute: boolean;
  positions: {
    main: Position;
    playlist: Position;
  };
};

type WebampDispatch = Partial<WebampCloseWindowDispatch> &
  Partial<WebampUpdatePositionDispatch> & {
    type: string;
  };

export type WebampCI = {
  dispose: () => void;
  onClose: (cb: () => void) => () => void;
  onMinimize: (cb: () => void) => () => void;
  renderWhenReady: (domNode: HTMLElement) => Promise<void>;
  store: {
    dispatch: (command: WebampDispatch) => void;
  };
};

type Track = {
  metaData: {
    artist?: string;
    title: string;
  };
  url: string;
};

type WebampOptions = {
  initialSkin?: {
    url: string;
  };
  initialTracks?: Track[];
  zIndex?: number;
};

interface WebampConstructor {
  new (options?: WebampOptions): WebampCI;
}

declare global {
  interface Window {
    Webamp: WebampConstructor;
  }
}
