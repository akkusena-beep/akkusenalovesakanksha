'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FanMessage {
  id: string;
  fanId: string;
  displayName: string;
  message: string;
  createdAt: string;
  cardSize: 'small' | 'medium' | 'large';
}

function getGridClasses(cardSize: string, index: number): string {
  if (cardSize === 'large') return 'col-span-1 md:col-span-2 row-span-2';
  if (cardSize === 'medium') {
    return index % 5 === 0 ? 'col-span-1 md:col-span-2 row-span-1' : 'col-span-1 row-span-2';
  }
  return 'col-span-1 row-span-1';
}

function getAccent(index: number): 'rose' | 'gold' {
  return index % 2 === 0 ? 'rose' : 'gold';
}

export default function ForAkankshaPage() {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/fan-wall')
      .then(res => res.json())
      .then((data: FanMessage[]) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden pb-24 pt-24">
      {/* Gentle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Emotional Hero */}
      <section className="pt-16 pb-16 px-6 text-center relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative inline-block"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl text-foreground mb-6 drop-shadow-[0_0_15px_rgba(232,197,200,0.3)]">
            For Akanksha
          </h1>
          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -right-8 text-3xl"
          >
            🤍
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed"
        >
          A collection of love, admiration, and little reminders from your fans across the world.
        </motion.p>
      </section>

      {/* Flowing Message Wall */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-2 border-rose/30 border-t-rose rounded-full animate-spin" />
              <p className="text-muted text-sm">Loading love messages...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No messages yet. Be the first to leave a message! 🌸</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {messages.map((msg, idx) => {
              const accent = getAccent(idx);
              const gridClass = getGridClasses(msg.cardSize, idx);
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: (idx % 4) * 0.15, ease: 'easeOut' }}
                  className={`relative ${gridClass}`}
                >
                  <div className={`h-full w-full rounded-2xl bg-surface/40 backdrop-blur-sm border p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-surface-elevated/50 ${
                    accent === 'rose' ? 'border-rose/20 hover:border-rose/40 hover:shadow-[0_0_30px_-10px_rgba(232,197,200,0.15)]' : 'border-gold/20 hover:border-gold/40 hover:shadow-[0_0_30px_-10px_rgba(230,198,135,0.15)]'
                  }`}>
                    <div className="relative z-10">
                      <span className={`absolute -top-4 -left-2 text-6xl font-[family-name:var(--font-playfair)] opacity-20 ${accent === 'rose' ? 'text-rose' : 'text-gold'}`}>
                        &quot;
                      </span>
                      <p className="text-foreground/90 font-light leading-relaxed relative z-10 text-lg sm:text-base">
                        {msg.message}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                      <span className="font-medium text-foreground/80">— {msg.displayName}</span>
                      <span className={accent === 'rose' ? 'text-rose/70' : 'text-gold/70'}>❤</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom CTA & Note */}
      <section className="max-w-3xl mx-auto px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link href="/fan-wall">
            <button className="px-8 py-4 rounded-full bg-surface-elevated border border-border text-foreground hover:bg-surface hover:border-rose/50 transition-all duration-300 shadow-lg hover:shadow-rose/10 group">
              <span className="flex items-center gap-2">
                Want to add your message?
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </Link>
          
          <div className="mt-16 text-center pb-8">
            <p className="text-muted/60 text-sm italic font-light max-w-lg mx-auto">
              &quot;This page is a living collection. Messages are curated from submissions by real fans and displayed here in hopes that Akanksha visits someday and sees the love her fans have for her.&quot;
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
