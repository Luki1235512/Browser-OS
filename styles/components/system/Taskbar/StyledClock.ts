import styled from 'styled-components';

const StyledClock = styled.time`
  height: 100%;
  width: ${({ theme }) => theme.sizes.clock.width};
  font-size: ${({ theme }) => theme.fonts.clock.size};
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  right: 0;
`;

export default StyledClock;
