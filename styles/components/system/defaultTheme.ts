import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: '#ffc0cb',
  primary: '#ffc0cb',
  window: '#fdeef4'
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
  wallpaper
};

export default defaultTheme;
