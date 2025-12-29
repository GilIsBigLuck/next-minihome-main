"use client";

import { useQuery } from "@tanstack/react-query";
import { healthApi } from "@/api/health";
import type { HealthResponse } from "@/types/api";

export function useHealth() {
  return useQuery<HealthResponse>({
    queryKey: ["health"],
    queryFn: () => healthApi.getHealth(),
    staleTime: 0, // 항상 최신 데이터로 간주
    refetchInterval: 30 * 1000, // 30초마다 자동 refetch
    refetchOnMount: true, // 마운트 시 항상 refetch
    refetchOnWindowFocus: true, // 윈도우 포커스 시 refetch
    refetchOnReconnect: true, // 네트워크 재연결 시 refetch
  });
}

