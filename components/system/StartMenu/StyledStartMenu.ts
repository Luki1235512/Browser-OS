import StyledFileManager from "components/system/Files/Views/List/StyledFileManager";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledStartMenu = styled(motion.nav)`
  backdrop-filter: blur(12px);
  background-color: hsla(300, 100%, 60%, 40%);
  bottom: ${({ theme }) => theme.sizes.taskbar.height};
  display: flex;
  height: ${({ theme }) => theme.sizes.startMenu.height};
  left: 0;
  position: absolute;
  width: 320px;
  z-index: 1000;

  ${StyledFileManager} {
    padding-left: ${({ theme }) => theme.sizes.startMenu.sideBar.width};
  }
`;

export default StyledStartMenu;
