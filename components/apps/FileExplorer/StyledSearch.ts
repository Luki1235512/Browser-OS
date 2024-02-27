import styled from "styled-components";

const StyledSearch = styled.div`
  border: 1px solid rgb(300, 150, 200);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 0;
  max-width: 148px;
  padding: 0;
  position: relative;
  width: 100%;

  svg {
    fill: rgb(255, 255, 255);
    height: 12px;
    left: 14px;
    position: absolute;
    stroke: rgb(255, 255, 255);
    stroke-width: 1;
    top: 7px;
  }

  input {
    background-color: rgb(230, 20, 230);
    color: #fff;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    padding-left: 40px;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export default StyledSearch;
