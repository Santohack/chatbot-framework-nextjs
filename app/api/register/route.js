import User from "@/models/userModel";
import { connectDB } from "@/utils/db";
import bcrypt from "bcrypt";
import { isEmail } from "validator";

const saltRounds = 10;
export const POST = async (req) => {
  const { name, email, password } = await req.json();

  if (name.trim().length === 0) {
    return new Response(JSON.stringify({ message: "Name is required" }), {
      status: 500,
    });
  }
  if (email.trim().length === 0) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 500,
    });
  }
  if (!isEmail(email)) {
    return new Response(JSON.stringify({ message: "Email is invalid" }), {
      status: 500,
    });
  }
  if (password.trim().length === 0) {
    return new Response(JSON.stringify({ message: "Password is required" }), {
      status: 500,
    });
  }
  if (password.trim().length < 6) {
    return new Response(
      JSON.stringify({ message: "Password must be at least 6 characters" }),
      { status: 500 }
    );
  }

  try {
    await connectDB();
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 500,
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    return new Response(JSON.stringify(user,{message: "User created successfully"}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
