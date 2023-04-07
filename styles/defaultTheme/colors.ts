const colors = {
  background: '#FFC0CB',
  fileEntry: {
    background: 'hsl(295deg 100% 85% )',
    backgroundFocused: 'hsl(295deg 85% 60%)',
    backgroundFocusedHover: 'hsl(295deg 85% 50%)',
    border: 'hsl(205deg 75% 100% / 25%)',
    borderFocused: 'hsl(205deg 85% 100% / 25%)',
    borderFocusedHover: 'hsl(205deg 95% 100% / 25%)',
    text: '#FFFFFF',
    textShadow: `
    0 0 1px rgba(0, 0, 0, 75%),
    0 0 2px rgba(0, 0, 0, 50%),

    0 1px 3px rgba(0, 0, 0, 75%),
    0 1px 3px rgba(0, 0, 0, 50%),

    0 2px 3px rgba(0, 0, 0, 75%),
    0 2px 3px rgba(0, 0, 0, 50%)`
  },
  highlight: '#F5C9EC',
  startButton: '#FFFFFF',
  taskbar: {
    active: 'hsla(300, 100%, 80%, 40%)',
    activeHover: 'hsla(300, 100%, 90%, 40%)',
    background: 'hsla(300, 100%, 50%, 40%)',
    hover: 'hsla(0, 0%, 80%, 40%)'
  },
  text: 'rgba(255, 255, 255, 90%)',
  titleBar: {
    background: 'rgb(230, 40, 230)',
    backgroundHover: 'rgb(190, 30, 190)',
    backgroundInactive: 'rgb(160, 55, 160)',
    buttonInactive: 'rgb(170, 170, 170)',
    closeHover: 'rgb(150, 10, 150)',
    text: 'rgb(255, 255, 255)',
    textInactive: 'rgb(170, 170, 170)'
  },
  window: {
    background: '#FDEEF4',
    outline: 'hsl(300deg 70% 50%)',
    outlineInactive: 'hsl(300deg 50% 50%)',
    shadow: '0 0 12px 0 rgba(255, 0, 255, 100%)',
    shadowInactive: ' 0 0 8px 0 rgba(255, 0, 255, 50%)'
  }
};

export default colors;
