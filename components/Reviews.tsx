'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pfp from '@/public/BandWMoler.png';

const testimonials = [
    {
        name: "Marko Petrović",
        title: "Zadovoljan klijent",
        text: "Rad je urađen brzo i kvalitetno. Sve preporuke!",
        image: pfp
    },
    {
        name: "Jelena Nikolić",
        title: "Vlasnica stana",
        text: "Profesionalno i ljubazno osoblje. Moj stan sada izgleda kao nov!",
        image: pfp
    },
    {
        name: "Ivan Jovanović",
        title: "Investitor",
        text: "Odlična komunikacija i još bolji rezultat. Saradnja za svaku pohvalu.",
        image: pfp
    },
    {
        name: "Ana Marković",
        title: "Preduzetnica",
        text: "Sve je urađeno u roku i tačno kako smo se dogovorili.",
        image: pfp
    },
    {
        name: "Nikola Ilić",
        title: "Stambeni objekat",
        text: "Saradnja je bila izuzetna, bez ikakvih problema. Čista desetka!",
        image: pfp
    },
    {
        name: "Sara Stojanović",
        title: "Klijentkinja",
        text: "Sve je bilo brzo, efikasno i tačno onako kako sam želela.",
        image: pfp
    }
];

const ITEMS_PER_PAGE = 3;

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % Math.ceil(testimonials.length / ITEMS_PER_PAGE));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section className="w-full bg-[#88664d] py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
                {currentTestimonials.map((review, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                        <Image
                            src={review.image}
                            alt={`${review.name} profile picture`}
                            className="rounded-full mb-10 -mt-15 w-[80px] h-[80px]"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{review.title}</p>
                        <p className="italic text-gray-700">"{review.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;