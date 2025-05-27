import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const [rows] = await pool.query(
      "SELECT * FROM activatedlinks WHERE reviewId = ? AND isActivated = false",
      [token.token]
    );

    if ((rows as any).length === 0) {
      return NextResponse.json(
        { message: "Token nije validan" },
        { status: 401 }
      );
    }

    console.log(token, "validan je");
    return NextResponse.json({ message: "Token pronađen i aktiviran" },{ status: 200 });
  } catch (error) {
    console.error("Greška u POST /api/...", error);
    return NextResponse.json(
      { message: "Došlo je do greške" },
      { status: 500 }
    );
  }
}