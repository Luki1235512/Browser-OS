import styled from 'styled-components';

const StyledDesktop = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledDesktop;
