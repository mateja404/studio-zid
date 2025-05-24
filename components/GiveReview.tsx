"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Select,  SelectContent,  SelectGroup,  SelectItem,  SelectLabel,  SelectTrigger,  SelectValue, } from "@/components/ui/select";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const GiveReview = ({ className,  ...props }: React.ComponentPropsWithoutRef<"div">) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [role, setRole] = useState<string | undefined>("");
    const [description, setDescription] = useState<string | undefined>("");
    const [rating, setRating] = useState<number>(1);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (role?.length === 0 || description?.length === 0) {
            toast.error("Sva polja su obavezna");
        }
        const response = await axios.post("http://localhost:3000/api/post-review", { username: session?.user?.name, role: role, description: description, rating: rating, userAvatar: session?.user?.image })
            .then(res => {
                console.log(res.data);
            })
        console.log(role, description, rating, session?.user?.name);
    }
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Toaster/>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Recenzija</CardTitle>
                    <CardDescription>
                        Ocenite našu uslugu
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex w-full items-center justify-center">
                                    <StarRating rating={rating} onRatingChange={handleRatingChange}/>
                                </div>
                                <Textarea placeholder="Kako ste zadovoljni sa uslugom?" className="focus-visible:ring-0 min-h-[100px]" onChange={(e) => setDescription(e.target.value)}></Textarea>
                                <Select value={role} onValueChange={(value) => setRole(value)}>
                                    <SelectTrigger className="w-[100%] focus-visible:ring-0">
                                        <SelectValue placeholder="Izaberite Vašu ulogu" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Uloga</SelectLabel>
                                            <SelectItem value="Klijent">Klijent</SelectItem>
                                            <SelectItem value="Klijentkinja">Klijentkinja</SelectItem>
                                            <SelectItem value="Investitor">Investitor</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Button variant="outline" className="w-full hover:cursor-pointer" type={"submit"}>
                                    <Send /> Postavi recenziju
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default GiveReview;