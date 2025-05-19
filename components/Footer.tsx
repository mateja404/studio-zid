import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import footer_bg from "@/public/FooterBackground.png";

const Footer = () => {
    return (
        <footer className="clear-both w-full h-[500px] relative">
            <Image src={footer_bg} alt={"Footer background"} className="w-full h-full object-cover absolute top-0 left-0 z-0"/>
            <div className="w-1/2 h-[80%] bg-red-500 absolute top-0 flex flex-col pl-10">
                <Image alt={"Logo"} src={logo} className="w-27 absolute top-2" />
                <p className="absolute bottom-[20%] text-xl">Studio Zid - profesionalni izvođači molerskih radova u Novom Sadu i okolini. Naš tim se specijalizuje za sve vrste molerskih i gipsarskih radova, uključujući kvalitetno gletovanje, krečenje, dekorativne zidne tehnike i spuštene plafone. Bilo da renovirate stan, kuću ili poslovni prostor, garantujemo jasne cene, precizne rokove i vrhunski kvalitet izvođenja. Za sve informacije o uslugama i besplatnu procenu radova, kontaktirajte nas putem telefona ili forme na sajtu. Studio Zid - stvaramo prostore kojima se ponosite.</p>
                <div className="absolute bottom-0 w-full h-[100px] flex items-center justify-center gap-x-10">
                    <Link href="tel:0637236049" className="text-2xl absolute left-0">063/723-60-49 Milan</Link>
                    <Link href="mailto:info@studiozid.com" className="text-2xl">info@studiozid.rs</Link>
                </div>
            </div>
            <div className="w-1/2 h-[80%] bg-yellow-500 absolute top-0 right-0">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="absolute bottom-0 bg-blue-500 w-full h-[20%] flex items-center justify-center">
                <h1 className="text-xl">&copy; 2025 Studio Zid. All rights reserved.</h1>
            </div>
        </footer>
    );
};

export default Footer;