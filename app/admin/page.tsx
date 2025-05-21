"use client";

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { decryptKey } from "@/app/utils/utils";

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
        <main>
            <Toaster/>
            <div></div>
        </main>
    );
};

export default Page;