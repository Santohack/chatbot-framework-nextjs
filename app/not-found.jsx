import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex text-center flex-col gap-6  justify-center h-fit items-center">
      <h2 className="text-5xl text-bold text-red-500">Page Not Found</h2>
     
      <Link href="/" className="text-3xl underline text-blue-500">Return Home</Link>
    </div>
  );
}
