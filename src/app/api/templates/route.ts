import { NextResponse } from "next/server";

export const runtime = 'edge';

const API_BASE_URL = process.env.API_URL || "https://api.minihome.page";

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/templates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // 서버 측에서는 CORS 제한이 없음
      cache: "no-store", // 항상 최신 데이터
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch templates" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Templates API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

