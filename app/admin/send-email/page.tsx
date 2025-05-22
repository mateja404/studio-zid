"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
    const [email, setEmail] = useState("");

    async function sendEmail(e: any) {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/send-review-email", { email: email })
            .then(res => {
                console.log(res.data);
                toast.success(res.data.message)
            })
    }
    return (
        <section>
            <Toaster/>
            <form>
                <Label>Email</Label>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} required/>
                <Button onClick={sendEmail}>Send email</Button>
            </form>
        </section>
    );
};

export default Page;