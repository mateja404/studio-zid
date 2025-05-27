import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/utils/db";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const generatedReviewId = uuidv4();

    const [existingTokenRows] = await pool.query(
      "SELECT * FROM activatedlinks WHERE reviewId = ?",
      [generatedReviewId]
    );

    if ((existingTokenRows as any).length > 0) {
      return NextResponse.json(
        { message: "Token je već u upotrebi" },
        { status: 401 }
      );
    }

    await pool.query(
      "INSERT INTO activatedlinks (reviewId, isActivated) VALUES (?, ?)",
      [generatedReviewId, false]
    );

    const reviewLink = `https://studiozid.rs/review/${generatedReviewId}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "murkoffcorp11@gmail.com",
        pass: "bhbq gwwi ghuf rydu",
      },
    });

    await transporter.sendMail({
      from: '"Milan Studio Zid" <maddison53@ethereal.email>',
      to: email,
      subject: "Studio Zid | Ocenite našu uslugu",
      text: `Ocenite našu uslugu na sledećem linku: ${reviewLink}`,
    });

    return NextResponse.json(
      { message: "Mail je uspešno poslat" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error u POST /api/...", error);
    return NextResponse.json(
      { message: "Došlo je do greške" },
      { status: 500 }
    );
  }
}