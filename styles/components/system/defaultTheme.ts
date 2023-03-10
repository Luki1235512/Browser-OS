import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#ffc0cb',
  primary: '#ffc0cb',
  window: '#fdeef4'
};

const sizes = {
  clock: {
    width: '70px'
  },
  startButton: {
    width: '30px'
  },
  taskbar: {
    entry: {
      width: '80px'
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
  sizes,
  wallpaper
};

export default defaultTheme;
