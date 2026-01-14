import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#141414] px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-gray-200 dark:text-gray-800 mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
        <p className="text-gray-500 mb-8">
          요청하신 페이지가 존재하지 않거나
          <br />
          이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
