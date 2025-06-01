"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const ITEMS_PER_PAGE = 3;

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [testimonials, setTestimonials] = useState<any[]>([]); // Ovdje koristimo any tip, ali možeš ga poboljšati kasnije

    useEffect(() => {
        async function getAllReviews() {
            try {
                const response = await axios.get("/api/get-all-reviews");
                setTestimonials(response.data.testimonials);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }
        getAllReviews();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % Math.ceil(testimonials.length / ITEMS_PER_PAGE));
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials]);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section id={"recenzije"} className="w-full bg-[#88664d] py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-6 gap-y-12 transition-all duration-700 ease-in-out">
                {currentTestimonials.map((review, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                        <Image
                            src={review.userAvatar}
                            alt={`${review.username} profile picture`}
                            width={50}
                            height={50}
                            className="rounded-full mb-10 -mt-15 w-[80px] h-[80px]"
                            loading={"lazy"}
                            quality={87}
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
                        <p className="text-sm text-gray-500 mb-2">{review.role}</p>
                        <p className="italic text-gray-700">"{review.description}"</p>
                        <div className="flex justify-center mt-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                                <span key={i} className="text-gray-300">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
