import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import appRouter from "./router/routerConfig";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={appRouter}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
