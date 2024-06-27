import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(235, 76, 250);
  border: 1px solid rgb(215, 56, 230);
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: 12px;
  height: 23px;
  transition: all 0.25s ease-in-out;
  width: 73px;

  &:focus {
    border: 1px solid rgb(215, 56, 230);
  }

  &:hover {
    background-color: rgb(239, 169, 245);
    border: 1px solid rgb(219, 149, 225);
  }

  &:active {
    background-color: rgb(249, 179, 255);
    border: 1px solid rgb(215, 56, 230);
    transition: none;
  }
`;

export default StyledButton;
