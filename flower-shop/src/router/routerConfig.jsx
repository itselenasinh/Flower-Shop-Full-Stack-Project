import { createBrowserRouter, /*redirect*/ } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import Bouquets from "../pages/Bouquets/Bouquets";
import Crowns from "../pages/Crowns/Crowns";
import Garlands from "../pages/Garlands/Garlands";
import Plants from "../pages/Plants/Plants";

import SpecialEvents from "../pages/SpecialEvents/SpecialEvents";

import ContactUs from "../pages/ConctactUs/ContactUs";

import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Orders/Orders";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/products-bouquets",
        element: <Bouquets />,
      },
      {
        path: "/products-crowns",
        element: <Crowns />,
      },
      {
        path: "/products-garlands",
        element: <Garlands />,
      },
      {
        path: "/products-plants",
        element: <Plants />,
      },
      {
        path: "/special-events",
        element: <SpecialEvents />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Auth />,
        //   { loader: () => {
        //   if (!localStorage.getItem('token')) {
        //     return redirect('/')
        //   } else {
        //     return null
        children: [
          { path: "/login/profile", element: <Profile /> },
          { path: "/login/orders", element: <Orders /> },
        ],
      },
    ],
  },
]);

export default appRouter;
