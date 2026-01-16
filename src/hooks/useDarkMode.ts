"use client";

import { useEffect, useState, useCallback } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  // 마운트 시 DOM에서 현재 다크모드 상태 읽기
  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", String(newValue));

      if (newValue) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";
      }

      return newValue;
    });
  }, []);

  return { isDark, toggleDarkMode };
}

