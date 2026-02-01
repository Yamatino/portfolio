import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "./components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Amato | Full Stack Developer",
  description: "Portfolio of Lucas Amato - Full Stack Developer and Computer Science Student at UTN. Building modern web applications with React, TypeScript, and Firebase.",
  keywords: ["Lucas Amato", "Full Stack Developer", "React", "TypeScript", "Firebase", "Web Development"],
  authors: [{ name: "Lucas Amato" }],
  openGraph: {
    title: "Lucas Amato | Full Stack Developer",
    description: "Portfolio of Lucas Amato - Full Stack Developer and Computer Science Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
