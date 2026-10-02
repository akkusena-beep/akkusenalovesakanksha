// Site-wide data constants for Akanksha Choudhary Fan Archive

export const SITE_NAME = "Akanksha Choudhary — The Fan Archive";
export const SITE_TAGLINE = "Her journey. Her moments. Her people.";
export const UNOFFICIAL_DISCLAIMER =
  "Unofficial Fan Website — Dedicated with love by fans. Not affiliated with or managed by Akanksha Choudhary or her official management.";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pageants", href: "/pageants" },
  { label: "Splitsvilla", href: "/splitsvilla" },
  { label: "Lock Upp", href: "/lock-upp" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Fan Wall", href: "/fan-wall" },
  { label: "For Akanksha", href: "/for-akanksha" },
];

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
  followers?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/akankshachoudhary_official/?hl=en",
    handle: "@akankshachoudhary_official",
    icon: "instagram",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@Akankshachoudhary_official",
    handle: "@Akankshachoudhary_official",
    icon: "youtube",
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/Akanksha10_C",
    handle: "@Akanksha10_C",
    icon: "twitter",
  },
  {
    platform: "Snapchat",
    url: "https://www.snapchat.com/@akanksha650",
    handle: "@akanksha650",
    icon: "snapchat",
  },
];

export interface TimelineEvent {
  id: string;
  year?: string;
  title: string;
  description: string;
  category: "personal" | "modeling" | "pageant" | "tv" | "music" | "career";
  sourceTag: "Publicly Stated" | "Media-Reported" | "Verified Source" | "Fan Speculation";
  mediaUrl?: string;
  sourceUrl?: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "1",

    title: "A Girl with Dreams",
    description:
      "Born and raised in Rajasthan, Akanksha grew up with an aspiration for the entertainment world and the confidence to chase her dreams.",
    category: "personal",
    sourceTag: "Publicly Stated",
  },
  {
    id: "2",

    title: "Academic & Educational Milestones",
    description:
      "Akanksha pursued her education while nurturing her passion for modeling and performing arts, balancing academics with early creative endeavors.",
    category: "personal",
    sourceTag: "Media-Reported",
  },
  {
    id: "3",

    title: "Early Modeling & Fashion Shoots",
    description:
      "Stepping into the world of modeling, Akanksha began her journey with fashion shoots and brand collaborations, building her portfolio and presence.",
    category: "modeling",
    sourceTag: "Verified Source",
  },
  {
    id: "4",

    title: "Miss Rajasthan — Regional Crown",
    description:
      "Akanksha earned the prestigious Miss Rajasthan title, marking her first major recognition in the pageant world and opening doors to national competition.",
    category: "pageant",
    sourceTag: "Verified Source",
  },
  {
    id: "5",

    title: "Miss Universe India 2025",
    description:
      "Represented her state at the Miss Universe India 2025 national pageant — a milestone in her pageant journey. Note: This is the national pageant, not the international Miss Universe.",
    category: "pageant",
    sourceTag: "Verified Source",
  },
  {
    id: "6",

    title: "First Music Video Appearance — Paon Ki Jutti",
    description:
      "An early appearance in the music video 'Paon Ki Jutti' (featuring Isha Malviya) served as a stepping stone into the entertainment industry.",
    category: "music",
    sourceTag: "Verified Source",
  },
  {
    id: "7",

    title: "MTV Splitsvilla X6 — Reality TV Debut",
    description:
      "Akanksha made her reality television debut on MTV Splitsvilla X6, where she became one of the most talked-about contestants with memorable moments throughout the season.",
    category: "tv",
    sourceTag: "Verified Source",
  },
  {
    id: "8",

    title: "Lock Upp — Major Conversations & Disclosures",
    description:
      "Her appearance on Lock Upp brought powerful conversations and personal disclosures that resonated deeply with audiences across India.",
    category: "tv",
    sourceTag: "Verified Source",
  },
  {
    id: "9",

    title: "EYES — Lead Music Video with Mohammad Faiz",
    description:
      "A defining career moment — Akanksha starred as the lead actress in 'EYES' alongside singer Mohammad Faiz, marking her transition from appearances to headlining projects.",
    category: "music",
    sourceTag: "Verified Source",
  },
  {
    id: "10",

    title: "Continued Growth & Upcoming Projects",
    description:
      "Akanksha continues to grow her presence across entertainment, modeling, and social media. Her journey is far from over.",
    category: "career",
    sourceTag: "Publicly Stated",
  },
];

export interface MusicVideo {
  id: string;
  title: string;
  artist: string;
  role: "Lead Actress" | "Featured" | "Supporting" | "Special Appearance" | "Promotional";
  category: "lead" | "early";
  youtubeUrl: string;
  youtubeId: string;
  thumbnailUrl: string;
  year?: string;
  description: string;
}

export const MUSIC_VIDEOS: MusicVideo[] = [
  {
    id: "1",
    title: "EYES",
    artist: "Mohammad Faiz ft. Akanksha Choudhary",
    role: "Lead Actress",
    category: "lead",
    youtubeUrl: "https://youtu.be/TitQphB-Puk?si=LoFphgwZtsaOHmoq",
    youtubeId: "TitQphB-Puk",
    thumbnailUrl: "/images/eyes.png",

    description:
      "Mohammad Faiz presents EYES — starring Mohammad Faiz & Akanksha Choudhary as the central lead.",
  },
  {
    id: "2",
    title: "Dooriyan",
    artist: "Panther ft. Akanksha Choudhary",
    role: "Lead Actress",
    category: "lead",
    youtubeUrl: "https://youtu.be/hUDrfmmDE0Q?si=J_mMwAJJcfg8tpw8",
    youtubeId: "hUDrfmmDE0Q",
    thumbnailUrl: "/images/dooriyan.png",

    description:
      "Dooriyan by Panther — featuring Akanksha Choudhary as the lead face.",
  },
  {
    id: "3",
    title: "Nazar Lagi",
    artist: "Goldie Sohel & Asees Kaur ft. Akanksha Choudhary",
    role: "Lead Actress",
    category: "lead",
    youtubeUrl: "https://youtu.be/GaAhn9brjG0?si=8nU-869lG6Fij11H",
    youtubeId: "GaAhn9brjG0",
    thumbnailUrl: "/images/nazar-lagi.png",

    description:
      "Novice Records presents Nazar Lagi — featuring Akanksha Choudhary (2M+ views).",
  },
  {
    id: "4",
    title: "Aankhon Mein Teri",
    artist: "Yogesh Rawat ft. Akanksha Choudhary",
    role: "Lead Actress",
    category: "lead",
    youtubeUrl: "https://youtu.be/BRIzqJQ1OtY?si=lx0Srn972wp_IsPJ",
    youtubeId: "BRIzqJQ1OtY",
    thumbnailUrl: "/images/aankhon-mein-teri.png",

    description:
      "Yogesh Rawat presents Aankhon Mein Teri — featuring Akanksha Choudhary.",
  },
  {
    id: "5",
    title: "Naa Pushde",
    artist: "Akanksha Choudhary & Yogesh Rawat",
    role: "Lead Actress",
    category: "lead",
    youtubeUrl: "https://youtu.be/zUGvCrqR6HI?si=MMYW_eoUfV25AxrG",
    youtubeId: "zUGvCrqR6HI",
    thumbnailUrl: "/images/naa-pushde.png",

    description:
      "Desi Music Factory presents Naa Pushde — featuring Akanksha Choudhary & Yogesh Rawat (10M+ views).",
  },
];

export interface VideoItem {
  id: string;
  title: string;
  category:
    | "music"
    | "interview"
    | "podcast"
    | "vlog"
    | "splitsvilla"
    | "lockupp"
    | "pageant"
    | "bts"
    | "short";
  sourcePlatform: string;
  youtubeId: string;
  thumbnailUrl: string;
  datePublished?: string;
  description: string;
  roleBadge?: string;
}

export const VIDEO_ARCHIVE: VideoItem[] = [
  {
    id: "tedx-1",
    title: "Akanksha Choudhary TEDx Talk — Descendants of Tomorrow",
    category: "interview",
    sourcePlatform: "TEDx Talks",
    youtubeId: "HbDPSezQ_gI",
    thumbnailUrl: "/images/video-tedx.png",

    description: "Descendants of Tomorrow: Ideas We Leave Behind. Delivered at TEDx Christ Delhi NCR as Miss Universe 2025 Finalist & Model.",
    roleBadge: "TEDx Speaker 🎤",
  },
  {
    id: "pinkvilla-1",
    title: "Pinkvilla Podcast — After Lock Upp Finale",
    category: "podcast",
    sourcePlatform: "Pinkvilla",
    youtubeId: "Yp9nik86sjQ",
    thumbnailUrl: "/images/video-pinkvilla.png",

    description: "In-depth heart-to-heart podcast interview following her Lock Upp journey and life after the finale.",
    roleBadge: "Podcast 🎙️",
  },
  {
    id: "filmygyan-1",
    title: "Filmygyan Podcast — After Splitsvilla Finale",
    category: "podcast",
    sourcePlatform: "Filmygyan",
    youtubeId: "eq4IVB6lTsg",
    thumbnailUrl: "/images/video-filmygyan-splitsvilla.png",

    description: "Candid conversation discussing her Splitsvilla X6 finale experience, viral one-liners, and fan love.",
    roleBadge: "Podcast 🎙️",
  },
  {
    id: "beyond-fame-1",
    title: "Filmygyan: BEYOND THE FAME (Episode 01)",
    category: "interview",
    sourcePlatform: "Filmygyan",
    youtubeId: "awDTXLy1Ojw",
    thumbnailUrl: "/images/video-beyond-the-fame.png",

    description: "Grand live stage talk show interview in front of a packed auditorium audience for Beyond The Fame Ep 01.",
    roleBadge: "Stage Show 🎬",
  },
  {
    id: "vlog-1",
    title: "Her First YouTube Vlog — 24 in Goa 🌴🎂",
    category: "vlog",
    sourcePlatform: "YouTube",
    youtubeId: "GN0VIHVg-yc",
    thumbnailUrl: "/images/video-first-vlog.png",

    description: "Akanksha's debut YouTube vlog celebrating her 24th birthday in Goa with pool party, flowers, and friends.",
    roleBadge: "Debut Vlog 📹",
  },
  {
    id: "vlog-2",
    title: "A Day in My Life — Daily Vlog",
    category: "vlog",
    sourcePlatform: "YouTube",
    youtubeId: "WnGk2YmOInM",
    thumbnailUrl: "/images/video-daily-vlog.png",

    description: "A fun and candid daily vlog — spend a day with Akanksha as she takes you through her everyday life, routines, and real moments.",
    roleBadge: "Vlog 📹",
  },
  {
    id: "vlog-3",
    title: "My First IPL Experience 🏏",
    category: "vlog",
    sourcePlatform: "YouTube",
    youtubeId: "WehgnSfgCZo",
    thumbnailUrl: "/images/video-ipl.png",

    description: "Akanksha's very first IPL stadium experience! The energy, the crowd, and all the excitement captured in this vlog.",
    roleBadge: "Vlog 📹",
  },
  {
    id: "vlog-4",
    title: "Rakhi Vlog with Sorab 🎀",
    category: "vlog",
    sourcePlatform: "YouTube",
    youtubeId: "Z0FPs6imuL8",
    thumbnailUrl: "/images/video-rakhi.png",

    description: "A heartwarming Rakhi celebration vlog with Sorab — sibling love, festive vibes, and beautiful moments together.",
    roleBadge: "Vlog 📹",
  },
  {
    id: "interview-farah",
    title: "With Farah Khan Mam 🌟",
    category: "interview",
    sourcePlatform: "YouTube",
    youtubeId: "QK_9kh_n2qw",
    thumbnailUrl: "/images/video-farah-khan.png",

    description: "A special moment with the legendary Farah Khan — one of the most exciting meetings in Akanksha's journey so far!",
    roleBadge: "Interview 🎬",
  },
  {
    id: "vlog-5",
    title: "First Ganpati Darshan in Mumbai 🙏",
    category: "vlog",
    sourcePlatform: "YouTube",
    youtubeId: "HPAteBSRp4k",
    thumbnailUrl: "/images/video-ganpati.png",

    description: "Akanksha's first ever Ganpati darshan in Mumbai — a spiritual and emotional experience visiting the iconic Lalbaugcha Raja.",
    roleBadge: "Vlog 📹",
  },
  {
    id: "mv-eyes",
    title: "EYES — Mohammad Faiz ft. Akanksha Choudhary",
    category: "music",
    sourcePlatform: "YouTube",
    youtubeId: "TitQphB-Puk",
    thumbnailUrl: "/images/eyes.png",
    description: "Official music video for EYES by Mohammad Faiz featuring Akanksha Choudhary as the lead actress.",
    roleBadge: "Lead Actress 🎵",
  },
  {
    id: "mv-dooriyan",
    title: "Dooriyan — Panther ft. Akanksha Choudhary",
    category: "music",
    sourcePlatform: "YouTube",
    youtubeId: "hUDrfmmDE0Q",
    thumbnailUrl: "/images/dooriyan.png",
    description: "Official music video for Dooriyan.",
    roleBadge: "Lead Actress 🎵",
  },
  {
    id: "mv-nazar-lagi",
    title: "Nazar Lagi — Official Video",
    category: "music",
    sourcePlatform: "YouTube",
    youtubeId: "GaAhn9brjG0",
    thumbnailUrl: "/images/nazar-lagi.png",
    description: "Official music video for Nazar Lagi featuring Akanksha Choudhary.",
    roleBadge: "Lead Actress 🎵",
  },
  {
    id: "mv-aankhon-mein",
    title: "Aankhon Mein Teri — Official Video",
    category: "music",
    sourcePlatform: "YouTube",
    youtubeId: "BRIzqJQ1OtY",
    thumbnailUrl: "/images/aankhon-mein-teri.png",
    description: "Official music video for Aankhon Mein Teri.",
    roleBadge: "Lead Actress 🎵",
  },
  {
    id: "mv-naa-pushde",
    title: "Naa Pushde — Official Video",
    category: "music",
    sourcePlatform: "YouTube",
    youtubeId: "zUGvCrqR6HI",
    thumbnailUrl: "/images/naa-pushde.png",
    description: "Official music video for Naa Pushde.",
    roleBadge: "Lead Actress 🎵",
  },
];

export const VIDEO_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "music", label: "Music Videos" },
  { value: "interview", label: "Interviews" },
  { value: "podcast", label: "Podcasts" },
  { value: "vlog", label: "Vlogs" },
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "modeling", label: "Modeling" },
  { value: "pageant", label: "Pageants" },
  { value: "splitsvilla", label: "Splitsvilla" },
  { value: "lockupp", label: "Lock Upp" },
  { value: "music", label: "Music Videos" },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
  source: string;
  sourceUrl: string;
  date?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    "id": "g1",
    "src": "/images/splits-costume-1.png",
    "alt": "Splitsvilla X6 Outfit 1",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 1",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g2",
    "src": "/images/splits-costume-2.png",
    "alt": "Splitsvilla X6 Outfit 2",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 2",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g3",
    "src": "/images/splits-costume-3.png",
    "alt": "Splitsvilla X6 Outfit 3",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 3",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g4",
    "src": "/images/splits-costume-4.png",
    "alt": "Splitsvilla X6 Outfit 4",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 4",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g5",
    "src": "/images/splits-costume-5.png",
    "alt": "Splitsvilla X6 Outfit 5",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 5",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g6",
    "src": "/images/splits-costume-6.png",
    "alt": "Splitsvilla X6 Outfit 6",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 6",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g7",
    "src": "/images/splits-costume-7.png",
    "alt": "Splitsvilla X6 Outfit 7",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 7",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g8",
    "src": "/images/splits-costume-8.png",
    "alt": "Splitsvilla X6 Outfit 8",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 8",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g9",
    "src": "/images/splits-costume-9.png",
    "alt": "Splitsvilla X6 Outfit 9",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 9",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g10",
    "src": "/images/splits-costume-10.png",
    "alt": "Splitsvilla X6 Outfit 10",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 10",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g11",
    "src": "/images/splits-costume-11.png",
    "alt": "Splitsvilla X6 Outfit 11",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 11",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g12",
    "src": "/images/splits-costume-12.png",
    "alt": "Splitsvilla X6 Outfit 12",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 12",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g13",
    "src": "/images/splits-costume-13.png",
    "alt": "Splitsvilla X6 Outfit 13",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 13",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g14",
    "src": "/images/splits-costume-14.png",
    "alt": "Splitsvilla X6 Outfit 14",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 14",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g15",
    "src": "/images/splits-costume-15.png",
    "alt": "Splitsvilla X6 Outfit 15",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 15",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g16",
    "src": "/images/splits-costume-16.png",
    "alt": "Splitsvilla X6 Outfit 16",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 16",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g17",
    "src": "/images/splits-costume-17.png",
    "alt": "Splitsvilla X6 Outfit 17",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 17",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g18",
    "src": "/images/splits-costume-18.png",
    "alt": "Splitsvilla X6 Outfit 18",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 18",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g19",
    "src": "/images/splits-costume-19.png",
    "alt": "Splitsvilla X6 Outfit 19",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 19",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g20",
    "src": "/images/splits-costume-20.png",
    "alt": "Splitsvilla X6 Outfit 20",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 20",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g21",
    "src": "/images/splits-costume-21.png",
    "alt": "Splitsvilla X6 Outfit 21",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 21",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g22",
    "src": "/images/splits-costume-22.png",
    "alt": "Splitsvilla X6 Outfit 22",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 22",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g23",
    "src": "/images/splits-costume-23.png",
    "alt": "Splitsvilla X6 Outfit 23",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 23",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g24",
    "src": "/images/splits-costume-24.png",
    "alt": "Splitsvilla X6 Outfit 24",
    "category": "splitsvilla",
    "caption": "Splitsvilla X6 Outfit 24",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g25",
    "src": "/images/miss-rajasthan-crown.png",
    "alt": "Miss Rajasthan Crown",
    "category": "pageant",
    "caption": "Miss Rajasthan Crown",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g26",
    "src": "/images/miss-universe-gown.png",
    "alt": "Miss Universe Evening Gown",
    "category": "pageant",
    "caption": "Miss Universe Evening Gown",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g27",
    "src": "/images/miss-universe-national-costume.png",
    "alt": "Miss Universe National Costume",
    "category": "pageant",
    "caption": "Miss Universe National Costume",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g28",
    "src": "/images/pageant-crown.png",
    "alt": "Pageant Crown",
    "category": "pageant",
    "caption": "Pageant Crown",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g29",
    "src": "/images/pageant-stage.png",
    "alt": "Pageant Stage",
    "category": "pageant",
    "caption": "Pageant Stage",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g30",
    "src": "/images/lock-upp-entry.png",
    "alt": "Lock Upp Entry",
    "category": "lockupp",
    "caption": "Lock Upp Entry",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g31",
    "src": "/images/lock-upp-fan-favourite.png",
    "alt": "Lock Upp Fan Favourite",
    "category": "lockupp",
    "caption": "Lock Upp Fan Favourite",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g32",
    "src": "/images/modeling-ethnic.png",
    "alt": "Ethnic Modeling",
    "category": "modeling",
    "caption": "Ethnic Modeling",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g33",
    "src": "/images/modeling-runway.png",
    "alt": "Runway Modeling",
    "category": "modeling",
    "caption": "Runway Modeling",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g34",
    "src": "/images/eyes.png",
    "alt": "EYES Music Video",
    "category": "music",
    "caption": "EYES Music Video",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g35",
    "src": "/images/dooriyan.png",
    "alt": "Dooriyan Music Video",
    "category": "music",
    "caption": "Dooriyan Music Video",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g36",
    "src": "/images/nazar-lagi.png",
    "alt": "Nazar Lagi Music Video",
    "category": "music",
    "caption": "Nazar Lagi Music Video",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g37",
    "src": "/images/aankhon-mein-teri.png",
    "alt": "Aankhon Mein Teri Music Video",
    "category": "music",
    "caption": "Aankhon Mein Teri Music Video",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  },
  {
    "id": "g38",
    "src": "/images/naa-pushde.png",
    "alt": "Naa Pushde Music Video",
    "category": "music",
    "caption": "Naa Pushde Music Video",
    "source": "@akankshachoudhary_official",
    "sourceUrl": "https://www.instagram.com/akankshachoudhary_official/"
  }
];

export const FEATURED_FAN_MESSAGES = [
  {
    id: "fm1",
    author: "Priya",
    message: "You inspire me every day, Akanksha! Your journey from Rajasthan to the national stage is pure magic. ✨",
  },
  {
    id: "fm2",
    author: "Rahul",
    message: "Watching your growth from Splitsvilla to EYES has been incredible. Can't wait to see what's next! 🌟",
  },
  {
    id: "fm3",
    author: "Sneha",
    message: "Your strength on Lock Upp moved me to tears. You're a true warrior, Akku! 💪❤",
  },
];
