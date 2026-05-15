type AmbientGlowProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function AmbientGlow({ className = "", style }: AmbientGlowProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-25 ambient-pulse ${className}`}
      style={style}
      aria-hidden
    />
  );
}
