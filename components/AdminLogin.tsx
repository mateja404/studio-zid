"use client";

import React, { useState } from 'react';
import { InputOTP,  InputOTPGroup,  InputOTPSeparator,  InputOTPSlot, } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { encryptKey } from "@/app/utils/utils";

const AdminLogin = () => {
    const router = useRouter();
    const [passkey, setPasskey] = useState("");

    const checkPasskeyMatching = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (passkey === process.env.NEXT_PUBLIC_PASSKEY) {
            let randomKey = uuidv4();
            let rolling90s = encryptKey(passkey);
            console.log(rolling90s)
            sessionStorage.setItem("passkey", String(rolling90s));
            toast.success("Redirektovanje...")
            setTimeout(() => {
                router.replace("/admin")
            }, 2200)
        } else {
            toast.error("Pogrešna šifra");
        }
    }
    return (
        <div className="flex items-center justify-center w-full h-screen bg-white">
            <Toaster/>
            <div>
                <h1 className="mb-15 text-center text-2xl">Unesite tačnu šifru</h1>
                <InputOTP maxLength={6} value={passkey} onChange={(value) => setPasskey(value)}>
                    <InputOTPGroup className="w-full flex justify-between gap-x-2">
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={0} />
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={1} />
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator/>
                    <InputOTPGroup className="w-full flex justify-between gap-x-2">
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={3} />
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={4} />
                        <InputOTPSlot className="w-[50px] h-[50px] border border-slate-500 rounded-lg gap-4" index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <Button onClick={(e) => checkPasskeyMatching(e)} className="mt-10 w-full hover:cursor-pointer">Potvrdi</Button>
            </div>
        </div>
    );
};

export default AdminLogin;