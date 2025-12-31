import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../pages/Landing";

const AppRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default AppRoutes;
