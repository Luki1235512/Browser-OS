import type { Themes } from 'types/styles/themes';
import vantaWaves from 'utils/vantaWaves';

const defaultTheme = {
  colors: {
    background: '#ffc0cb',
    primary: '#ffc0cb',
    window: '#fdeef4'
  },
  wallpaper: vantaWaves({
    color: 0xbe4da7,
    shininess: 30,
    waveHeight: 15,
    waveSpeed: 0.7,
    zoom: 1
  })
};

const themes: Themes = { defaultTheme };

export default themes;
