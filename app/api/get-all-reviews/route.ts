import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";

export async function GET(req: NextRequest) {
  try {
    const conn = await pool.getConnection();

    const [allReviews] = await conn.query(
      "SELECT id, username, userAvatar, rating, role, description, createdAt, updatedAt FROM reviews"
    );

    conn.release();

    if ((allReviews as any).length === 0) {
      return NextResponse.json({ message: "Nema pronadjenih recenzija" }, { status: 404 });
    }

    return NextResponse.json({ testimonials: allReviews }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ message: "Greška pri dobijanju recenzija", error: error.message }, { status: 500 });
  }
}