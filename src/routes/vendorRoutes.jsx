import ProtectedRoute from "../components/ProtectedRoute.jsx";
import VendorLayout from "../vendor/VendorLayout.jsx";
import VendorDashboard from "../vendor/VendorDashboard.jsx";
import VendorItems from "../vendor/VendorItems.jsx";
import VendorOrders from "../vendor/VendorOrders.jsx";
import VendorPOS from "../vendor/VendorPOS.jsx";
import VendorOrderRefunds from "../vendor/VendorOrderRefunds.jsx";
import VendorFlashSales from "../vendor/VendorFlashSales.jsx";
import VendorCampaigns from "../vendor/VendorCampaigns.jsx";
import VendorCoupons from "../vendor/VendorCoupons.jsx";
import VendorBanners from "../vendor/VendorBanners.jsx";
import VendorPushNotifications from "../vendor/VendorPushNotifications.jsx";
import VendorCategories from "../vendor/VendorCategories.jsx";
import VendorAttributes from "../vendor/VendorAttributes.jsx";
import VendorProductSetup from "../vendor/VendorProductSetup.jsx";
import VendorNewStores from "../vendor/VendorNewStores.jsx";
import VendorAddStores from "../vendor/VendorAddStores.jsx";
import VendorStoresList from "../vendor/VendorStoresList.jsx";
import VendorBulkImport from "../vendor/VendorBulkImport.jsx";
import VendorBulkExport from "../vendor/VendorBulkExport.jsx";
import VendorStoreConfig from "../vendor/VendorStoreConfig.jsx";
import VendorMyShop from "../vendor/VendorMyShop.jsx";
import VendorReviews from "../vendor/VendorReviews.jsx";
import VendorChat from "../vendor/VendorChat.jsx";
import VendorCustomerList from "../vendor/VendorCustomerList.jsx";
export const vendorRoutes = {
  path: "vendor",
  element: <ProtectedRoute requiredRole="vendor"><VendorLayout /></ProtectedRoute>,



  
  children: [
    { path: "dashboard", element: <VendorDashboard /> },
    { path: "items", element: <VendorItems /> },
    { path: "orders", element: <VendorOrders /> },
    { path: "pos", element: <VendorPOS /> },
    { path: "order-refunds", element: <VendorOrderRefunds /> },
    { path: "flash-sales", element: <VendorFlashSales /> },
    { path: "campaigns", element: <VendorCampaigns /> },
    { path: "coupons", element: <VendorCoupons /> },
    { path: "banners", element: <VendorBanners /> },
    { path: "notifications", element: <VendorPushNotifications /> },
    { path: "categories", element: <VendorCategories /> },
    { path: "attributes", element: <VendorAttributes /> },
    { path: "product-setup", element: <VendorProductSetup /> },
    { path: "new-stores", element: <VendorNewStores /> },
    { path: "add-stores", element: <VendorAddStores /> },
    { path: "stores-list", element: <VendorStoresList /> },
    { path: "bulk-import", element: <VendorBulkImport /> },
    { path: "bulk-export", element: <VendorBulkExport /> },
    { path: "config", element: <VendorStoreConfig /> },
    { path: "shop", element: <VendorMyShop /> },
    { path: "reviews", element: <VendorReviews /> },
    { path: "chat", element: <VendorChat /> },

       { path: "customer-list", element: <VendorCustomerList /> },
  ],
};
