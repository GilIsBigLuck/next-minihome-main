import { NextResponse } from "next/server";
import { env } from "@/env";

export async function GET() {
  try {
    const response = await fetch(`${env.API_URL}/api/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // 서버 측에서는 CORS 제한이 없음
      cache: "no-store", // 항상 최신 데이터
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch projects" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Projects API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

