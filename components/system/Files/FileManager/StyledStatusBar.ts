import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: rgb(230, 20, 230);
  color: #fff;
  display: flex;
  height: 23px;
  font-size: 12px;
  font-weight: 100;
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    padding: 0 10px;
    margin-top: -1px;

    &::after {
      border-right-width: 1px;
      border-right-color: #fff;
      border-right-style: solid;
      bottom: 6px;
      content: "";
      height: 11px;
      margin-left: 10px;
      position: absolute;

      &:last-child {
        margin-right: 10px;
        overflow: hidden;
      }
    }
  }
`;

export default StyledStatusBar;
