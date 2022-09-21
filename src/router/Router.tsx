import { memo, VFC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";

import { Login } from "../components/pages/Login";
import { Pages404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
// import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {/* <Route element={<LoginUserProvider />}></Route> */}
        {/* 絶対これではない・・・・ */}
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <>
              <HeaderLayout></HeaderLayout>
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="user_management" element={<UserManagement />} />
        </Route>
        <Route path="*" element={<Pages404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
