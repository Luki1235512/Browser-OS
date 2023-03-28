const colors = {
  background: '#FFC0CB',
  fileEntry: {
    background: 'hsl(295deg, 100%, 85% )',
    border: 'hsl(205deg 75% 100% / 25%)',
    text: '#FFFFFF',
    textShadow: `
    0 0 1px rgba(0, 0, 0, 75%),
    0 0 2px rgba(0, 0, 0, 50%),
    0 0 3px rgba(0, 0, 0, 25%),

    0 1px 3px rgba(0, 0, 0, 75%),
    0 1px 3px rgba(0, 0, 0, 50%),
    0 1px 3px rgba(0, 0, 0, 25%),

    0 2px 3px rgba(0, 0, 0, 75%),
    0 2px 3px rgba(0, 0, 0, 50%),
    0 2px 3px rgba(0, 0, 0, 25%),
    `
  },
  highlight: '#F5C9EC',
  startButton: '#FFFFFF',
  taskbar: {
    active: 'hsla(300, 100%, 80%, 40%)',
    activeHover: 'hsla(300, 100%, 90%, 40%)',
    background: 'hsla(300, 100%, 70%, 40%)',
    hover: 'hsla(0, 0%, 80%, 40%)'
  },
  text: 'rgba(255, 255, 255, 90%)',
  titleBar: {
    background: '#E628E6',
    backgroundHover: 'rgb(190, 30, 190)',
    closeHover: 'rgb(150, 10, 150)',
    text: '#FFFFFF'
  },
  window: {
    background: '#FDEEF4',
    outline: 'hsl(300deg 70% 50%)',
    shadow: '0 0 12px 0 rgba(255, 0, 255, 100%)'
  }
};

export default colors;
