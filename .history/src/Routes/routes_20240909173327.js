/** @format */

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
    path: "/forget-password",
    element: <ForgetPassword />,
  },
];

export default routes;
