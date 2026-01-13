"use client";

import { useHealth } from "@/hooks/queries/useHealth";

export default function HealthStatus() {
  const { data, isLoading, error } = useHealth();

  if (isLoading) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400">
        서버 상태 확인 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-red-500">
        서버 연결 오류
      </div>
    );
  }

  // API_SPEC: data.data.status, data.message 형식으로 응답
  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      서버 상태: {data?.data?.status} ({data?.message})
    </div>
  );
}

