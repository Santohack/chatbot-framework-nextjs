import mongoose from "mongoose";
import { isEmail } from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    unique: true,
    validate:[isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },

});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
