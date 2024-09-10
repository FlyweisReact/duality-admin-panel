/** @format */

import Dashboard from "../Pages/Dashboard";
import EditProfile from "../Pages/EditProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/update-profile",
    element: <EditProfile />,
  },
  {
    
  }
];

export default routes;
