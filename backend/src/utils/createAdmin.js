import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);

  const email = "admin@edusphere.com";
  const password = "Admin@123";

  const exists = await User.findOne({ email });

  if (exists) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const hashed = await bcrypt.hash(password, 10);

  const admin = await User.create({
    name: "Super Admin",
    email,
    password: hashed,
    role: "admin",
  });

  console.log("Admin created successfully:", admin);
  process.exit(0);
}

createAdmin();
