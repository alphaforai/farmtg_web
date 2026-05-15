import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export function HowToPlay() {
  const steps = [
    {
      number: '1',
      title: '打开游戏',
      description: '点击按钮访问',
      icon: '📱',
      color: '#6ba83d'
    },
    {
      number: '2',
      title: '种植收获',
      description: '获得金币',
      icon: '🌾',
      color: '#ffd966'
    },
    {
      number: '3',
      title: '偷菜社交',
      description: '好友互动',
      icon: '👥',
      color: '#ffb347'
    },
    {
      number: '4',
      title: 'NFT兑换',
      description: '金币换NFT',
      icon: '💎',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="how-to-play" className="site-section !py-0 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#6ba83d] via-[#ffd966] to-[#ffb347]"
        aria-hidden
      />

      <div className="site-container py-20 sm:py-28 lg:py-32">
        <SectionHeader
          eyebrow="Get Started"
          title="如何开始"
          description="只需简单几步，即可在 Telegram 开启你的农场之旅"
          className="max-w-3xl"
        />

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-white/40 text-center h-full flex flex-col relative overflow-hidden group active:scale-95 transition-transform shadow-lg"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* 脉冲效果 */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: step.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 0.1, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />

                  <motion.div
                    className="text-5xl sm:text-6xl mb-3 sm:mb-4 inline-block"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.div
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full mb-3 sm:mb-4 mx-auto relative z-10 shadow-lg"
                  >
                    <span className="text-lg sm:text-xl font-semibold">{step.number}</span>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-[#2d5016] relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6b7b5a] relative z-10">
                    {step.description}
                  </p>

                  {/* 底部装饰条 */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-green-500 to-emerald-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </motion.div>

                {/* 箭头动画 */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-green-600 z-10"
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
