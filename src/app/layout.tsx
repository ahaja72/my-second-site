import type { Metadata } from "next";
import { Newsreader, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const serifFont = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-oura-serif",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-oura-sans",
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oura-script",
});

export const metadata: Metadata = {
  title: "missno | 1인 기업 컨설턴트 전문가",
  description: "실무와 일상에 바로 쓰는 맞춤형 생성형 AI 활용법을 전합니다.",
  verification: {
    google: "pJZGK9iisNnJyftLW5hz5liNiJL0s-70GXaU9U1awcg",
    other: {
      "naver-site-verification": "8f5dcfc69deb9a12d17b827253809d12892669e5",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
