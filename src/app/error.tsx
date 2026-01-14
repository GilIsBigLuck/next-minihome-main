"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // TODO: 에러 로깅 서비스 연동 (Sentry 등)
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#141414] px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">:(</div>
        <h1 className="text-2xl font-bold mb-4">문제가 발생했습니다</h1>
        <p className="text-gray-500 mb-8">
          일시적인 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          다시 시도
        </button>
      </div>
    </main>
  );
}
