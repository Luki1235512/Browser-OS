import styled from "styled-components";

const BASE_LINE_HEIGHT = 21;

const StyledButton = styled.button`
  background-color: rgb(235, 76, 250);
  border: 1px solid rgb(215, 56, 230);
  display: grid;
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: 12px;
  height: 23px;
  line-height: ${BASE_LINE_HEIGHT}px;
  transition: background-color 0.25s ease;
  width: 73px;

  &:focus,
  &.focus {
    border: 2px solid rgb(215, 56, 230);
    line-height: ${BASE_LINE_HEIGHT - 2}px;
  }

  &:hover {
    background-color: rgb(239, 169, 245);
    border: 1px solid rgb(219, 149, 225);
    line-height: ${BASE_LINE_HEIGHT}px;
  }

  &:active {
    background-color: rgb(249, 179, 255);
    border: 1px solid rgb(215, 56, 230);
    line-height: ${BASE_LINE_HEIGHT}px;
    transition: none;
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(210, 200, 210);
    line-height: ${BASE_LINE_HEIGHT}px;
  }
`;

export default StyledButton;
