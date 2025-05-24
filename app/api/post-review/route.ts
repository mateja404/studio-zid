import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Review from "@/models/Review";
import User from "@/models/User";

export async function POST(req: NextRequest) {
    const { username, role, description, rating, userAvatar } = await req.json()
    await connect();

    const existingReview = await Review.findOne({ username: username });
    const user = await User.findOne({ name: username });

    if (!user) {
        return NextResponse.json({ message: "Korisnik ne postoji u bazi" }, { status: 404 });
    }
    if (existingReview) {
        return NextResponse.json({ message: "Recenzija već postoji" }, { status: 409 });
    }

    const review = await Review.create({
        username: username,
        userAvatar: userAvatar,
        rating: rating,
        role: role,
        description: description
    });
    await review.save();
    return NextResponse.json({ message: "Uspešno ste poslali recenziju!" }, { status: 200 });
}