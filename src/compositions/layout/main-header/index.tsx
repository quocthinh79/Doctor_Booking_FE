import { ContainerFixed } from "@components";
import { EBreakpoint, templateStringToClassName } from "@core";
import { Header } from "antd/es/layout/layout";
import { memo } from "react";

export function MainHeader() {
  return (
    <Header>
      <ContainerFixed
        className={templateStringToClassName()`height: 100%; display: flex;`}
        breakpoint={EBreakpoint.XL}
        position="center"
      >
        This is header
      </ContainerFixed>
    </Header>
  );
}

export default memo(MainHeader);
