"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, Briefcase, FolderOpen, Mail } from "lucide-react";
import Image from "next/image";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  // { name: "Blog", path: "/blog" }, // Hidden for now
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const navigationTabs = [
    { title: "Home", icon: Home, path: "/" },
    { title: "About", icon: Info, path: "/about" },
    { title: "Services", icon: Briefcase, path: "/services" },
    { title: "Portfolio", icon: FolderOpen, path: "/portfolio" },
    { title: "Contact", icon: Mail, path: "/contact" },
  ];

  const handleTabChange = (index: number | null) => {
    if (index !== null && navigationTabs[index]) {
      window.location.href = navigationTabs[index].path;
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split nav items for centered logo layout
  const leftNavItems = navItems.slice(0, 2); // Home, About
  const rightNavItems = navItems.slice(2); // Services, Portfolio, Contact

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      {/* Floating Container with Premium Glassmorphism */}
      <div className="container mx-auto px-2 sm:px-6 py-3 md:py-4">
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.85)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          }}
          transition={{ duration: 0.3 }}
          className={`rounded-none sm:rounded-2xl border-0 sm:border transition-all duration-300 ${scrolled
            ? "sm:shadow-xl sm:border-gray-200/60"
            : "sm:shadow-lg sm:border-gray-100/40"
            }`}
        >
          <div className="px-4 sm:px-6 py-2 md:py-3">
            {/* Desktop Navigation - Logo Left Layout */}
            <div className="hidden md:flex items-center justify-between gap-8 h-12">
              {/* Logo - Left Side */}
              <Link href="/" className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center"
                >
                  <Image
                    src="/qubeso-logo-transparent.png"
                    alt="Qubeso Tech Logo"
                    width={500}
                    height={166}
                    className="h-36 md:h-40 w-auto object-contain -my-8 md:-my-10"
                    priority
                    style={{ mixBlendMode: 'normal' }}
                  />
                </motion.div>
              </Link>


              {/* Navigation & CTA - Right Side */}
              <div className="flex items-center gap-8">
                {/* Expandable Tabs */}
                <ExpandableTabs
                  tabs={navigationTabs.map(({ title, icon }) => ({ title, icon }))}
                  activeColor="text-brand-primary"
                  className="border-brand-primary/20"
                  onChange={handleTabChange}
                />

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 bg-brand-primary text-white rounded-xl font-medium text-sm shadow-lg hover:shadow-xl hover:bg-brand-hover transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between w-full gap-2">
              {/* Mobile Logo */}
              <Link href="/" className="flex-shrink-0 min-w-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center"
                >
                  <Image
                    src="/qubeso-logo-transparent.png"
                    alt="Qubeso Tech Logo"
                    width={300}
                    height={100}
                    className="h-16 xs:h-20 sm:h-24 w-auto max-w-full object-contain"
                    priority
                    style={{ mixBlendMode: 'normal' }}
                  />
                </motion.div>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 flex-shrink-0"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu - Enhanced Sliding Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl md:hidden overflow-y-auto border-l border-gray-200/60"
            >
              <div className="p-6 space-y-6">
                {/* Close button */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-200/60">
                  <span className="text-lg font-bold text-brand-primary pl-1">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors -mr-0.5"
                  >
                    <X className="w-5 h-5 text-text-muted" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link href={item.path}>
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className={`py-4 px-6 rounded-xl font-medium transition-all duration-300 ${pathname === item.path
                            ? "bg-brand-primary text-white shadow-lg"
                            : "text-text-primary hover:bg-brand-primary/10 hover:text-brand-primary"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            {pathname === item.path && (
                              <motion.div
                                layoutId="mobile-indicator"
                                className="w-2 h-2 rounded-full bg-white"
                              />
                            )}
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-hover text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </motion.button>
                </Link>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-gray-200/60"
                >
                  <p className="text-xs text-text-muted text-center">
                    © 2026 Qubeso Tech. Premium Solutions.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
