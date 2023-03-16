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
    height: 19px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
