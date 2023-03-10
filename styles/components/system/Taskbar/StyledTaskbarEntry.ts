import styled from 'styled-components';

const StyledTaskbarEntries = styled.li`
  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
  background-color: yellow;
`;

export default StyledTaskbarEntries;
