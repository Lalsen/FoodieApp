import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Vendor Logged In:", email, password);
    navigate("/restaurant-form"); // Redirect to home after VendorDashboard
  };

  return (
    <div className="auth-container">
      <h2>Vendor Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/vendor-signup">Sign Up</a></p>
    </div>
  );
}
