import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Reviews from "@/components/Reviews";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <main className="w-full h-full">
          <HomePage/>
          <Reviews/>
          <AboutUs/>
      </main>
    </div>
  );
}
