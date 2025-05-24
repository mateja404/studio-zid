"use client";

import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import GiveReview from "@/components/GiveReview";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Page = () => {
    const { data: session, status } = useSession();
    const token = useParams();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            toast.error("Nemate pristup ovoj stranici");
            setTimeout(() => {
                const redirectUrl = `/login?callbackUrl=${encodeURIComponent(pathname)}`;
                router.replace(redirectUrl);
            }, 1100);
        }
    }, [session, status, router]);

    {/*
        useEffect(() => {
            async function checkToken() {
                try {
                    const res = await axios.post("http://localhost:3000/api/check-review-token", {token});
                    console.log("Success:", res.status);
                    toast.success("Success")
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        toast.error(error.response?.data.message);
                        router.replace("/")
                    } else {
                        console.log("Unexpected error:", error);
                    }
                }
            }

            checkToken();
        }, []);
        */
    }
    return (
        <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <Toaster/>
            <div className="w-full max-w-sm">
                <GiveReview/>
            </div>
        </section>
    );
};

export default Page;