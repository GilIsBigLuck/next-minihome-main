"use client";

import { useQuery } from "@tanstack/react-query";
import { projectsApi } from "@/api/projects";
import type { ProjectsResponse } from "@/types/api";

export function useProjects() {
  return useQuery<ProjectsResponse>({
    queryKey: ["projects"],
    queryFn: () => projectsApi.getProjects(),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}


