"use client";

import { motion } from "framer-motion";
import { PageHero, Card, Badge } from "@/components/ui/SharedComponents";
import { MapPin, Sparkles, Heart, Star, Award, Tv, Lock, Music } from "lucide-react";
import Link from "next/link";

const journeyChapters = [
  {
    id: "the-beginning",
    title: "THE BEGINNING",
    badge: "Jaipur Roots",
    tagline: "Every journey starts somewhere.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "For Akanksha Choudhary, it began with dreams bigger than the world around her. From Jaipur to the world of fashion and pageants, she started creating her own identity with confidence, determination and a love for what she does.",
      "She didn't become known overnight. She kept showing up, learning, growing and taking every opportunity that came her way.",
    ],
  },
  {
    id: "miss-rajasthan",
    title: "MISS RAJASTHAN",
    badge: "2023 Crown",
    tagline: "The pageant world became an important part of Akanksha's journey.",
    highlight: "In 2023, she was crowned First Runner-Up at Miss Rajasthan.",
    icon: <Award className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Her participation in pageants gave her a platform to showcase more than just her appearance — her confidence, personality and ability to carry herself with grace.",
      "In 2023, she was crowned First Runner-Up at Miss Rajasthan, marking an important milestone in her pageant journey.",
      "But this was only the beginning. One stage had opened the door to something much bigger.",
    ],
  },
  {
    id: "miss-universe-india",
    title: "MISS UNIVERSE INDIA",
    badge: "2025 Finalist",
    tagline: "Akanksha's pageant journey continued to a national platform.",
    highlight: "The dream got bigger. So did the stage.",
    icon: <Star className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "She became a finalist at Miss Universe India 2025, taking another important step towards her dreams.",
      "Reaching this stage meant competing among talented contestants from across the country and continuing to prove herself beyond the regional pageant circuit.",
      "From a pageant stage in Rajasthan to a national-level competition, her journey kept moving forward.",
    ],
  },
  {
    id: "stage-to-screen",
    title: "FROM THE STAGE TO THE SCREEN",
    badge: "Splitsvilla X6",
    tagline: "Then came a completely different world — reality television.",
    icon: <Tv className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Akanksha entered MTV Splitsvilla X6 as a Pyaar Villa contestant.",
      "A new environment. New people. New emotions. And millions of eyes watching.",
      "It was a journey that tested her in ways she couldn't have expected.",
    ],
  },
  {
    id: "journey-of-emotions",
    title: "A JOURNEY OF EMOTIONS",
    badge: "Pyaar Villa",
    tagline: "Splitsvilla wasn't just about fun, connections and cameras.",
    icon: <Heart className="w-5 h-5 text-rose-500 fill-current" />,
    paragraphs: [
      "There were moments that made her smile, moments that confused her and moments that genuinely hurt.",
      "But what stood out was the way she handled those moments.",
      "She felt things deeply, but she didn't allow difficult situations to erase who she was. She kept moving.",
    ],
  },
  {
    id: "when-things-got-difficult",
    title: "WHEN THINGS GOT DIFFICULT",
    badge: "Resilience",
    tagline: "Not every chapter goes the way we imagine.",
    highlight: "She was allowed to be hurt. She just didn't let the hurt become her identity.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Akanksha experienced moments where emotions became complicated and things didn't turn out the way she hoped.",
      "It would have been easy to let those moments define her.",
      "Instead, she chose to face them, accept them and continue her journey.",
    ],
  },
  {
    id: "finding-her-strength",
    title: "FINDING HER STRENGTH",
    badge: "Authenticity",
    tagline: "The more difficult the journey became, the more people got to see the person behind the screen.",
    highlight: "Sometimes strength isn't about never breaking down. Sometimes it's about getting back up and continuing anyway.",
    icon: <Heart className="w-5 h-5 text-rose-500 fill-current" />,
    paragraphs: [
      "Her vulnerability showed that she was human. Her composure showed her strength. And the way she continued forward showed her resilience.",
    ],
  },
  {
    id: "a-new-chapter",
    title: "A NEW CHAPTER",
    badge: "Growth",
    tagline: "After Splitsvilla, Akanksha continued building her presence.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Akanksha continued building her presence across entertainment, fashion and digital platforms.",
      "Each new opportunity brought something different. New experiences. New challenges. New people. New versions of herself.",
      "And with every chapter, she continued creating an identity that was uniquely hers.",
    ],
  },
  {
    id: "lock-upp",
    title: "LOCK UPP",
    badge: "Season 2",
    tagline: "Reality television became another chapter when Akanksha entered Lock Upp: Sach Ya Sazaa Season 2.",
    icon: <Lock className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Once again, she stepped into an environment where emotions, pressure and public attention were part of everyday life.",
      "This time, viewers got to see even more of her personality — her emotional side, her friendships, her confidence and the way she handled difficult situations.",
      "Another show. Another challenge. Another chapter in her story.",
    ],
  },
  {
    id: "beyond-reality-tv",
    title: "BEYOND REALITY TELEVISION",
    badge: "Versatility",
    tagline: "Akanksha's journey is bigger than reality television.",
    icon: <Music className="w-5 h-5 text-rose-500" />,
    paragraphs: [
      "Her work across modelling, fashion, music videos, pageants and digital entertainment continues to shape her career.",
      "Every opportunity adds another piece to the bigger picture. And she is still writing that picture.",
    ],
  },
  {
    id: "the-journey-continues",
    title: "THE JOURNEY CONTINUES",
    badge: "Forever AkkuSena 💖",
    tagline: "There is no final chapter yet. Because Akanksha's story is still being written.",
    highlight: "She didn't have a perfect journey. She had a real one.",
    icon: <Heart className="w-5 h-5 text-rose-500 fill-current" />,
    paragraphs: [
      "From Jaipur to the pageant stage, from national-level competitions to reality television, every step has brought her closer to becoming the person she wants to be.",
      "And maybe that's what makes it worth remembering.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] font-[family-name:var(--font-plus-jakarta)] text-[#4A1525] pb-24">
      <PageHero 
        title="ABOUT AKANKSHA" 
        subtitle="A journey built on courage, growth and staying true to herself 🌸"
        description="From Jaipur roots to pageant crowns, reality TV screens, and lead music videos — read her authentic story."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Facts Sidebar */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <Card className="p-8 border-pink-200/80 bg-white/90 shadow-xl shadow-pink-500/10 rounded-3xl">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl shadow-pink-500/20 mb-4 group ring-2 ring-pink-200">
                    <img
                      src="/images/akanksha-profile.png"
                      alt="Akanksha Choudhary"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#4A1525] mb-1">
                    Akanksha Choudhary
                  </h2>
                  <p className="text-rose font-semibold text-xs tracking-wide uppercase">
                    Model • Pageant Winner • Artist
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">Known For</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="rose">Miss Universe India</Badge>
                      <Badge variant="gold">Splitsvilla X6</Badge>
                      <Badge variant="surface">Lock Upp</Badge>
                      <Badge variant="surface">Music Videos</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">Roots</h3>
                    <div className="flex items-center text-pink-950 font-medium text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-rose" />
                      Rajasthan, India
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">Connect</h3>
                    <div className="flex gap-3">
                      {/* Instagram */}
                      <a 
                        href="https://www.instagram.com/akankshachoudhary_official/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:scale-110 transition-all shadow-md active:scale-95" 
                        title="Instagram"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a 
                        href="https://www.youtube.com/@Akankshachoudhary_official" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-red-600 text-white hover:scale-110 transition-all shadow-md active:scale-95" 
                        title="YouTube"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>

                      {/* X (Twitter) */}
                      <a 
                        href="https://x.com/Akanksha10_C" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-900 text-white hover:scale-110 transition-all shadow-md active:scale-95" 
                        title="X (Twitter)"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>

                      {/* Snapchat */}
                      <a 
                        href="https://www.snapchat.com/@akanksha650" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-yellow-400 text-gray-900 hover:scale-110 transition-all shadow-md active:scale-95" 
                        title="Snapchat"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.27.04-.022.08-.042.124-.058a.624.624 0 0 1 .2-.035c.233 0 .463.099.637.285a.64.64 0 0 1 .162.505c-.02.154-.102.299-.25.41-.195.144-.476.263-.857.363l-.087.026a2.28 2.28 0 0 0-.39.14c-.167.096-.272.236-.296.418-.025.19.04.395.184.603.665 1.065 1.557 1.882 2.652 2.428.237.118.478.212.722.277.3.082.477.283.487.516.012.27-.17.494-.559.662a5.346 5.346 0 0 1-.95.332c-.07.018-.14.038-.21.06-.22.065-.349.191-.393.379-.028.123-.038.252-.063.382a.686.686 0 0 1-.643.546 2.033 2.033 0 0 1-.396-.042 4.688 4.688 0 0 0-.956-.098c-.328 0-.638.035-.936.092-.478.092-.928.385-1.457.726-.663.427-1.413.91-2.505.91h-.055c-1.092 0-1.843-.483-2.506-.91-.528-.341-.978-.634-1.457-.726a5.037 5.037 0 0 0-.935-.092c-.348 0-.68.036-.956.098a2.04 2.04 0 0 1-.397.042.687.687 0 0 1-.643-.545 3.466 3.466 0 0 0-.063-.383c-.044-.188-.173-.314-.393-.379l-.21-.06a5.347 5.347 0 0 1-.95-.332c-.39-.168-.571-.392-.559-.662.01-.233.187-.434.488-.516.244-.065.485-.159.722-.277 1.095-.546 1.987-1.363 2.651-2.428.145-.208.209-.413.184-.603-.024-.182-.129-.322-.296-.418a2.28 2.28 0 0 0-.39-.14l-.087-.026c-.38-.1-.662-.219-.857-.363a.64.64 0 0 1-.25-.41.643.643 0 0 1 .162-.505.664.664 0 0 1 .636-.285c.044 0 .132.013.2.035.044.016.084.036.124.058.263.15.622.254.922.27.198 0 .326-.045.401-.09a9.39 9.39 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Main Bio Chapters Narrative */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {journeyChapters.map((chapter) => (
              <Card key={chapter.id} className="p-6 sm:p-8 bg-white border-pink-200/80 shadow-md shadow-pink-500/5 rounded-3xl hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="rose">{chapter.badge}</Badge>
                  <div className="p-2 rounded-full bg-pink-50 border border-pink-200">
                    {chapter.icon}
                  </div>
                </div>

                <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#4A1525] mb-2">
                  {chapter.title}
                </h2>

                <p className="text-sm font-semibold text-rose mb-4 italic">
                  &quot;{chapter.tagline}&quot;
                </p>

                <div className="space-y-3 text-sm text-muted leading-relaxed">
                  {chapter.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {chapter.highlight && (
                  <div className="mt-5 pt-4 border-t border-pink-100 bg-pink-50/60 -mx-6 -mb-6 p-4 rounded-b-3xl">
                    <p className="text-xs font-bold text-rose-600 italic text-center">
                      &quot;{chapter.highlight}&quot;
                    </p>
                  </div>
                )}
              </Card>
            ))}

            {/* Closing Final Note */}
            <div className="mt-12 text-center bg-white p-8 rounded-3xl border-2 border-pink-300/80 shadow-xl shadow-pink-500/10">
              <Sparkles className="w-8 h-8 text-rose mx-auto mb-3" />
              <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-[#4A1525] mb-2">
                AKANKSHA CHOUDHARY
              </h2>
              <p className="text-lg font-bold italic bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-6">
                Still growing. Still dreaming. Still becoming. 🌸
              </p>
              <Link
                href="/fan-wall"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-md active:scale-95 text-sm"
              >
                <Heart className="w-4 h-4 fill-current" /> Leave Her a Message
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
