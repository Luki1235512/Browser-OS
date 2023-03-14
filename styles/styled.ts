import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      opaqueWhite: string;
      primary: string;
      startButton: string;
      taskbar: string;
      window: string;
    };
    formatDate: Intl.DateTimeFormatOptions;
    formatTime: Intl.DateTimeFormatOptions;
    sizes: {
      clock: {
        fontSize: string;
        width: string;
      };
      startButton: {
        iconSize: string;
        width: string;
      };
      taskbar: {
        blur: string;
        entry: {
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
