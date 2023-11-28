import styled from "styled-components";

const StyledAddressBar = styled.input.attrs({
  spellCheck: false,
  type: "text",
})`
  background-color: rgb(250, 180, 255);
  background-position: 2px 5px;
  background-repeat: no-repeat;
  border: 1px solid rgb(300, 150, 200);
  color: #fff;
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  margin: 6px 12px 6px 5px;
  padding: 0 22px 2px 24px;
  text-overflow: ellipsis;
  width: 100%;
`;

export default StyledAddressBar;
