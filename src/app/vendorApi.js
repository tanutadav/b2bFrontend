// // const API_BASE_URL = 'http://localhost:4000/api';

// // // Vendor List API
// // export const getVendors = async () => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/vendors`);
// //     const data = await response.json();
// //     return data.success ? data.data : [];
// //   } catch (error) {
// //     console.error('Error:', error);
// //     return [];
// //   }
// // };

// // // Vendor Dashboard API
// // export const getVendorById = async (vendorId) => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/vendors/${vendorId}`);
// //     const data = await response.json();
// //     return data.success ? data.data : null;
// //   } catch (error) {
// //     console.error('Error:', error);
// //     return null;
// //   }
// // };

// // // Create vendor
// // export const createVendor = async (vendorData) => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/vendors`, {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(vendorData)
// //     });
// //     return await response.json();
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // // Update vendor
// // export const updateVendor = async (vendorId, vendorData) => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/vendors/${vendorId}`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(vendorData)
// //     });
// //     return await response.json();
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // // Delete vendor
// // export const deleteVendor = async (vendorId) => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/vendors/${vendorId}`, {
// //       method: 'DELETE'
// //     });
// //     return await response.json();
// //   } catch (error) {
// //     throw error;
// //   }
// // };


// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:4000/api';


// // vendorAPI.js
// import axios from 'axios';
// import { getAuthHeader, API_BASE_URL } from './common'; 

// export const vendorAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/vendors`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/vendors`, data, { headers: getAuthHeader() }),
//   update: (id, data) => axios.put(`${API_BASE_URL}/vendors/${id}`, data, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/vendors/${id}`, { headers: getAuthHeader() }),
// };










// // Get token from localStorage
// const getAuthHeader = () => {
//   const token = localStorage.getItem('token');
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// // Banner APIs
// export const bannerAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/banners`, { headers: getAuthHeader() }),
//   getById: (id) => axios.get(`${API_BASE_URL}/banners/${id}`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/banners`, data, { headers: getAuthHeader() }),
//   update: (id, data) => axios.put(`${API_BASE_URL}/banners/${id}`, data, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/banners/${id}`, { headers: getAuthHeader() })
// };

// // Coupon APIs
// export const couponAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/coupons`, { headers: getAuthHeader() }),
//   getById: (id) => axios.get(`${API_BASE_URL}/coupons/${id}`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/coupons`, data, { headers: getAuthHeader() }),
//   update: (id, data) => axios.put(`${API_BASE_URL}/coupons/${id}`, data, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/coupons/${id}`, { headers: getAuthHeader() })
// };

// // Refund APIs
// export const refundAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/refunds`, { headers: getAuthHeader() }),
//   getById: (id) => axios.get(`${API_BASE_URL}/refunds/${id}`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/refunds`, data, { headers: getAuthHeader() }),
//   approve: (id) => axios.put(`${API_BASE_URL}/refunds/${id}/approve`, {}, { headers: getAuthHeader() }),
//   reject: (id, reason) => axios.put(`${API_BASE_URL}/refunds/${id}/reject`, { reason }, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/refunds/${id}`, { headers: getAuthHeader() })
// };

// // Order APIs
// export const orderAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/orders`, { headers: getAuthHeader() }),
//   getById: (id) => axios.get(`${API_BASE_URL}/orders/${id}`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/orders`, data, { headers: getAuthHeader() }),
//   updateStatus: (id, status) => axios.put(`${API_BASE_URL}/orders/${id}/status`, { status }, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/orders/${id}`, { headers: getAuthHeader() })
// };

// // Product APIs
// export const productAPI = {
//   getAll: () => axios.get(`${API_BASE_URL}/products`, { headers: getAuthHeader() }),
//   getById: (id) => axios.get(`${API_BASE_URL}/products/${id}`, { headers: getAuthHeader() }),
//   create: (data) => axios.post(`${API_BASE_URL}/products`, data, { headers: getAuthHeader() }),
//   update: (id, data) => axios.put(`${API_BASE_URL}/products/${id}`, data, { headers: getAuthHeader() }),
//   delete: (id) => axios.delete(`${API_BASE_URL}/products/${id}`, { headers: getAuthHeader() })
// };

// // Auth APIs
// export const authAPI = {
//   login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),
//   register: (data) => axios.post(`${API_BASE_URL}/auth/register`, data)
// };

// export default {
//   banner: bannerAPI,
//   coupon: couponAPI,
//   refund: refundAPI,
//   order: orderAPI,
//   product: productAPI,
//   auth: authAPI,
//   vendor:  vendorAPI
// };

