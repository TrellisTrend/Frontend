import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Layout from '../components/common/Layout';
import AdminRoutes from './AdminRoutes';
import CustomerRoutes from './CustomerRoutes';

// Admin pages
import AdminDashboard from '../pages/admin/Dashboard';
import AdminProducts from '../pages/admin/Products';
import AdminOrders from '../pages/admin/Orders';
import AdminInventory from '../pages/admin/Inventory';
import AdminReports from '../pages/admin/Reports';

// Customer pages
import CustomerDashboard from '../pages/customer/Dashboard';
import Shop from '../pages/customer/Shop';
import Product from '../pages/customer/Product';
import Cart from '../pages/customer/Cart';
import Checkout from '../pages/customer/Checkout';
import Orders from '../pages/customer/Orders';
import Wishlist from '../pages/customer/Wishlist';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="inventory" element={<AdminInventory />} />
            <Route path="reports" element={<AdminReports />} />
          </Route>
        </Route>

        {/* Customer Routes */}
        <Route element={<CustomerRoutes />}>
          <Route path="/account" element={<Layout />}>
            <Route index element={<CustomerDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}