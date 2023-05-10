import { SPACE_BETWEEN_ITEMS } from "@constant";
import { EBreakpoint, templateStringToClassName } from "@core";
import { ReactNode, memo } from "react";
import MainHeader from "../main-header";
import MainSider from "../main-sider";
import { Carousel, Col, Divider, Layout, Row } from "antd";
import { ContainerFixed } from "@components";
import { Content, Footer } from "antd/es/layout/layout";
import{
  Image,
  Title,
  Description,
  DescriptionItem,
  Card, 
  Space,
  Text
} from "@components";

export interface MainLayoutProps {
  children?: ReactNode;
  sider?: boolean;
  carousel?: boolean;
}
    const Banner01 = require("../../../images/banner01.jpg");
    const Banner02 = require("../../../images/banner02.jpg");
    const Banner03 = require("../../../images/banner03.jpg");
export function MainLayout({ children, sider, carousel }: MainLayoutProps) {
  return (
    <Layout className={templateStringToClassName()`min-height: 100vh;`}>
      <MainHeader />
      <ContainerFixed breakpoint={EBreakpoint.XL}>
        {carousel && (
          <Carousel lazyLoad="progressive" autoplay draggable>
            <Image height= "auto" preview={false} src={Banner01} />
            <Image height= "auto" preview={false} src={Banner02} />
            <Image height= "auto" preview={false} src={Banner03} /> 
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
          <Text>
            DoctorBooking ©2023 Created by Group05
          </Text>
        </ContainerFixed>
      </Footer>
    </Layout>
  );
}

export default memo(MainLayout);
