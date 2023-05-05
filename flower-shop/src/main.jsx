import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import appRouter from "./router/routerConfig";
import { RouterProvider } from "react-router-dom";
import CartContext from "./Context/CartContext";
import "./services/firebase/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContext>
      <RouterProvider router={appRouter}></RouterProvider>
    </CartContext>
  </React.StrictMode>
);
