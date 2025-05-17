"use client";

import React, { useState } from 'react';
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { GraduationCap, House, Users } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }
    return (
        <nav className="w-full h-[100px] bg-black fixed z-20 text-white">
            <div className="absolute my-2 left-10 md:left-10 lg:left-10 xl:left-30 2xl:left-30 z-2">
                <Image src={logo} alt={"lexi_logo"} width={65} className="mt-3" />
            </div>
            <div className="absolute my-10 md:right-10 lg:right-10 xl:right-20 2xl:right-30 2xl:flex xl:flex lg:flex md:flex sm:hidden max-sm:hidden flex">
                <ul className="flex flex-row justify-between gap-17">
                    <li className="relative"><Link className="text-[1rem] nav-item" href={"/"}>About us</Link></li>
                    <li className="relative"><Link className="text-[1rem] nav-item" href={"/"}>Features</Link></li>
                    <li className="relative"><Link className="text-[1rem] nav-item" href={"/"}>Testimonials</Link></li>
                    <li className="relative"><Link className="text-[1rem] nav-item" href={"/"}>Pricing</Link></li>
                </ul>
            </div>
            <button onClick={() => toggleMenu()} className="md:hidden absolute mt-7 right-5 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-[#88664d] group" aria-label="Toggle menu">
                <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
                    <span className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
                </div>
            </button>
            <div className={isSidebarOpen ? "w-screen h-screen flex flex-col bg-black text-black z-5 text-white" : "hidden -translate-y-100 transition ease-in-out duration-300"}>
                <ul className="mt-30 ml-10 gap-y-2 flex flex-col">
                    <li className={`w-[90%] h-10 bg-gradient-to-r ${pathname == "/" ? "from-[#88664d] via-[#88664d] to-[#88664d] border border-[#88664d]" : "bg-transparent"} pl-2 pt-2 pb-2 rounded-xl`}><Link className="flex gap-x-2" href={"#"}><House /> Home</Link></li>
                    <li className={`w-[90%] h-10 bg-gradient-to-r ${pathname == "/about" ? "from-[#88664d] via-[#88664d] to-[#88664d] border border-[#88664d]" : "bg-transparent"} pl-2 pt-2 pb-2 rounded-xl`}><Link className="flex gap-x-2" href={"#"}><Users /> About us</Link></li>
                    <li className={`w-[90%] h-10 bg-gradient-to-r ${pathname == "/courses" ? "from-slate-600/20 via-blue-500/20 to-violet-600/20 border border-violet-500/50" : "bg-transparent"} pl-2 pt-2 pb-2 rounded-xl`}><Link className="flex gap-x-2" href={"#"}><GraduationCap /> Home</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;