import React from 'react';
import Image from "next/image";
import home_imagee from "@/public/BandWMerdevine.png";
import Link from "next/link";
import { PhoneCall, MailPlus } from "lucide-react";

const HomePage = () => {
    return (
        <section className="w-full h-full bg-transparent relative">
            <Image src={"https://cdn.studiozid.rs/BandWMoler.webp"} width={1920} height={1080} alt={"Home image"} className="opacity-[0.7] xl:w-1/2 2xl:w-1/2 h-full sm:w-full max-sm:w-full object-cover" quality={80} priority={true} />
            <Image src={"https://cdn.studiozid.rs/BandWMerdevine.png"} alt={"Home image"} width={1920} height={1080} className="opacity-[0.7] xl:w-1/2 2xl:w-1/2 h-full right-0 top-0 absolute sm:hidden max-sm:hidden xl:block 2xl:block" quality={80} priority={true} />
            <div className="absolute top-[10%] w-full h-120 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 gap-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#88664d] leading-tight">MOLERSKI RADOVI BEZ STRESA</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">JASNI DOGOVORI, PRECIZNI ROKOVI, KULTURNA KOMUNIKACIJA I UREDNOST</p>
            </div>
            <div className="absolute gap-y-2 bottom-[10%] sm:bottom-[20%] xl:bottom-[30%] left-[3%] w-full gap-x-4 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                <Link href="tel:0637236049" className="flex text-sm gap-x-2 bg-[#88664d] rounded-xl text-white w-[250px] h-15 items-center justify-center"><PhoneCall/>063/723-60-49 Milan</Link>
                <Link href="mailto:info@studiozid.com" className="flex text-sm gap-x-2 bg-[#88664d] rounded-xl text-white w-[250px] h-15 items-center justify-center"><MailPlus/>info@studiozid.rs</Link>
            </div>
        </section>
    );
};

export default HomePage;