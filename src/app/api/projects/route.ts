import { NextResponse } from "next/server";
import { env } from "@/env";

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    // API_SPEC: GET /api/internal/projects
    const url = new URL(`${env.API_URL}/api/internal/projects`);
    if (category) {
      url.searchParams.set("category", category);
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Internal API는 X-API-Key 헤더 필요 (개발 환경에서는 optional)
    if (env.INTERNAL_API_KEY) {
      headers["X-API-Key"] = env.INTERNAL_API_KEY;
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { code: response.status, message: "Failed to fetch projects", data: null },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Projects API Error:", error);
    return NextResponse.json(
      { code: 500, message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}

