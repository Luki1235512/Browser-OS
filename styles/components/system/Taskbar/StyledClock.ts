import styled from 'styled-components';

const StyledClock = styled.time`
  height: 100%;
  width: ${({ theme }) => theme.sizes.clock.width};
  background-color: red;
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  right: 0;
`;

export default StyledClock;
