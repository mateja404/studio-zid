import React from 'react';
import Image from "next/image";
import onamabg from "@/public/OnamaBackground.webp";
import slikamene from "@/public/SlikaMene.webp";
import { MoveDownRight } from "lucide-react";

const AboutUs = () => {
    return (
        <section id={"about"} className="w-full h-[1500px] xl:h-[1000px] 2xl:h-[1000px] bg-black relative grid grid-cols-1 md:grid-cols-2 border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image src={onamabg} alt={"O nama"} className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-[0.2]" quality={80} loading={"lazy"}/>
            <div className="w-full h-1/2 z-10 flex items-center justify-center relative">
                <h1 className="absolute xl:left-[8%] 2xl:top-[30%] top-[20%] text-5xl xl:text-[150px] text-white">O NAMA</h1>
            </div>
            <div className="w-full h-1/2 mt-70 xl:mt-0 2xl:mt-0 z-10 flex items-center justify-center text-center relative">
                <Image src={slikamene} alt={"Slika mene"} className="absolute bottom-[120%] xl:top-[10%] w-[200px]" quality={80} loading={"lazy"}/>
                <p className="absolute bottom-[90%] md:bottom-[20%] xl:top-[175%] 2xl:top-[180%] text-white text-xl">“Mi postujemo vas prostor i vreme” <br/> Milan - osnivac Studia ZID</p>
            </div>
            <div className="w-[100vw] flex h-[300px] z-2">
                <div className="flex justify-center items-center flex-col mx-auto">
                    <ul className="flex flex-col max-sm:ml-5 gap-y-5 xl:ml-15 xl:mr-15 xl:gap-x-5 xl:gap-0 xl:flex-row 2xl:gap-0 2xl:flex-row">
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg flex-col gap-y-4">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                            TRANSPARENTE CENE
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg flex-col gap-y-4">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                            FIKSNI ROKOVI DEFINISANI PRE POČETKA RADOVA
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg flex-col gap-y-4">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                            JASNA KOMUNIKACIJA
                        </li>
                        <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg flex-col gap-y-4">
                            <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                            BESPLATNE KONSULTACIJE I SAVETI
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[140px] mb-100 flex items-center justify-center xl:absolute xl:mt-150 2xl:absolute 2xl:mt-150">
                <div className="w-[90%] h-full bg-[#88664d] text-center">
                    <h1 className="text-white text-5xl 2xl:text-7xl mt-10 2xl:mt-7">KAKO RADIMO</h1>
                </div>
            </div>
            <div className="w-[100vw] flex h-[150px] justify-center items-center z-2 absolute bottom-[19%] xl:bottom-0 2xl:bottom-0 mx-auto">
                <ul className="flex flex-col justify-center max-sm:items-start max-sm:ml-5 items-center gap-y-5 xl:ml-15 xl:mr-15 xl:gap-x-5 xl:gap-0 xl:flex-row 2xl:gap-0 2xl:flex-row">
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg flex-col gap-y-4">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                        VI NAS KONTAKTIRATE
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg gap-y-4 flex-col">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                        MI IZLAZIMO NA TEREN I DAJEMO PRECIZNU PONUDU
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg gap-y-4 flex-col">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                        DOGOVARAMO SVE DETALJE I ROKOVE
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg gap-y-4 flex-col">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                        POČINJEMO S RADOM PREMA DOGOVORU
                    </li>
                    <li className="flex 2xl:inline-flex gap-x-4 text-white text-lg gap-y-4 flex-col">
                        <MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1 max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex"/>
                        PREDAJEMO ZAVRŠEN PROJEKAT - NA VREME I U BUDŽETU
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutUs;