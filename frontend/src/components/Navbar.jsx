import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">FoodieApp</h1>
      <div className="auth-buttons">
        <Link to="/user-login"><button className="login-btn">User Login</button></Link>
        <Link to="/vendor-login"><button className="vendor-btn">Vendor Login</button></Link>
      </div>
    </nav>
  );
}