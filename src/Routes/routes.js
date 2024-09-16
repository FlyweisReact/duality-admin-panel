/** @format */

import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EditProfile from "../Pages/Admin/EditProfile";
import CreateFaq from "../Pages/Faq/CreateFaq";
import Faq from "../Pages/Faq/Faq";
import CreateNotificatoin from "../Pages/Notification/CreateNotificatoin";
import Notification from "../Pages/Notification/Notification";
import CreatePolicy from "../Pages/PrivacyPolicy/CreatePolicy";
import EditPolicy from "../Pages/PrivacyPolicy/EditPolicy";
import Privacy from "../Pages/PrivacyPolicy/Privacy";
import AllTickets from "../Pages/Query/AllTickets";
import Query from "../Pages/Query/Query";
import TicketDetails from "../Pages/Query/TicketDetails";
import Report from "../Pages/Report/Report";
import HelpSupport from "../Pages/Support/HelpSupport";
import CreateTerms from "../Pages/Terms/CreateTerms";
import EditTerms from "../Pages/Terms/EditTerms";
import Terms from "../Pages/Terms/Terms";
import EditUserProfile from "../Pages/User/EditUserProfile";
import FriendRequest from "../Pages/User/FriendRequest";
import UpdateUserPost from "../Pages/User/UpdateUserPost";
import UserProfile from "../Pages/User/UserProfile";
import Users from "../Pages/User/Users";

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
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UserProfile />,
  },
  {
    path: "/edit-user/:id",
    element: <EditUserProfile />,
  },
  {
    path: "/users/update-post/:id",
    element: <UpdateUserPost />,
  },
  {
    path: "/users/friend-requests",
    element: <FriendRequest />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/create-notification",
    element: <CreateNotificatoin />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/help-support",
    element: <HelpSupport />,
  },
  {
    path: "/query",
    element: <Query />,
  },
  {
    path: "/ticket-detail",
    element: <TicketDetails />,
  },
  {
    path: "/terms-condition",
    element: <Terms />,
  },
  {
    path: "/create-terms",
    element: <CreateTerms />,
  },
  {
    path: "/edit-terms",
    element: <EditTerms />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/create-policy",
    element: <CreatePolicy />,
  },
  {
    path: "/edit-policy/:id",
    element: <EditPolicy />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/create-faq",
    element: <CreateFaq />,
  },
  {
    path: "/all-tickets",
    element: <AllTickets />,
  },
];

export default routes;
