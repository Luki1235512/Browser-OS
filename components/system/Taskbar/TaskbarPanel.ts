import type { RuleSet } from "styled-components";
import { css } from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const TaskbarPanel = (
  height: number,
  width: number,
  left = 0,
  hasBorder = false
): RuleSet<object> => css`
  background-color: hsla(315, 55%, 22%, 95%);
  border: ${hasBorder ? "1px solid hsla(300, 100%, 95%, 20%)" : "none"};
  border-bottom-width: 0;
  bottom: ${TASKBAR_HEIGHT}px;
  box-shadow: 3px 0 12px 3px hsla(300, 100%, 50%, 35%);
  contain: strict;
  display: flex;
  height: 100%;
  left: ${left}px;
  max-height: ${height}px;
  max-width: ${width}px;
  position: absolute;
  width: 100%;
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(315, 70%, 40%, 55%);
  }
`;

export default TaskbarPanel;
