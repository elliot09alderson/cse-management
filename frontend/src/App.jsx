import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLogin from "./pages/Admin/AdminLogin";
import UserLogin from "./pages/User/UserLogin";
import NotFoud from "./pages/404/NotFoud";

import "./App.css";
import Home from "./pages/Home/Home";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import UserSignup from "./pages/User/UserSignup";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/signup",
      element: <UserSignup />,
    },
    {
      path: "/user/login",
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
      {/* <Flowbite> */}
      {/* <DarkThemeToggle /> */}
      <RouterProvider router={router} />
      {/* </Flowbite> */}
    </div>
  );
};

export default App;
