import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "梦幻农场 - FarmTG",
  description:
    "在 Telegram 上体验经典农场游戏：种植收获、偷菜互动、NFT 变现",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className={`${notoSansSC.className} min-h-full`}>{children}</body>
    </html>
  );
}
