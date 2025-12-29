import { apiClient } from "@/lib/api-client";
import type { HealthResponse } from "@/types/api";

export const healthApi = {
  /**
   * 서버 상태 확인
   * Next.js API Route를 통해 프록시됨 (/api/health)
   */
  getHealth: async (): Promise<HealthResponse> => {
    return apiClient.get<HealthResponse>("/health");
  },
};

