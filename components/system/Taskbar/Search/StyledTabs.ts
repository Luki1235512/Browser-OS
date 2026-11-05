import styled from "styled-components";

const StyledTabs = styled.ol`
  border-bottom: 1px solid hsla(300, 100%, 95%, 20%);
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 1px;
  padding: 2px 13px 0;

  li {
    color: rgb(255, 215, 255);
    padding: 15px 13px 14px;

    &.active {
      border-bottom: 4px solid rgb(255, 102, 255);
      color: #fff;
    }

    &:hover {
      color: #fff;
    }
  }
`;

export default StyledTabs;
