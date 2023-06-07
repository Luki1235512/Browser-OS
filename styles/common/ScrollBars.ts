import { css } from "styled-components";

const arrowPaths = {
  up: "M16 6.891l15.891 15.891-3.781 3.766-12.109-12.109L3.892 26.548.111 22.782 16.002 6.891z",
  down: "M28.109 5.453l3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z",
  left: "M26.547 3.891l-12.109 12.109 12.109 12.109-3.766 3.781-15.891-15.891 15.891-15.891 3.766 3.781z",
  right:
    "M9.219 0.109l15.891 15.891-15.891 15.891-3.766-3.781 12.109-12.109-12.109-12.109 3.766-3.781z",
};

const createArrow = (
  direction: "up" | "down" | "left" | "right",
  color: string
): string =>
  `"data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='${color}'>
    <path d='${arrowPaths[direction]}'/>
  </svg>"`;

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

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${createArrow("up", "lavenderblush")});
    border-bottom: 0;
    border-top: 0;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${createArrow("down", "lavenderblush")});
    border-bottom: 0;
    border-top: 0;
  }

  ::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${createArrow("left", "lavenderblush")});
    background-position: 3px center;
    border-left: 0;
    border-right: 0;
  }

  ::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${createArrow("right", "lavenderblush")});
    background-position: 4px center;
    border-left: 0;
    border-right: 0;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement:active {
    background-image: url(${createArrow("up", "white")});
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment:active {
    background-image: url(${createArrow("down", "white")});
  }

  ::-webkit-scrollbar-button:single-button:horizontal:decrement:active {
    background-image: url(${createArrow("left", "white")});
  }

  ::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-image: url(${createArrow("right", "white")});
  }
`;

export default ScrollBars;
