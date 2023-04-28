import "styled-components";

import type colors from "styles/defaultTheme/colors";
import type { formatDate, formatTime } from "styles/defaultTheme/formats";
import type sizes from "styles/defaultTheme/sizes";
import type wallpaper from "styles/defaultTheme/wallpaper";

export type WallpaperEffect = (el: HTMLElement | null) => void;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    formatDate: typeof formatDate;
    formatTime: typeof formatTime;
    sizes: typeof sizes;
    wallpaper?: typeof wallpaper;
  }
}
