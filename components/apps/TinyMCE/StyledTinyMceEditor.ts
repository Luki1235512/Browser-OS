import styled from "styled-components";

const StyledEditor = styled.div`
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};

  [role="application"] {
    height: 100% !important;

    button:disabled {
      pointer-events: none;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        cursor: pointer;
        position: relative;

        &::before {
          background-color: rgba(255, 255, 255, 0.8);
          content: "Click to switch to design mode";
          display: flex;
          height: calc(100% - 1px);
          place-content: center;
          place-items: center;
          position: absolute;
          text-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
          width: 100%;
        }
      }
    }
  }
`;

export default StyledEditor;
