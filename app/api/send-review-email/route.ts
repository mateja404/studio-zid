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
      host: 's53.unlimited.rs',
      port: 465,
      secure: true,
      auth: {
        user: 'recenzije@studiozid.rs',
        pass: 'Kokot@02',
      },
      tls: { rejectUnauthorized: false }
    });

        const html = 
      `<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding: 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
              <tr>
                <td style="background-color: #88664d; padding: 20px; color: white; text-align: center; font-size: 24px;">
                  Studio Zid
                </td>
              </tr>
              <tr>
                <td style="padding: 30px; color: #333333; font-size: 16px;">
                  <p>Poštovani <strong>${email}</strong>,</p>
                  <p>Jako bi nam značilo da ostavite recenziju i podelite Vaš utisak o našem radu. Hvala unapred!</p>
                  <div style="margin: 30px 0; text-align: center;">
                    <a href="${reviewLink}" style="
                      background-color: #88664d;
                      color: white;
                      padding: 12px 24px;
                      text-decoration: none;
                      border-radius: 5px;
                      font-weight: bold;
                      display: inline-block;
                    ">Ostavi recenziju</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="background-color: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #888888;">
                  © ${new Date().getFullYear()} Studio Zid. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`
    ;

    await transporter.sendMail({
      from: '"Milan Studio Zid" <recenzije@studiozid.rs>',
      to: email,
      subject: "Studio Zid | Ocenite našu uslugu",
      html: html
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