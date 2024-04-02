import styled from "styled-components";

const Button = styled.button.attrs({
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLTextAreaElement)) event.preventDefault();
  },
  type: "button",
})`
  background-color: transparent;
  font-family: inherit;
  width: 100%;
`;

export default Button;
