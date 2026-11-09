import styled from "styled-components";

const StyledFiles = styled.figure`
  ol {
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    padding-top: 8px;

    li {
      background-color: hsla(315, 55%, 28%, 85%);
      border: 1px solid hsla(300, 100%, 95%, 20%);
      border-radius: 15px;
      display: flex;
      padding: 3px 10px 5px;
      place-content: center;
      place-items: center;

      h2 {
        font-size: 12px;
        font-weight: 400;
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
