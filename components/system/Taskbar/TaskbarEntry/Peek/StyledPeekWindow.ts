import StyledTaskbarEntry from "components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry";
import { m as motion } from "framer-motion";
import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledPeekWindow = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  border: ${({ theme }) => `1px solid ${theme.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  bottom: ${TASKBAR_HEIGHT}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;

  ${StyledTaskbarEntry}:hover & {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    &:active {
      background-color: ${({ theme }) => theme.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({ theme }) => theme.sizes.taskbar.entry.peekImage.height};
    margin: ${({ theme }) => theme.sizes.taskbar.entry.peekImage.margin};
    max-height: 200px;
    max-width: 200px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: ${({ theme }) => theme.colors.titleBar.background};
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: ${({ theme }) => theme.colors.titleBar.text};
      width: 12px;
    }

    &:active {
      background-color: rgb(160, 30, 160);
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.titleBar.backgroundHover};
    }
  }
`;

export default StyledPeekWindow;
