import { NextResponse } from "next/server";
import { env } from "@/env";

export const runtime = 'edge';

export async function GET() {
  try {
    // API_SPEC: GET /api/public/health
    const response = await fetch(`${env.API_URL}/api/public/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { code: response.status, message: "Failed to fetch health status", data: null },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Health API Error:", error);
    return NextResponse.json(
      { code: 500, message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}

