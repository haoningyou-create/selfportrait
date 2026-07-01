import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "尤浩宁 · Haoning You",
  description:
    "香港中文大学 × 港中深 2+2 联合培养 · IDA × MKT 双学位 · 全栈开发 & AI 策略仿真作品集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
