import { SignIn } from "@/components/signIn";
import { SignUp } from "@/components/signUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center   py-5">
      <SignIn />
    </main>
  );
}
