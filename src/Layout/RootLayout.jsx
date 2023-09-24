import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/Shared/Container";

const RootLayout = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
