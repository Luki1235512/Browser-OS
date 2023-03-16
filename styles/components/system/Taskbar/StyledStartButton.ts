import styled from 'styled-components';
import Button from 'styles/common/Button';

const StyledStartButton = styled(Button)`
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  color: ${({ theme }) => theme.colors.startButton};
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  left: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
