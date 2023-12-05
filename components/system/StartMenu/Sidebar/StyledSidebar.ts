import styled from "styled-components";

const StyledSidebar = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  overflow: hidden;
  width: ${({ theme }) => theme.sizes.startMenu.sideBar.width};
  height: ${({ theme }) => theme.sizes.startMenu.size};
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4px;
  margin-right: 7px;
  transition-duration: 150ms;

  &:hover:not(&.collapsed) {
    backdrop-filter: blur(12px);
    background-color: hsla(300, 100%, 50%, 95%);
    box-shadow: 8px 0 5px -5px hsla(0, 0%, 10%, 50%);
    transition: all 300ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${({ theme }) => theme.sizes.startMenu.sideBar.expandedWidth};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: hsla(300, 100%, 50%, 75%);
    }
  }
`;

export default StyledSidebar;
