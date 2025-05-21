"use client";

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("passkey");

        if (!loggedIn) {
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