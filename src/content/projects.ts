type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  links?: readonly ProjectLink[];
  tags: readonly string[];
};

export const projects: readonly Project[] = [
  {
    title: "Netra",
    category: "Major Work",
    summary: "AI agent observability, evaluation, simulation, insights, security testing, and MCP workflow systems.",
    image: "/assets/projects/netra.png",
    links: [
      { label: "Site", href: "https://getnetra.ai/" },
      { label: "Docs", href: "https://docs.getnetra.ai/netra" },
      {
        label: "Video",
        href: "https://mintcdn.com/netra/66fG4i83m457hVIl/videos/netra-mcp.mp4?fit=max&auto=format&n=66fG4i83m457hVIl&q=85&s=c86df9ec84b891c8c947c92e020757df"
      }
    ],
    tags: ["AI", "observability", "agents"]
  },
  {
    title: "Kresus Omni Chain Wallet",
    category: "Major Work",
    summary: "Multichain wallet work across NFT Lens, multisig, swaps, and wallet infrastructure with $1M+ TVL and 1000+ users.",
    image: "/assets/projects/kresus.png",
    links: [
      { label: "Site", href: "https://kresus.com/" },
      {
        label: "Docs",
        href: "https://docs.kresus.com/?_gl=1*1e0rf2k*_ga*MzAyMDc2Ni4xNzgzNzQ4NDg0*_ga_R50W4244TR*czE3ODM3NDg0ODMkbzEkZzAkdDE3ODM3NDg0ODMkajYwJGwwJGgw*_gcl_au*MTExODE0MjIxOS4xNzgzNzQ4NDg0"
      }
    ],
    tags: ["wallet", "omnichain", "multisig"]
  },
  {
    title: "Sigillum Protocol",
    category: "Major Work",
    summary: "Protocol work focused on trust, verification, and reliable onchain coordination.",
    image: "/assets/projects/sigillum.png",
    links: [
      {
        label: "X video",
        href: "https://x.com/ChanchalDelson/status/1945080400717733925/video/1"
      }
    ],
    tags: ["protocol", "verification", "onchain"]
  },
  {
    title: "ZK Rail",
    category: "Major Work",
    summary: "Trustless rails for real-world payments. ETH India 2024 winning project.",
    image: "/assets/projects/zk-rail.png",
    links: [
      { label: "Project docs", href: "https://devfolio.co/projects/zkrail-5702" },
      { label: "Video", href: "https://youtu.be/JC36zOpardY" }
    ],
    tags: ["ZK", "payments", "ETH India"]
  },
  {
    title: "Memora",
    category: "Funded Project",
    summary:
      "Funded project and ETH Singapore 2024 winner: intelligent asset transfer with smart contracts, backend coordination, and AI assistance.",
    image: "/assets/projects/memora.png",
    links: [
      { label: "Project files", href: "https://ethglobal.com/showcase/memora-77hf8" },
      {
        label: "Video",
        href: "https://ethglobal.storage/projects/77hf8/video/high.mp4?t=1783748765667"
      }
    ],
    tags: ["funded", "AI agents", "NFT"]
  },
  {
    title: "Blockchain Based Unity Hyper Casual Game",
    category: "Client Delivered Project",
    summary:
      "Led a 2-developer team to complete an activity-rich casual game platform with blockchain integrations for Tenup.",
    image: "/assets/projects/unity-game.png",
    tags: ["Unity", "gaming", "client"]
  },
  {
    title: "Maecenas",
    category: "Hackathon Project",
    summary:
      "Research Funding Protocol for a new culture of research: 30+ users, 20 funded commissions, 71 evidence unlocks, 10 contributors rewarded, and USDC credited to researchers.",
    image: "/assets/projects/maecenas.png",
    links: [
      { label: "Try project", href: "https://maecenas.in" },
      {
        label: "X video",
        href: "https://x.com/ChanchalDelson/status/2074183870120161318/video/1"
      }
    ],
    tags: ["research", "x402", "USDC"]
  },
  {
    title: "Memed.Fun",
    category: "Hackathon Project",
    summary:
      "$25K Lens Spring 2025 winner: a social-powered meme economy where creators mint meme tokens and engagement fuels heat score, staking, and rewards.",
    image: "/assets/projects/memed-fun.jpeg",
    links: [
      { label: "Project", href: "https://memed.fun" },
      {
        label: "X video",
        href: "https://x.com/ChanchalDelson/status/1925239562751943078/video/1"
      }
    ],
    tags: ["Lens", "$25K winner", "social"]
  },
  {
    title: "Oracle View",
    category: "Hackathon Project",
    summary: "AI-powered onchain video analysis for making vision signals usable in blockchain workflows.",
    image: "/assets/projects/oracle-view.png",
    tags: ["AI", "vision", "oracles"]
  },
  {
    title: "RepCheck Protocol",
    category: "Hackathon Project",
    summary: "Real-time onchain reputation primitive. PYUSDC winner, Avail winner, and 2nd place overall.",
    image: "/assets/projects/repcheck.png",
    links: [
      { label: "Project files", href: "https://devfolio.co/projects/repcheck-0e48" },
      { label: "Video", href: "https://youtu.be/NXqSxOX44eQ" }
    ],
    tags: ["reputation", "PYUSDC", "Avail"]
  },
  {
    title: "Heirary",
    category: "Hackathon Project",
    summary: "AI-powered onchain Telegram diary for asset management and inheritance workflows.",
    image: "/assets/projects/heirary.jpeg",
    tags: ["agents", "telegram", "assets"]
  },
  {
    title: "Priva Health",
    category: "Hackathon Project",
    summary: "Private and secure healthcare system concept focused on trust-minimized data flows.",
    image: "/assets/projects/priva-health.png",
    links: [
      { label: "Project files", href: "https://dorahacks.io/buidl/17673" }
    ],
    tags: ["privacy", "healthcare", "security"]
  }
];
