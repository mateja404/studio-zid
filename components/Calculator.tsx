"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SERVICES = [
    { name: "Skidanje stare boje i tapeta", price: 2 },
    { name: "Podlogiranje", price: 1 },
    { name: "Krečenje u belo (poludisperzija)", price: 2 },
    { name: "Krečenje u belo (akrilna vodoperiva boja)", price: 2.5 },
    { name: "Krečenje u boji (poludisperzija)", price: 2.5 },
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
        <div className="p-4 max-w-4xl mx-auto">
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