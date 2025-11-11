"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(3);

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
            setCurrentPage((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerPage));
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials, itemsPerPage]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id={"recenzije"} className="w-full bg-[#88664d] py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
                {currentTestimonials.map((review, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center h-[400px] w-[400px]">
                        <Image
                            src={review.userAvatar}
                            alt={`${review.username} profile picture`}
                            width={80}
                            height={80}
                            className="rounded-full mb-6 w-[80px] h-[80px]"
                            loading="lazy"
                            quality={87}
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
                        <p className="text-sm text-gray-500 mb-2">{review.role}</p>
                        <div className="overflow-hidden">
                            <p className="italic text-gray-700 flex-grow">"{review.description}"</p>
                        </div>
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