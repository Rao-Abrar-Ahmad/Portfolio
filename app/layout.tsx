import type { Metadata, Viewport } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { Site } from "@/data/site";
import PersonSchema from "@/components/PersonSchema";

const kalam = Kalam({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

const patrickHand = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-patrick",
});

export const viewport: Viewport = {
  themeColor: "#e5e0d8",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: Site.title,
  description: Site.description,
  openGraph: {
    title: Site.title,
    description: Site.description,
    images: [Site.profilePic],
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
    images: [Site.profilePic],
  },
  icons: {
    icon: "/favicon.ico",
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
