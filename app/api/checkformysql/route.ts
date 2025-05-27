import { NextResponse } from 'next/server';
import pool from '@/app/utils/db';

export async function GET() {
  try {
    const [rows] = await pool.query("SHOW TABLES");
    return NextResponse.json({ success: true, tables: rows });
  } catch (error) {
    console.error("DB error full object:", error);
    console.error("DB error JSON:", JSON.stringify(error, Object.getOwnPropertyNames(error)));

    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = JSON.stringify(error);
    }
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
