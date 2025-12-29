import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import HealthMonitor from "@/components/HealthMonitor";
import FontLoader from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "MINI home - Web Agency",
  description: "작지만 완전한, 당신만의 웹 공간을 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body transition-colors duration-500 antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
        <FontLoader />
        <QueryProvider>
          <HealthMonitor />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

