import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
