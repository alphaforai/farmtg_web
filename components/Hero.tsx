"use client";

import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { HeroCodeTerminal } from "./HeroCodeTerminal";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { TELEGRAM_GAME_URL } from "@/lib/constants";

const FLOATING_CROPS = [
  { emoji: "🌻", x: "6%", duration: 4.5, delay: 0 },
  { emoji: "🌾", x: "18%", duration: 5.0, delay: 1.1 },
  { emoji: "🍅", x: "30%", duration: 4.2, delay: 2.3 },
  { emoji: "🥕", x: "42%", duration: 4.8, delay: 0.6 },
  { emoji: "🌽", x: "54%", duration: 4.4, delay: 1.8 },
  { emoji: "🥔", x: "66%", duration: 5.2, delay: 2.9 },
  { emoji: "🍆", x: "78%", duration: 4.6, delay: 1.4 },
  { emoji: "🌶️", x: "90%", duration: 4.3, delay: 3.2 },
  { emoji: "🫑", x: "24%", duration: 5.4, delay: 3.8 },
  { emoji: "🥬", x: "48%", duration: 4.9, delay: 0.3 },
  { emoji: "🍠", x: "72%", duration: 5.1, delay: 2.1 },
  { emoji: "🌿", x: "84%", duration: 4.7, delay: 4.0 },
] as const;

const STATS = [
  { value: "0 门槛", label: "免费畅玩" },
  { value: "1 键", label: "Telegram 即开" },
  { value: "∞", label: "社交与 NFT" },
] as const;

function FloatingCrops() {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {FLOATING_CROPS.map((item, index) => (
        <span
          key={`${item.emoji}-${index}`}
          className="ambient-float absolute text-4xl opacity-30 sm:text-5xl"
          style={
            {
              left: item.x,
              top: "-8%",
              "--float-duration": `${item.duration}s`,
              "--float-delay": `${item.delay}s`,
            } as React.CSSProperties
          }
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <AmbientGlow className="top-0 left-[5%] h-96 w-96 bg-gradient-to-br from-green-400 to-emerald-500" />
        <AmbientGlow
          className="bottom-0 right-[5%] h-96 w-96 bg-gradient-to-br from-purple-400/80 to-pink-400/60"
          style={{ animationDuration: "12s" }}
        />
      </div>

      <FloatingCrops />

      <div className="site-container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="site-eyebrow">Telegram Mini App · FarmTG</span>

          <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.12] tracking-tight text-[#1e3a0f] sm:text-5xl lg:text-6xl xl:text-7xl">
            在 Telegram 上
            <br />
            经营你的
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              梦幻农场
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5a6b4a] sm:mt-8 sm:text-xl lg:text-[1.35rem] lg:leading-relaxed">
            种植收获、偷菜社交、NFT 变现——经典农场玩法，零门槛即开即玩
          </p>

          <div className="mt-10 flex flex-row items-stretch justify-center gap-3 sm:items-center sm:gap-4">
            <a
              href={TELEGRAM_GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn-primary min-w-0 flex-1 !px-4 !py-3 text-sm sm:flex-none sm:w-auto sm:!px-8 sm:!py-3.5 sm:text-base"
            >
              立即开玩
            </a>
            <a
              href="#features"
              className="site-btn-secondary min-w-0 flex-1 !px-4 !py-3 text-sm sm:flex-none sm:w-auto sm:!px-8 sm:!py-3.5 sm:text-base"
            >
              了解特色
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-green-900/10 pt-10 sm:mt-16 sm:gap-8">
            {STATS.map((stat) => (
              <motion.div key={stat.label} className="text-center">
                <dt className="text-xl font-bold text-[#2d5016] sm:text-2xl lg:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[#6b7b5a] sm:text-sm">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 w-full max-w-6xl sm:mt-16 lg:mt-20 lg:max-w-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        >
          <HeroCodeTerminal />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fffef5] to-transparent"
        aria-hidden
      />
    </section>
  );
}
