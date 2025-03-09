import express from "express";
import Restaurant from "../models/Restaurant.js"; // Import the model
const router = express.Router(); 

// API to register a restaurant
router.post("/", async (req, res) => {
    try {
      console.log("🔹 Received request:", req.body); //  Log the request body
  
      const { restaurantName, location, foodName, price, category } = req.body;
  
      if (!restaurantName || !location || !foodName || !price || !category) {
        console.error(" Missing fields:", req.body);  //  Log the missing fields
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newRestaurant = new Restaurant({ restaurantName, location, foodName, price, category });
  
      await newRestaurant.save();
      console.log(" Restaurant added successfully!");
      res.status(201).json({ message: "Restaurant added successfully!" });
    } catch (error) {
      console.error(" Error saving restaurant:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

  

  router.get("/", async (req, res) => {
    try {
      const restaurants = await Restaurant.find(); // Fetch all restaurant data
      res.status(200).json(restaurants);
    } catch (error) {
      console.error(" Error fetching restaurants:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

  
  

export default router;
