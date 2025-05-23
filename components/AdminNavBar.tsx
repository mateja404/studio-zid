"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavBar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }
    return (
        <nav className="w-full h-[100px] bg-white border-b border-slate-200 relative">
            <h1 className={`absolute left-10 md:left-20 text-xl mt-7 z-10 ${isActive ? "text-white" : "text-black"}`}>Admin Panel</h1>
            <ul className="flex flex-row mt-7 absolute right-10 gap-x-5 sm:hidden max-sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                <li><Link href={"/admin"} className="text-xl">Reviews</Link></li>
                <li><Link href={"/admin/send-email"} className="text-xl">Send Email</Link></li>
            </ul>
            <button onClick={() => toggleMenu()}
                    className="md:hidden absolute mt-7 right-5 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-[#88664d] group"
                    aria-label="Toggle menu">
                <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
                    <span
                        className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
                    <span
                        className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span
                        className={`absolute w-5 h-[2px] bg-[#88664d] rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
                </div>
            </button>
            <div
                className={isSidebarOpen ? "w-screen h-screen flex flex-col bg-black text-black z-5 text-white" : "hidden -translate-y-100 transition ease-in-out duration-300"}>
                <ul className="mt-30 ml-10 gap-y-2 flex flex-col">
                    <li className={`w-[90%] h-10 bg-gradient-to-r ${pathname == "/admin" ? "from-[#88664d] via-[#88664d] to-[#88664d] border border-[#88664d]" : "bg-transparent"} pl-2 pt-2 pb-2 rounded-xl`}>
                        <Link className="flex gap-x-2" href={"#"}>Reviews</Link></li>
                    <li className={`w-[90%] h-10 bg-gradient-to-r ${pathname == "/admin/send-email" ? "from-[#88664d] via-[#88664d] to-[#88664d] border border-[#88664d]" : "bg-transparent"} pl-2 pt-2 pb-2 rounded-xl`}>
                        <Link className="flex gap-x-2" href={"#"}>Send Email</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavBar;