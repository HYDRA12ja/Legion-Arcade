import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  facebook2,
  instagram2,
  c,
  tool,
  web,
  video,
  mobile,
  code,
  js,
  python,
  

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Telegram",
    url: " https://t.me/Gamesellin",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Discord",
    url: "https://discord.gg/reZHsP6h",
    onlyMobile: true,
  },
];

export const heroIcons = [
  { icon: facebook, url: "https://discord.gg/reZHsP6h" },
  { icon: discordBlack, url: "https://discord.gg/reZHsP6h" },
  { icon: instagram, url: "https://discord.gg/reZHsP6h" },
  { icon: twitter, url: "https://discord.gg/reZHsP6h" }
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

export const brainwaveServices = [
  "Modern Website Solutions",
  "Custom Business Software",
  "AI Marketing Solutions",
];

export const brainwaveServicesIcons = [
  photoshop,
  recording01,
  discord,
  chromecast,
  raindrop,
];

export const roadmap = [
  {
    id: "0",
    title: "Website Development",
    text: "Build a strong community of gamers, streamers, and developers who share a passion for gaming.Design and maintain professional websites with modern UI and performance optimization.",
    date: "Feb 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Software Engineering",
    text: "Develop scalable and secure software applications tailored to business needs.",
    date: "March 2025",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Business Growth & Marketing",
    text: "Expand your reach with AI-powered marketing strategies and creative content.",
    date: "Dese 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: " Automation Solutions",
    text: "Implement automation tools to streamline business operations.",
    date: "May 2026",
    status: "In progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and advanced technology, NobleX Digital delivers powerful websites, software, and AI marketing solutions for modern businesses.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: c,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: tool,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: code,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: web,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: js,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: video,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: mobile,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: python,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Community access, live streams, event participation",
    price: null,
    features: [
      "Join our Telegram & Discord gaming community",
      "Participate in community discussions and events",
      "Watch Game Blaze live streams on YouTube",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Everything in Basic Bundled with exclusive discounts and early access",
    price:  null,
    features: [
      "1 to 3 games for lifetime",
      "Exclusive discounts on premium game titles",
      "Early access to selected game releases",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "The ultimate gaming experience with personalized recommendations",
    price: null,
    features: [
      "3 to 10 games for lifetime",
      "Access to VIP game sales & limited edition content",
      "ersonalized game recommendations from our experts",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Professional Website Development",
    text: "We build fast, modern, and responsive websites designed to attract customers and deliver real business results.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Custom Software Solutions",
    text: "Powerful software systems tailored to your business needs to improve efficiency and automate processes.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI Marketing Solutions",
    text: "High-converting ads and content powered by AI to boost visibility, engagement, and sales.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Business Automation Systems",
    text: "Streamline your operations with smart automation tools that save time and increase productivity.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Creative Branding & Design",
    text: "Professional posters, ads, and digital content that make your brand stand out.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: " Reliable Support & Growth",
    text: "Get ongoing support and strategies to continuously improve and scale your business.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/reZHsP6h",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: photoshop,
    url: "http://www.youtube.com/@haydra-streaming",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/Gamesellin",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/share/1A3iikjgXj/?mibextid=wwXIfr ",
  },

  {
    id: "5",
    title: "YouTube",
    iconUrl: photoshop,
    url: "http://www.youtube.com/@ALFAStreaming",
  },
];
