"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "06bf3d62-a17a-490b-b5e3-84d25ddbd238",
                name: name,
                subject: `${name} je poslao novo pitanje!`,
                email: email,
                message: question,
            }),
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Uspešno ste poslali pitanje");
        }
    }

    const handleLinkClick = (e: any, href: any) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };
    return (
        <footer className="clear-both w-full h-[550px] max-sm:h-[1200px] relative flex flex-col">
            <Toaster/>
            <Image src={"https://cdn.studiozid.rs/FooterBackground.webp"} width={1920} height={1080} alt={"Footer background"} className="w-full h-full object-cover absolute top-0 left-0 z-0" quality={80} loading={"lazy"}/>
            <div className="w-full md:w-1/2 h-[80%] absolute top-0 flex flex-col pl-10">
                <Image alt={"Logo"} src={"https://cdn.studiozid.rs/logo.png"} width={27} height={27} className="w-27 absolute top-2" quality={80} loading={"lazy"}/>
                <p className="absolute top-30 md:bottom-[20%] text-lg mr-5 max-sm:text-[16px] sm:text-sm">Studio Zid - profesionalni izvođači molerskih radova u Novom Sadu i okolini. Naš tim se specijalizuje za sve vrste molerskih i gipsarskih radova, uključujući kvalitetno gletovanje, krečenje, dekorativne zidne tehnike i spuštene plafone. Bilo da renovirate stan, kuću ili poslovni prostor, garantujemo jasne cene, precizne rokove i vrhunski kvalitet izvođenja. Za sve informacije o uslugama i besplatnu procenu radova, kontaktirajte nas putem telefona ili forme na sajtu. Studio Zid - stvaramo prostore kojima se ponosite.</p>
                <div className="absolute mt-100 xl:mt-85 max-sm:mt-140 md:bottom-0 w-full h-[100px] flex flex-col top-10 gap-y-2 md:flex-row md:items-center md:justify-center gap-x-10">
                    <Link href="tel:0637236049" className="text-lg z-2 md:absolute left-0">063/723-60-49 Milan</Link>
                    <Link href="mailto:info@studiozid.com" className="text-lg z-2">info@studiozid.rs</Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[80%] absolute top-0 right-0">
                <ul className="text-center absolute top-10 left-10 flex gap-y-5 flex-col max-sm:hidden">
                    <li className="text-3xl"><Link href={"#about"} onClick={(e) => handleLinkClick(e, '#about')}>O Nama</Link></li>
                    <li className="text-3xl"><Link href={"#recenzije"} onClick={(e) => handleLinkClick(e, '#recenzije')}>Recenzije</Link></li>
                    <li className="text-3xl"><Link href={"#naseusluge"} onClick={(e) => handleLinkClick(e, '#naseusluge')}>Naše Usluge</Link></li>
                    <li className="text-3xl"><Link href={"#specusluge"} onClick={(e) => handleLinkClick(e, '#about')}>Specifične usluge</Link></li>
                    <li className="text-3xl"><Link href={"/molerske-ceme"}>Cenovnik</Link></li>
                </ul>
                <div className="w-full bottom-0 max-sm:translate-y-35 md:w-1/2 md:h-[100%] absolute md:top-10 right-0 text-center z-2">
                    <h3 className="text-4xl max-sm:absolute max-sm:-top-33 max-sm:left-1/2 max-sm:-translate-x-1/2">Pitajte Nas</h3>
                    <p className="text-3xl mt-10 mx-auto max-w-[370px] max-sm:absolute max-sm:-top-20 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:text-[20px]">Tu smo da vam pomognemo</p>
                    <form className="gap-y-4 flex-col flex mt-10" onSubmit={handleSubmit}>
                        <Input type={"email"} className="w-[90%] h-[50px] text-xl mx-auto bg-white focus-visible:ring-0" placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} required/>
                        <Input type={"text"} className="w-[90%] h-[50px] text-xl mx-auto bg-white focus-visible:ring-0" placeholder={"Ime"} onChange={(e) => setName(e.target.value)} required/>
                        <Input type={"text"} className="w-[90%] h-[50px] text-xl mx-auto bg-white focus-visible:ring-0" placeholder={"Pitanje"} onChange={(e) => setQuestion(e.target.value)} required/>
                        <Button type={"submit"} variant={"default"} className="w-[70%] mx-auto text-xl hover:cursor-pointer">Pošalji pitanje</Button>
                    </form>
                </div>
            </div>
            <div className="absolute bottom-0 w-full md:h-[20%] flex items-center justify-center text-center">
                <h1 className="text-lg max-sm:text-md sm:text-md">&copy; 2025 Studio Zid. All rights reserved.</h1>
            </div>
        </footer>
    );
};

export default Footer;