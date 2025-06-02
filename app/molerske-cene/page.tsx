import React from "react";

const pricingData = [
    {
        category: "Molerski Radovi",
        items: [
            { name: "Skidanje Stare Boje i Tapeta", price: "1,5€" },
            { name: "Podlogiranje", price: "0,5€" },
            { name: "Gletovanje", price: "4€" },
        ],
    },
    {
        category: "Poludisperzijom",
        items: [
            { name: "Gletovanje i Krečenje u Belo", price: "5.5€" },
            { name: "Gletovanje i Krečenje u Boji", price: "6€" },
            { name: "Krečenje u Belo", price: "1.5€" },
            { name: "Krečenje u Boji", price: "2€" },
        ],
    },
    {
        category: "Akrilna Vodoperiva Boja",
        items: [
            { name: "Krečenje u Boji", price: "2,5€" },
            { name: "Gletovanje i Krečenje u Belo", price: "7€" },
            { name: "Gletovanje i Krečenje u Boji", price: "8€" },
        ],
    },
    {
        category: "Ostalo",
        items: [
            { name: "Bandažiranje Pukotina", price: "3€" },
            { name: "Dekorativne Tehnike", price: "15-25€" },
            { name: "Armiranje i Ravnanje Starih Zidova", price: "8€" },
            { name: "Postavljanje Ugaonih Lajsni", price: "4€" },
        ],
    },
    {
        category: "Gipsarski Radovi",
        items: [
            { name: "Lepljenje Ploča na Zidove", price: "12€" },
            { name: "Oblaganje Zida na Metalnoj Konstrukciji", price: "18€" },
            {
                name: "Oblaganje Zida na Metalnoj Konstrukciji sa Ispunom od Vune",
                price: "19€",
            },
            {
                name: "Pregradni Zid Obostrano Obložen sa Jednom Pločom i Vunom",
                price: "25€",
            },
            {
                name: "Pregradni Zid Obostrano Obložen sa po Dve Ploče i Vunom",
                price: "28€",
            },
            { name: "Kaskada sa Skrivačem", price: "20€" },
            { name: "Oblaganje Cevi Gipsom", price: "15€" },
            { name: "Obrada Špaletni Gipsom", price: "7€" },
            { name: "Spušteni Plafon Bez Izolacije", price: "22€" },
            { name: "Spušteni Plafon sa Izolacijom od Vune", price: "24€" },
        ],
    },
    {
        category: "Fasaderski Radovi",
        items: [
            {
                name: "Demit Fasada - Stiropor (Komplet Izrada bez Materijala i Skele)",
                price: "14€",
            },
            {
                name: "Podlogiranje (Priprema Površine i Impregniranje)",
                price: "0,5€",
            },
            { name: "Lepljenje Stiropora", price: "5€" },
            { name: "Lepak i Mrežica", price: "5€" },
            { name: "Završna Fasada (Rajbanje / Navlačenje)", price: "4€" },
            { name: "Kulirplast (Cokla)", price: "5€" },
            { name: "Spaletne (Obrada) Spolja", price: "7€" },
        ],
    },
];

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-5">
            <h1 className="text-5xl mb-10 text-gray-800">Cenovnik</h1>
            {pricingData.map((section, index) => (
                <div key={index} className="w-full mb-10">
                    <h2 className="text-4xl text-yellow-800 mb-3 text-center">{section.category}</h2>
                    {section.category !== "Poludisperzijom" &&
                        section.category !== "Akrilna Vodoperiva Boja" &&
                        section.category !== "Ostalo" &&
                        section.category !== "Fasaderski Radovi" && (
                            <p className="text-xl text-gray-600 text-center">
                                * Cene su sa uračunatim materijalom{" "}
                            </p>
                        )}
                    {section.category === "Fasaderski Radovi" && (
                        <p className="text-xl text-gray-600 text-center">* Cene su bez materijala </p>
                    )}
                    <ul className="list-none p-0">
                        {section.items.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between py-2 border-b border-gray-300"
                            >
                                <span className="font-bold text-gray-800">{item.name}</span>
                                <span className="text-brown-700">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Page;
