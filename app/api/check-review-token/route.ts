import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import ActivatedLink from "@/models/ActivatedLink";

export async function POST(req: NextRequest) {
    const { token } = await req.json();
    await connect();

    const validToken = await ActivatedLink.findOne({ reviewId: token.token, isActivated: false });
    if (!validToken) {
        return NextResponse.json({ message: "Token nije validan" }, { status: 401 });
    }
    console.log(token, "validan je")

    return NextResponse.json({ message: "Token pronadjen i aktiviran" }, { status: 200 });
}