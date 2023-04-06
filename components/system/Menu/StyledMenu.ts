import styled from 'styled-components';

type StyledMenuProps = {
  x: number;
  y: number;
};

const StyledMenu = styled.nav<StyledMenuProps>`
  background-color: rgb(220, 55, 210);
  border: 1px solid rgb(210, 35, 160);
  box-shadow: 1px 1px 1px hsla(300, 80%, 60%, 70%),
    2px 2px 2px hsla(300, 100%, 60%, 70%);
  color: rgb(255, 255, 255);
  font-size: 12px;
  height: fit-content;
  padding: 4px 2px;
  position: absolute;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px);`};
  width: fit-content;

  ol {
    hr {
      background-color: rgb(200, 50, 200);
      height: 1px;
      margin: 3px 8px;
    }

    figure {
      display: flex;
      padding: 3px 0;

      &:hover {
        background-color: rgb(240, 60, 220);
      }

      figcaption {
        margin-left: 32px;
        margin-right: 64px;
        position: relative;
        top: -1px;

        &.primary {
          font-weight: 600;
        }
      }

      img {
        margin: 0 -24px 0 8px;
      }
    }
  }
`;

export default StyledMenu;
