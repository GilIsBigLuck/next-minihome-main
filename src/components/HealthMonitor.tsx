"use client";

import { useHealth } from "@/hooks/queries/useHealth";
import { useEffect } from "react";

/**
 * Health API를 항상 호출하는 모니터 컴포넌트
 * UI에 표시되지 않지만 백그라운드에서 지속적으로 health를 체크합니다.
 */
export default function HealthMonitor() {
  const { data, isLoading, error } = useHealth();

  useEffect(() => {
    if (data) {
      console.log("Health Status:", data);
    }
    if (error) {
      console.error("Health Check Error:", error);
    }
  }, [data, error]);

  // UI에 표시하지 않음 (백그라운드 모니터링만 수행)
  return null;
}

