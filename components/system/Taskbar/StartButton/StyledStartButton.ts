import styled from 'styled-components';
import Button from 'styles/common/Button';

const StyledStartButton = styled(Button)`
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
  fill: ${({ theme }) => theme.colors.startButton};
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  left: 0;

  svg {
    height: ${({ theme }) => theme.sizes.startButton.iconSize};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;