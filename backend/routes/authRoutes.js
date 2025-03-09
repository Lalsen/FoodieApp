import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Vendor from "../models/Vendor.js";

const router = express.Router(); 

// vendor signup route

router.post("/vendor/signup",async (req,res)=>{
  try{
    console.log("vendor signup request received:",req.body);

    const {businessName, email, password } = req.body;
    const existingVendor = await Vendor.findOne({ email });

    if(existingVendor){
      console.log("Already existing email")
      return res.status(400).json({ message:"Already existing email"});
    }
    const hashedPassword= await bcrypt.hash(password,10);
    const newVendor = new Vendor({businessName,email,password: hashedPassword});

    console.log("Saving new Vendor:", newVendor);
    await newVendor.save();

    res.status(201).json({message: "Vendor registered successfully"});
  }catch(error){
    console.error("Signup error:", error);
    res.status(500).json({error: "Server error"});
  }
})

// USER SIGNUP ROUTE
router.post("/user/signup", async (req, res) => {
  try {
    console.log("🔹 Signup request received:", req.body);

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log(" User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    console.log(" Saving new user:", newUser);
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(" Signup error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// USER LOGIN ROUTE
router.post("/user/login", async (req, res) => {
  try {
    console.log("🔹 Login request received:", req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log(" User not found");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log(" Incorrect password");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log(" User logged in successfully");
    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(" Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
