import React from 'react';
import Image from "next/image";
import onamabg from "@/public/OnamaBackground.png";
import slikamene from "@/public/SlikaMene.png";
import { MoveDownRight } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="w-full h-[1000px] bg-black relative grid grid-cols-1 md:grid-cols-2">
            <Image
                src={onamabg}
                alt={"O nama"}
                className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-[0.2]"
            />
            <div className="w-full h-1/2 z-10 flex items-center justify-center relative">
                <h1 className="absolute xl:left-[8%] top-[20%] text-7xl xl:text-[150px] text-white">O NAMA</h1>
            </div>
            <div className="w-full h-1/2 z-10 flex items-center justify-center text-center relative">
                <Image src={slikamene} alt={"Slika mene"} className="absolute bottom-[120%] xl:top-[10%] w-[200px]"/>
                <p className="absolute bottom-[90%] md:bottom-[20%] text-white text-2xl">“Mi postujemo vas prostor i vreme” <br/> Milan - osnivac Studia ZID</p>
            </div>
            <div className="flex flex-row justify-between">
                <ul>
                    <li className="flex"><MoveDownRight className="w-[30px] h-[30px] bg-slate-500/80 rounded-full p-1"/>TRANSPARENTE CENE BEZ DODATNIH IZNENAĐENJA</li>
                </ul>
            </div>
        </section>

    );
};

export default AboutUs;