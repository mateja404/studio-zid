import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Review from "@/models/Review";

async function GET(req: NextRequest) {
    await connect();
    const allReviews = await Review.find({});
    if (allReviews.length === 0) {
        return NextResponse.json({ message: "Nema pronadjenih recenzija" }, { status: 404 });
    }
}