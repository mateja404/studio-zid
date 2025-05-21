"use client";

import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
    const token = useParams();
    const router = useRouter();

    useEffect(() => {
        async function checkToken() {
            try {
                const res = await axios.post("http://localhost:3000/api/check-review-token", { token });
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
    return (
        <div>
            <Toaster/>
        </div>
    );
};

export default Page;