import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: rgb(230, 20, 230);
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 100;
  height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    padding: 0 10px;
    margin-top: -1px;

    &::after {
      border-right-width: 1px;
      border-right-color: #fff;
      border-right-style: solid;
      content: "";
      height: 11px;
      margin-left: 10px;
      position: relative;
      top: 3px;

      &:last-child {
        margin-right: 10px;
        overflow: hidden;
      }
    }
  }
`;

export default StyledStatusBar;
