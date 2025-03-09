import mongoose from "mongoose";


// Schema for Restaurants
const RestaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true }, // Restaurant name
  location: { type: String, required: true }, // Location
  foodName: { type: String, required: true }, // Food name 
  price: { type: Number, required: true }, // Food price
  category: { type: String, required: true }
});


const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;