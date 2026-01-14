import type { NextConfig } from "next";
import { env } from "./src/env";

// 빌드 타임에 환경 변수 검증
env;

const nextConfig: NextConfig = {
  images: {
    // 외부 이미지 도메인 허용 (R2 스토리지 등)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.r2.cloudflarestorage.com",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pub-*.r2.dev",
      },
      // R2 커스텀 도메인 (필요시 추가)
      {
        protocol: "https",
        hostname: "*.minihome.page",
      },
    ],
  },
};

export default nextConfig;
