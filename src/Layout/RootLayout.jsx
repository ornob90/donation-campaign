import React, { useEffect, useState } from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Container from "../components/Shared/Container";
import DonationContext from "../context/DonationContext";

const RootLayout = () => {
  const fetchDonationData = useLoaderData();

  return (
    <DonationContext.Provider value={fetchDonationData}>
      <div className="relative max-w-[1440px] mx-auto min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </DonationContext.Provider>
  );
};

export default RootLayout;
