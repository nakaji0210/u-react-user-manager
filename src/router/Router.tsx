import { memo, VFC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRouters } from "./HomeRouters";

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="home/*" element={<HomeRouters />} />
      </Routes>
    </BrowserRouter>
  )
})