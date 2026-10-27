import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "노현희 | 1인 기업 컨설턴트 전문가 (missno)",
  description: "실무와 일상에 바로 쓰는 맞춤형 생성형 AI 활용법을 전합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
