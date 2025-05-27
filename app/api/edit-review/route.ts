import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";

export async function POST(req: NextRequest) {
  const { reviewId, reviewDescription } = await req.json();

  try {
    const conn = await pool.getConnection();

    const [existingReview] = await conn.query(
      "SELECT * FROM reviews WHERE reviewId = ?",
      [reviewId]
    );

    if ((existingReview as any).length === 0) {
      conn.release();
      return NextResponse.json({ message: "Nema pronadjenih recenzija" }, { status: 404 });
    }

    const [updateResult] = await conn.query(
      "UPDATE reviews SET description = ? WHERE reviewId = ?",
      [reviewDescription, reviewId]
    );

    conn.release();

    if (updateResult.affectedRows > 0) {
      return NextResponse.json({ message: "Recenzija je uspesno izmenjena" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Recenzija nije izmenjena" }, { status: 200 });
    }

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}