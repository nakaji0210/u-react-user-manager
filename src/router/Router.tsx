import { memo, VFC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../Providers/LoginUserProvider";
import { HomeRouters } from "./HomeRouters";

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <LoginUserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home/*" element={<HomeRouters />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </LoginUserProvider>
    </BrowserRouter>
  );
});
