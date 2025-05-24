import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import ActivatedLink from "@/models/ActivatedLink";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    await connect();

    const generatedReviewId = uuidv4();
    const existingToken = await ActivatedLink.findOne({ reviewId: generatedReviewId });

    if (existingToken) {
        return NextResponse.json({ message: "Token je već u upotrebi" }, { status: 401 });
    }

    const link = await ActivatedLink.create({
        reviewId: generatedReviewId,
        isActivated: false
    });
    await link.save();

    const reviewLink = `http://localhost:3000/review/${generatedReviewId}`

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
        text: `Ocenite našu uslugu na sledećem linku: ${reviewLink}`
    });

    return NextResponse.json({ message: "Mail je uspešno poslat" }, { status: 200 });
}