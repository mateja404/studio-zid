import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Review from "@/models/Review";

async function POST(req: NextRequest) {
    const { reviewId, reviewDescription } = await req.json();
    await connect();

    const existingReview = await Review.findOne({ reviewId: reviewId });
    if (!existingReview) {
        return NextResponse.json({ message: "Nema pronadjenih recenzija" }, { status: 404 });
    }

    try {
        const update = await Review.updateOne({ reviewId: reviewId }, { description: reviewDescription });

        if (update.modifiedCount > 0) {
            return NextResponse.json({ message: "Recenzija je uspesno izmenjena" }, { status: 200 });
        } else if (update.matchedCount === 0) {
            return NextResponse.json({ message: "Recenzija nije pronadjena" }, { status: 404 });
        } else {
            return NextResponse.json({ message: "Recenzija nije izmenjena" }, { status: 200 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}