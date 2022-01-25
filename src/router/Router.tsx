import { memo, VFC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRouters } from "./HomeRouters";

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="home/*" element={<HomeRouters />} />
        <Route path="/*" element={ <Page404 /> } />
      </Routes>
    </BrowserRouter>
  )
})