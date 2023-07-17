import StyledFileEntry from "components/system/Files/Views/Icon/StyledFileEntry";
import StyledFileManager from "components/system/Files/Views/Icon/StyledFileManager";
import styled from "styled-components";

const StyledFileExplorer = styled.div`
  ${StyledFileManager} {
    column-gap: 2px;
    padding-left: 5px;
    padding-right: 5px;
    height: calc(100% - 42px - 23px);
  }

  ${StyledFileEntry} {
    &::before {
      border: 0 !important;
    }
  }
`;

export default StyledFileExplorer;
