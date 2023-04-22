// import { ContainerFixed, Content, Layout, SizeProps, Space } from "@components";
import { ContainerFixed } from "@components";
import { EDirectionType } from "@core";
import styled from "@emotion/styled";
import { Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";

function RouterAuthLayout() {
  const navigate = useNavigate();
  const StyledContainerFixed = styled(ContainerFixed)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const StyledContent = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Layout>
      <StyledContainerFixed position="center">
        <StyledContent>
          <ContainerFixed>
            <Outlet />
          </ContainerFixed>
        </StyledContent>
      </StyledContainerFixed>
    </Layout>
  );
}

export default RouterAuthLayout;
