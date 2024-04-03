const colors = {
  background: "#FFC0CB",
  fileEntry: {
    background: "hsla(295, 100%, 85%)",
    backgroundFocused: "hsla(295, 85%, 60%)",
    backgroundFocusedHover: "hsla(295, 85%, 50%)",
    border: "hsla(205, 75%, 100%, 25%)",
    borderFocused: "hsla(205, 85%, 100%, 25%)",
    borderFocusedHover: "hsla(205, 95%, 100%, 25%)",
    text: "#FFF",
    textShadow: `
    0 0 1px rgba(0, 0, 0, 75%),
    0 0 2px rgba(0, 0, 0, 50%),

    0 1px 3px rgba(0, 0, 0, 75%),
    0 1px 3px rgba(0, 0, 0, 50%),

    0 2px 3px rgba(0, 0, 0, 75%),
    0 2px 3px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(312, 69% 87%)",
  highlightBackground: "hsla(312, 69% 57%, 25%)",
  startButton: "#FFF",
  taskbar: {
    active: "hsla(300, 100%, 80%, 40%)",
    activeForeground: "hsla(300, 100%, 90%, 40%)",
    background: "hsla(300, 100%, 50%, 40%)",
    foreground: "hsla(0, 0%, 80%, 40%)",
    foregroundHover: "hsla(300, 100%, 100%, 40%)",
    hover: "hsla(300, 100%, 70%, 40%)",
    peekBorder: "hsla(300, 100%, 95%, 20%)",
  },
  text: "rgba(255, 255, 255, 90%)",
  titleBar: {
    background: "rgb(230, 40, 230)",
    backgroundHover: "rgb(190, 30, 190)",
    backgroundInactive: "rgb(160, 55, 160)",
    buttonInactive: "rgb(170, 170, 170)",
    closeHover: "rgb(150, 10, 150)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(170, 170, 170)",
  },
  window: {
    background: "#FDEEF4",
    outline: "hsla(300, 100%, 70%, 50%)",
    outlineInactive: "hsla(300, 100%, 50%, 50%)",
    shadow: "0 0 12px 0 rgba(255, 0, 255, 100%)",
    shadowInactive: "0 0 8px 0 rgba(255, 0, 255, 50%)",
  },
};

export default colors;
