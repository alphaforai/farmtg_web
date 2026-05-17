import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://farm.w.cm";

const siteTitle = "梦幻农场 - FarmTG";
const siteDescription =
  "在 Telegram 上经营你的梦幻农场，经典农场玩法，即开即玩！";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "FarmTG",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,     // width / height 是告诉 Telegram、微信、Twitter 等爬虫：这张图真实有多大
        height: 630,
        alt: "梦幻农场 FarmTG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-cover.jpg"],
  },
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
