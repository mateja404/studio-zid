import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    await connect();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "murkoffcorp11@gmail.com",
            pass: "bhbq gwwi ghuf rydu"
        }
    });

    const emailDetails = await transporter.sendMail({
        from: 'Milan Studio Zid" <maddison53@ethereal.email>',
        to: email,
        subject: "Studio Zid | Ocenite našu uslugu",
        text: "",
        html: "<b>Hello world?</b>",
    });

    return NextResponse.json({ message: "Mail je uspešno poslat" }, { status: 200 });
}