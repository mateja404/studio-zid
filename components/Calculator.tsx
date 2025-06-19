"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SERVICES = [
    { name: "Skidanje stare boje i tapeta", price: 1.5 },
    { name: "Podlogiranje", price: 0.5 },
    { name: "Gletovanje", price: 4 },
    { name: "Gletovanje i Krečenje u Belo (poludisperzijom)", price: 5.5 },
    { name: "Gletovanje i Krečenje u Boji (poludisperzijom)", price: 6 },
    { name: "Krečenje u Belo (poludisperzijom)", price: 1.5 },
    { name: "Krečenje u Boji (poludisperzijom)", price: 2 },
    { name: "Krečenje u Boji (akrilna boja)", price: 2.5 },
    { name: "Gletovanje Krečenje u Belo (akrilna boja)", price: 7 },
    { name: "Gletovanje Krečenje u Boji (akrilna boja)", price: 8 },
    { name: "Gletovanje Krečenje u Boji (akrilna boja)", price: 8 },
    { name: "Bandažiranje Pukotina", price: 3 },
    { name: "Armiranje i Ravnanje Starih Zidova", price: 8 },
    { name: "Postavljanje Ugaonih Lajsni", price: 4 },
    { name: "Lepljenje Ploča na Zidove", price: 12 },
    { name: "Oblaganje Zida na Metalnoj Konstrukciji", price: 18 },
    { name: "Oblaganje Zida na Metalnoj Konstrukciji sa Ispunom od Vune", price: 19 },
    { name: "Pregradni Zid Obostrano Obložen sa Jednom Pločom i Vunom", price: 25 },
    { name: "Pregradni Zid Obostrano Obložen sa po Dve Ploče i Vunom", price: 28 },
    { name: "Kaskada sa Skrivačem", price: 20 },
    { name: "Oblaganje Cevi Gipsom", price: 15 },
    { name: "Obrada Špaletni Gipsom", price: 7 },
    { name: "Spušteni Plafon Bez Izolacije", price: 22 },
    { name: "Spušteni Plafon sa Izolacijom od Vune", price: 24 },
    { name: "Demit Fasada - Stiropor (Komplet Izrada bez Materijala i Skele)", price: 14 },
    { name: "Podlogiranje (Priprema Površine i Impregniranje)", price: 0.5 },
    { name: "Lepljenje Stiropora", price: 5 },
    { name: "Lepak i Mrežica", price: 5 },
    { name: "Završna Fasada (Rajbanje / Navlačenje)", price: 4 },
    { name: "Kulirplast (Cokla)", price: 5 },
    { name: "Spaletne (Obrada) Spolja", price: 7 },
];

export default function Calculator() {
    const [quantities, setQuantities] = useState(Array(SERVICES.length).fill(0));

    const handleChange = (index: any, value: any) => {
        const newQuantities = [...quantities];
        newQuantities[index] = parseFloat(value) || 0;
        setQuantities(newQuantities);
    };

    const total = quantities.reduce((acc, q, i) => acc + q * SERVICES[i].price, 0);

    return (
        <div className="p-4 xl:max-w-6xl 2xl:max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Brza procena cene molerskih radova</h1>
            <Card>
                <CardContent className="overflow-x-auto p-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Naziv</TableHead>
                                <TableHead>Količina (m²)</TableHead>
                                <TableHead>Cena (€)</TableHead>
                                <TableHead>Ukupno (€)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {SERVICES.map((service, index) => (
                                <TableRow key={index}>
                                    <TableCell>{service.name}</TableCell>
                                    <TableCell>
                                        <Input
                                            type="number"
                                            defaultValue={quantities[index]}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            min="0"
                                            className="w-24 focus-visible:ring-0"
                                        />
                                    </TableCell>
                                    <TableCell>{service.price} €</TableCell>
                                    <TableCell>{(quantities[index] * service.price).toFixed(2)} €</TableCell>
                                </TableRow>
                            ))}
                            <TableRow className="font-bold">
                                <TableCell colSpan={3}>Ukupno:</TableCell>
                                <TableCell>{total.toFixed(2)} €</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}