'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero, Card, Badge, SourceTag } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function LockUppPage() {
  const [isPlayingLockUppVid, setIsPlayingLockUppVid] = useState(false);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const lockUppOneLiners = [
    { text: "“Bahar jakr mere naam ka fan page khol lena kyunki Tera toh koi kholega nhi 🔥”", tag: "Ultimate Savage Reply" },
    { text: "“You are hota hai pehli baat toh 😭”", tag: "Grammar & Attitude Check" },
    { text: "“Same hui nah aukaat? 😏”", tag: "Reality Check" },
    { text: "“Awazen kyu nikal rhi ho koi button dab Gaya kya? 🌚”", tag: "Sarcastic Comeback" },
    { text: "“Ye yaha akr itna bada oxygen kyu liya bhai aadha humara le gaye aap ☠️”", tag: "Hilarious Roast" },
    { text: "“It's better to be a bitch than a bechari 💥”", tag: "Queen Philosophy" },
    { text: "“Upr hai meri finger bhagwan ko hai aap bhagwan ho? 😋”", tag: "Fearless Logic" },
    { text: "“Ab kya karna hai? Kaam? Toh karo nh 💀”", tag: "No-Nonsense Response" },
    { text: "“Gaane toh waise bhi nhi chal rhe naach bhi nhi payegi 🎤🎤”", tag: "Mic Drop Moment" },
    { text: "“Chotu 4 plate momos laga 🤣”", tag: "Iconic Humor" }
  ];

  return (
    <div className="min-h-screen pb-20">
      <PageHero 
        title="Lock Upp: Sach Ya Sazaa Season 2" 
        subtitle="Raw. Real. Resilient." 
      />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 md:px-8 mt-16 space-y-20"
      >
        {/* Box 1: A New Chapter */}
        <motion.section variants={itemVars}>
          <Card className="p-8 md:p-12 overflow-hidden border-rose/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden border-2 border-rose/40 shadow-xl relative group">
                  <img 
                    src="/images/lock-upp-entry.png" 
                    alt="Akanksha Choudhary Lock Upp Entry" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="rose">Season 2 Contestant 🔒</Badge>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <Badge variant="rose">A New Chapter ✨</Badge>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-foreground font-bold leading-tight">
                  Lock Upp: Sach Ya Sazaa Season 2
                </h2>
                
                <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
                  <p>
                    After her Splitsvilla X6 journey, Akanksha Choudhary entered <strong className="text-foreground">Lock Upp: Sach Ya Sazaa Season 2</strong>, beginning a completely new chapter in her reality-show journey.
                  </p>
                  <p>
                    This time, she stepped into the Lock Upp house with a different environment, new challenges and a new set of experiences.
                  </p>
                  <p>
                    From the very beginning, Akanksha brought her <strong className="text-rose font-semibold">confidence, strong personality and fearless attitude</strong> to the show.
                  </p>
                  <p>
                    For her, Lock Upp became another opportunity to show viewers more of who she is beyond the image they had seen before.
                  </p>
                </div>

                <div className="p-4 bg-surface-elevated rounded-xl border border-rose/20 text-foreground font-semibold text-center md:text-left text-lg">
                  A new show. A new chapter. Still Akanksha. ❤️🔥
                </div>

                <SourceTag source="Lock Upp Season 2 Official Entry" />
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Box 2: First Fan Favourite of the Week */}
        <motion.section variants={itemVars}>
          <Card className="p-8 md:p-12 border-gold/30 bg-surface-elevated/60">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
                <Badge variant="gold">Fan Favourite 👑</Badge>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-gold font-bold leading-tight">
                  First Fan Favourite of the Week ❤️🔥
                </h3>
                
                <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
                  <p>
                    Akanksha entered Lock Upp and won hearts from the very beginning. 🥹❤️
                  </p>
                  <p>
                    In the first week itself, she became the <strong className="text-gold font-bold">Fan Favourite of the Week</strong>. 👑
                  </p>
                  <p>
                    Seeing people support her so strongly right from the start was such a beautiful moment for the <strong className="text-rose font-bold">Akku Sena</strong>. 🧿❤️🔥
                  </p>
                </div>

                <div className="p-4 bg-surface rounded-xl border border-gold/30 text-gold font-bold text-center md:text-left text-lg">
                  First week. First fan favourite. Our girl already winning hearts. 👑
                </div>

                <SourceTag source="Lock Upp Season 2 Week 1 Voting Results" />
              </div>

              <div className="md:col-span-5 relative order-1 md:order-2">
                <div className="aspect-[3/4] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden border-2 border-gold/40 shadow-xl relative group">
                  <img 
                    src="/images/lock-upp-fan-favourite.png" 
                    alt="Akanksha Choudhary Lock Upp Fan Favourite of the Week" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="gold">Week 1 Winner 🏆</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Lock Upp Featured Video Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Lock Upp Featured Video 🎬" subtitle="Akanksha: The Mastikhor" />
          
          <Card className="mt-8 p-6 md:p-10 bg-surface-elevated border-rose/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 relative">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-rose/40 shadow-xl relative group bg-black">
                  {!isPlayingLockUppVid ? (
                    <div 
                      onClick={() => setIsPlayingLockUppVid(true)}
                      className="w-full h-full relative cursor-pointer group"
                    >
                      <img 
                        src="/images/lock-upp-video-cover.png" 
                        alt="Akanksha The Mastikhor Lock Upp Video Cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-rose/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-center text-foreground border border-border">
                        Click to Play Lock Upp Highlights 🎬
                      </div>
                    </div>
                  ) : (
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/OmrEkjOMOew?autoplay=1"
                      title="Akanksha The Mastikhor Lock Upp Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
              
              <div className="md:col-span-6 space-y-4 text-left">
                <Badge variant="rose">Akanksha: The Mastikhor 👀🌸</Badge>
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-foreground">
                  Lock Upp Unseen & Fun Moments
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Watch Akanksha's playful, witty, and fun side in Lock Upp! From her heartwarming laughs to her hilarious lighthearted banters inside the jail.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => setIsPlayingLockUppVid(!isPlayingLockUppVid)}
                    className="px-5 py-2.5 bg-rose text-white text-sm font-semibold rounded-full hover:bg-rose-deep transition-colors flex items-center gap-2 shadow-md"
                  >
                    <span>{isPlayingLockUppVid ? 'Close Video' : 'Play Video Clip 🎬'}</span>
                  </button>
                  <a 
                    href="https://youtu.be/OmrEkjOMOew" 
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
        </motion.section>

        {/* Lock Upp One-Liners Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Her Iconic Lock Upp One-Liners 👑" subtitle="Unfiltered, fearless & hilarious comebacks" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {lockUppOneLiners.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full flex flex-col justify-between border-rose/30 bg-surface/80 hover:border-rose transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-5xl font-serif text-rose font-bold">“</span>
                  </div>
                  <div>
                    <Badge variant="rose" className="mb-4 text-xs">{item.tag}</Badge>
                    <blockquote className="text-xl font-[family-name:var(--font-playfair)] font-bold text-foreground leading-snug">
                      {item.text}
                    </blockquote>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted">
                    <span>Lock Upp S2</span>
                    <span className="text-rose font-semibold">Akanksha Choudhary 👑</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
