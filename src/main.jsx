import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import "antd/dist/reset.css";

// Set default token for demo
//localStorage.setItem("token", "demo");

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
