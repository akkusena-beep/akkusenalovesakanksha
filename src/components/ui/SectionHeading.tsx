"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: "rose" | "gold";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent = "rose",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${accent === "rose" ? "text-rose" : "text-gold"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-[2px] w-16 ${
          accent === "rose"
            ? "bg-gradient-to-r from-rose to-transparent"
            : "bg-gradient-to-r from-gold to-transparent"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
