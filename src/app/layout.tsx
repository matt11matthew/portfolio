import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewe.me"),
  title: {
    default: "Matthew E. — Full-Stack Engineer & Platform Operator",
    template: "%s — Matthew E.",
  },
  description:
    "Full-stack engineering, backend systems, DevOps, production operations, automation, and plugin development—from idea to uptime.",
  openGraph: {
    title: "Matthew E. — I build, ship, and keep systems alive.",
    description:
      "Full-stack engineering, platform operations, automation, and plugin systems.",
    url: "https://matthewe.me",
    siteName: "Matthew E.",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
