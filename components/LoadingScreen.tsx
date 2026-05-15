"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOGO_SRC } from "@/lib/constants";

const SESSION_KEY = "farmtg-visited";

export function LoadingScreen() {
  // 首屏固定为 true，避免 SSR 读不到 sessionStorage 而与客户端 hydration 不一致
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== null) {
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="flex flex-col items-center text-center text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={LOGO_SRC}
              alt="TG Farm"
              width={160}
              height={160}
              className="mb-4 h-28 w-28 rounded-2xl object-cover shadow-lg sm:h-32 sm:w-32"
              priority
            />
            <h2 className="mb-4 text-2xl font-medium sm:text-3xl">农场庄园</h2>
            <motion.div
              className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/25"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
