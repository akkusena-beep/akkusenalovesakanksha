'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero, Card, Badge, SourceTag } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VIDEO_ARCHIVE, VIDEO_CATEGORIES } from '@/lib/data';

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const categories = VIDEO_CATEGORIES;

  const filteredVideos =
    activeFilter === 'all'
      ? VIDEO_ARCHIVE
      : VIDEO_ARCHIVE.filter((video) => video.category === activeFilter);

  const startHereList = [
    { title: "TEDx Talk: Descendants of Tomorrow", id: "tedx-1" },
    { title: "Pinkvilla Podcast (After Lock Upp Finale)", id: "pinkvilla-1" },
    { title: "Filmygyan Podcast (After Splitsvilla Finale)", id: "filmygyan-1" },
    { title: "Filmygyan: BEYOND THE FAME (Episode 01)", id: "beyond-fame-1" },
    { title: "Her First YouTube Vlog — 24 in Goa 🌴", id: "vlog-1" },
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHero 
        title="Watch & Follow" 
        subtitle="Every interview, every podcast, every vlog, every story" 
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 space-y-20">
        {/* Start Here Section */}
        <section>
          <SectionHeading title="New here? Start with these:" subtitle="Must-watch features & podcasts" />
          <Card className="mt-6 p-6 md:p-8 border-rose/30 bg-surface-elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {startHereList.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => setPlayingVideoId(item.id)}
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-surface transition-colors border border-border/50 hover:border-rose/40 cursor-pointer"
                >
                  <span className="text-rose font-[family-name:var(--font-playfair)] text-xl font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                  <span className="text-xs md:text-sm text-foreground group-hover:text-rose transition-colors font-medium leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Video Archive Section */}
        <section>
          <SectionHeading title="The Video Archive 🎬" subtitle="Interviews, podcasts, talks and vlogs" />
          
          {/* Filter Bar */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide mt-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                  activeFilter === cat.value 
                    ? "bg-rose text-white shadow-md" 
                    : "bg-surface text-muted hover:text-foreground hover:bg-surface-elevated border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video) => {
                const isPlaying = playingVideoId === video.id;

                return (
                  <motion.div
                    key={video.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden flex flex-col h-full bg-surface-elevated border-rose/20 hover:border-rose/50 transition-colors shadow-sm">
                      {/* Video Thumbnail / Player */}
                      <div className="aspect-video bg-black relative group flex items-center justify-center overflow-hidden">
                        {!isPlaying ? (
                          <div 
                            onClick={() => setPlayingVideoId(video.id)}
                            className="w-full h-full relative cursor-pointer group"
                          >
                            <img 
                              src={video.thumbnailUrl} 
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center" />
                            <div className="w-14 h-14 rounded-full bg-rose/90 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                              <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <div className="absolute bottom-3 right-3 z-10">
                              <SourceTag source={video.sourcePlatform || "YouTube"} />
                            </div>
                          </div>
                        ) : (
                          <iframe 
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow text-left">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-muted font-medium">{video.datePublished}</span>
                          {video.roleBadge && <Badge variant="rose">{video.roleBadge}</Badge>}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 leading-snug font-[family-name:var(--font-playfair)]">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted mb-6 flex-grow leading-relaxed">
                          {video.description}
                        </p>
                        
                        <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                          <button 
                            onClick={() => setPlayingVideoId(isPlaying ? null : video.id)}
                            className="text-xs font-semibold text-rose hover:text-rose-deep transition-colors"
                          >
                            {isPlaying ? 'Close Player' : 'Play Inline 🎬'}
                          </button>

                          <a 
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-foreground hover:text-rose transition-colors flex items-center gap-1"
                          >
                            WATCH ON YOUTUBE ↗
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredVideos.length === 0 && (
            <div className="py-24 text-center text-muted">
              No videos found for this category.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
