import styled from 'styled-components';

const StyledTitlebar = styled.header`
  background-color: ${({ theme }) => theme.colors.titleBar.background};
  border-bottom: 1px solid #e628e6;
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height};

  h1 {
    color: ${({ theme }) => theme.colors.titleBar.text};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: normal;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      min-width: inherit;

      img {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin: ${({ theme }) => theme.sizes.titleBar.iconMargin};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid #e628e6;
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      svg {
        fill: ${({ theme }) => theme.colors.titleBar.text};
        margin-bottom: 2px;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }

      &.close,
      &.maximize {
        svg {
          margin-right: 1px;
        }
      }

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.titleBar.backgroundHover};

        &.close {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
          transition: background-color 0.25s ease;
        }
      }

      &:disabled {
        svg {
          fill: rgb(150, 0, 150);
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`;

export default StyledTitlebar;