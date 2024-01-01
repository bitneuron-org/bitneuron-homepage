import { TeamMember } from "./types";

export const HOMEPAGE_LINK = process.env.REACT_APP_HOMPAGE_URL || "/";
export const ABOUT_LINK = "/about";
export const APP_LINK = process.env.REACT_APP_URL || "https://wiki.bitneuron.org";
export const REWARD_LINK = "https://app.bitneuron.org/dashboard";
export const BLOG_LINK = "https://wiki.bitneuron.org/";
export const DOCS_LINK = "https://wiki.bitneuron.org/";
export const TWITTER_LINK = "https://twitter.com/bitneuron";
export const DISCORD_LINK = "https://discord.com/invite/C9dbNJkbD7";
export const GITHUB_LINK = "https://github.com/bitneuron-org";
export const WHITE_PAPER =
  "https://github.com/bitneuron-org/bitneuron-whitepaper/blob/main/whitepaper.pdf";
// export const WHITE_PAPER = process.env.PUBLIC_URL + "/whitepaper.pdf";
export const TELEGRAM_LINK = "https://t.me/bitneuron";
export const YOUTUBE_LINK = "https://www.youtube.com/channel/bitneuron";
export const CAREERS_LINK = "https://bitneuron.medium.com/jobs-bitneuron";
export const PRIVACY_LINK = "/privacy";
export const TOKENOMICS_LINK = "/tokenomics";
export const TOKEN_LINK = "https://coinmarketcap.com/currencies/bitneuron/";
export const GOVERNANCE_LINK = "/governance";
export const CERTIK_LINK = "https://www.certik.com/projects/bitneuron";
export const SLOWMIST_LINK = process.env.PUBLIC_URL + "/v2-audit-SlowMist.pdf";
export const SUBMITBUG_LINK = "https://forms.gle/oskeakWmLKeM8tdRA ";
export const ECOSYSTEM_LINK = "/ecosystem";
export const TEAM_LINK = "/team";
export const TERM_LINK = "/term";
export const ROADMAP_LINK = "/roadmap";
export const MEDIA_LINK = "/media";
export const menuItems = [
  {
    text: "Home",
    to: HOMEPAGE_LINK,
  },
  {
    text: "Tokenomics",
    to: TOKENOMICS_LINK,
  },
  {
    text: "Whitepaper",
    to: WHITE_PAPER,
    targetBlank: true,
  },
  {
    text: "Ecosystem",
    to: ECOSYSTEM_LINK,
    targetBlank: true,
  },
  {
    text: "Team",
    to: TEAM_LINK,
    targetBlank: true,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alex",
    role: "Head of Engineering",
    image: "images/T02B5SSLD6Z-U02AU61G1CP-0302c1b78681-512.png",
    bio: "Previously engineering lead at Meta & Uber. 15+ years research & engineering experience in decentralized networks and large-scale AI systems.",
  },
  {
    name: "Joshua",
    role: "Chief Engineer",
    image: "images/76.png",
    bio: "Previously engineering at multiple Web3 startups. 15+ years research & engineering experience in building user friendly UIs, and large-scale backend systems.",
  },
  {
    name: "Chen",
    role: "CTO",
    image: "images/8744.png",
    bio: "Previously engineering at big tech companies. 12+ years research & engineering experience in building large-scale backend systems.",
  },
  {
    name: "Anthony",
    role: "Head of Product",
    image: "images/4064.png",
    bio: "Previously product at SF bay area startups. Experienced in building products and community.",
  },
];

export const partners = [
  {
    name: "Litra",
    tag: "App",
    image: "/images/litra.png",
    bio: "Creating deep NFT liquidity using advanced bonding curves to empower NFT pricing",
  },
  {
    name: "zkMe",
    tag: "App",
    image: "https://zk.me/favicon.ico",
    bio: "zkMe is the only KYC solution to be fully decentralized, private-by-design and compliant with global AML requirements.",
  },
  {
    name: "0xscope",
    tag: "Data Publisher",
    image: "/images/0xscope.png",
    bio: "0xScope is a protocol created to standardize web2 & web3 data by building a Knowledge Graph.",
  },
  {
    name: "GoPlus",
    tag: "Data Publisher",
    image: "https://static2.gopluslabs.io/images/plus/favicon.ico",
    bio: 'GoPlus is working as the "security infrastructure" for web3 by providing open, permissionless, user-driven security services. GoPlus is building on the security data infrastructure and security service platform, making a safer web3 Ecosystem.',
  },
  {
    name: "Harmony",
    tag: "Chain",
    image: "/images/Harmony.svg",
    bio: "Harmony is an open and fast blockchain. Our mainnet runs Ethereum applications with 2-second transaction finality and 100 times lower fees.",
  },
  {
    name: "Injective",
    tag: "Chain",
    image: "https://injective.com/favicon.png",
    bio: "Build and use the best Web3 applications on Injective the fastest layer 1 blockchain shaping the future of finance.",
  },
  {
    name: "Sui",
    tag: "Chain",
    image:
      "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/643773c0d96a22a83c5baf48_Sui_Favicon.png",
    bio: "Sui is an innovative, decentralized Layer 1 blockchain that redefines asset ownership.",
  },
  {
    name: "Solana",
    tag: "Chain",
    image: "https://solana.com/favicon-32x32.png",
    bio: "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  },
  {
    name: "Ethereum",
    tag: "Chain",
    image: "https://ethereum.org/favicon-32x32.png",
    bio: "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
  },
  {
    name: "Optimism",
    tag: "Chain",
    image:
      "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/612d2f8f988b5f801bd0cf1e_favicon.png",
    bio: "Ethereum, scaled. Optimism is a low-cost and lightning-fast Ethereum L2 blockchain.",
  },
  {
    name: "Avalanche",
    tag: "Chain",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
    bio: "The Avalanche Foundation launches an incentive program focused on accelerating the adoption and growth of its novel Subnets, the premiere scaling solution for Web3 dApps.",
  },
  {
    name: "Polygon",
    tag: "Chain",
    image:
      "https://assets-global.website-files.com/637359c81e22b715cec245ad/63f775c741010796d62770fd_polygon-favicon.png",
    bio: "Polygon zkEVM Beta Mainnet is the next chapter of Ethereum Scaling.",
  },
  {
    name: "Arbitrum",
    tag: "Chain",
    image: "https://arbitrum.io/wp-content/uploads/2023/03/cropped-arbitrum.io-webclip-32x32.png",
    bio: "Arbitrum’s suite of scaling solutions provides faster speeds at a significantly lower cost, with the same level of security as Ethereum.",
  },
  {
    name: "BNB Chain",
    tag: "Chain",
    image: "https://dex-bin.bnbstatic.com/new/static/images/favicon.ico",
    bio: "The best-performing decentralized economy. Ready for massive user access.",
  },
  {
    name: "NextID",
    tag: "App",
    image: "/images/nextid.png",
    bio: "NextID is an issuer of verifiable digital certificates and is a developer of Web3 applications.",
  },
  {
    name: "Sui",
    tag: "Chain",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png",
    bio: "Sui is a first-of-its-kind Layer 1 blockchain and smart contract platform designed from the bottom up to make digital asset ownership fast, private, secure, and accessible to everyone.",
  },
  {
    name: "Aptos",
    tag: "Chain",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png",
    bio: "Aptos is a Layer 1 Proof-of-Stake (PoS) blockchain that employs a novel smart contract programming language called Move, a Rust-based programming language that was independently developed by Meta (formerly Facebook)’s Diem blockchain engineers.",
  },
  {
    name: "Sei",
    tag: "Chain",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/23149.png",
    bio: "Sei is the first sector-specific Layer 1 blockchain, specialized for trading to give exchanges an unfair advantage.",
  },
];
