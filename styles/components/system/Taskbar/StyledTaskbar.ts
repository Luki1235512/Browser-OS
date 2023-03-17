import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.taskbar};
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export default StyledTaskbar;
