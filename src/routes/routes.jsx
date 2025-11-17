
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Auth from "../pages/Auth.jsx";
import { adminRoutes } from "./adminRoutes.jsx";
import { vendorRoutes } from "./vendorRoutes.jsx";
import { customerRoutes } from "./customerRoutes.jsx";


function PrivateRoute() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/auth" replace />;
}

export const router = createBrowserRouter([
  // Auth
  { path: "/auth", element: <Auth /> },
  { path: "/login", element: <Navigate to="/auth" replace /> },
  { path: "/", element: <Navigate to="/auth" replace /> },
  
  // Protected Routes
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      adminRoutes,    
      vendorRoutes,   
      customerRoutes  
    ]
  },

  // Fallback
  { path: "*", element: <Navigate to="/auth" replace /> }
]);
