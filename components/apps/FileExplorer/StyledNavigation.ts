import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: rgb(230, 20, 230);
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navBarHeight};

  button {
    height: 16px;
    margin: 13px 9px;
    width: 16px;

    svg {
      color: #fff;
      fill: currentColor;
      height: 16px;
      width: 16px;

      &:hover {
        color: rgb(255, 200, 255);
        transition: fill 0.5s ease;
      }

      &:active {
        color: rgb(255, 150, 255);
        transition: none;
      }
    }

    &[title^="Up"] {
      margin-right: 8px;
      position: relative;
      right: -8px;
    }

    &[title="Recent locations"] {
      left: 56px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 6px;
      }
    }

    &:disabled {
      svg {
        color: rgb(65, 65, 65);

        &:hover,
        &:active {
          color: rgb(65, 65, 65);
        }
      }
    }
  }
`;

export default StyledNavigation;
