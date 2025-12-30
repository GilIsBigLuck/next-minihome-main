import { apiClient } from "@/lib/api-client";
import type { ProjectsResponse } from "@/types/api";

export const projectsApi = {
  /**
   * 프로젝트 목록 조회
   * Next.js API Route를 통해 프록시됨 (/api/projects)
   */
  getProjects: async (): Promise<ProjectsResponse> => {
    return apiClient.get<ProjectsResponse>("/projects");
  },
};


