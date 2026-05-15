"use client";

import { motion } from "motion/react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.header
      className={`mb-14 sm:mb-16 lg:mb-20 max-w-3xl ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow && <span className="site-eyebrow">{eyebrow}</span>}
      <h2 className="site-heading mt-5">{title}</h2>
      {description && (
        <p className="site-subheading mt-5 max-w-2xl">{description}</p>
      )}
    </motion.header>
  );
}
