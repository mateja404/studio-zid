import React from 'react';
import Image from "next/image";
import gallery1 from "@/public/Gallery/gallery1.png";
import gallery2 from "@/public/Gallery/gallery2.png";
import gallery3 from "@/public/Gallery/gallery3.png";
import gallery4 from "@/public/Gallery/gallery4.png";
import gallery5 from "@/public/Gallery/gallery5.png";
import gallery6 from "@/public/Gallery/gallery6.png";
import gallery7 from "@/public/Gallery/gallery7.png";
import gallery8 from "@/public/Gallery/gallery8.png";
import galerijabg from "@/public/GalrijaBAckground.png";

const Gallery = () => {
    return (
        <section className="w-full h-[1000px] max-sm:hidden sm:hidden md:hidden xl:block xl:h-[1000px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <div className="w-full h-1/2 text-center">
                <Image src={galerijabg} alt={"Galerija pozadina"} className="w-full  object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
                <h1 className="text-8xl mt-2 text-black relative z-2">Galerija</h1>
            </div>
            <div className="w-full h-1/2 bg-black z-2">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-1 -gap-y-2 -translate-y-[290px] place-items-center">
                    <Image src={gallery1} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery2} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery3} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery4} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery5} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery6} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery7} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                    <Image src={gallery8} alt={"Galerija"} width={190} quality={75} loading={"lazy"}/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;