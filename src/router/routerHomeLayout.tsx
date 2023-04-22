import { MainLayout } from "@compositions";
import { Outlet } from "react-router-dom";

export function RouterHomeLayout() {
  return (
    <MainLayout carousel sider>
      <Outlet />
    </MainLayout>
  );
}

export default RouterHomeLayout;
