import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrders from "./pages/PlaceOrders";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import EditProducts from "./components/EditProducts";
import AllProducts from "./components/AllProducts";
import Users from "./components/Users";

export default function App() {
  return (
    <div className="">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="edit-products" element={<EditProducts />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
