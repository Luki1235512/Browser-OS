import styled from 'styled-components';

const StyledTaskbarEntries = styled.li`
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  background-color: yellow;
  display: flex;
  place-content: center;
  place-items: center;
`;

export default StyledTaskbarEntries;
