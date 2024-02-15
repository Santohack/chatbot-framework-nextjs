import { CardWithForm } from "@/components/signUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center bg-gradient-to-b  py-5">
      <CardWithForm />
    </main>
  );
}
