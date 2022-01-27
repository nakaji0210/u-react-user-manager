import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const HomeRouters = () => {
  return (
    <HeaderLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_management" element={<UserManagement />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </HeaderLayout>
  );
};
