import styled from "styled-components";

const StyledOpenWith = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    height: 56px;
    padding: 16px 24px;
  }

  h4 {
    padding: 0 0 6px 23px;
  }

  nav {
    background-color: #fdeef4;
    height: 80px;
    width: 100%;

    button {
      background-color: rgb(230, 180, 220);
      font-size: 15px;
      font-weight: 600;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;

      &:hover {
        background-color: rgb(240, 150, 220);
      }

      &:active {
        background-color: rgb(190, 30, 190);
        color: #fff;
      }
    }
  }
`;

export default StyledOpenWith;
