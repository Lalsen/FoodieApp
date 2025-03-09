import mongoose from "mongoose";

// Define Vendor Schema (Authentication + Restaurant Details)
const VendorSchema = new mongoose.Schema({
  businessName: { type: String, required: true },  // Vendor's business name
  email: { type: String, required: true, unique: true }, // Unique email for login
  password: { type: String, required: true },  // Hashed password for authentication
}, { timestamps: true });

// Export the Vendor model
const Vendor = mongoose.model("Vendor", VendorSchema);
export default Vendor;
