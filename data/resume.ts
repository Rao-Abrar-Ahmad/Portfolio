export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
};

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
  bullets?: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export const resumeData = {
  name: "Rao Abrar Ahmad",
  title: "Full Stack Developer | MERN Stack | React & Next.js & Node.js",
  email: "raoabrar629@gmail.com",
  phone: "+92 340 798 5784",
  whatsapp: "https://wa.me/+923407985784",
  location: "Rawalpindi, Punjab, Pakistan",
  github: "https://github.com/Rao-Abrar-Ahmad",
  linkedin: "https://www.linkedin.com/in/rao-abrar-ahmad",

  summary:
    "Full Stack Developer with 3+ years of experience designing, building, and shipping production-grade web and mobile applications across the complete MERN stack, from REST API architecture and database design to cloud deployment and performance optimization. Proven across diverse project types including SaaS platforms, e-commerce systems, real-time applications, and mobile apps, with hands-on expertise in Node.js, Express.js, React.js, Next.js, TypeScript, MongoDB, AWS, and Stripe. Experienced team lead who has managed full client lifecycles end-to-end, mentored junior developers, and consistently delivered scalable, maintainable full-stack solutions in fast-paced environments.",

  experience: [
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "Oct 2025 – Present",
      location: "Remote",
      type: "Freelance",
      bullets: [
        "Delivered custom full-stack web applications and SaaS solutions for global clients using React, Next.js, Node.js, TypeScript, and MongoDB.",
        "Architected scalable RESTful APIs, integrated Stripe payment gateways, automated workflows, and implemented responsive frontend interfaces focused on performance and UX.",
        "Managed end-to-end project lifecycles from requirement scoping and client communication to deployment on AWS, Vercel, and Cloudflare, ensuring high reliability and performance.",
      ],
    },
    {
      company: "RF Technologies",
      role: "Full Stack Developer",
      period: "Sep 2022 – Mar 2026",
      location: "Islamabad, Pakistan",
      type: "On-site",
      bullets: [
        "Architected and delivered a SaaS event ticketing platform from scratch: Next.js (TypeScript) frontend, Node.js marketing module backend, and REST API integration, shipping the full production build across multiple environments in 4 weeks; platform now hosts 4,000+ events, has processed 260,000+ ticket sales, and achieves 3x year-over-year creator growth with 90+ desktop and 80+ mobile PageSpeed scores.",
        "Engineered the full-stack photo and document printing e-commerce platform end-to-end: Next.js frontend on Cloudflare, Node.js/Express.js REST API on Heroku and AWS, covering physical print orders, digital document sales, Stripe payment processing with webhook handling, automated PDF generation, and email attachment delivery for digital products.",
        "Built a full-featured organizer CMS and internal analytics dashboard with server-side rendering, role-based access control (Super Admin, Organizer, Staff), Stripe subscription billing with plan management, and real-time financial reporting using Chart.js and Recharts; integrated AWS S3, Cloudinary, Sentry, GTM, and Google Analytics across production platforms.",
        "Served as Lead for a development team owning sprint planning, task assignments, code reviews, and technical mentoring while independently managing full client lifecycles from requirement gathering and scoping through development, QA, revision cycles, and project close across 100+ production engagements.",
        "Collaborated with 3 external digital marketing agencies and creative studios within multi-team partner workflows, co-delivering Shopify storefronts, Shopify Plus customizations, and 10+ zero-downtime platform migrations from Magento, WooCommerce, and Etsy to Shopify with zero data loss.",
      ],
    },
    {
      company: "Technoworld Solutions",
      role: "Full Stack Developer",
      period: "Oct 2025 – Mar 2026",
      location: "Remote",
      type: "Contract",
      bullets: [
        "Engineered a full-stack travel booking platform from scratch using Next.js and Node.js/Express.js, delivering dynamic property listings, advanced search and filtering, and a complete end-to-end secure booking and payment workflow.",
        "Built a custom e-commerce platform with product management, shopping cart, inventory tracking, and Stripe-integrated checkout with order management and fulfillment workflows.",
        "Developed RESTful APIs with JWT authentication and role-based access control (RBAC) across multiple MERN stack applications, applying consistent security patterns including input validation, rate limiting, and secure session management.",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      slug: "event-ticketing",
      title: "SaaS Event Ticketing Platform",
      summary:
        "Production SaaS ticketing platform hosting 4,000+ events and 260,000+ ticket sales with organizer CMS, marketing module, and real-time financial analytics.",
      description:
        "Built the complete frontend (Next.js/TypeScript) and Node.js marketing backend from zero to production in 4 weeks. Platform now supports 4,000+ events, 260,000+ ticket sales, and 3x YoY creator growth with 90+ desktop / 80+ mobile PageSpeed scores. Engineered marketing backend with email campaign delivery, push notifications, analytics tracking, and third-party marketing API integrations. Built organizer CMS with Stripe subscription billing, multi-tier RBAC (Super Admin, Organizer, Staff), and real-time financial reporting using Chart.js and Recharts.",
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "MSSQL",
        "Stripe",
        "AWS",
        "Shadcn UI",
        "Chart.js",
        "Recharts",
        "JWT",
        "RBAC",
      ],
      role: "Architect & Lead Developer (RF Technologies)",
      metrics: [
        "4,000+ events hosted",
        "260,000+ ticket sales",
        "3x YoY creator growth",
        "90+ desktop / 80+ mobile PageSpeed",
      ],
      bullets: [
        "Built complete frontend and Node.js marketing backend from zero to production in 4 weeks; supports 4,000+ events, 260,000+ ticket sales, and 3x YoY creator growth.",
        "Engineered marketing backend with email campaign delivery, push notifications, analytics event tracking, and third-party marketing API integrations.",
        "Built organizer CMS with Stripe subscription billing, multi-tier RBAC, and real-time financial analytics dashboards.",
      ],
      confidential: true,
      thumbnail:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      slug: "ozelu",
      title: "Photo & Document Printing E-commerce",
      summary:
        "Full-stack photo and document printing e-commerce platform covering physical print orders, digital sales, Stripe payment webhooks, and automated PDF delivery.",
      description:
        "Architected and delivered the complete full-stack platform covering physical printing orders, digital document sales, Stripe payment processing with webhook handling, automated PDF generation, and email attachment delivery for digital products. Integrated AWS S3 and Cloudinary for media storage; implemented Sentry error monitoring and GTM/Google Analytics for full e-commerce event tracking. Deployed frontend on Cloudflare and backend on Heroku/AWS.",
      stack: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "AWS S3",
        "Cloudinary",
        "Heroku",
        "Cloudflare",
        "Sentry",
        "GTM",
        "Google Analytics",
      ],
      role: "Full Stack Developer (RF Technologies)",
      metrics: [
        "Physical & digital print e-commerce",
        "Stripe webhook & payment processing",
        "Automated PDF generation & email delivery",
      ],
      bullets: [
        "Architected full-stack platform for physical print orders & digital document sales with automated PDF generation and email attachments.",
        "Integrated AWS S3 and Cloudinary for media storage; implemented Sentry error monitoring and GTM/Google Analytics e-commerce event tracking.",
      ],
      confidential: true,
      thumbnail:
        "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      slug: "sosync",
      title: "SoSync — Crowdsourced Disaster Alert & Safety App",
      summary:
        "Cross-platform disaster alert app with real-time reporting, FCM push notifications, OpenAI report analysis, and interactive Google Maps mapping.",
      description:
        "Built a cross-platform iOS and Android disaster alert app with real-time disaster reporting, location-based push notifications via Firebase Cloud Messaging, and community-powered report verification with an admin verification system. Integrated OpenAI API for automated disaster report analysis and classification; implemented Google Maps SDK for interactive real-time incident mapping and SOS alert geolocation; used Firebase Firestore real-time listeners for live data sync.",
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase Firestore",
        "Firebase Cloud Messaging",
        "Firebase Storage",
        "OpenAI API",
        "Google Maps SDK",
        "Sentry",
      ],
      role: "Lead Mobile Developer & Creator",
      metrics: [
        "Real-time SOS geolocation mapping",
        "OpenAI automated report classification",
        "Firebase Cloud Messaging notifications",
      ],
      bullets: [
        "Built cross-platform iOS and Android disaster alert app with real-time disaster reporting and location-based push notifications.",
        "Integrated OpenAI API for automated report analysis and Google Maps SDK for interactive incident mapping.",
      ],
      repoUrl: "https://github.com/Rao-Abrar-Ahmad/Sosync",
      confidential: false,
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      slug: "al-hayat",
      title: "Al-Hayat Blue Pottery — Headless Storefront",
      summary:
        "Fully responsive headless e-commerce storefront with dynamic product pages, category filtering, custom MongoDB Atlas CMS, and Cloudinary pipeline.",
      description:
        "Built a fully responsive headless e-commerce storefront with dynamic product pages, category filtering, and a custom CMS backed by MongoDB Atlas for product and content management. Integrated Cloudinary for optimized image delivery and asset management; deployed on Vercel with automated CI/CD pipelines.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB Atlas",
        "Cloudinary",
        "Vercel",
        "CI/CD",
      ],
      role: "Headless E-commerce Developer",
      metrics: [
        "Dynamic product filtering & category navigation",
        "Custom MongoDB Atlas CMS",
        "Vercel CI/CD deployment",
      ],
      bullets: [
        "Built responsive headless e-commerce storefront with dynamic product pages and custom CMS backed by MongoDB Atlas.",
        "Integrated Cloudinary for image optimization; deployed on Vercel with automated CI/CD pipelines.",
      ],
      liveUrl: "https://al-hayat-blue-pottery.com",
      confidential: false,
      thumbnail:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      slug: "dailypin",
      title: "DailyPin — Windows Desktop Task Widget",
      summary:
        "Ultra-lightweight (~4.2 MB executable, ~30MB RAM), frameless, transparent Windows desktop widget built with Tauri v2, Rust, React 19, and Vite.",
      description:
        "DailyPin is an ultra-lightweight, frameless, transparent Windows desktop widget designed to keep your daily priorities right on your desktop home screen. Built on Tauri v2 with a Rust backend and React 19 / TypeScript frontend, it features modern dark glassmorphism, pin-always-on-top modes, global keyboard shortcut (Ctrl+Shift+T) toggle, Windows system tray integration, auto-start on boot, task & coordinate persistence across reboots, and zero-overhead performance (~30MB RAM). Download pre-compiled portable .exe and Windows setup installers directly from the GitHub repository.",
      stack: [
        "Tauri v2",
        "Rust",
        "React 19",
        "TypeScript",
        "Vite",
        "Vanilla CSS",
        "Lucide React",
      ],
      role: "Creator & Desktop Developer",
      metrics: [
        "~4.2 MB portable .exe executable",
        "~30 MB background RAM usage",
        "Global toggle shortcut (Ctrl + Shift + T)",
        "Windows System Tray & Boot Auto-Start",
      ],
      bullets: [
        "Built frameless transparent Windows desktop widget using Tauri v2, Rust backend, and React 19 / Vite frontend.",
        "Engineered global shortcut toggle (Ctrl+Shift+T), system tray integration, Windows auto-start on boot, and state/coordinate persistence.",
      ],
      repoUrl: "https://github.com/Rao-Abrar-Ahmad/dailypin",
      liveUrl:
        "https://github.com/Rao-Abrar-Ahmad/dailypin/raw/main/dist_tauri/DailyPin_0.1.0_x64-setup.exe",
      confidential: false,
      thumbnail:
        "https://raw.githubusercontent.com/Rao-Abrar-Ahmad/dailypin/main/assets/preview.png",
      images: [
        "https://raw.githubusercontent.com/Rao-Abrar-Ahmad/dailypin/main/assets/preview.png",
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      slug: "travel-booking",
      title: "Full-Stack Travel Booking Platform",
      summary:
        "Full-stack property reservation platform with dynamic property listings, advanced search & filtering, secure booking workflows, and JWT/RBAC security.",
      description:
        "Engineered a full-stack travel booking platform from scratch using Next.js and Node.js/Express.js, delivering dynamic property listings, advanced search and filtering, and a complete end-to-end secure booking and payment workflow. Developed RESTful APIs with JWT authentication and role-based access control (RBAC), applying consistent security patterns including input validation and rate limiting.",
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "RBAC",
        "Tailwind CSS",
      ],
      role: "Full Stack Developer (Technoworld Solutions)",
      metrics: [
        "End-to-end secure booking & payment workflow",
        "Advanced property search & filtering",
        "JWT authentication & RBAC protection",
      ],
      bullets: [
        "Engineered full-stack travel booking platform with dynamic property listings, advanced search/filtering, and secure booking.",
        "Developed RESTful APIs with JWT authentication and role-based access control (RBAC).",
      ],
      confidential: false,
      thumbnail:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ] as Project[],

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Native (Expo)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Framer Motion",
      "GSAP",
      "Astro",
      "Remix",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "WebSockets",
      "FastAPI (Python)",
    ],
    databases: [
      "MongoDB",
      "MongoDB Atlas",
      "MSSQL",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Firebase Firestore",
      "Redis",
    ],
    aiAutomation: [
      "OpenAI API",
      "LLM API Integration",
      "AI-Powered Feature Development",
      "Automated Data Pipelines",
    ],
    cloudDevOps: [
      "AWS (S3, EC2, Lambda)",
      "Heroku",
      "Cloudflare",
      "Vercel",
      "Railway",
      "Firebase",
      "CI/CD Pipelines",
    ],
    paymentsMedia: [
      "Stripe (Payments, Subscriptions, Webhooks, Payouts)",
      "Cloudinary",
      "AWS S3",
      "SendGrid",
      "Mailchimp",
    ],
    monitoringAnalytics: [
      "Sentry",
      "Google Tag Manager (GTM)",
      "Google Analytics (GA)",
      "Microsoft Clarity",
    ],
    toolsMethods: [
      "Git",
      "GitHub",
      "Postman",
      "Agile/Scrum",
      "Sprint Planning",
      "Code Review",
      "Technical Mentoring",
    ],
  },

  education: [
    {
      degree: "BSc Information Technology",
      institution: "Virtual University of Pakistan",
      period: "2024 – 2026",
    },
    {
      degree: "BSc Computer Science",
      institution: "University of Sargodha",
      period: "2017 – 2019",
    },
  ] as EducationItem[],
};
