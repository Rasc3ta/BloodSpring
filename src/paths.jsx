import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Shared/ErrorPage";
import Register from "./Authentication/Register/Register";
import Login from "./Authentication/Login";
import Home from "./Home/Home";
import Search from "./SearchPage/Search";
import DonationReqs from "./DonationRequests/DonationReqs";
import Blogs from "./Blogs/Blogs";
import Blog from "./Blogs/Blog";
import Dashboard from "./Dashboard/Dashboard";
import DashboardHome from "./Dashboard/Donor/DashboardHome";
import PrivateRouteProvider from "./Shared/PrivateRouteProvider";
import Profile from "./Dashboard/Profile";
import CreateDonationRequest from "./Dashboard/Donor/CreateDonationRequst/CreateDonationRequest.jsx";
import MyDonationRequests from "./MyDonationRequests/MyDonationRequests.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/donoReqs",
        element: <DonationReqs></DonationReqs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/:blogId",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouteProvider>
        <Dashboard></Dashboard>
      </PrivateRouteProvider>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/create-donation-request",
        element: <CreateDonationRequest></CreateDonationRequest>,
      },
      {
        path: "/dashboard/my-donation-requests",
        element: <MyDonationRequests></MyDonationRequests>
      },
    ],
  },
]);

export default routes;
