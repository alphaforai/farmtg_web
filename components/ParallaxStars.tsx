const STARS = [
  { left: "10%", top: "8%", size: "1.75rem" },
  { left: "22%", top: "28%", size: "1.25rem" },
  { left: "35%", top: "48%", size: "1.5rem" },
  { left: "72%", top: "18%", size: "1.4rem" },
  { left: "84%", top: "38%", size: "1.85rem" },
  { left: "92%", top: "58%", size: "1.2rem" },
] as const;

export function ParallaxStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute opacity-15 select-none"
          style={{
            left: star.left,
            top: star.top,
            fontSize: star.size,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
