import Image from "next/image";
import { LOGO_SRC, TELEGRAM_GAME_URL } from "@/lib/constants";

type SiteLogoProps = {
  className?: string;
  showLabel?: boolean;
};

export function SiteLogo({ className = "", showLabel = false }: SiteLogoProps) {
  return (
    <a
      href={TELEGRAM_GAME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="在 Telegram 中打开农场游戏"
      className={`inline-flex items-center gap-2 rounded-2xl border-2 border-white/50 bg-white/80 p-1.5 shadow-md shadow-green-500/15 backdrop-blur-sm transition-transform hover:scale-[1.02] active:scale-95 ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt="TG Farm"
        width={120}
        height={120}
        className="h-10 w-10 rounded-xl object-cover sm:h-11 sm:w-11"
        priority
      />
      {showLabel && (
        <span className="pr-1 text-sm font-semibold text-[#2d5016] sm:text-base">
          梦幻农场
        </span>
      )}
    </a>
  );
}
