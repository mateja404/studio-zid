import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <main className="w-full h-full">
          <HomePage/>
          <Reviews/>
      </main>
    </div>
  );
}
