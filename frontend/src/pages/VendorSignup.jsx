import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VendorSignup() {
  const [businessName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    
try{
  const response= await axios.post("https://foodieappbackend.onrender.com/api/auth/vendor/signup", {
    businessName,
    email,
    password
  });
  alert(response.data.message);
  navigate("/vendor-login"); // Redirect to login after signup
  }catch(error){
    console.error("Signup error:", error.response?.data);
      alert(error.response?.data?.message || "Signup failed");
  }

};

  return (
    <div className="auth-container">
      <h2>Vendor Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Business Name" value={businessName} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/vendor-login">Login</a></p>
    </div>
  );

}