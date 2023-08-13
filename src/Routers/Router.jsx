import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Catalog from "../pages/Catalog/Catalog";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category/:id" element={<Detail />}></Route>
        <Route path="/:category" element={<Catalog />}></Route>
        <Route path="/search/:category/:keyword" element={<Catalog />}></Route>
        {/* <Route path="*" element={<Detail />}></Route> */}
      </Routes>
    </>
  );
};

export default Router;
