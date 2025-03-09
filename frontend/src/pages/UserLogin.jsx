import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://foodieappbackend.onrender.com/api/auth/user/login", {
        email,
        password
      });

      alert("Login Successful!");
      localStorage.setItem("token", response.data.token); // Store token in local storage
      navigate("/restaurant-list"); // Redirect to home after login
    } catch (error) {
      console.error("Login error:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/user-signup">Sign Up</a></p>
    </div>
  );
}
