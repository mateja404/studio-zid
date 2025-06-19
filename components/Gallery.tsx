import React from 'react';
import Image from "next/image";

const Gallery = () => {
    return (
        <section className="w-full h-[1000px] max-sm:hidden sm:hidden md:hidden xl:block xl:h-[1000px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <div className="w-full h-1/2 text-center">
                <Image src={"https://cdn.studiozid.rs/GalrijaBAckground.png"} width={1920} height={1080} alt={"Galerija pozadina"} className="w-full  object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
                <h1 className="text-8xl mt-2 text-black relative z-2">Galerija</h1>
            </div>
            <div className="w-full h-1/2 bg-black z-2">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-1 -gap-y-2 -translate-y-[290px] place-items-center">
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery1.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery2.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery3.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery4.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery5.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery6.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery7.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                    <Image src={"https://cdn.studiozid.rs/Gallery/gallery8.png"} alt={"Galerija"} width={190} height={190} quality={75} loading={"lazy"}/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;