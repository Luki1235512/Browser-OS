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
      position: relative;
      top: -1px;

      img {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        image-rendering: pixelated;
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
        margin: 0 1px 2px 0;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
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

      &:active {
        background-color: rgb(0, 0, 0);

        &.close {
          background-color: rgb(0, 0, 0);
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
