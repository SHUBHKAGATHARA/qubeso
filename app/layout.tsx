import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashProvider from "@/components/SplashProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUBESO TECH - Premium IT Solutions & Development",
  description: "Enterprise-ready IT consulting and development services. Modern, trustworthy, and tech-driven solutions for your business.",
  keywords: ["IT consulting", "web development", "software development", "enterprise solutions", "QUBESO TECH"],
  authors: [{ name: "QUBESO TECH" }],
  openGraph: {
    title: "QUBESO TECH - Premium IT Solutions",
    description: "Enterprise-ready IT consulting and development services",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}
