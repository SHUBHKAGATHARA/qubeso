import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashProvider from "@/components/SplashProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import EasterEggs from "@/components/EasterEggs";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Font display swap for better performance
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qubesotech.com'),
  title: {
    default: "QUBESO TECH - Premium IT Solutions & Development",
    template: "%s | QUBESO TECH"
  },
  description: "Enterprise-ready IT consulting and development services. Modern, trustworthy, and tech-driven solutions for your business. Specializing in web development, software solutions, and digital transformation.",
  keywords: [
    "IT consulting",
    "web development",
    "software development",
    "enterprise solutions",
    "QUBESO TECH",
    "digital transformation",
    "custom software",
    "UI/UX design",
    "full-stack development"
  ],
  authors: [{ name: "QUBESO TECH", url: "https://qubesotech.com" }],
  creator: "QUBESO TECH",
  publisher: "QUBESO TECH",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qubesotech.com",
    siteName: "QUBESO TECH",
    title: "QUBESO TECH - Premium IT Solutions & Development",
    description: "Enterprise-ready IT consulting and development services. Building modern, scalable solutions for forward-thinking businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QUBESO TECH - Premium IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QUBESO TECH - Premium IT Solutions",
    description: "Enterprise-ready IT consulting and development services",
    images: ["/og-image.png"],
    creator: "@qubesotech",
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#2B4593" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2B4593" />
      </head>
      <body className={inter.className}>
        <EasterEggs />
        <ScrollProgress />
        <SplashProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SplashProvider>
        <BackToTop />
      </body>
    </html>
  );
}
