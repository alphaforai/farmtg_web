import { motion } from "motion/react";
import { AmbientGlow } from "./AmbientGlow";
import { SectionHeader } from "./SectionHeader";

const SOCIAL_ACTIONS = [
  { icon: "🤝", title: "添加好友", description: "好友自动同步" },
  { icon: "🚶", title: "访问农场", description: "拜访好友农场" },
  { icon: "🥷", title: "偷菜偷果", description: "偷取成熟作物" },
  { icon: "🛡️", title: "守护农场", description: "保护劳动成果" },
] as const;

const STEAL_FEATURES = [
  { title: "访问农场", description: "查看作物成熟情况" },
  { title: "偷取果实", description: "偷取部分成熟收获" },
  { title: "互帮互助", description: "除虫浇水得奖励" },
  { title: "防偷机制", description: "及时收获防被偷" },
] as const;

const SOCIAL_PERKS = [
  "好友排行榜",
  "偷菜达人排名",
  "财富榜单",
  "互送礼物",
] as const;

export function SocialFeature() {
  return (
    <section id="social-feature" className="site-section !py-0 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <AmbientGlow className="top-20 left-10 h-72 w-72 bg-gradient-to-br from-pink-500 to-rose-500 sm:h-96 sm:w-96" />
        <AmbientGlow
          className="bottom-20 right-10 h-72 w-72 bg-gradient-to-br from-purple-500 to-blue-500 sm:h-96 sm:w-96"
          style={{ animationDuration: "11s" }}
        />
      </div>

      <div className="site-container relative z-10 py-20 sm:py-28 lg:py-32">
        <SectionHeader
          eyebrow="Social"
          title="社交互动 · 偷菜玩法"
          description="和好友一起偷菜、互帮互助，重温 QQ 农场的经典乐趣"
          className="max-w-3xl"
        />

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {SOCIAL_ACTIONS.map((action, index) => (
              <motion.article
                key={action.title}
                className="rounded-2xl border border-white/50 bg-white/70 p-6 text-center shadow-lg backdrop-blur-xl sm:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <span className="mb-3 block text-5xl sm:text-6xl" aria-hidden>
                  {action.icon}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">{action.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="rounded-3xl border border-white/50 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 p-8 shadow-xl backdrop-blur-xl sm:p-10 lg:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-purple-700 sm:text-3xl">
                  偷菜系统
                </h3>
                <ul className="space-y-4">
                  {STEAL_FEATURES.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 text-green-600" aria-hidden>
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-pink-700 sm:text-3xl">
                  社交乐趣
                </h3>
                <div className="rounded-2xl border border-white/40 bg-white/55 p-5 sm:p-6">
                  <ul className="space-y-3">
                    {SOCIAL_PERKS.map((perk) => (
                      <li key={perk} className="font-medium text-gray-800">
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-amber-300/50 bg-amber-50/80 p-5 text-center">
                  <p className="text-lg font-bold text-orange-800">
                    越多好友，越多乐趣
                  </p>
                  <p className="mt-1 text-sm text-orange-700">
                    邀请 Telegram 好友一起玩，获得额外奖励
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
