import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; 

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);  // Stores all restaurants
  const [search, setSearch] = useState("");  // Stores search input

  useEffect(() => {
    // Fetch restaurants from the backend
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("https://foodieappbackend.onrender.com/api/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Filter restaurants based on search input
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
    restaurant.foodName.toLowerCase().includes(search.toLowerCase()) ||
    restaurant.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="restaurant-list-container">
      <h2>All Restaurants</h2>

      
      <input 
        type="text" 
        placeholder="Search by restaurant, food, or category..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="search-box"
      />

      <div className="restaurant-grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-box">
              <h3>{restaurant.restaurantName}</h3>
              <p><strong>Food:</strong> {restaurant.foodName} - ₹{restaurant.price}</p>
              <p><strong>Category:</strong> {restaurant.category}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No restaurants found</p>
        )}
      </div>
    </div>
  );
}
