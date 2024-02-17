import { connectDB } from "@/utils/db";
import User from "@/models/userModel";
export const POST = async (req) => {
   const { email, password } = await req.json();
   try {
    await connectDB();
    const user = await User.findOne({ email , password });
    if(!user) {
        return new Response(JSON.stringify({message: "User not found"}), { status: 500 });
    }
    if(user) {
      return new Response(JSON.stringify(user), { status: 200 });
    }
   } catch (error) {
    
    return new Response(JSON.stringify({message: "server not found"}), { status: 500 });
   }
}