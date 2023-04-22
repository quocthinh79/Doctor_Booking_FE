import { MainLayout } from "@compositions";
import { Outlet } from "react-router-dom";

function RouterLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default RouterLayout;
