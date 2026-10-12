import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Velvet Sugar Bakery",
  tagline: "Custom cakes and cupcakes in Brampton, made for your celebration.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://velvet-sugar-bakery.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c98a92" }, // dusty rose from the logo
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton custom cakes",
    headline: "Cakes and cupcakes made for your moment",
    subhead: "Wedding cakes, birthday themes, baby showers, and sweet details, made to order. Send a DM with your date and idea to get started.",
    images: [
      { src: "/images/post-1.jpg", alt: "Just Married wedding cake by Velvet Sugar Bakery" },
      { src: "/images/post-5.jpg", alt: "Pastel unicorn birthday cake with rainbow details" },
      { src: "/images/post-4.jpg", alt: "Baby shower cupcakes with soft pink details" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom cakes and cupcakes",
    "Made to order in Brampton",
    "Orders by email or Instagram DM",
    "Two weeks notice, please",
  ],

  about: {
    title: "Sweet details, made for you",
    body: [
      "Velvet Sugar Bakery creates custom cakes and cupcakes in Brampton, Ontario, for weddings, birthdays, baby showers, and every celebration in between.",
      "Share your date, how many people you are serving, a flavour idea, and any design inspo. A 75% non-refundable deposit confirms your order, and we ask for two weeks notice.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Custom birthday cakes for a shared celebration" },
  },

  menu: {
    title: "What we make",
    intro: "Every order is custom. Quotes are shared in your message based on size, design, and date.",
    variant: "cards",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM",
        items: [
          {
            name: "Wedding cakes",
            description: "Elegant tiers and floral finishes for your big day.",
            image: { src: "/images/post-1.jpg", alt: "Just Married wedding cake" },
            href: "https://www.instagram.com/p/DePf1T9FoAF/",
          },
          {
            name: "Birthday cakes",
            description: "Themed designs for kids and grown-ups alike.",
            image: { src: "/images/post-5.jpg", alt: "Pastel unicorn birthday cake" },
            href: "https://www.instagram.com/p/DdR9y7ygTZx/",
          },
          {
            name: "Character and theme cakes",
            description: "From Minecraft builds to favourite characters.",
            image: { src: "/images/post-3.jpg", alt: "Minecraft themed birthday cake" },
            href: "https://www.instagram.com/p/DeFlmKyBFES/",
          },
          {
            name: "Custom cupcakes",
            description: "Pretty sets for baby showers, birthdays, and parties.",
            image: { src: "/images/post-4.jpg", alt: "Baby shower cupcakes" },
            href: "https://www.instagram.com/p/DeFiIvZh3Mq/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1164,
        alt: "Just Married wedding cake",
        caption: "Just Married",
        href: "https://www.instagram.com/p/DePf1T9FoAF/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1440,
        alt: "Brazil themed birthday cake with soccer details",
        caption: "Birthday cake for Joshua",
        href: "https://www.instagram.com/p/DeKjm4vBEbI/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1440,
        alt: "Minecraft themed birthday cake",
        caption: "Minecraft birthday",
        href: "https://www.instagram.com/p/DeFlmKyBFES/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1267,
        alt: "Baby shower cupcakes",
        caption: "Baby shower cupcakes",
        href: "https://www.instagram.com/p/DeFiIvZh3Mq/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Pastel unicorn birthday cake",
        caption: "Unicorn sparkle",
        href: "https://www.instagram.com/p/DdR9y7ygTZx/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1440,
        alt: "Blue birthday cake for a two year old",
        caption: "Turning two",
        href: "https://www.instagram.com/p/DdCyjfNllYX/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1440,
        alt: "Custom birthday cake with playful design",
        caption: "Birthday cake for Sea",
        href: "https://www.instagram.com/p/DcvvC8-yVnr/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1440,
        alt: "Unicorn and Dragon Ball birthday cakes",
        caption: "Lana and Angelo",
        href: "https://www.instagram.com/p/DcbcU0UjpuL/",
      },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "velvetsugarbakerygta",
    embeds: [
      "https://www.instagram.com/p/DePf1T9FoAF/",
      "https://www.instagram.com/p/DdR9y7ygTZx/",
      "https://www.instagram.com/p/DeFiIvZh3Mq/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken by email or Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi Velvet Sugar Bakery! I would love to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "Please allow two weeks notice. A 75% non-refundable deposit confirms your order.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send an email or Instagram DM with your date, servings or size, flavour, and design idea. You will get a quote back in the chat.",
    },
    {
      q: "How far ahead should I book?",
      a: "Please allow two weeks notice so there is time to design and bake your order.",
    },
    {
      q: "Is a deposit required?",
      a: "Yes. A 75% non-refundable deposit is required to confirm your order.",
    },
    {
      q: "Where are you based?",
      a: "Velvet Sugar Bakery is in Brampton, Ontario, serving the GTA.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "Velvet Sugar Bakery | Custom cakes and cupcakes in Brampton",
    description:
      "Custom cakes and cupcakes in Brampton, Ontario. Weddings, birthdays, and baby showers. Order by email or Instagram DM.",
    keywords: [
      "custom cakes Brampton",
      "cupcakes Brampton",
      "wedding cakes Brampton",
      "birthday cakes GTA",
      "custom cakes Toronto",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
