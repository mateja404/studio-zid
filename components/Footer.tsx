import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import footer_bg from "@/public/FooterBackground.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="clear-both w-full h-[550px] max-sm:h-[1200px] relative flex flex-col">
            <Image src={footer_bg} alt={"Footer background"} className="w-full h-full object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
            <div className="w-full md:w-1/2 h-[80%] absolute top-0 flex flex-col pl-10">
                <Image alt={"Logo"} src={logo} className="w-27 absolute top-2" quality={80} loading={"lazy"}/>
                <p className="absolute top-30 md:bottom-[20%] text-xl ">Studio Zid - profesionalni izvođači molerskih radova u Novom Sadu i okolini. Naš tim se specijalizuje za sve vrste molerskih i gipsarskih radova, uključujući kvalitetno gletovanje, krečenje, dekorativne zidne tehnike i spuštene plafone. Bilo da renovirate stan, kuću ili poslovni prostor, garantujemo jasne cene, precizne rokove i vrhunski kvalitet izvođenja. Za sve informacije o uslugama i besplatnu procenu radova, kontaktirajte nas putem telefona ili forme na sajtu. Studio Zid - stvaramo prostore kojima se ponosite.</p>
                <div className="absolute mt-100 max-sm:mt-130 md:bottom-0 w-full h-[100px] flex flex-col top-10 gap-y-2 md:flex-row md:items-center md:justify-center gap-x-10">
                    <Link href="tel:0637236049" className="text-2xl md:absolute left-0">063/723-60-49 Milan</Link>
                    <Link href="mailto:info@studiozid.com" className="text-2xl">info@studiozid.rs</Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[80%] absolute top-0 right-0">
                <ul className="text-center absolute top-10 left-10 flex gap-y-5 flex-col max-sm:hidden">
                    <li className="text-3xl"><Link href="#">Home</Link></li>
                    <li className="text-3xl"><Link href="#">O Nama</Link></li>
                    <li className="text-3xl"><Link href="#">Naše Usluge</Link></li>
                    <li className="text-3xl"><Link href="#">Specifične usluge</Link></li>
                    <li className="text-3xl"><Link href="#">Naši Projekti</Link></li>
                    <li className="text-3xl"><Link href="#">Galerija</Link></li>
                </ul>
                <div className="w-full bottom-0 max-sm:translate-y-35 md:w-1/2 md:h-[100%] absolute md:top-10 right-0 text-center z-2">
                    <h3 className="text-4xl">Pitajte Nas</h3>
                    <p className="text-3xl mt-10">Tu smo da vam pomognemo</p>
                    <form className="gap-y-4 flex-col flex mt-10">
                        <Input type={"email"} className="w-[90%] h-[50px] text-xl mx-auto bg-white" placeholder={"Email"} required/>
                        <Input type={"text"} className="w-[90%] h-[50px] text-xl mx-auto bg-white" placeholder={"Ime"} required/>
                        <Input type={"text"} className="w-[90%] h-[50px] text-xl mx-auto bg-white" placeholder={"Pitanje"} required/>
                        <Button variant={"default"} className="w-[70%] mx-auto text-xl hover:cursor-pointer">Pošalji pitanje</Button>
                    </form>
                </div>
            </div>
            <div className="absolute bottom-0 w-full md:h-[20%] flex items-center justify-center">
                <h1 className="text-xl">&copy; 2025 Studio Zid. All rights reserved.</h1>
            </div>
        </footer>
    );
};

export default Footer;