import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

/**
 * 서버 컴포넌트에서 사용할 QueryClient
 * React cache를 사용하여 요청당 하나의 인스턴스 보장
 */
export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1분
        },
      },
    })
);
