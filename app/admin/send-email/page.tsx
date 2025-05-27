"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Card,  CardContent,  CardDescription,  CardHeader,  CardTitle, } from "@/components/ui/card";

const Page = () => {
    const [email, setEmail] = useState("");

    async function sendEmail(e: any) {
        e.preventDefault();
        const response = await axios.post("/api/send-review-email", { email: email })
            .then(res => {
                console.log(res.data);
                toast.success(res.data.message)
            })
    }
    return (
        <>
            <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <Toaster/>
                <div className="w-full max-w-sm">
                    <div className={cn("flex flex-col gap-6")}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Recenzija</CardTitle>
                                <CardDescription>
                                    Unesi validan email
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                                className="focus-visible:ring-0"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" onClick={sendEmail}>
                                            Pošalji email
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;