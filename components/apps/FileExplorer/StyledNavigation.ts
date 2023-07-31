import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  height: 43px;
  margin-top: -1px;
  background-color: rgb(230, 20, 230);

  button {
    width: 16px;
    height: 16px;
    margin: 13px 9px;

    svg {
      width: 16px;
      height: 16px;
      color: #fff;
      fill: currentColor;

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
      position: relative;
      right: -8px;
      margin-right: 8px;
    }

    &[title="Recent locations"] {
      position: absolute;
      left: 56px;

      svg {
        width: 6px;
        stroke: currentColor;
        stroke-width: 3px;
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
      position: absolute;
      top: ${({ theme }) => `calc(${theme.sizes.titleBar.height} + 6px)`};
      right: 13px;
      width: 32px;
      height: 28px;
      margin: 0;
      background-color: rgb(300, 100, 255);
      stroke: rgb(255, 255, 255);
      stroke-width: 3;

      &:hover {
        border: 1px solid rgb(300, 150, 200);
        background-color: rgb(300, 80, 255);
      }

      &:active {
        border: 1px solid rgb(300, 150, 200);
        background-color: rgb(300, 80, 255);
      }
    }
  }
`;

export default StyledNavigation;
