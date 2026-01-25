import styled from "styled-components";

type StyledButtonProps = {
  $active?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: rgb(235, 76, 250);
  border: ${({ $active }) =>
    $active ? "2px solid rgb(215, 56, 230)" : "1px solid rgb(215, 56, 230)"};
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: 12px;
  height: 23px;
  transition: all 0.25s ease;
  width: 73px;

  &:focus {
    border: 2px solid rgb(215, 56, 230);
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

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(210, 200, 210);
  }
`;

export default StyledButton;
