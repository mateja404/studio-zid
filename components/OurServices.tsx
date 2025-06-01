import React from 'react';
import Image from "next/image";
import nase_usluge from "@/public/PozadinaNaseUsluge.png";

const OurServices = () => {
    return (
        <section id={"naseusluge"} className="w-full h-[1000px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image src={nase_usluge} alt={"Nase usluge"} className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-[0.2]" quality={80} loading={"lazy"}/>
            <div className="w-full h-1/3 2xl:h-1/2">
                <h1 className="mt-15 2xl:mt-0 text-6xl 2xl:text-8xl 2xl:absolute 2xl:top-[5%] 2xl:left-[5%] text-center 2xl:text-start">Nаše <br/> Usluge</h1>
            </div>
            <div className="w-full h-[80vh] z-2 2xl:h-1/2 items-center flex-col gap-y-2 flex justify-center ">
                <div className="w-[90vw] h-full 2xl:h-[150px] border-3 border-b-white pb-7 border-t-transparent border-r-transparent border-l-transparent">
                    <ul className="flex gap-x-25 gap-y-10 flex-col 2xl:flex-row justify-center mt-15 text-center">
                        <li  className="2xl:inline text-4xl">MOLERSKI RADOVI</li>
                        <li className="2xl:inline text-4xl">GIPSARSKI RADOVI</li>
                        <li className="2xl:inline text-4xl">FASADNI RADOVI</li>
                        <li className="2xl:inline text-4xl">ZIDNE TEHNIKE I TAPETE</li>
                    </ul>
                </div>
                <div className="w-[90vw] z-2 h-[150px] mb-10 relative max-sm:text-center sm:text-center">
                    <h1 className="text-5xl w-full 2xl:text-6xl absolute bottom-1">Studio Zid</h1>
                    <div className="w-[50vw] h-[3px] bg-white absolute bottom-7 right-25 max-sm:hidden sm:hidden"></div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;