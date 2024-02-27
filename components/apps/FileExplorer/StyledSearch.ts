import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  fill: red;
  border: 1px solid rgb(300, 150, 200);
  height: 30px;
  margin: 6px 12px 6px 0;
  max-width: 148px;
  padding: 0 8px;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    fill: rgb(255, 255, 255);
    height: 12px;
    left: 14px;
    top: 7px;
    stroke: rgb(255, 255, 255);
    stroke-width: 1;
  }

  input {
    background-color: rgb(230, 20, 230);
    color: #fff;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    margin-left: 32px;
    width: 100%;
    height: 26px;
    text-overflow: ellipsis;
  }
`;

export default StyledSearch;
