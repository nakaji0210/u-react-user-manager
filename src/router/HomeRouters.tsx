import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRouters = () => {
return (
  <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/user_management" element={ <UserManagement />} />
          <Route path="/setting" element={<Setting />} />
</Routes>
  )
}