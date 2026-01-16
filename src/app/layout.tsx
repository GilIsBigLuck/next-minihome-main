import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import DialogProvider from "@/providers/DialogProvider";
import HealthMonitor from "@/components/HealthMonitor";

const SITE_URL = "https://minihome.page";
const SITE_NAME = "MINI home";
const SITE_DESCRIPTION = "작지만 완전한, 당신만의 웹 공간을 만듭니다. 다양한 라이프스타일과 취향을 반영한 맞춤형 웹사이트 제작 서비스.";

export const metadata: Metadata = {
  // 기본 메타데이터
  title: {
    default: `${SITE_NAME} - Web Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["웹사이트 제작", "웹 에이전시", "포트폴리오", "템플릿", "맞춤형 웹사이트", "미니홈"],

  // Open Graph (카카오톡, 페이스북 공유)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Web Agency`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Web Agency`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },

  // 기타 메타데이터
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "구글_서치콘솔_인증코드",
    // other: { "naver-site-verification": "네이버_인증코드" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var darkMode = localStorage.getItem('darkMode');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = darkMode === 'true' || (darkMode === null && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body transition-colors duration-500 antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
        <QueryProvider>
          <DialogProvider>
            <HealthMonitor />
            {children}
          </DialogProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
