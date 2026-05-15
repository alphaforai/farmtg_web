import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { TELEGRAM_GAME_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 sm:py-20">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-green-900"></div>

      {/* 装饰性背景 */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <AmbientGlow className="top-0 left-0 h-64 w-64 bg-gradient-to-br from-green-400 to-emerald-500" />
        <AmbientGlow
          className="bottom-0 right-0 h-64 w-64 bg-gradient-to-br from-yellow-400 to-amber-500"
          style={{ animationDuration: "11s" }}
        />
      </div>

      <div className="site-container relative z-10 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              梦幻农场 · FarmTG
            </h3>
            <p className="text-white/75">在 Telegram 上体验经典农场游戏</p>
          </motion.div>

          {/* 社交媒体链接 */}
          <motion.div
            className="mt-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/80 mb-4 text-sm text-center sm:text-left">关注我们</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-sm max-w-4xl">
              {/* X (Twitter) */}
              <a
                href="https://x.com/farmtg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                X (Twitter): @farmtg
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/farmtg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                Facebook: facebook.com/farmtg
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/farmtg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                Instagram: @farmtg
              </a>

              {/* Telegram */}
              <a
                href={TELEGRAM_GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                Telegram: t.me/farmtg
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@farmtg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                YouTube: @farmtg
              </a>

              {/* Email */}
              <a
                href="mailto:contact@farmtg.com"
                className="text-white/70 hover:text-white transition-colors text-center sm:text-left"
              >
                Email: contact@farmtg.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-white/20 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/70 text-sm">
              © 2026 农场庄园. 所有权利保留
            </p>
            <p className="text-white/70 text-sm mt-2">
              本游戏在Telegram平台上运行
            </p>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href={TELEGRAM_GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📲
              </motion.span>
              <span>访问游戏</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
