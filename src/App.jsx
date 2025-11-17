import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';

// Superadmin
import AdminDashboard from './admin/AdminDashboard';
import OrderList from './admin/OrderList';
import RefundList from './admin/RefundList';
import CouponList from './admin/CouponList';
import BannerList from './admin/BannerList';

// Vendor
import VendorDashboard from './vendor/VendorDashboard';
import VendorCustomerList from './pages/vendor/VendorCustomerList';  
// Customer
import CustomerDashboard from './customer/CustomerDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* ========== SUPERADMIN ROUTES ========== */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute requiredRole="superadmin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/order" 
          element={
            <ProtectedRoute requiredRole="superadmin">
              <OrderList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/refunds" 
          element={
            <ProtectedRoute requiredRole="superadmin">
              <RefundList />
            </ProtectedRoute>
          } 
        />
        
        {/* ========== VENDOR ROUTES ========== */}
        <Route 
          path="/vendor/dashboard" 
          element={
            <ProtectedRoute requiredRole="vendor">
              <VendorDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/vendor/order" 
          element={
            <ProtectedRoute requiredRole="vendor">
              <OrderList />  
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/vendor/refund" 
          element={
            <ProtectedRoute requiredRole="vendor">
              <RefundList /> 
            </ProtectedRoute>
          } 
        />
        
        {/* ✅ CUSTOMER LIST ROUTE - PROPERLY ADDED */}
        <Route 
          path="/vendor/customer-list" 
          element={
            <ProtectedRoute requiredRole="vendor">
              <VendorCustomerList />
            </ProtectedRoute>
          } 
        />
        
        {/* ========== CUSTOMER ROUTES ========== */}
        <Route 
          path="/customer/dashboard" 
          element={
            <ProtectedRoute requiredRole="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customer/order" 
          element={
            <ProtectedRoute requiredRole="customer">
              <OrderList />
            </ProtectedRoute>
          } 
        />
        
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
