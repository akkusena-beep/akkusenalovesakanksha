'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero, Card, Badge, SourceTag } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MUSIC_VIDEOS } from '@/lib/data';

export default function MusicPage() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pb-20">
      <PageHero 
        title="Music Video Journey" 
        subtitle="From Being Seen to Being the Face" 
      />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 md:px-8 mt-16 space-y-20"
      >
        {/* Featured Music Videos Grid */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Lead & Starring Music Videos 🎶" subtitle="Commanding the narrative as the lead actress" />
          
          <div className="space-y-10 mt-8">
            {MUSIC_VIDEOS.map((mv) => {
              const isPlaying = playingVideoId === mv.id;

              return (
                <Card key={mv.id} className="p-6 md:p-8 bg-surface-elevated border-rose/30 hover:border-rose/60 transition-colors">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Video Thumbnail / Embed */}
                    <div className="lg:col-span-6 relative">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-rose/40 shadow-xl relative group bg-black">
                        {!isPlaying ? (
                          <div 
                            onClick={() => setPlayingVideoId(mv.id)}
                            className="w-full h-full relative cursor-pointer group"
                          >
                            <img 
                              src={mv.thumbnailUrl} 
                              alt={`${mv.title} - ${mv.artist}`}
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
                              Click to Play Video 🎬
                            </div>
                          </div>
                        ) : (
                          <iframe 
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${mv.youtubeId}?autoplay=1`}
                            title={`${mv.title} Music Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </div>
                    </div>

                    {/* Metadata & Details */}
                    <div className="lg:col-span-6 space-y-4 text-left">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="gold">{mv.role}</Badge>
                        <span className="text-xs text-muted font-medium">• {mv.year}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-foreground">
                          {mv.title}
                        </h3>
                        <p className="text-rose font-medium text-lg mt-1">{mv.artist}</p>
                      </div>

                      <p className="text-muted leading-relaxed text-sm md:text-base">
                        {mv.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button 
                          onClick={() => setPlayingVideoId(isPlaying ? null : mv.id)}
                          className="px-5 py-2.5 bg-rose text-white text-sm font-semibold rounded-full hover:bg-rose-deep transition-colors flex items-center gap-2 shadow-md"
                        >
                          <span>{isPlaying ? 'Close Video' : 'Watch Video 🎬'}</span>
                        </button>

                        <a 
                          href={mv.youtubeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-surface text-foreground text-sm font-medium rounded-full border border-border hover:bg-surface-elevated transition-colors flex items-center gap-2"
                        >
                          <span>Watch on YouTube ↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.section>

        {/* Future Music Video Outlook */}
        <motion.section variants={itemVars}>
          <div className="bg-surface p-8 md:p-12 rounded-2xl border border-rose/20 text-center max-w-3xl mx-auto">
             <Badge variant="rose" className="mb-4">More Music Coming Soon 🎵</Badge>
             <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-foreground mb-4">Her Musical Journey Continues</h3>
             <p className="text-muted mb-6 leading-relaxed">
                With iconic performances across lead music videos like <strong className="text-foreground">EYES</strong>, <strong className="text-foreground">Dooriyan</strong>, <strong className="text-foreground">Nazar Lagi</strong>, <strong className="text-foreground">Aankhon Mein Teri</strong>, and <strong className="text-foreground">Naa Pushde</strong>, Akanksha continues to be one of the most sought-after female leads in the Indian music video industry.
             </p>
             <a 
               href="https://www.youtube.com/@Akankshachoudhary_official" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white font-semibold rounded-full hover:bg-rose-deep transition-colors shadow-md"
             >
                <span>Subscribe on YouTube 📺</span>
             </a>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
