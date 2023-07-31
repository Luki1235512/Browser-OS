import StyledTaskbarEntry from "components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPeekWindow = styled(motion.div)`
  position: fixed;
  bottom: ${({ theme }) => theme.sizes.taskbar.height};
  display: flex;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  place-content: center;
  place-items: flex-start;

  ${StyledTaskbarEntry}:hover & {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    &:active {
      background-color: ${({ theme }) => theme.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({ theme }) => theme.sizes.taskbar.entry.peekImage.height};
    margin: ${({ theme }) => theme.sizes.taskbar.entry.peekImage.margin};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.titleBar.background};

    svg {
      width: 12px;
      fill: ${({ theme }) => theme.colors.titleBar.text};
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
