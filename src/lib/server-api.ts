import { env } from "@/env";
import type { ProjectsResponse, TemplatesResponse } from "@/types/api";

/**
 * 서버 컴포넌트에서 직접 Internal API를 호출하는 함수들
 * API Route를 거치지 않고 직접 호출하여 SSR 성능 최적화
 */

const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (env.INTERNAL_API_KEY) {
    headers["X-API-Key"] = env.INTERNAL_API_KEY;
  }

  return headers;
};

export async function fetchProjects(category?: string): Promise<ProjectsResponse> {
  const url = new URL(`${env.API_URL}/api/internal/projects`);

  if (category) {
    url.searchParams.set("category", category);
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: getHeaders(),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function fetchTemplates(category?: string): Promise<TemplatesResponse> {
  const url = new URL(`${env.API_URL}/api/internal/templates`);

  if (category) {
    url.searchParams.set("category", category);
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: getHeaders(),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
