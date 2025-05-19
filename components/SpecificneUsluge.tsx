import React from 'react';
import { MoveDownRight } from "lucide-react";
import Image from "next/image";
import specificniradovi from "@/public/SpecificniRadovi.png";

const SpecificneUsluge = () => {
    return (
        <section className="w-full h-[1400px] xl:h-[800px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image src={specificniradovi} alt={"Specificni radovi bg"} className="w-full h-full object-cover absolute top-0 left-0 z-0 "/>
            <div className="w-full h-1/2 relative">
                <h1 className="text-7xl absolute top-[5%] left-[10%]">Specifične Usluge</h1>
            </div>
            <div className="w-full h-1/2 relative">
                <div className="flex flex-col xl:flex-row w-full h-[200px]">
                    <ul className="flex flex-col -mt-100 sm:gap-y-5 max-sm:gap-y-10 xl:flex-row w-full pl-10 pr-10 gap-x-3">
                        <li className="flex flex-col gap-y-4 text-2xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full"><MoveDownRight/></span>Proračun potrebne količine boje za vaš prostor (koliko boje za m2)</li>
                        <li className="flex flex-col gap-y-4 text-2xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full"><MoveDownRight/></span>Pomoć pri odabiru zidnih tehnika</li>
                        <li className="flex flex-col gap-y-4 text-2xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full"><MoveDownRight/></span>Konsultacije oko izbora najboljih materijala</li>
                        <li className="flex flex-col gap-y-4 text-2xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full"><MoveDownRight/></span>Uklanjanje postojećih slojeva (uključujući skidanje španskog zida)</li>
                        <li className="flex flex-col gap-y-4 text-2xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full"><MoveDownRight/></span>Saveti i preporuke za kolege ukoliko su vam potrebni i drugi radovi</li>
                    </ul>
                </div>
                <div className="w-[90vw] h-[100px] bg-black mt-15 mx-auto flex justify-center items-center max-sm:absolute max-sm:bottom-3 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:h-[200px]">
                    <h1 className="text-center text-[30px] max-sm:text-[25px]">SVE MOLERSKE RADOVE U NOVOM SADU I OKOLINI IZVODIMO PO DOGOVORENOJ CENI, BEZ SKRIVENIH TROŠKOVA</h1>
                </div>
            </div>
        </section>
    );
};

export default SpecificneUsluge;