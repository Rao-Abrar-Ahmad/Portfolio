import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { Site } from "@/data/site";

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

export const metadata: Metadata = {
  title: Site.title,
  description: Site.description,
  openGraph: {
    title: Site.title,
    description: Site.description,
    images: [Site.profilePic],
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
      </body>
    </html>
  );
}
