'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero, Card, Badge, SourceTag } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function SplitsvillaPage() {
  const [isPlayingEntry, setIsPlayingEntry] = useState(false);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const oneLiners = [
    { quote: "“What's your talent? Chasing men?”", highlight: "Iconic Comeback" },
    { quote: "“Baat karna connection hota hai tere gaav mein?”", highlight: "Sassy Reality Check" },
    { quote: "“Kata tera hai.”", highlight: "Unfiltered Truth" },
    { quote: "“Suna suna lag raha hai.”", highlight: "Perfect Timing" },
    { quote: "“Because you are a MAN CHILD.”", highlight: "Mic Drop Moment" },
  ];

  const costumes = [
    {
      title: "Pink Floral Halter Look",
      desc: "Chic tropical vibe with pink bloom in hair",
      src: "/images/splits-costume-1.png",
    },
    {
      title: "Sparkling Gold Corset Gown",
      desc: "Glamorous corset gown for high-stakes sessions",
      src: "/images/splits-costume-2.png",
    },
    {
      title: "Olive Ribbed Tube Top",
      desc: "Sleek and confident casual look",
      src: "/images/splits-costume-3.png",
    },
    {
      title: "Hot Pink One-Shoulder Gown",
      desc: "Regal magenta gown with side embellishments",
      src: "/images/splits-costume-4.png",
    },
    {
      title: "White Floral Tube Sundress",
      desc: "Aesthetic white & pink floral smocked dress",
      src: "/images/splits-costume-5.png",
    },
    {
      title: "Crimson Off-Shoulder Tiered Gown",
      desc: "Dramatic ruffled red gown for evening dome sessions",
      src: "/images/splits-costume-6.png",
    },
    {
      title: "Magenta Cut-Out Pearl Trim Look",
      desc: "Vibrant pink cut-out top with pearl detailing",
      src: "/images/splits-costume-7.png",
    },
    {
      title: "Blush Draped Corset Gown",
      desc: "Soft blush pleated gown with subtle sheen",
      src: "/images/splits-costume-8.png",
    },
    {
      title: "Iridescent Sequin Tube Gown",
      desc: "Sparkling holographic gown catching every light",
      src: "/images/splits-costume-9.png",
    },
    {
      title: "Embroidered Denim Halter Top",
      desc: "Boho denim halter look paired with dark sunglasses",
      src: "/images/splits-costume-10.png",
    },
    {
      title: "Metallic Navy Halter Fringe Dress",
      desc: "Shimmering deep blue metallic halter minidress",
      src: "/images/splits-costume-11.png",
    },
    {
      title: "Sheer Crimson Mesh Off-Shoulder",
      desc: "Sultry red mesh & ruched off-shoulder pool look",
      src: "/images/splits-costume-12.png",
    },
    {
      title: "Black Sequin Crystal Trim Outfit",
      desc: "Glamorous black beaded top with crystal border trim",
      src: "/images/splits-costume-13.png",
    },
    {
      title: "Ruby Red Satin Strappy Dress",
      desc: "Chic ruby red satin tier dress for poolside evenings",
      src: "/images/splits-costume-14.png",
    },
    {
      title: "Peacock Embroidered Corset Gown",
      desc: "Royal black strapless gown with ornate peacock embroidery",
      src: "/images/splits-costume-15.png",
    },
    {
      title: "Black Glitter Off-Shoulder Gown",
      desc: "Shimmering off-shoulder evening gown for dome sessions",
      src: "/images/splits-costume-16.png",
    },
    {
      title: "White Eyelet Ruffled Sundress",
      desc: "Charming white eyelet lace dress with shoulder ties",
      src: "/images/splits-costume-17.png",
    },
    {
      title: "Turquoise Floral Strapless Sun Dress",
      desc: "Vibrant aqua floral print resort wear look",
      src: "/images/splits-costume-18.png",
    },
    {
      title: "Red Ruffled Halter Neck Dress",
      desc: "Fiery red halter dress with dramatic cascading ruffles",
      src: "/images/splits-costume-19.png",
    },
    {
      title: "Lime Green Halter Ribbed Dress",
      desc: "Fresh lime ribbed halter dress styled with cozy white shawl",
      src: "/images/splits-costume-20.png",
    },
    {
      title: "Emerald Green Corset Gown",
      desc: "Deep emerald green gown with glittering corset bodice",
      src: "/images/splits-costume-21.png",
    },
    {
      title: "Silver Geometric Sequin Gown",
      desc: "Stunning silver strapless gown with metallic embroidery",
      src: "/images/splits-costume-22.png",
    },
    {
      title: "Pink Embroidered One-Sleeve Set",
      desc: "Regal blush pink embroidered one-shoulder festive ensemble",
      src: "/images/splits-costume-23.png",
    },
    {
      title: "Red Beaded High-Slit Gown",
      desc: "Stunning red beaded gown with high slit",
      src: "/images/splits-costume-24.png",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <PageHero 
        title="MTV Splitsvilla X6" 
        subtitle="A journey of connections, emotions, comebacks and unforgettable moments" 
      />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 md:px-8 mt-16 space-y-20"
      >
        {/* Main Narrative Card */}
        <motion.section variants={itemVars}>
          <Card className="p-8 md:p-12">
            <div className="space-y-6 max-w-4xl mx-auto text-left">
              <Badge variant="rose">Pyaar Villa Contestant 💖</Badge>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-foreground font-bold leading-tight">
                A Journey Built on Courage & Authenticity
              </h2>
              
              <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
                <p>
                  Akanksha Choudhary entered <strong className="text-foreground">MTV Splitsvilla X6</strong> as a Pyaar Villa contestant and quickly became one of the most noticeable personalities of the season.
                </p>
                <p>
                  What started with a new beginning and a meaningful connection soon turned into a journey filled with unexpected twists, emotional moments, misunderstandings and difficult situations.
                </p>
                <p>
                  She experienced heartbreak, faced conflicts and had to navigate an environment where every emotion played out in front of the cameras.
                </p>
                <p>
                  But throughout the journey, Akanksha remained <strong className="text-rose">unapologetically herself</strong>.
                </p>
                <p>
                  Her <strong className="text-foreground font-semibold">confidence, expressions, comebacks and sharp one-liners</strong> became one of the most memorable parts of her time on the show. Even fans later described her as the <strong className="text-rose">“one-liner queen.”</strong>
                </p>
                <p>
                  Her journey wasn't just about relationships or drama. It showed her emotional side, her ability to stand up for herself, and the personality that made her moments on Splitsvilla so memorable.
                </p>
              </div>

              <div className="pt-4">
                <SourceTag source="MTV Splitsvilla X6 Official Journey" />
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Grand Entry Video Section */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Her Grand Entry Video" subtitle="The moment she stepped into the villa" />
          
          <Card className="mt-8 p-6 md:p-10 bg-surface-elevated border-rose/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 relative">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-rose/40 shadow-xl relative group bg-black">
                  {!isPlayingEntry ? (
                    <div 
                      onClick={() => setIsPlayingEntry(true)}
                      className="w-full h-full relative cursor-pointer group"
                    >
                      <img 
                        src="/images/splitsvilla-entry-cover.png" 
                        alt="Akanksha Choudhary Splitsvilla Entry Video Cover"
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
                        Click to Play Grand Entry Video 🎬
                      </div>
                    </div>
                  ) : (
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ZtUkdnZrS3s?autoplay=1"
                      title="Akanksha Choudhary Entry Video MTV Splitsvilla X6"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
              
              <div className="md:col-span-6 space-y-4 text-left">
                <Badge variant="rose">Splitsvilla X6 Entry 🌟</Badge>
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-foreground">
                  Akanksha Choudhary Villa Entry
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Watch Akanksha Choudhary make her grand entrance on MTV Splitsvilla X6! Dressed in her signature tropical floral look, her calm confidence immediately won hearts.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => setIsPlayingEntry(!isPlayingEntry)}
                    className="px-5 py-2.5 bg-rose text-white text-sm font-semibold rounded-full hover:bg-rose-deep transition-colors flex items-center gap-2 shadow-md"
                  >
                    <span>{isPlayingEntry ? 'Close Video' : 'Play Video Clip 🎬'}</span>
                  </button>
                  <a 
                    href="https://www.youtube.com/watch?v=ZtUkdnZrS3s" 
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

        {/* Akanksha's Iconic One-Liners */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Akanksha's Iconic One-Liners 👑" subtitle="Sharp comebacks & mic-drop moments" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {oneLiners.map((item, index) => (
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
                    <Badge variant="rose" className="mb-4 text-xs">{item.highlight}</Badge>
                    <blockquote className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] font-bold text-foreground leading-snug">
                      {item.quote}
                    </blockquote>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted">
                    <span>Splitsvilla X6</span>
                    <span className="text-rose font-semibold">Queen Akku 👑</span>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Summary Box */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="p-6 h-full flex flex-col justify-center bg-gradient-to-br from-rose/20 via-surface to-surface border-rose/40">
                <div className="text-center space-y-3">
                  <h4 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-foreground">
                    One-Liner Queen 👑
                  </h4>
                  <div className="space-y-1 text-sm font-medium text-rose-deep">
                    <p>Sharp comebacks.</p>
                    <p>Perfect timing.</p>
                    <p>Unfiltered personality.</p>
                    <p>And lines that became unforgettable.</p>
                  </div>
                  <p className="text-base font-bold text-foreground pt-2">
                    That was Akanksha in Splitsvilla X6. ❤️🔥
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Her Costumes in Splitsvilla */}
        <motion.section variants={itemVars}>
          <SectionHeading title="Her Costumes in Splitsvilla 👗✨" subtitle="Iconic looks from the season" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {costumes.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden bg-surface-elevated border border-border group shadow-lg flex flex-col h-[400px]"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-4 bg-surface flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-base font-bold text-foreground font-[family-name:var(--font-playfair)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted leading-tight">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-2 text-[10px] text-rose font-semibold uppercase tracking-wider">
                    Splitsvilla X6 Style
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
