import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { SectionHeader } from "./SectionHeader";

export function NFTShowcase() {
  const nftItems = [
    {
      icon: '🎁',
      name: 'Telegram NFT礼物',
      description: '典藏版NFT礼物套装',
      rarity: '稀有',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '😎',
      name: 'Plush Pepe NFT',
      description: '高价值收藏NFT',
      rarity: '传说',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📱',
      name: '+888 靓号',
      description: 'Telegram专属靓号',
      rarity: '史诗',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: '🆔',
      name: '用户ID',
      description: 'Telegram专属ID',
      rarity: '史诗',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: '🌟',
      name: 'Telegram星星',
      description: '平台专属星星奖励',
      rarity: '稀有',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '👑',
      name: 'VIP会员',
      description: '年费/月费VIP特权',
      rarity: '传说',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const rarityColors: { [key: string]: string } = {
    '稀有': 'bg-blue-500',
    '史诗': 'bg-purple-500',
    '传说': 'bg-orange-500'
  };

  return (
    <section id="nft-showcase" className="site-section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <AmbientGlow className="top-20 left-10 h-80 w-80 max-w-[90vw] bg-gradient-to-br from-purple-500 to-pink-500" />
        <AmbientGlow
          className="bottom-20 right-10 h-80 w-80 max-w-[90vw] bg-gradient-to-br from-blue-500 to-cyan-500"
          style={{ animationDuration: "11s" }}
        />
      </div>

      <div className="site-container relative z-10">
        <SectionHeader
          eyebrow="NFT Marketplace"
          title="NFT 商城 · 兑换高价值资产"
          description="用游戏金币兑换 Telegram NFT、靓号与 VIP 等稀缺权益"
          className="max-w-3xl"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {nftItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* NFT卡片 */}
              <motion.div
                className={`backdrop-blur-md bg-gradient-to-br ${item.color} p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-white/30 relative overflow-hidden cursor-pointer active:scale-95 transition-transform`}
              >
                {/* 光效 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* 稀有度标签 */}
                <div className="absolute top-3 right-3">
                  <span className={`${rarityColors[item.rarity]} text-white text-xs px-2 py-1 rounded-full shadow-lg`}>
                    {item.rarity}
                  </span>
                </div>

                {/* 图标 */}
                <motion.div
                  className="text-6xl sm:text-7xl mb-4 text-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* 信息 */}
                <div className="text-center text-white relative z-10">
                  <h3 className="text-lg sm:text-xl mb-2">{item.name}</h3>
                  <p className="text-sm sm:text-base opacity-90">{item.description}</p>
                </div>

                {/* 闪光边框 */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255, 255, 255, 0)',
                      '0 0 40px rgba(255, 255, 255, 0.5)',
                      '0 0 20px rgba(255, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>

              {/* 装饰星星 */}
              <motion.div
                className="absolute -top-2 -right-2 text-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 底部说明 */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-white/40 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xl shadow-purple-500/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">💰</span>
              <h3 className="text-xl sm:text-2xl text-purple-700 font-semibold">如何获得金币？</h3>
            </div>
            <p className="text-base sm:text-lg text-gray-800 font-medium">
              种植农作物 → 收获果实 → 出售获得金币 → 兑换TON或NFT奖励
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-3">
              稀有作物价值更高，收益更多！
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
