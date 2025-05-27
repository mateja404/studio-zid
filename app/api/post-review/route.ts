import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";

export async function POST(req: NextRequest) {
  const { username, role, description, rating, userAvatar } = await req.json();

  try {
    const conn = await pool.getConnection();

    try {
      const [userRows] = await conn.query("SELECT * FROM users WHERE name = ?", [username]);
      if ((userRows as any).length === 0) {
        conn.release();
        return NextResponse.json({ message: "Korisnik ne postoji u bazi" }, { status: 404 });
      }

      const [reviewRows] = await conn.query("SELECT * FROM reviews WHERE username = ?", [username]);
      if ((reviewRows as any).length > 0) {
        conn.release();
        return NextResponse.json({ message: "Recenzija već postoji" }, { status: 409 });
      }

      await conn.query(
        "INSERT INTO reviews (username, userAvatar, rating, role, description) VALUES (?, ?, ?, ?, ?)",
        [username, userAvatar, rating, role, description]
      );

      conn.release();
      return NextResponse.json({ message: "Uspešno ste poslali recenziju!" }, { status: 200 });
    } catch (err) {
      conn.release();
      console.error("DB query error:", err);
      return NextResponse.json({ message: "Greška prilikom rada sa bazom" }, { status: 500 });
    }
  } catch (err) {
    console.error("DB connection error:", err);
    return NextResponse.json({ message: "Greška pri konekciji sa bazom" }, { status: 500 });
  }
}