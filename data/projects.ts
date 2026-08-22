export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  role?: string;
  metrics?: string[];
  liveUrl?: string;
  repoUrl?: string;
  confidential?: boolean;
  thumbnail: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "ozelu",
    title: "Ozelu — Photo & Document Printing E-commerce",
    summary:
      "A high-converting, web-based photo and document printing e-commerce platform featuring dynamic file previews and automated price calculation.",
    description:
      "Ozelu was built to revolutionize online printing services. Users can upload multi-page PDFs or high-res photo albums, select custom paper weights, sizes, and binding styles, and instantly view real-time price calculations before checking out seamlessly with Stripe. The application utilizes client-side rendering for canvas-based print previews combined with SSR for rapid initial loads and SEO optimization.",
    stack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Stripe", "Cloudinary"],
    role: "Architected and delivered end-to-end full-stack e-commerce system",
    metrics: ["3,500+ orders processed", "< 1.2s average page load speed", "99.8% customer satisfaction score"],
    liveUrl: "https://ozelu.com",
    confidential: false,
    thumbnail: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "sosync",
    title: "SoSync — Real-time Social Synchronization Engine",
    summary:
      "Open-source microservice engine designed for high-throughput multi-account content sync, webhooks routing, and background queue handling.",
    description:
      "SoSync handles massive content distribution across social platforms without rate-limit bottlenecks. Built on Nest.js and FastAPI microservices with Redis queues, it processes thousands of background tasks per second with low memory overhead and automatic retries.",
    stack: ["Nest.js", "TypeScript", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    role: "Lead Backend Developer & Systems Architect",
    metrics: ["150,000+ daily webhook events", "Sub-50ms sync processing latency", "Open Source project"],
    repoUrl: "https://github.com/raoabrar/sosync",
    confidential: false,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "omniticket",
    title: "OmniTicket — Large-Scale Event Ticketing SaaS",
    summary:
      "Enterprise event ticketing platform engineered for flash-sale seat reservations, real-time ticket scanning, and instant organizer payouts.",
    description:
      "OmniTicket powered major music festivals and tech conferences with zero crash incidents during high-concurrency ticket drops. Developed with Next.js App Router and Node.js microservices, featuring custom interactive seating chart rendering and anti-scalping digital ticket signatures.",
    stack: ["React", "Next.js", "Node.js", "Nest.js", "Tailwind CSS", "PostgreSQL"],
    role: "Lead Full Stack Developer & Front-End Architect",
    metrics: ["4,000+ events hosted", "260,000+ ticket sales", "Zero downtime during 50k peak conc. drops"],
    confidential: true,
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "craftycart",
    title: "CraftyCart — Custom Shopify App & Headless Storefront",
    summary:
      "Custom Shopify App & headless Remix frontend for customizable subscription bundles, multi-currency checkout, and analytics integration.",
    description:
      "CraftyCart enabled D2C e-commerce brands to offer dynamic multi-product build-your-own box subscriptions directly connected to Shopify's Admin GraphQL API. Delivered lightning-fast performance and custom checkout extensions.",
    stack: ["Shopify Liquid", "Remix", "FastAPI", "GraphQL", "Tailwind CSS"],
    role: "Shopify Specialist & Front-End Developer",
    metrics: ["+38% conversion rate lift", "2.1x faster load speed vs liquid theme", "Multi-currency checkout"],
    liveUrl: "https://craftycart-demo.vercel.app",
    confidential: false,
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
