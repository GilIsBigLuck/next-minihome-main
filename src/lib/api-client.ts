// 클라이언트 측에서는 Next.js API Route를 통해 프록시
import { env } from "@/env";

const API_BASE_URL = env.NEXT_PUBLIC_API_URL;

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    // Next.js API Route를 통해 프록시하여 CORS 문제 해결
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};

