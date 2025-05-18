import React from 'react';
import Image from "next/image";
import onamabg from "@/public/OnamaBackground.png";
import slikamene from "@/public/SlikaMene.png";
import { MoveDownRight } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="w-full h-[1500px] 2xl:h-[1000px] bg-black relative grid grid-cols-1 md:grid-cols-2 border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image
                src={onamabg}
                alt={"O nama"}
                className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-[0.2]"
            />
            <div className="w-full h-1/2 z-10 flex items-center justify-center relative">
                <h1 className="absolute xl:left-[8%] 2xl:top-[30%] top-[20%] text-7xl xl:text-[150px] text-white">O
                    NAMA</h1>
            </div>
            <div
                className="w-full h-1/2 mt-70 xl:mt-0 2xl:mt-0 z-10 flex items-center justify-center text-center relative">
                <Image src={slikamene} alt={"Slika mene"} className="absolute bottom-[120%] xl:top-[10%] w-[200px]"/>
                <p className="absolute bottom-[90%] md:bottom-[20%] 2xl:top-[180%] text-white text-2xl">“Mi postujemo vas prostor i vreme” <br/> Milan - osnivac Studia ZID</p>
            </div>
            <div className="w-[100vw] flex h-[300px] z-2">
                <div className="flex justify-center items-center flex-col mx-auto 2xl:pl-5 2xl:pr-5">
                    <ul className="flex flex-col gap-y-5 2xl:gap-0 2xl:flex-row">
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                            TRANSPARENTE CENE BEZ DODATNIH IZNENAĐENJA
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                            FIKSNI ROKOVI DEFINISANI PRE POČETKA RADOVA
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                            JASNA KOMUNIKACIJA OD PRVOG RAZGOVORA DO ZAVRŠETKA PROJEKTA
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                            BESPLANE KONSULTACIJE I SAVETI
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="w-full h-[140px] mb-100 flex items-center justify-center xl:absolute xl:mt-150 2xl:absolute 2xl:mt-150">
                <div className="w-[90%] h-full bg-[#88664d] text-center">
                    <h1 className="text-white text-5xl 2xl:text-7xl mt-10 2xl:mt-7">KAKO RADIMO</h1>
                </div>
            </div>
            <div className="w-[100vw] flex h-[150px] z-2 absolute bottom-[20%] 2xl:bottom-0 mx-auto">
                <ul className="flex flex-col gap-y-5 2xl:gap-0 2xl:flex-row">
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                        TRANSPARENTE CENE BEZ DODATNIH IZNENAĐENJA
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                        FIKSNI ROKOVI DEFINISANI PRE POČETKA RADOVA
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                        JASNA KOMUNIKACIJA OD PRVOG RAZGOVORA DO ZAVRŠETKA PROJEKTA
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-xl">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>
                        BESPLANE KONSULTACIJE I SAVETI
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutUs;