import styled from 'styled-components';

const StyledStartButton = styled.button`
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default StyledStartButton;
