import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({ type: 'button' })`
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  color: ${({ theme }) => theme.colors.startButton};
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  left: 0;
`;

export default StyledStartButton;
