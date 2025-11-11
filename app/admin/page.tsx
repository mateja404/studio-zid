"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { decryptKey } from "@/app/utils/utils";
import RatingDisplay from "@/components/RatingDisplay";
import AdminNavBar from "@/components/AdminNavBar";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { Dialog,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader,  DialogTitle,  DialogTrigger, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Testimonial {
    id: number
    username: string
    userAvatar: string
    role: string
    description: string
}

const Page = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null); // null = loading, false = no access, true = access
    const router = useRouter();
    const [testimonials, setTestimonials] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    useEffect(() => {
        const passkey = sessionStorage.getItem("passkey") ?? "";
        const decryptedPasskey = decryptKey(passkey);

        if (decryptedPasskey !== process.env.NEXT_PUBLIC_PASSKEY || !passkey) {
            toast.error("Nemate pristup ovoj stranici!");
            router.replace("/admin-login");
            setIsAuthorized(false);
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    useEffect(() => {
        async function getReviews() {
            const response = await axios.get("/api/get-all-reviews")
                .then(res => {
                    setTestimonials(res.data.testimonials)
                })
        }
        getReviews()
    }, []);

    if (isAuthorized === null) {
        return null;
    }

    if (!isAuthorized) {
        return null;
    }

    async function deleteReview(id: number) {
        const response = await axios.post("/api/delete-review", { reviewId: id })
            .then(res => {
                toast.success(res.data.message);
                setModalIsOpen(false);
                setTimeout(() => {
                    window.location.reload();
                }, 1300);
            })
    }

    function brisanje(id: number) {
        setModalIsOpen(true);
        setSelectedId(id)
    }
    return (
        <>
            <Toaster />
            <main>
                <AdminNavBar/>
                <section className="mt-10 mb-10 pl-10 pr-10 justify-center gap-3 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-items-center gap-y-5 -gap-x-20">
                    {testimonials.length > 0 ? (
                        testimonials.map((testimonial: Testimonial) => (
                            <div key={testimonial.id} className="w-full h-[400px] text-center rounded-xl bg-white border border-slate-200 relative">
                                <Image
                                    src={testimonial.userAvatar}
                                    alt={"profilna slika"}
                                    width={80}
                                    height={80}
                                    priority={true}
                                    className="rounded-full absolute top-1 left-1/2 -translate-x-1/2"
                                />
                                <p className="absolute top-24 w-full">{testimonial.username}</p>
                                <p className="absolute top-32 left-1/2 -translate-x-1/2 text-slate-500">{testimonial.role}</p>
                                <p className="absolute top-40 left-1/2 -translate-x-1/2 w-[250px] text-center">{testimonial.description}</p>
                                <div className="flex flex-row gap-x-4 absolute bottom-3 right-7">
                                    <PencilLine
                                        className="hover:cursor-pointer p-2 hover:bg-slate-100 w-[35px] h-[35px] rounded-md"
                                        onClick={() => router.push(`/admin/edit-review/${testimonial.id}`)}
                                    />
                                    <Trash2
                                        className="hover:cursor-pointer p-2 hover:bg-red-400 hover:text-white w-[35px] h-[35px] rounded-md"
                                        onClick={() => brisanje(testimonial.id)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nema pronađenih recenzija</p>
                    )}
                    <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Obriši recenziju</DialogTitle>
                                <DialogDescription>
                                    Jednom kada obrišete recenziju ne postoji način da je vratite.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button type="submit" variant={"destructive"} className="hover:cursor-pointer" onClick={(e) => deleteReview(selectedId)}>Obriši</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>
            </main>
        </>
    );
};

export default Page;