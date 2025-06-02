import React from 'react';
import Image from "next/image";
import nasiprojekti from "@/public/NasiProjektiHome.png";
import { MoveDownRight } from "lucide-react";

const OurProjects = () => {
    return (
        <section className="w-full h-[1000px] max-sm:h-[600px] xl:h-[800px] 2xl:h-[800px] bg-black text-white relative flex flex-col border-3 border-l-transparent border-r-transparent border-t-[#88664d] border-b-[#88664d]">
            <Image src={nasiprojekti} alt={"Naši projekti"} className="w-full h-full object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
            <div className="w-full h-[70vw] flex items-center justify-center z-2">
                <h1 className="text-9xl text-black max-sm:text-6xl sm:text-6xl xl:text-8xl">Naši <br/> Projekti</h1>
            </div>
            <div className="w-full h-[30vw] flex items-center justify-center z-2">
                <div className="w-[90vw] h-[100px] mb-50 bg-[#b98d5e] flex items-center justify-center  max-sm:bg-transparent max-sm:mt-90">
                    <ul className="flex flex-row gap-x-30 max-sm:flex-col sm:flex-col lg:flex-row max-sm:gap-y-10 xl:flex-row 2xl:flex-row">
                        <li className="flex flex-row gap-x-3 text-2xl text-black translate-y-2 lg:text-xl xl:text-xl 2xl:text-4xl"><span className="w-[40px] h-[40px] bg-black rounded-full -translate-y-2 flex items-center justify-center"><MoveDownRight className="text-[#b98d5e]"/></span>Privatni Stanovi</li>
                        <li className="flex flex-row gap-x-3 text-2xl text-black translate-y-2 lg:text-xl xl:text-xl 2xl:text-4xl"><span className="w-[40px] h-[40px] bg-black rounded-full -translate-y-2 flex items-center justify-center"><MoveDownRight className="text-[#b98d5e]"/></span>Privatne Kuće</li>
                        <li className="flex flex-row gap-x-3 text-2xl text-black translate-y-2 lg:text-xl xl:text-xl 2xl:text-4xl"><span className="w-[40px] h-[40px] bg-black rounded-full -translate-y-2 flex items-center justify-center"><MoveDownRight className="text-[#b98d5e]"/></span>Lokali</li>
                        <li className="flex flex-row gap-x-3 text-2xl text-black translate-y-2 lg:text-xl xl:text-xl 2xl:text-4xl"><span className="w-[40px] h-[40px] bg-black rounded-full -translate-y-2 flex items-center justify-center"><MoveDownRight className="text-[#b98d5e]"/></span>Zgrade u izgradnji</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;