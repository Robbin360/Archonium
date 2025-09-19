import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../src/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archonium | Intelligence & Validation for Elite Systems",
  description:
    "Archonium crystallizes outcomes for elite organizations. Exclusive validation, governance, and inevitable advantage.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
  alternates: {
    canonical: "https://archonium.global/",
  },
  openGraph: {
    title: "Archonium | Intelligence & Validation for Elite Systems",
    description:
      "Archonium crystallizes outcomes for elite organizations. Exclusive validation, governance, and inevitable advantage.",
    url: "https://archonium.global/",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Archonium",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
