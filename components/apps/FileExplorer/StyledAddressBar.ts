import styled from "styled-components";

const StyledAddressBar = styled.div`
  background-color: rgb(250, 180, 255);
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  border: 1px solid rgb(300, 150, 200);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 5px;
  padding: 0 22px 2px 24px;
  position: relative;
  width: 100%;

  input {
    background-color: rgb(250, 180, 255);
    border-right: 1px solid rgb(255, 150, 200);
    color: #fff;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    width: calc(100% - 6px);
  }

  #refresh {
    background-color: rgb(300, 100, 255);
    height: 28px;
    margin: 0;
    position: absolute;
    right: 0;
    stroke: rgb(255, 255, 255);
    stroke-width: 3;
    top: 0;
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
`;

export default StyledAddressBar;
