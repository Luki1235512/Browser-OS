import type { DefaultTheme } from "styled-components";
import colors from "styles/defaultTheme/colors";
import { formatDate, formatTime } from "styles/defaultTheme/formats";
import sizes from "styles/defaultTheme/sizes";
import wallpaper from "styles/defaultTheme/wallpaper";

const defaultTheme: DefaultTheme = {
  colors,
  formatDate,
  formatTime,
  sizes,
  wallpaper,
};

export default defaultTheme;
