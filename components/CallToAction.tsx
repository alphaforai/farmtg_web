import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { TELEGRAM_GAME_URL } from "@/lib/constants";

export function CallToAction() {
  const badges = [
    { icon: '🆓', text: '完全免费' },
    { icon: '⚡', text: '点击即玩' },
    { icon: '🎮', text: '简单有趣' },
    { icon: '👥', text: '社交互动' },
    { icon: '💎', text: 'NFT商城' }
  ];

  return (
    <section className="site-section relative overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"></div>
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <AmbientGlow className="top-0 left-0 h-64 w-64 bg-white/80" />
        <AmbientGlow
          className="bottom-0 right-0 h-80 w-80 bg-[#ffd966]/80"
          style={{ animationDuration: "10s" }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            准备好开始了吗？
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            偷菜社交 + NFT 变现，在 Telegram 一键开玩
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <motion.a
              href={TELEGRAM_GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white px-10 py-4 text-lg font-semibold text-green-700 shadow-2xl shadow-black/10 transition-transform active:scale-[0.98] sm:w-auto sm:py-5 sm:text-xl"
            >
              {/* 按钮闪光效果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              <motion.span
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
              >
                🚜
              </motion.span>
              <span className="relative z-10">立即开始游戏</span>
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-white/30 bg-white/15 px-5 py-3 backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {/* 闪烁边框 */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 255, 0)',
                      '0 0 20px rgba(255, 255, 255, 0.5)',
                      '0 0 0px rgba(255, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                <motion.div
                  className="text-2xl sm:text-3xl mb-1"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {badge.icon}
                </motion.div>
                <div className="text-xs sm:text-sm opacity-90">{badge.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
