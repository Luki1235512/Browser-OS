import styled from "styled-components";

const StyledStartMenu = styled.nav`
  backdrop-filter: blur(12px);
  background-color: hsla(300, 100%, 60%, 40%);
  bottom: ${({ theme }) => theme.sizes.taskbar.height};
  display: flex;
  height: 350px;
  left: 0;
  position: absolute;
  width: 320px;
  z-index: 1000;
`;

export default StyledStartMenu;
