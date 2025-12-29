"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const { isDark, toggleDarkMode } = useDarkMode();

  const menuItems = [
    { label: "Home", labelKo: "홈", href: "#", number: "01" },
    // { label: "About", labelKo: "소개", href: "#about", number: "02" },
    { label: "Gallery", labelKo: "갤러리", href: "#gallery", number: "02" },
    { label: "Templates", labelKo: "템플릿", href: "#templates", number: "03" },
    { label: "Contact", labelKo: "문의", href: "#contact", number: "04" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Background Context - Blurred page behind */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none opacity-20 blur-sm z-0"
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 dark:border-[#243047] px-10 py-4">
            <div className="flex items-center gap-4">
              <div className="size-6 bg-slate-900 dark:bg-white rounded-full"></div>
              <h2 className="text-lg font-bold">MINI home</h2>
            </div>
          </header>
          <div className="flex flex-1 justify-center items-center">
            <div className="text-center space-y-4">
              <h1 className="text-8xl font-bold opacity-10">MINIMAL</h1>
              <div className="w-32 h-32 bg-gradient-to-tr from-primary to-purple-500 rounded-full mx-auto opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Overlay */}
      <div className="fixed inset-0 z-50 flex flex-col bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl animate-fadeIn">
        {/* Header: Logo & Close Button */}
        <div className="w-full px-6 md:px-12 py-6 flex items-center justify-between mx-auto box-border border-b border-transparent dark:border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3 text-slate-900 dark:text-white opacity-0 animate-[fadeIn_0.5s_0.2s_forwards]">
            <div className="size-8 flex items-center justify-center text-primary">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">MINI home</span>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="group flex items-center justify-center size-12 rounded-lg border border-slate-200 dark:border-[#344465] bg-white dark:bg-[#1a2433] hover:bg-primary hover:border-primary dark:hover:bg-primary dark:hover:border-primary transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-slate-900 dark:text-white text-2xl group-hover:text-white group-hover:rotate-90 transition-all duration-300">
              close
            </span>
          </button>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex items-center justify-center w-full overflow-y-auto py-10">
          <nav className="flex flex-col items-center w-full max-w-4xl px-4">
            <ul className="flex flex-col items-center lg:items-start gap-2 w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="group w-full flex justify-center lg:justify-start opacity-0 animate-[slideUp_0.5s_0.1s_forwards]"
                  style={{
                    animationDelay: `${(index + 1) * 0.1}s`,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="relative flex items-baseline gap-6 py-2 px-4 -mx-4 rounded-xl transition-all duration-300 group-hover:translate-x-4"
                  >
                    <span className="text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      {item.number}
                    </span>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xl md:text-2xl font-normal text-slate-400 dark:text-slate-600 group-hover:text-primary transition-colors duration-300">
                      {item.labelKo}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer: Utilities & Info */}
        <div className="w-full px-6 md:px-12 py-8 border-t border-slate-200 dark:border-white/10 opacity-0 animate-[fadeIn_0.5s_0.6s_forwards]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
            {/* Toggles Area */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
              {/* Language Switcher */}
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-slate-400 text-xl mr-2">
                  language
                </span>
                <div className="flex items-center bg-slate-100 dark:bg-[#1a2433] rounded-lg p-1 border border-slate-200 dark:border-[#344465]">
                  <button className="px-4 py-1.5 rounded text-xs font-bold bg-white dark:bg-[#344465] text-primary shadow-sm transition-all">
                    KR
                  </button>
                  <button className="px-4 py-1.5 rounded text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    EN
                  </button>
                </div>
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
              {/* Theme Switcher */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1a2433] transition-colors group"
              >
                <div className="relative size-5">
                  <span
                    className={`material-symbols-outlined text-xl absolute inset-0 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                      isDark ? "scale-0" : "scale-100"
                    }`}
                  >
                    light_mode
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl absolute inset-0 text-primary transition-transform duration-300 ${
                      isDark ? "scale-100" : "scale-0"
                    }`}
                  >
                    dark_mode
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                  Dark Mode
                </span>
                {/* Toggle Switch Graphic */}
                <div className="w-8 h-4 bg-slate-300 dark:bg-primary/30 rounded-full relative ml-2">
                  <div
                    className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white dark:bg-primary rounded-full shadow-sm transition-transform duration-300 ${
                      isDark ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </button>
            </div>
            {/* Contact & Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex gap-6">
                <a
                  href="mailto:hello@minihome.kr"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                    mail
                  </span>
                  <span>hello@minihome.kr</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                    photo_camera
                  </span>
                  <span>Instagram</span>
                </a>
              </div>
              <p className="text-xs opacity-60 font-medium">© 2024 MINI home.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
