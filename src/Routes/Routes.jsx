import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import DonationDetails from "../pages/DonationDetails";
import MyDonations from "../pages/MyDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: () => fetch("/donation.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":type/:id",
        element: <DonationDetails />,
      },
      {
        path: "Donations",
        element: <MyDonations />,
      },
    ],
  },
]);

export default router;
