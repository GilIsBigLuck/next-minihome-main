import type { NextConfig } from "next";
import { env } from "./src/env";

// 빌드 타임에 환경 변수 검증
env;

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

