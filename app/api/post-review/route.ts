import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Review from "@/models/Review";
import User from "@/models/User";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    const { username, title, description, stars } = await req.json()
    await connect();

    const existingReview = await Review.findOne({ username: username });
    const user = await User.findOne({ username: username });

    if (!user) {
        return NextResponse.json({ message: "Korisnik ne postoji u bazi" }, { status: 404 });
    }
    if (existingReview) {
        return NextResponse.json({ message: "Recenzija već postoji" }, { status: 409 });
    }

    const reviewId = uuidv4();

    const review = await Review.create({
        reviewId: reviewId,
        username: username,
        stars: stars,
        description: description,
        title: title,
        userAvatar: user.avatar
    });
    await review.save();
}