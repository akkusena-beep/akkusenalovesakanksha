'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero, Card, Badge, SourceTag } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';

export default function PageantsPage() {
  const [isPlayingCrowning, setIsPlayingCrowning] = useState(false);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pb-20">
      <PageHero 
        title="Pageant & Modeling Journey" 
        subtitle="From Rajasthan to the National Stage" 
      />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 md:px-8 mt-16 space-y-24"
      >
        {/* Miss Rajasthan Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Miss Rajasthan" subtitle="Where it all began" />
          <div className="mt-8 space-y-8">
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[3/4] bg-surface-elevated rounded-xl flex items-center justify-center border border-border overflow-hidden relative group shadow-md">
                  <img 
                    src="/images/miss-rajasthan-crown.png" 
                    alt="Akanksha Choudhary - Miss Rajasthan 1st Runner Up Crown" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="rose">1st Runner-Up Crown</Badge>
                  </div>
                </div>
                <div className="space-y-6">
                  <Badge variant="rose">Regional Title</Badge>
                  <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-foreground font-bold">
                    Crowning Glory in the Desert State
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Akanksha's journey began with the prestigious Miss Rajasthan pageant. Her grace, eloquence, and deep connection to her roots made her a standout contestant from the start. Crowned as the 1st Runner-Up in 2023, this platform served as her launchpad, transforming her from a local talent to a recognized pageant star.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-foreground font-medium mb-3">Key Highlights:</h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-rose mt-1">•</span>
                        <span>Crowned 1st Runner-Up at Miss Rajasthan 2023 with trophy & sash</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose mt-1">•</span>
                        <span>Showcased traditional elegance and acclaimed Q&A segment performance</span>
                      </li>
                    </ul>
                  </div>
                  <SourceTag source="Miss Rajasthan 2023 Official Ceremony" />
                </div>
              </div>
            </Card>

            {/* Crowning Moment Video Feature */}
            <Card className="p-6 md:p-8 bg-surface-elevated border-rose/30">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 relative">
                  <div className="aspect-[9/16] max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-rose/40 shadow-xl relative group bg-black">
                    {!isPlayingCrowning ? (
                      <div 
                        onClick={() => setIsPlayingCrowning(true)}
                        className="w-full h-full relative cursor-pointer group"
                      >
                        <img 
                          src="/images/miss-rajasthan-crowning-cover.png" 
                          alt="Akanksha Choudhary Crowning Moment Miss Rajasthan 2023"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-rose/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-center text-foreground border border-border">
                          Click to Play Crowning Moment 🎬
                        </div>
                      </div>
                    ) : (
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/zK1CmRaYZHo?autoplay=1"
                        title="Akanksha Choudhary Crowning Moment Miss Rajasthan 2023"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
                <div className="md:col-span-7 space-y-4 text-left">
                  <Badge variant="rose">Official Crowning Clip 👑</Badge>
                  <h4 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-foreground">
                    Watch Her Crowning Moment
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Experience the thrilling emotional moment when Akanksha Choudhary was announced and crowned as 1st Runner-Up at Miss Rajasthan 2023! This video clip captures the triumph, joy, and celebration on stage.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setIsPlayingCrowning(!isPlayingCrowning)}
                      className="px-5 py-2.5 bg-rose text-white text-sm font-semibold rounded-full hover:bg-rose-deep transition-colors flex items-center gap-2 shadow-md"
                    >
                      <span>{isPlayingCrowning ? 'Close Video' : 'Play Short Video 🎬'}</span>
                    </button>
                    <a 
                      href="https://www.youtube.com/shorts/zK1CmRaYZHo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-surface text-foreground text-sm font-medium rounded-full border border-border hover:bg-surface-elevated transition-colors flex items-center gap-2"
                    >
                      <span>Watch on YouTube Shorts ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Miss Universe India 2025 Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Miss Universe India 2025" subtitle="The National Stage" />
          <div className="mt-8">
            <Card className="p-8 bg-surface border-gold/20">
              <div className="mb-6">
                 <Badge variant="gold" className="mb-4">National Finalist</Badge>
                 <div className="bg-surface-elevated p-4 rounded-lg border border-border/50 text-sm text-muted mb-6">
                    <strong className="text-foreground">Important Note:</strong> This refers to the Miss Universe India national pageant (the preliminary competition to select India's representative), not the international Miss Universe competition itself.
                 </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-gold font-bold">
                    A Journey of Transformation
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Competing as a Finalist at Miss Universe India 2025 marked a significant national milestone in Akanksha's career. The intense preparation involved rigorous training in runway walk, communication, and fitness. Throughout the preliminary rounds, she consistently impressed the judges with her regal evening gown presentation and rich national costume.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                     <div className="bg-surface-elevated p-6 rounded-xl border border-border">
                        <h4 className="text-foreground font-medium mb-2 text-lg font-semibold">Evening Gown Presentation</h4>
                        <p className="text-sm text-muted">Stunning nude cape gown runway presentation, showcasing unmatched posture, poise, and elegance on the national stage.</p>
                     </div>
                     <div className="bg-surface-elevated p-6 rounded-xl border border-border">
                        <h4 className="text-foreground font-medium mb-2 text-lg font-semibold">National Costume Round</h4>
                        <p className="text-sm text-muted">Royal traditional attire with intricate headpiece and sacred vessel, representing Indian heritage and cultural roots.</p>
                     </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="aspect-[3/4] bg-surface-elevated rounded-xl overflow-hidden border border-gold/30 relative group shadow-md">
                    <img 
                      src="/images/miss-universe-national-costume.png" 
                      alt="Akanksha Choudhary - Miss Universe India National Costume" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[11px] text-center font-medium text-foreground">
                      National Costume Round
                    </div>
                  </div>
                  <div className="aspect-[3/4] bg-surface-elevated rounded-xl overflow-hidden border border-gold/30 relative group shadow-md">
                    <img 
                      src="/images/miss-universe-gown.png" 
                      alt="Akanksha Choudhary - Miss Universe India Evening Gown" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[11px] text-center font-medium text-foreground">
                      Evening Gown Runway
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                 <SourceTag source="Miss Universe India 2025 Competition" />
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Modeling Portfolio Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Pageant & Modeling Portfolio" subtitle="Versatility & Elegance on Stage" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Miss Rajasthan Crown Holder", desc: "Miss Rajasthan 1st Runner Up crowning moment", src: "/images/miss-rajasthan-crown.png", height: "h-96" },
              { title: "Miss Universe Evening Gown", desc: "National Pageant evening gown runway walk", src: "/images/miss-universe-gown.png", height: "h-96" },
              { title: "National Costume Heritage", desc: "Cultural headpiece & attire presentation", src: "/images/miss-universe-national-costume.png", height: "h-96" },
              { title: "Miss Rajasthan Stage Trophy", desc: "Award presentation on the grand pageant stage", src: "/images/pageant-stage.png", height: "h-96" },
              { title: "Fashion Runway Show", desc: "National pageant fashion show presentation", src: "/images/modeling-runway.png", height: "h-96" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`relative rounded-xl overflow-hidden bg-surface-elevated border border-border group ${item.height}`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
