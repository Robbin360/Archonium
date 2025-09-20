import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import "../src/styles/globals.css";
import "../src/styles/custom.css";
import { SovereigntyInitializer } from "@/lib/sovereignty";

// Initialize fonts with preload and optimization
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-authority',
  display: 'swap',
  preload: true,
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-power',
  display: 'swap',
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-control',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'ARCHONIUM | Sovereign System Validation',
  description: 'ARCHONIUM: Absolute authority in system validation. Validation for systems that cannot fail. Where sovereignty meets precision.',
  keywords: ['system validation', 'sovereign authority', 'absolute precision', 'zero failure'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'ARCHONIUM | Sovereign System Validation',
    description: 'Absolute authority in system validation. Validation for systems that cannot fail.',
    type: 'website',
    url: '/',
    siteName: 'ARCHONIUM',
    images: [
      {
        url: '/assets/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ARCHONIUM - Sovereign System Validation',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHONIUM | Sovereign System Validation',
    description: 'Absolute authority in system validation. Validation for systems that cannot fail.',
    images: ['/assets/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${jetbrains.variable}`}>
      <body className="font-authority antialiased bg-void-absolute text-control-white min-h-screen">
        {children}
        <SovereigntyInitializer />
      </body>
    </html>
  );
}
