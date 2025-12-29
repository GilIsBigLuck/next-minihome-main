import { apiClient } from "@/lib/api-client";
import type { TemplatesResponse } from "@/types/api";

export const templatesApi = {
  /**
   * 템플릿 목록 조회
   * Next.js API Route를 통해 프록시됨 (/api/templates)
   */
  getTemplates: async (): Promise<TemplatesResponse> => {
    return apiClient.get<TemplatesResponse>("/templates");
  },
};

