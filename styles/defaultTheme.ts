import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#FFC0CB',
  highlight: '#F5C9EC',
  startButton: '#FFFFFF',
  taskbar: 'rgba(220, 40, 230, 40%)',
  taskbarHover: 'hsla(0, 0%, 80%, 40%)',
  text: 'rgba(255, 255, 255, 80%)',
  window: '#FDEEF4'
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
      borderSize: '2px',
      fontSize: '12px',
      icon: {
        margin: '0 5px',
        size: '16px'
      },
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
