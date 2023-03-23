import styled from 'styled-components';

const StyledClock = styled.time`
  height: 100%;
  width: ${({ theme }) => theme.sizes.clock.width};
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  right: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }
`;

export default StyledClock;
