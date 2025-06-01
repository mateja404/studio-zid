import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";

export async function POST(req: NextRequest) {
    const { reviewId } = await req.json();

    try {
        const conn = await pool.getConnection();

        try {
            const [reviewRows] = await conn.query("SELECT * FROM reviews WHERE id = ?", [reviewId]);
            if ((reviewRows as any).length === 0) {
                conn.release();
                return NextResponse.json({ message: "Korisnik ne postoji u bazi" }, { status: 404 });
            }

            await conn.query(
                "DELETE FROM reviews WHERE id = ?",
                [reviewId]
            );

            conn.release();
            return NextResponse.json({ message: "Uspešno ste obrisali recenziju!" }, { status: 200 });
        } catch (err) {
            conn.release();
            console.error("DB query error:", err);
            return NextResponse.json({ message: "Greška prilikom rada sa bazom" }, { status: 500 });
        }
    } catch(err) {
        console.error("DB connection error:", err);
        return NextResponse.json({ message: "Greška pri konekciji sa bazom" }, { status: 500 });
    }
}