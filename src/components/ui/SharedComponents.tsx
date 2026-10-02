"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  label?: string;
  children?: React.ReactNode;
  variant?: "rose" | "gold" | "muted" | "outline" | "default" | "surface";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ label, children, variant = "muted", size = "sm", className = "" }: BadgeProps) {
  const resolvedVariant = (variant === "default" || variant === "surface") ? "muted" : variant;
  const variantStyles = {
    rose: "bg-pink-100 text-pink-700 border-pink-200/80 shadow-sm",
    gold: "bg-rose-100 text-rose-700 border-rose-200/80 shadow-sm",
    muted: "bg-pink-50/80 text-pink-900 border-pink-200/60",
    outline: "bg-transparent text-pink-800 border-pink-300/60",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold ${variantStyles[resolvedVariant]} ${sizeStyles[size]} ${className}`}
    >
      {label || children}
    </span>
  );
}

interface SourceTagProps {
  tag?: "Publicly Stated" | "Media-Reported" | "Verified Source" | "Fan Speculation";
  source?: string;
  type?: string;
  className?: string;
}

export function SourceTag({ tag, source, type, className = "" }: SourceTagProps) {
  const resolvedTag = tag || type || source || "Verified Source";
  const colors: Record<string, string> = {
    "Publicly Stated": "text-emerald-700 bg-emerald-50 border-emerald-200/80",
    "Media-Reported": "text-sky-700 bg-sky-50 border-sky-200/80",
    "Verified Source": "text-pink-700 bg-pink-50 border-pink-200/80",
    "Fan Speculation": "text-amber-700 bg-amber-50 border-amber-200/80",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border font-medium ${colors[resolvedTag] || colors["Verified Source"]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {resolvedTag}
    </span>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white border border-pink-200/80 shadow-md shadow-pink-500/5 rounded-2xl overflow-hidden ${
        hover
          ? "hover:border-pink-400/80 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-rose mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted text-base max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-rose to-transparent"
        />
      </div>
    </section>
  );
}
