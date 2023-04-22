import styled from "@emotion/styled";
import Sider from "antd/es/layout/Sider";
import { memo } from "react";

const StyledContainer = styled("div")`
  .ant-layout-sider {
    background-color: inherit;
  }
`;

export function MainSider() {
  return (
    <StyledContainer>
      <Sider width={300}>This is sider</Sider>
    </StyledContainer>
  );
}

export default memo(MainSider);
