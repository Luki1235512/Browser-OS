import { m as motion } from "framer-motion";
import styled from "styled-components";

type StyledMenuProps = {
  $isSubMenu: boolean;
  $x: number;
  $y: number;
};

const StyledMenu = styled(motion.nav).attrs<StyledMenuProps>(({ $x, $y }) => ({
  style: {
    transform: `translate(${$x}px, ${$y}px)`,
  },
}))<StyledMenuProps>`
  background-color: rgb(220, 55, 210);
  border: 1px solid rgb(210, 35, 160);
  box-shadow: 1px 1px 1px hsla(300, 80%, 60%, 70%),
    2px 2px 2px hsla(300, 100%, 60%, 70%);
  color: rgb(255, 255, 255);
  contain: layout;
  font-size: 12px;
  max-height: fit-content;
  max-width: fit-content;
  padding: 4px 2px;
  position: absolute;
  width: max-content;
  z-index: ${({ $isSubMenu }) => $isSubMenu && 1};

  ol {
    li.disabled {
      color: rgb(200, 200, 200);
      pointer-events: none;
    }

    hr {
      background-color: rgb(200, 50, 200);
      height: 1px;
      margin: 3px 8px;
    }

    figure {
      display: flex;
      padding: 3px 0;

      &:hover,
      &.active {
        background-color: rgb(240, 60, 220);
      }

      figcaption {
        margin-left: 32px;
        margin-right: 64px;
        position: relative;
        top: -1px;
        width: max-content;

        &.primary {
          font-weight: 700;
        }
      }

      picture {
        margin: 0 -24px 0 8px;
      }

      svg {
        fill: #fff;
        height: 13px;
        margin-top: 1px;
        position: absolute;
        width: 13px;

        &.left {
          left: 8px;
        }

        &.right {
          right: 8px;
        }
      }
    }
  }
`;

export default StyledMenu;
