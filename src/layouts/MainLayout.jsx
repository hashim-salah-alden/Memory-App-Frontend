import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet/>
      </div>
    </>
  );
};

export default MainLayout;
