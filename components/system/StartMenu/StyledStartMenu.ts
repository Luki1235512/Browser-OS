import StyledFileManager from "components/system/Files/Views/List/StyledFileManager";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import ScrollBars from "styles/common/ScrollBars";

const SCROLLBAR_WIDTH = 13;

type StyledStartMenuProps = {
  $showScrolling: boolean;
};

const ThinScrollBars = css<StyledStartMenuProps>`
  scrollbar-width: ${({ $showScrolling }) =>
    $showScrolling ? "auto" : "thin"};

  ::-webkit-scrollbar {
    width: ${({ $showScrolling }) =>
      $showScrolling ? `${SCROLLBAR_WIDTH}px` : "1px"};
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background-color: ${({ $showScrolling }) =>
      !$showScrolling && "transparent"};
  }

  ::-webkit-scrollbar-button:single-button {
    border: ${({ $showScrolling }) =>
      !$showScrolling && "1px solid transparent"};
    background-color: ${({ $showScrolling }) =>
      !$showScrolling && "transparent"};
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: ${({ $showScrolling }) =>
      !$showScrolling && "rgb(170, 170, 170)"};
  }
`;

const StyledStartMenu = styled(motion.nav)<StyledStartMenuProps>`
  background-color: hsla(300, 100%, 60%, 95%);
  bottom: ${({ theme }) => theme.sizes.taskbar.height};
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  position: absolute;
  left: 0;
  display: flex;
  width: ${({ theme }) => theme.sizes.startMenu.size};
  height: ${({ theme }) => theme.sizes.startMenu.size};
  z-index: 1000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(300, 100%, 60%, 70%);
  }

  ${StyledFileManager} {
    ${ScrollBars(SCROLLBAR_WIDTH, -2, -1)};

    padding-top: 7px;
    padding-left: ${({ theme }) => theme.sizes.startMenu.sideBar.width};
    margin-top: 0;
    scrollbar-width: none;

    ${StyledFileManager} {
      overflow: hidden;
      padding: 0;
      margin: 0;

      figure {
        img {
          margin-left: 9px;
        }

        &:active {
          img {
            margin-left: 13px;
          }
        }
      }
    }

    ::-webkit-scrollbar {
      width: 0;
    }

    &:hover {
      ${ThinScrollBars};
    }

    @media (hover: none) {
      ${ThinScrollBars};

      ::-webkit-scrollbar-track {
        margin: 13px 0;
      }
    }
  }
`;

export default StyledStartMenu;
