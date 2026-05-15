"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const HeroFarmModel = dynamic(
  () => import("./HeroFarmModel").then((m) => ({ default: m.HeroFarmModel })),
  {
    ssr: false,
    loading: () => (
      <div className="hero-farm-model flex items-center justify-center">
        <span className="font-mono text-xs text-[#6b7b5a]">加载农场模型…</span>
      </div>
    ),
  },
);

function Prompt() {
  return (
    <>
      <span className="text-green-700">farmer@farmtg</span>
      <span className="text-[#4a6b2f]">:</span>
      <span className="text-cyan-800">~</span>
      <span className="text-[#4a6b2f]">$ </span>
    </>
  );
}

function CodeBlock() {
  return (
    <pre className="font-mono text-left text-sm leading-relaxed md:text-base">
      <code>
        <span className="text-[#6b7b5a]">{"// farmtg@telegram — boot"}</span>
        {"\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg login --telegram</span>
        {"\n"}
        <span className="text-green-700">✓ connected to Telegram Mini App</span>
        {"\n\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg plant </span>
        <span className="text-violet-700">--crop</span>{" "}
        <span className="text-emerald-700">sunflower</span>
        {"\n"}
        <span className="text-green-700">✓ planted sunflower (slot 1/12)</span>
        {"\n\n"}
        <span className="text-[#6b7b5a]">{"// 🔥 偷菜社交"}</span>
        {"\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg visit </span>
        <span className="text-violet-700">--friend</span>{" "}
        <span className="text-emerald-700">0xF4RM...TG</span>
        {"\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg steal </span>
        <span className="text-violet-700">--crop</span>{" "}
        <span className="text-emerald-700">tomato</span>
        {"\n"}
        <span className="text-amber-700">🥷 stolen: +120 gold</span>
        {"\n\n"}
        <span className="text-[#6b7b5a]">{"// 💎 NFT 商城"}</span>
        {"\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg shop redeem \</span>
        {"\n"}
        {"  "}
        <span className="text-violet-700">--gold</span>{" "}
        <span className="text-amber-700">5000</span>{" "}
        <span className="text-violet-700">--item</span>{" "}
        <span className="text-emerald-700">Telegram_Gift_NFT</span>
        {"\n"}
        <span className="text-green-700">✓ redemption queued</span>
        {"\n\n"}
        <Prompt />
        <span className="text-[#2d5016]">farmtg status</span>
        {"\n"}
        <span className="text-[#6b7b5a]">
          balance: 12840 gold | friends: 42 online
        </span>
        {"\n"}
        <Prompt />
        <span className="text-emerald-600 animate-pulse">▌</span>
      </code>
    </pre>
  );
}

export function HeroCodeTerminal() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/60 bg-white/40 text-left shadow-2xl shadow-green-900/8 backdrop-blur-sm sm:rounded-3xl"
      role="region"
      aria-label="农场游戏 Shell 终端与 3D 农场模型"
    >
      <div className="flex items-center gap-2 border-b border-white/40 bg-white/50 px-3 py-2.5 backdrop-blur-sm sm:px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" aria-hidden />
        <span className="ml-2 flex-1 truncate font-mono text-xs text-[#6b7b5a]">
          ~/farmtg — bash
        </span>
        <span className="font-mono text-xs text-green-700/80">● live</span>
      </div>

      <div className="hero-terminal-body relative flex flex-row items-stretch overflow-hidden">
        <div
          className={`hero-code-viewport min-w-0 flex-1 px-3 sm:px-5 ${
            reducedMotion ? "hero-code-viewport--scrollable" : ""
          }`}
        >
          {!reducedMotion && (
            <>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#f5f0ff] via-[#f5f0ff]/80 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-[#eef4ff] via-[#eef4ff]/80 to-transparent"
                aria-hidden
              />
            </>
          )}

          <div className={`py-3 ${reducedMotion ? "" : "hero-code-track"}`}>
            <div className="hero-code-scroll-item">
              <CodeBlock />
            </div>
            {!reducedMotion && (
              <div className="hero-code-scroll-item" aria-hidden>
                <CodeBlock />
              </div>
            )}
          </div>
        </div>

        <div className="relative shrink-0 w-[44%] min-w-[9rem] max-w-[13rem] sm:w-80 sm:min-w-[20rem] sm:max-w-[26rem] md:w-96 lg:w-[28rem] lg:max-w-[30rem] xl:w-[34rem] xl:max-w-[36rem]">
          <HeroFarmModel />
        </div>
      </div>
    </div>
  );
}
