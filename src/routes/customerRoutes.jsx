import ProtectedRoute from "../components/ProtectedRoute.jsx";
import CustomerLayout from "../customer/CustomerLayout.jsx";
import CustomerDashboard from "../customer/CustomerDashboard.jsx";
import CustomerProducts from "../customer/CustomerProducts.jsx";
import CustomerOrders from "../customer/CustomerOrders.jsx";
import CustomerProfile from "../customer/CustomerProfile.jsx";
import CustomerCart from "../customer/CustomerCart.jsx";
import CustomerOrderDetails from "../customer/CustomerOrderDetails.jsx";

function CustomerWishlist() { return <div style={{ padding: '20px' }}><h2>Wishlist</h2></div>; }
function CustomerAddresses() { return <div style={{ padding: '20px' }}><h2>My Addresses</h2></div>; }

export const customerRoutes = {
  path: "customer",
  element: <ProtectedRoute requiredRole="customer"><CustomerLayout /></ProtectedRoute>,
  children: [
    { path: "dashboard", element: <CustomerDashboard /> },
    { path: "products", element: <CustomerProducts /> },
    { path: "cart", element: <CustomerCart /> },
    { path: "orders", element: <CustomerOrders /> },
    { path: "wishlist", element: <CustomerWishlist /> },
    { path: "addresses", element: <CustomerAddresses /> },
    { path: "profile", element: <CustomerProfile /> },
       {
      path: "orders/:id",
      element: <CustomerOrderDetails />,
    },
  ]
};
