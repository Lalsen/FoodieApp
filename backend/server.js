
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);


// Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



