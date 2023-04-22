import { SPACE_BETWEEN_ITEMS } from "@constant";
import { EBreakpoint, templateStringToClassName } from "@core";
import { ReactNode, memo } from "react";
import MainHeader from "../main-header";
import MainSider from "../main-sider";
import { Carousel, Divider, Layout } from "antd";
import { ContainerFixed } from "@components";
import { Content, Footer } from "antd/es/layout/layout";

export interface MainLayoutProps {
  children?: ReactNode;
  sider?: boolean;
  carousel?: boolean;
}

export function MainLayout({ children, sider, carousel }: MainLayoutProps) {
  return (
    <Layout className={templateStringToClassName()`min-height: 100vh;`}>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XL}>
        {carousel && (
          <Carousel lazyLoad="progressive" autoplay draggable>
            <h1>This is carousel</h1>
            <h1>This is carousel</h1>
            <h1>This is carousel</h1>
            <h1>This is carousel</h1>
            <h1>This is carousel</h1>
          </Carousel>
        )}
        <Layout
          className={templateStringToClassName()`margin: ${
            !carousel && SPACE_BETWEEN_ITEMS
          }px 0; gap: ${SPACE_BETWEEN_ITEMS}px`}
        >
          {sider && <MainSider />}
          <Content>{children}</Content>
        </Layout>
      </ContainerFixed>
      <Footer style={{ marginTop: "auto" }}>
        <Divider />
        <ContainerFixed breakpoint={EBreakpoint.XL} position="center">
          This is footer
        </ContainerFixed>
      </Footer>
    </Layout>
  );
}

export default memo(MainLayout);
