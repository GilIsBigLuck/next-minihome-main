"use client";

import { useQuery } from "@tanstack/react-query";
import { templatesApi } from "@/api/templates";
import type { TemplatesResponse } from "@/types/api";

export function useTemplates() {
  return useQuery<TemplatesResponse>({
    queryKey: ["templates"],
    queryFn: () => templatesApi.getTemplates(),
    staleTime: 5 * 60 * 1000, // 5분
  });
}

