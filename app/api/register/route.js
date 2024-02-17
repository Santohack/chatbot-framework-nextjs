import User from "@/models/userModel";
import { connectDB } from "@/utils/db";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  try {
    await connectDB();
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return new Response(JSON.stringify({message: "User already exists"}), { status: 500 });
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    await user.save();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
