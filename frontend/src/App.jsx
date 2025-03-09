import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import VendorLogin from "./pages/VendorLogin";
import VendorSignup from "./pages/VendorSignup";
import RestaurantForm from "./pages/RestaurantForm";
import RestaurantList from "./pages/RestaurantList"; // ✅ Import RestaurantList

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-signup" element={<VendorSignup />} />
        <Route path="/restaurant-form" element={<RestaurantForm />} />
        <Route path="/restaurant-list" element={<RestaurantList />} /> 


      </Routes>
    </Router>
  );
}
