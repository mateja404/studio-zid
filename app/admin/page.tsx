"use client";

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { decryptKey } from "@/app/utils/utils";
import RatingDisplay from "@/components/RatingDisplay";
import AdminNavBar from "@/components/AdminNavBar";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";
import nekaslika from "@/public/SpecificniRadovi.png";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const passkey = sessionStorage.getItem("passkey") ?? "";
        const decryptedPasskey = decryptKey(passkey)

        if (decryptedPasskey != process.env.NEXT_PUBLIC_PASSKEY || passkey === null) {
            router.replace("/admin-login");
            toast.error("Nemate pristup ovoj stranici!")
        }
    }, []);
    return (
        <>
            <AdminNavBar/>
            <main>
                <Toaster/>
                <section className="mt-10 grid grid-cols-1 place-items-center gap-y-5 md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                    <div className="w-[290px] min-h-[290px] rounded-xl bg-white border border-slate-200 relative">
                        <Image src={nekaslika} alt={"neka slika"} className="w-[80px] h-[80px] rounded-full absolute top-1 left-1/2 -translate-x-1/2"/>
                        <p className="absolute top-24 left-1/2 -translate-x-1/2">Ime Prezime</p>
                        <p className="absolute top-32 left-1/2 -translate-x-1/2 text-slate-500">Title brt</p>
                        <p className="absolute top-40 left-1/2 -translate-x-1/2 w-[250px] text-center">
                            Deskripcija koja je možda mnogo duža i treba joj više prostora da se prikaže bez da kartica
                            iseče sadržaj.
                        </p>
                        <div className="flex flex-row gap-x-3 absolute bottom-3 right-7">
                            <PencilLine/>
                            <Trash2/>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                    <div className="w-[250px] h-[250px] rounded-xl bg-red-500 relative"></div>
                </section>
            </main>
        </>
    );
};

export default Page;