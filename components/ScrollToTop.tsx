"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let visible = false;

    const updateVisibility = () => {
      frame = 0;
      const next = window.scrollY > 300;
      if (next !== visible) {
        visible = next;
        setIsVisible(next);
      }
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="回到顶部"
          className="fixed bottom-4 right-4 z-50 rounded-full border-2 border-white/40 bg-gradient-to-br from-green-500 to-emerald-600 p-3 text-white shadow-xl shadow-green-500/40 transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 sm:p-4"
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 24 }}
          transition={{ duration: 0.25 }}
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
