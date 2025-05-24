import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Review from "@/models/Review";

export async function GET(req: NextRequest) {
    try {
        await connect();
        const allReviews = await Review.find({}, "-_id");

        if (allReviews.length === 0) {
            return NextResponse.json({ message: "Nema pronadjenih recenzija" }, { status: 404 });
        }

        // Vraćanje svih recenzija
        return NextResponse.json({ testimonials: allReviews }, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json({ message: "Greška pri dobijanju recenzija", error: error.message }, { status: 500 });
    }
}