/** @format */

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
    element: <Signup />,
  },
];

export default routes;
