"use client";

import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { SectionHeader } from "./SectionHeader";

const FEATURES = [
  {
    icon: "👥",
    title: "社交互动",
    description: "好友偷菜、互帮互助",
    gradient: "from-pink-500 to-rose-500",
    highlight: true,
  },
  {
    icon: "💎",
    title: "NFT商城",
    description: "金币兑换高价值 NFT",
    gradient: "from-purple-500 to-blue-500",
    highlight: true,
  },
  {
    icon: "🆓",
    title: "完全免费",
    description: "零门槛畅玩",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "⚡",
    title: "点击即玩",
    description: "Telegram 内一键进入",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🎮",
    title: "简单有趣",
    description: "经典农场轻松上手",
    gradient: "from-yellow-500 to-orange-500",
  },
] as const;

type Feature = (typeof FEATURES)[number];

function MarqueeCard({ feature }: { feature: Feature }) {
  return (
    <article
      className={`flex shrink-0 items-center gap-4 rounded-2xl border border-white/60 bg-gradient-to-br ${feature.gradient} px-6 py-5 shadow-lg shadow-black/8 w-[280px] sm:w-[300px]`}
    >
      <span className="text-4xl sm:text-5xl" aria-hidden>
        {feature.icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-lg font-semibold text-white sm:text-xl">
            {feature.title}
          </h3>
          {"highlight" in feature && feature.highlight && (
            <span className="shrink-0 rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold text-white">
              热门
            </span>
          )}
        </div>
        <p className="truncate text-sm text-white/90 sm:text-base">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly Feature[];
  direction: "left" | "right";
}) {
  const trackClass =
    direction === "left" ? "features-marquee-left" : "features-marquee-right";

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-hidden
    >
      <div className={`flex w-max gap-5 ${trackClass}`}>
        {[...items, ...items].map((feature, index) => (
          <MarqueeCard key={`${direction}-${feature.title}-${index}`} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function FeaturesMarquee() {
  const reversed = [...FEATURES].reverse();

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <MarqueeRow items={FEATURES} direction="left" />
      <MarqueeRow items={reversed} direction="right" />
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="site-section">
      <AmbientGlow className="-top-24 left-1/4 h-72 w-72 bg-pink-400/25" />
      <AmbientGlow
        className="-bottom-24 right-1/4 h-80 w-80 bg-purple-400/25"
        style={{ animationDuration: "10s" }}
      />

      <div className="site-container relative z-10">
        <SectionHeader
          eyebrow="Features"
          title="游戏特色"
          description="偷菜社交与 NFT 变现，在 Telegram 上重温经典农场乐趣"
          className="max-w-3xl"
        />

        <FeaturesMarquee />

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {["完全免费", "点击即玩", "社交互动", "NFT 商城"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-500/25 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#2d5016] shadow-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
