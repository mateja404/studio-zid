import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import nodemailer from "nodemailer";

async function POST(req: NextRequest) {
    const { email } = await req.json();
    await connect();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const emailDetails = await transporter.sendMail({
        from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
        to: email,
        subject: "Studio Zid | Ocenite našu uslugu",
        text: "",
        html: "<b>Hello world?</b>",
    });

    return NextResponse.json({ message: "Mail je uspešno poslat" }, { status: 200 });
}