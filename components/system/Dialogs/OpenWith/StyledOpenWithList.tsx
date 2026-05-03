import styled from "styled-components";

const StyledOpenWithList = styled.ul`
  border-top: 1px solid transparent;
  padding-bottom: 9px;
  position: relative;
  width: 100%;

  &::before {
    border-top: 1px solid rgb(230, 180, 220);
    content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 0.975;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(250, 220, 240);
    }

    figure {
      display: flex;
      padding: 0 23px;

      figcaption {
        font-size: 15px;
        padding: 0 12px;
      }

      picture {
        background-color: rgb(230, 40, 230);
        display: flex;
        height: 40px;
        place-content: center;
        place-items: center;
        width: 40px;
      }
    }

    &.selected {
      background-color: rgb(230, 40, 230);

      figcaption {
        color: #fff;
      }
    }

    padding: 5px 0;
  }
`;

export default StyledOpenWithList;
