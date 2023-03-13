import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#ffc0cb',
  clockText: 'rgba(255, 255, 255, 80%)',
  primary: '#ffc0cb',
  startButton: '#FFF',
  taskbar: 'rgba(220, 40, 230, 40%)',
  window: '#fdeef4'
};

const formatDate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

const formatTime: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

const sizes = {
  clock: {
    fontSize: '12px',
    width: '76px'
  },
  startButton: {
    iconSize: '19px',
    width: '36px'
  },
  taskbar: {
    blur: '5px',
    entry: {
      maxWidth: '161px'
    },
    height: '30px'
  }
};

const wallpaper = vantaWaves({
  color: 0xbe4da7,
  shininess: 30,
  waveHeight: 15,
  waveSpeed: 0.7,
  zoom: 1
});

const defaultTheme: DefaultTheme = {
  colors,
  formatDate,
  formatTime,
  sizes,
  wallpaper
};

export default defaultTheme;
