import { css } from "styled-components";

const ScrollBars = css`
  overflow: auto;

  ::-webkit-scrollbar {
    height: 17px;
    width: 17px;
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background-color: rgb(255, 200, 255);
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgb(75, 75, 75);
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: rgb(255, 100, 255);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(255, 100, 255);
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: rgb(255, 50, 255);
  }

  ::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: rgb(255, 150, 255);
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid rgb(255, 200, 255);
    display: block;

    &:hover {
      background-color: rgb(255, 100, 255);
    }

    &:active {
      background-color: rgb(255, 150, 255);
    }
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement,
  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position: center;
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url("/System/Icons/16x16/up.png");
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url("/System/Icons/16x16/down.png");
  }

  ::-webkit-scrollbar-button:single-button:horizontal:decrement,
  ::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  ::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url("/System/Icons/16x16/left.png");
  }

  ::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url("/System/Icons/16x16/right.png");
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  ::-webkit-scrollbar-button:single-button:vertical:increment:active,
  ::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  ::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: color-burn;
  }
`;

export default ScrollBars;
