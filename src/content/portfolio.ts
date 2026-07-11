type ProjectLink = {
  label: string;
  href: string;
};

type PortfolioItem = {
  title: string;
  group: string;
  summary: string;
  image: string;
  links?: readonly ProjectLink[];
  tags: readonly string[];
};

export const majorPortfolio: readonly PortfolioItem[] = [
  {
    title: "Netra",
    group: "Major Project",
    summary:
      "AI and software observability work at the intersection of backend systems, infrastructure, MCP workflows, and product automation.",
    image: "/assets/projects/netra.png",
    links: [
      { label: "Site", href: "https://getnetra.ai/" },
      { label: "Docs", href: "https://docs.getnetra.ai/netra" },
      {
        label: "Video",
        href: "https://mintcdn.com/netra/66fG4i83m457hVIl/videos/netra-mcp.mp4?fit=max&auto=format&n=66fG4i83m457hVIl&q=85&s=c86df9ec84b891c8c947c92e020757df"
      }
    ],
    tags: ["AI", "observability", "infrastructure"]
  },
  {
    title: "Kresus Omni Chain Wallet",
    group: "Major Project",
    summary:
      "Part of a 7-member blockchain team building an omnichain wallet with NFT Lens, multisig, swaps, cross-chain product flows, $1M+ TVL, and 1000+ users.",
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
    group: "Major Project",
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
    group: "Major Project",
    summary: "Trustless rails for real-world payments. ETH India 2024 winning project.",
    image: "/assets/projects/zk-rail.png",
    links: [
      { label: "Project docs", href: "https://devfolio.co/projects/zkrail-5702" },
      { label: "Video", href: "https://youtu.be/JC36zOpardY" }
    ],
    tags: ["payments", "ZK", "ETH India"]
  }
];

export const fundedPortfolio: readonly PortfolioItem[] = [
  {
    title: "Memora",
    group: "Funded Project",
    summary:
      "Funded project and ETH Singapore 2024 winner: automated assurance and intelligent asset transfer system that attracted top VC attention.",
    image: "/assets/projects/memora.png",
    links: [
      { label: "Project files", href: "https://ethglobal.com/showcase/memora-77hf8" },
      {
        label: "Video",
        href: "https://ethglobal.storage/projects/77hf8/video/high.mp4?t=1783748765667"
      }
    ],
    tags: ["funded", "AI agents", "NFT"]
  }
];

export const clientPortfolio: readonly PortfolioItem[] = [
  {
    title: "Blockchain Based Unity Hyper Casual Game",
    group: "Client Delivered Project",
    summary:
      "Led a 2-developer team to complete an activity-rich casual game platform with blockchain integrations for Tenup.",
    image: "/assets/projects/unity-game.png",
    tags: ["Unity", "gaming", "client"]
  }
];

export const hackathonPortfolio: readonly PortfolioItem[] = [
  {
    title: "Maecenas",
    group: "Hackathon Project",
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
    group: "Hackathon Project",
    summary:
      "Lens Spring 2025 project and $25K winner: a social-powered meme economy where virality becomes value through creator meme tokens, engagement heat scores, staking, battles, and community-driven rewards.",
    image: "/assets/projects/memed-fun.jpeg",
    links: [
      { label: "Project", href: "https://memed.fun" },
      {
        label: "X video",
        href: "https://x.com/ChanchalDelson/status/1925239562751943078/video/1"
      }
    ],
    tags: ["Lens", "$25K winner", "meme economy"]
  },
  {
    title: "Heirary",
    group: "Hackathon Project",
    summary: "AI-powered onchain Telegram diary for asset management workflows.",
    image: "/assets/projects/heirary.jpeg",
    tags: ["AI", "telegram", "assets"]
  },
  {
    title: "RepCheck Protocol",
    group: "Hackathon Project",
    summary:
      "Reputation streamer using QuickNode Streams, QuickNode Functions, and Avail custom rollups. PYUSDC winner, Avail winner, and 2nd place overall.",
    image: "/assets/projects/repcheck.png",
    links: [
      { label: "Project files", href: "https://devfolio.co/projects/repcheck-0e48" },
      { label: "Video", href: "https://youtu.be/NXqSxOX44eQ" }
    ],
    tags: ["reputation", "QuickNode", "Avail"]
  },
  {
    title: "Priva Health",
    group: "Hackathon Project",
    summary: "Private and secure healthcare system concept for trust-minimized medical data flows.",
    image: "/assets/projects/priva-health.png",
    links: [
      { label: "Project files", href: "https://dorahacks.io/buidl/17673" }
    ],
    tags: ["privacy", "healthcare", "security"]
  },
  {
    title: "Oracle View",
    group: "Hackathon Project",
    summary: "AI-powered YouTube and onchain analysis project that won the FANTV Social-Fi track.",
    image: "/assets/projects/oracle-view.png",
    tags: ["AI", "Base", "Social-Fi"]
  }
];
