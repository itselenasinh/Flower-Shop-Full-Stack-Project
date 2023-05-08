import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import appRouter from "./router/routerConfig";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
