import styled from "styled-components";

const StyledFileEntry = styled.li`
  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    img {
      margin-left: 3px;
      margin-right: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 0.9;
      }

      img {
        margin-left: 7px;
      }
    }

    &:hover {
      background-color: hsla(300, 100%, 40%, 40%);
      border: 1px solid hsla(300, 100%, 40%, 70%);
    }
  }
`;

export default StyledFileEntry;
