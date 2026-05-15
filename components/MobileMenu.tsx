import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { TELEGRAM_GAME_URL } from "@/lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '游戏特色', href: '#features' },
    { label: '社交互动', href: '#social-feature' },
    { label: 'NFT商城', href: '#nft-showcase' },
    { label: '如何开始', href: '#how-to-play' },
  ];

  return (
    <motion.div className="fixed left-4 top-[max(1rem,env(safe-area-inset-top))] z-50 md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/70 backdrop-blur-xl p-3 rounded-full shadow-xl shadow-green-500/30 border-2 border-white/50"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-[#6ba83d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#6ba83d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-green-600/95 to-emerald-600/95 backdrop-blur-2xl z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              className="flex flex-col gap-6 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-white text-2xl py-3 px-6 rounded-full bg-white/15 backdrop-blur-xl border-2 border-white/40 active:bg-white/25 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href={TELEGRAM_GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 text-2xl py-3 px-6 rounded-full bg-white/95 backdrop-blur-xl active:bg-white border-2 border-white/50 mt-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                🎮 开始游戏
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
