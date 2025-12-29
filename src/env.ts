import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * 서버 측에서 접근 가능한 환경 변수
   */
  server: {
    API_URL: z.string().url().default("https://api.minihome.page"),
  },
  /**
   * 클라이언트 측에서 접근 가능한 환경 변수 (NEXT_PUBLIC_ 접두사 필요)
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default("https://minihome.page"),
    NEXT_PUBLIC_API_URL: z.string().url().optional().default("/api"),
  },
  /**
   * 런타임에서 접근 가능한 환경 변수
   */
  runtimeEnv: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  /**
   * 빌드 타임에 환경 변수 검증
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

