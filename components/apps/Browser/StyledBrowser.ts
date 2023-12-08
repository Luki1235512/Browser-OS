import styled from "styled-components";

const StyledBrowser = styled.div`
  iframe {
    border: 0;
    height: calc(100% - 36px);
    width: 100%;
  }

  nav {
    background-color: rgb(230, 20, 230);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    &:not(:first-child) {
      border-bottom: 1px solid rgb(250, 180, 255);
      height: 33px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }

    div {
      display: flex;
      justify-content: space-around;
      min-width: 102px;
      padding-left: 6px;
      width: 102px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 22px;
        width: 22px;
      }

      &:hover {
        background-color: rgb(250, 180, 255);
      }

      &:active {
        background-color: rgb(250, 180, 255);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(65, 65, 65);
        }
      }
    }

    input {
      background-color: rgb(250, 180, 255);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${({ theme }) => theme.formats.systemFont};
      font-size: 13px;
      height: 28px;
      letter-spacing: 0.2px;
      line-height: 26px;
      margin: 0 6px;
      padding: 0 13px;
      width: 100%;
    }
  }
`;

export default StyledBrowser;
