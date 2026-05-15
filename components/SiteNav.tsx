"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, TELEGRAM_GAME_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "游戏特色", href: "#features" },
  { label: "社交互动", href: "#social-feature" },
  { label: "NFT 商城", href: "#nft-showcase" },
  { label: "如何开始", href: "#how-to-play" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-green-800/30 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 shadow-md shadow-green-900/15 md:block">
      <nav className="site-container flex h-[4.25rem] items-center justify-between lg:h-[4.75rem]">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src={LOGO_SRC}
            alt="FarmTG"
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg object-cover shadow-sm ring-2 ring-white/30 lg:h-10 lg:w-10"
          />
          <span className="text-lg font-semibold tracking-tight text-white lg:text-xl">
            农场庄园
          </span>
        </Link>

        <ul className="flex items-center gap-8 text-[0.9375rem] font-medium text-white/90">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={TELEGRAM_GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-50"
        >
          立即开玩
        </a>
      </nav>
    </header>
  );
}
