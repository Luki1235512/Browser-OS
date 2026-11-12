import styled from "styled-components";

const StyledFiles = styled.figure`
  ol {
    display: flex;
    flex-flow: row wrap;
    gap: 6px;
    padding-top: 9px;

    li {
      background-color: hsla(315, 55%, 28%, 85%);
      border: 1px solid hsla(300, 100%, 95%, 20%);
      border-radius: 15px;
      display: flex;
      padding: 4px 10px;
      place-content: center;
      place-items: center;

      h2 {
        bottom: 1px;
        font-size: 12px;
        font-weight: 400;
        position: relative;
      }

      picture,
      img {
        height: 16px;
        margin-right: 5px;
        width: 16px;
      }

      &:hover {
        background-color: hsla(300, 100%, 40%, 40%);
        border-color: hsla(300, 100%, 80%, 40%);
      }
    }
  }
`;

export default StyledFiles;
