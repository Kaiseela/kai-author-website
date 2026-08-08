import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./design-tokens.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kai Lablanche-Tirvassen | Author, Photographer and Explorer",
  description:
    "The official website of Kai Lablanche-Tirvassen—author, former police officer, British Army soldier, photographer, explorer, Scout volunteer and believer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
