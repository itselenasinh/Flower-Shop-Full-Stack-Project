import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home/Home";

import AboutUs from "../pages/AboutUs/AboutUs";

import Categories from "../pages/Categories/Categories";

import SpecialEvents from "../pages/SpecialEvents/SpecialEvents";

import ContactUs from "../pages/ConctactUs/ContactUs";


import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Orders/Orders";
import ProductsPages from "../pages/ProductsPages/ProductsPages";
import OneProductPage from "../pages/OneProductPage/OneProductPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import AuthLogin from "../pages/Auth/AuthLogin";
import AuthSignup from "../pages/Auth/AuthSignup";

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
        path: "/products",
        element: <Categories />,
      },
      {
        path: "/products/:categoryName",
        element: <ProductsPages />,
      },
      {
        path: "/products/category/:productName",
        element: <OneProductPage />,
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
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/signup",
        element: <AuthSignup />,
      },
      {
        path: "/login",
        element: <AuthLogin />,
      }, 
      {
    path: "/profile",
    element: <Profile />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      } else {
        return null;
      }
    },
  },
  {
    path: "/orders",
    element: <Orders />,
  },
    ],
  },

 
]);

export default appRouter;
