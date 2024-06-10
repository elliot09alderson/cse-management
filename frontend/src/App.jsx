import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLogin from "./pages/Admin/AdminLogin";
import UserLogin from "./pages/User/UserLogin";
import NotFoud from "./pages/404/NotFoud";
import Home from "./pages/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <UserLogin />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "*",
      element: <NotFoud />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
