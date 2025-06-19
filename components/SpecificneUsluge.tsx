import React from 'react';
import { MoveDownRight } from "lucide-react";
import Image from "next/image";

const SpecificneUsluge = () => {
    return (
        <section id={"specusluge"} className="w-full h-[1000px] xl:h-[800px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image src={"https://cdn.studiozid.rs/SpecificniRadovi.webp"} alt={"Specificni radovi bg"} width={1920} height={1080} className="w-full h-full object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
            <div className="w-full h-1/2 relative">
                <h1 className="max-sm:text-5xl text-7xl absolute top-[5%] left-[10%]">Specifične Usluge</h1>
            </div>
            <div className="w-full h-1/2 relative">
                <div className="flex flex-col max-sm:-mt-80 sm:-mt-80 xl:flex-row xl:mt-[-100px] w-full h-[200px]">
                    <ul className="flex flex-col sm:gap-y-3 max-sm:gap-y-10 xl:ml-5 xl:flex-row w-full pl-10 pr-10 gap-x-3">
                        <li className="flex flex-col gap-y-4 text-2xl max-sm:text-xl sm:text-xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full max-sm:hidden sm:hidden xl:flex"><MoveDownRight/></span>Proračun potrebne količine boje za vaš prostor (koliko boje za m2)</li>
                        <li className="flex flex-col gap-y-4 text-2xl max-sm:text-xl sm:text-xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full max-sm:hidden sm:hidden xl:flex"><MoveDownRight/></span>Pomoć pri odabiru zidnih tehnika</li>
                        <li className="flex flex-col gap-y-4 text-2xl max-sm:text-xl sm:text-xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full max-sm:hidden sm:hidden xl:flex"><MoveDownRight/></span>Konsultacije oko izbora najboljih materijala</li>
                        <li className="flex flex-col gap-y-4 text-2xl max-sm:text-xl sm:text-xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full max-sm:hidden sm:hidden xl:flex"><MoveDownRight/></span>Uklanjanje postojećih slojeva (uključujući skidanje španskog zida)</li>
                        <li className="flex flex-col gap-y-4 text-2xl max-sm:text-xl sm:text-xl"><span className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full max-sm:hidden sm:hidden xl:flex"><MoveDownRight/></span>Saveti i preporuke za kolege ukoliko su vam potrebni i drugi radovi</li>
                    </ul>
                </div>
                <div className="w-[90vw] h-[90px] bg-black mt-15 mx-auto flex justify-center items-center xl:absolute xl:bottom-3 xl:left-1/2 xl:-translate-x-1/2 max-sm:absolute max-sm:bottom-3 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:h-[200px]">
                    <h1 className="text-center text-[30px] max-sm:text-[20px]">SVE MOLERSKE RADOVE U NOVOM SADU I OKOLINI IZVODIMO PO DOGOVORENOJ CENI, BEZ SKRIVENIH TROŠKOVA</h1>
                </div>
            </div>
        </section>
    );
};

export default SpecificneUsluge;