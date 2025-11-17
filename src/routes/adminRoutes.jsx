import ProtectedRoute from "../components/ProtectedRoute.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Users from "../pages/Users.jsx";
import Orders from "../pages/Orders.jsx";
import Products from "../pages/Products.jsx";
import FlashSales from "../pages/FlashSales.jsx";
import Campaigns from "../pages/Campaigns.jsx";  
import Coupons from "../pages/Coupons.jsx";
import Categories from "../pages/Categories.jsx";
import Attributes from "../pages/Attributes.jsx";
import Stores from "../pages/Stores.jsx";
import AddStores from "../pages/AddStores.jsx";
import POS from "../pages/POS.jsx";
import AdminVendorList from "../admin/AdminVendorList.jsx";
import RefundList from "../admin/RefundList.jsx";
import BannerList from "../admin/BannerList.jsx";
import AdminVendorDashboard from "../admin/AdminVendorDashboard.jsx";
import AdminCustomerList from "../admin/AdminCustomerList.jsx";
import AdminCustomerDashboard from "../admin/AdminCustomerDashboard.jsx";
import AdminVendorDashboardView from "../admin/AdminVendorDashboardView.jsx";
import AdminCustomerDashboardView from "../admin/AdminCustomerDashboardView.jsx";

export const adminRoutes = {
  element: <AdminLayout />,
  children: [
    { path: "dashboard", element: <ProtectedRoute requiredRole="superadmin"><Dashboard /></ProtectedRoute> },
    { path: "pos", element: <ProtectedRoute requiredRole="superadmin"><POS /></ProtectedRoute> },
    { path: "users", element: <ProtectedRoute requiredRole="superadmin"><Users /></ProtectedRoute> },
    { path: "orders", element: <ProtectedRoute requiredRole="superadmin"><Orders /></ProtectedRoute> },
    { path: "refunds", element: <ProtectedRoute requiredRole="superadmin"><RefundList /></ProtectedRoute> },
    { path: "flash-sales", element: <ProtectedRoute requiredRole="superadmin"><FlashSales /></ProtectedRoute> },
    { path: "campaigns", element: <ProtectedRoute requiredRole="superadmin"><Campaigns /></ProtectedRoute> },
    { path: "banners", element: <ProtectedRoute requiredRole="superadmin"><BannerList /></ProtectedRoute> }, 
    { path: "coupons", element: <ProtectedRoute requiredRole="superadmin"><Coupons /></ProtectedRoute> },
    { path: "categories", element: <ProtectedRoute requiredRole="superadmin"><Categories /></ProtectedRoute> },
    { path: "attributes", element: <ProtectedRoute requiredRole="superadmin"><Attributes /></ProtectedRoute> },
    { path: "products", element: <ProtectedRoute requiredRole="superadmin"><Products /></ProtectedRoute> },
    { path: "stores", element: <ProtectedRoute requiredRole="superadmin"><Stores /></ProtectedRoute> },
    { path: "stores/new", element: <ProtectedRoute requiredRole="superadmin"><AddStores /></ProtectedRoute> },
    { path: "vendor-list", element: <ProtectedRoute requiredRole="superadmin"><AdminVendorList /></ProtectedRoute> },
    { path: "vendor-list/:vendorId/dashboard", element: <ProtectedRoute requiredRole="superadmin"><AdminVendorDashboard /></ProtectedRoute> },
    { path: "customer-list", element: <ProtectedRoute requiredRole="superadmin"><AdminCustomerList /></ProtectedRoute> },
    { path: "customer-list/:customerId/dashboard", element: <ProtectedRoute requiredRole="superadmin"><AdminCustomerDashboard /></ProtectedRoute> },
    { path: "vendor-dashboard/:vendorId", element: <ProtectedRoute requiredRole="superadmin"><AdminVendorDashboardView /></ProtectedRoute> },
    { path: "customer-dashboard/:customerId", element: <ProtectedRoute requiredRole="superadmin"><AdminCustomerDashboardView /></ProtectedRoute> },
  ]
};
