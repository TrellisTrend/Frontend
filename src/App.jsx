import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrders from "./pages/PlaceOrders";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";

// Admin components
import AdminProfile from "./pages/admin/Profile";
import AdminOrders from "./pages/admin/Orders";
import AdminProducts from "./pages/admin/AllProducts";
import EditProducts from "./pages/admin/EditProducts";
import AdminUsers from "./pages/admin/Users";

// Customer components
import CustomerProfile from "./pages/customer/Profile";
import CustomerOrders from "./pages/customer/Orders";
import CustomerWishlist from "./pages/customer/Wishlist";
import { useAuth } from "./context/AuthContext";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Role-based dashboard routes */}
          <Route path="/dashboard" element={<RoleBasedDashboard />}>
            {/* These will be rendered based on role in RoleBasedDashboard */}
          </Route>

          {/* Admin-specific routes */}
          <Route
            path="/admin"
            element={
              <AdminRoutes>
                <AdminDashboard />
              </AdminRoutes>
            }
          >
            <Route index element={<AdminProfile />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="edit-products" element={<EditProducts />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* Customer-specific routes */}
          <Route path="/account" element={<CustomerDashboard />}>
            <Route index element={<CustomerProfile />} />
            <Route path="orders" element={<CustomerOrders />} />
            <Route path="wishlist" element={<CustomerWishlist />} />
          </Route>

          {/* Other protected routes */}
          <Route
            path="/place-order"
            element={
              <PrivateRoute>
                <PlaceOrders />
              </PrivateRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// RoleBasedDashboard component to handle redirection
function RoleBasedDashboard() {
  const { user } = useAuth(); // Assuming you have useAuth hook

  if (user?.role === "admin") {
    return <Navigate to="/admin" replace />;
  } else {
    return <Navigate to="/account" replace />;
  }
}
