"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-40 lg:hidden"
    >
      <Link
        href="/fan-wall"
        className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-[0_4px_25px_rgba(244,114,182,0.5)] hover:from-pink-600 hover:to-rose-600 transition-all hover:scale-105 active:scale-95 border border-pink-300/30"
      >
        <span className="text-lg animate-pulse">💌</span>
        <span className="text-sm font-bold tracking-wide">Leave a Message</span>
      </Link>
    </motion.div>
  );
}
