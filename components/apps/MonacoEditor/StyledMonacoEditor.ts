import { overrideSubMenuStyling } from "components/apps/MonacoEditor/functions";
import StyledWindow from "components/system/Window/StyledWindow";
import styled from "styled-components";

const StyledMonacoEditor = styled.div.attrs({ onBlur: overrideSubMenuStyling })`
  width: 100%;
  height: 100%;

  ${StyledWindow} & {
    height: ${({ theme }) =>
      `calc(100% - ${theme.sizes.titleBar.height} - 31px) !important`};
  }
`;

export default StyledMonacoEditor;
