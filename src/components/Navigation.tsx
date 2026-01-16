"use client";

import { useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import Menu from "./Menu";

export default function Navigation() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <button
              className="opacity-100 hover:opacity-70 transition-opacity"
              aria-label="한국어 (현재 선택됨)"
            >
              KR
            </button>
            <span className="opacity-50">/</span>
            <button
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            className="hover:opacity-70 transition-opacity flex items-center justify-center w-8 h-8 rounded-full border border-white/20 focus-visible:ring-2 focus-visible:ring-white/50 focus:outline-none"
            onClick={toggleDarkMode}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            <span className="material-symbols-outlined text-sm">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto group flex flex-col items-end gap-1.5 p-2 focus-visible:ring-2 focus-visible:ring-white/50 focus:outline-none rounded"
          aria-label="메뉴 열기"
          aria-expanded={isMenuOpen}
        >
          <span className="block w-8 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-white group-hover:w-8 transition-all duration-300"></span>
        </button>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

