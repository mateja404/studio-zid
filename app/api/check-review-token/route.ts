import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/utils/db";
import activatedLink from "@/models/ActivatedLink";

async function POST(req: NextRequest) {
    const { token } = await req.json();
    await connect();

    const validToken = await activatedLink.findOne({ token: token, isActivated: false });
    if (!validToken) {
        return NextResponse.json({ message: "Token nije validan" }, { status: 401 });
    }

    validToken.isActivated = true;
    await validToken.save();
    return NextResponse.json({ message: "Token pronadjen i aktiviran" }, { status: 200 });
}