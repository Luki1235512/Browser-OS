import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#ffc0cb',
  primary: '#ffc0cb',
  window: '#fdeef4'
};

const fonts = {
  clock: {
    size: '12px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
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

const defaultTheme = {
  colors,
  fonts,
  sizes,
  wallpaper
};

export default defaultTheme;
