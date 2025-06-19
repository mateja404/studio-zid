"use client";

import { useState, useEffect } from "react";
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

export default function EstimatedSurface() {
    const [surface, setSurface] = useState<number>(0);
    const [plafon, setPlafon] = useState<number>(0);
    const [zid, setZid] = useState<number>(0);
    const [ukupnaKvadratura, setUkupnaKvadratura] = useState<number>(0);

    useEffect(() => {
        const calculatedPlafon = surface;
        const calculatedZid = surface * 2.5;
        const calculatedUkupnaKvadratura = calculatedPlafon + calculatedZid;
        setPlafon(calculatedPlafon);
        setZid(calculatedZid);
        setUkupnaKvadratura(calculatedUkupnaKvadratura);
    }, [surface]);

    const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setSurface(value);
        } else if (event.target.value === '') {
            setSurface(0);
        }
    };
    return (
        <div className="p-4 max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Brza procena ukupne površine za krečenje</h1>
            <Card>
                <CardContent className="overflow-x-auto p-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Naziv</TableHead>
                                <TableHead>Količina (m²)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                                <TableRow>
                                    <TableCell>UKUPNA KVADRATURA STANA/PROSTORIJE <br/>(površina poda)</TableCell>
                                    <TableCell>
                                        <Input type="number" defaultValue={0} min="0" className="w-24 focus-visible:ring-0" onChange={handleSurfaceChange} />
                                    </TableCell>
                                </TableRow>
                            <p className="mt-3">Plafon: {plafon}m²</p>
                            <p className="mt-3">Zid: {zid}m²</p>
                            <p className="mt-3">Ukupna kvadratura: {ukupnaKvadratura}m²</p>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}