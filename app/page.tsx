import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Reviews from "@/components/Reviews";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import SpecificneUsluge from "@/components/SpecificneUsluge";
import OurProjects from "@/components/OurProjects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <main className="w-full h-full">
          <HomePage/>
          <Reviews/>
          <AboutUs/>
          <OurServices/>
          <SpecificneUsluge/>
          <OurProjects/>
          <Gallery/>
          <Footer/>
      </main>
    </div>
  );
}