import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RestaurantForm() {
  const [restaurantName, setRestaurantName] = useState("");
  const [location, setLocation] = useState("");
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://foodieappbackend.onrender.com/api/restaurants", {
        restaurantName,
        location,
        foodName,   //  Sending single food item
        price,
        category,
      });

      alert("Restaurant added successfully!");
      navigate("/"); //  Redirect to home after submission
    } catch (error) {
      console.error("Error adding restaurant:", error.response?.data);
      alert(error.response?.data?.message || "Failed to add restaurant");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register Your Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Restaurant Name" 
          value={restaurantName} 
          onChange={(e) => setRestaurantName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
        <h3>Food Item</h3>
        <input 
          type="text" 
          placeholder="Food Name" 
          value={foodName} 
          onChange={(e) => setFoodName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
