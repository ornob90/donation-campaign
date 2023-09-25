import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import DonationDetails from "../pages/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":type/:id",
        element: <DonationDetails />,
      },
    ],
  },
]);

export default router;
