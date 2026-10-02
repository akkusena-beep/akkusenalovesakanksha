"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SITE_TAGLINE,
  SOCIAL_LINKS,
  FEATURED_FAN_MESSAGES,
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, Badge } from "@/components/ui/SharedComponents";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Quote,
  MessageSquare,
  Award,
  Film,
} from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HomePage() {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % FEATURED_FAN_MESSAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const loveCards = [
    {
      icon: "🌸",
      title: "Her Radiance & Smile",
      description: "Her smile lights up every screen and every room. Her warmth and effortless grace make her truly unforgettable.",
      tag: "Pure Joy",
    },
    {
      icon: "✨",
      title: "Rooted & Authentic",
      description: "Hailing from Rajasthan, Akanksha stays deeply connected to her heritage while inspiring millions across the nation.",
      tag: "Proud Roots",
    },
    {
      icon: "💖",
      title: "Cherished by AkkuSena",
      description: "A fiercely loyal community that stands by her through every milestone, celebrating her growth and achievements.",
      tag: "AkkuSena Love",
    },
    {
      icon: "👑",
      title: "Grace Under Pressure",
      description: "From pageant crowns to reality TV and headlining lead music videos, she handles every opportunity with poise.",
      tag: "Inspiration",
    },
  ];

  const exploreSections = [
    {
      title: "About Akanksha",
      subtitle: "The girl who dared to dream",
      desc: "Follow Akanksha's inspiring trajectory from her early beginnings to her national success.",
      href: "/about",
      icon: <Sparkles className="w-5 h-5 text-rose" />,
      tag: "Her Story",
    },
    {
      title: "Pageants & Modeling",
      subtitle: "Miss Rajasthan 1st Runner Up & Couture",
      desc: "Explore her pageant crowns, stage presentations, and high-fashion modeling portfolio.",
      href: "/pageants",
      icon: <Award className="w-5 h-5 text-rose" />,
      tag: "Pageantry",
    },
    {
      title: "Music Video Archive",
      subtitle: "EYES, Dooriyan, Nazar Lagi & More",
      desc: "Watch all her official lead music videos, project launches, and media interviews.",
      href: "/videos",
      icon: <Film className="w-5 h-5 text-rose" />,
      tag: "5 Lead MVs",
    },
    {
      title: "Fan Wall & Messages",
      subtitle: "A Dedicated Box of Love Letters",
      desc: "Read messages written by fans worldwide and leave your own sweet note for Akanksha.",
      href: "/fan-wall",
      icon: <Heart className="w-5 h-5 text-rose fill-current" />,
      tag: "AkkuSena Wall",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF5F7] font-[family-name:var(--font-plus-jakarta)] text-[#4A1525] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Glowing Pink Decorative Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-pink-200/60 blur-[90px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full bg-rose-200/50 blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Content Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div variants={fadeInItem} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 shadow-sm text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-rose animate-spin" style={{ animationDuration: '4s' }} />
              <span>THE OFFICIAL AKKUSENA ARCHIVE</span>
              <span className="text-pink-500">💖</span>
            </motion.div>

            <motion.h1 variants={fadeInItem} className="text-4xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] tracking-tight mb-4 text-[#4A1525] leading-tight">
              AKANKSHA <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                CHOUDHARY
              </span>
            </motion.h1>

            <motion.p variants={fadeInItem} className="text-lg sm:text-2xl font-[family-name:var(--font-playfair)] italic text-rose-600 mb-6 font-medium">
              Loved by Millions. Cherished by AkkuSena 🌸
            </motion.p>

            <motion.p variants={fadeInItem} className="text-muted text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to her fan home — a warm, loving space celebrating Akanksha&apos;s journey, achievements, and radiant spirit. Explore her moments and leave your love note!
            </motion.p>

            <motion.div variants={fadeInItem} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link href="/fan-wall" className="px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-md shadow-pink-500/20 active:scale-95 flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 fill-current" /> Send Love Note
              </Link>
              <Link href="/about" className="px-6 py-3.5 rounded-full bg-white border border-pink-200 text-pink-900 font-semibold hover:border-pink-400 hover:bg-pink-50/50 transition-all shadow-sm active:scale-95 flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4 text-pink-500" /> Read Her Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 border-4 border-white ring-1 ring-pink-200 group">
              <img
                src="/images/akanksha-hero.png"
                alt="Akanksha Choudhary"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white drop-shadow-md">
                  Akanksha Choudhary ✨
                </p>
                <p className="text-xs text-pink-100 font-medium tracking-wide">
                  Model • Pageant Winner • Actress
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Cute Loving Cards Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#FFF5F7] via-pink-50/40 to-[#FFF5F7] border-y border-pink-200/60">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Why AkkuSena Loves Her 💖"
            subtitle="Little reminders of why Akanksha inspires us every single day."
            align="center"
            accent="rose"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loveCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-white/90 border-pink-200/80 p-6 flex flex-col justify-between hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 transition-all rounded-2xl group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <Badge variant="rose" className="mb-3">{card.tag}</Badge>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-[#4A1525] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-rose font-medium">
                    <span>With Love</span>
                    <span>💖</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explore Her World Overview Hub */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <SectionHeading
          title="Overview of the Archive 🗺️"
          subtitle="Explore the different chapters and moments of her journey."
          align="center"
          accent="gold"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {exploreSections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={item.href} className="group block h-full">
                <Card className="h-full bg-white border-pink-200/80 p-6 flex flex-col justify-between hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/10 transition-all rounded-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-pink-50 border border-pink-200/60">
                        {item.icon}
                      </div>
                      <Badge variant="rose">{item.tag}</Badge>
                    </div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#4A1525] mb-1 group-hover:text-rose transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-rose font-semibold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-bold text-rose gap-1 group-hover:gap-2 transition-all">
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Featured Fan Quote Box */}
      <section className="py-16 px-4 md:px-8 bg-pink-100/50 border-t border-pink-200/60">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-rose-400 mx-auto mb-4 opacity-50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMessageIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <p className="text-xl sm:text-2xl font-[family-name:var(--font-playfair)] italic text-[#4A1525] leading-relaxed mb-4">
                &quot;{FEATURED_FAN_MESSAGES[activeMessageIndex].message}&quot;
              </p>
              <p className="text-sm font-bold text-rose">
                — {FEATURED_FAN_MESSAGES[activeMessageIndex].author} (AkkuSena 💕)
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
