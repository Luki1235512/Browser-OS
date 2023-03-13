import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  height: 100%;
  position: absolute;
  left: ${({ theme }) => theme.sizes.startButton.width};
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskbarEntries;
