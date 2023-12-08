import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: rgb(230, 20, 230);
  display: flex;
  height: 43px;
  margin-top: -1px;

  button {
    width: 16px;
    height: 16px;
    margin: 13px 9px;

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

    &:last-child {
      background-color: rgb(300, 100, 255);
      height: 28px;
      margin: 0;
      position: absolute;
      right: 13px;
      stroke: rgb(255, 255, 255);
      stroke-width: 3;
      top: ${({ theme }) => `calc(${theme.sizes.titleBar.height} + 6px)`};
      width: 28px;

      &:hover {
        background-color: rgb(300, 80, 255);
        border: 1px solid rgb(300, 150, 200);
      }

      &:active {
        background-color: rgb(300, 80, 255);
        border: 1px solid rgb(300, 150, 200);
      }
    }
  }
`;

export default StyledNavigation;
