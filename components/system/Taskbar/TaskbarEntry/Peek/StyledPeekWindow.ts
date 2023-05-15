import styled from "styled-components";

const StyledPeekWindow = styled.div`
  background-color: ${({ theme }) => theme.colors.taskbar.hover};
  border: ${({ theme }) => `1px solid ${theme.colors.taskbar.background}`};
  border-bottom: 0;
  bottom: ${({ theme }) => theme.sizes.taskbar.height};
  display: flex;
  place-content: center;
  place-items: flex-start;
  position: fixed;

  img {
    height: 82px;
    margin: 8px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.titleBar.background};
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: ${({ theme }) => theme.colors.titleBar.text};
      width: 12px;
    }

    &:active {
      background-color: rgb(160, 30, 160);
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.titleBar.backgroundHover};
    }
  }
`;

export default StyledPeekWindow;
