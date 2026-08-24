import type { Metadata, Viewport } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { Site } from "@/data/site";
import PersonSchema from "@/components/PersonSchema";

const kalam = Kalam({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#e5e0d8",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL(Site.url),
  title: {
    default: Site.title,
    template: `%s | ${Site.name}`,
  },
  description: Site.description,
  keywords: [
    "Rao Abrar Ahmad",
    "Full Stack Developer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Nest.js Developer",
    "FastAPI Developer",
    "Shopify Developer",
    "SaaS Developer",
    "E-commerce Developer",
    "Freelance Developer Rawalpindi",
    "Pakistan Full Stack Developer",
  ],
  authors: [{ name: Site.name, url: Site.url }],
  creator: Site.name,
  publisher: Site.name,
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Site.url,
    title: Site.title,
    description: Site.description,
    siteName: Site.name,
    images: [
      {
        url: Site.profilePic,
        width: 800,
        height: 800,
        alt: Site.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: Site.title,
    description: Site.description,
    creator: "@rao_abrar_ahmad",
    site: "@rao_abrar_ahmad",
    images: [Site.profilePic],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kalam.variable} ${patrickHand.variable}`}>
      <body className="antialiased font-patrick text-pencil selection:bg-postit selection:text-pencil">
        {children}
        {modal}
        <PersonSchema />
      </body>
    </html>
  );
}
