"use client";

import { useState } from "react";
import { SidebarNav } from "./components/SidebarNav";
import { Menu, X, Bell, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background-secondary flex">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 bg-white border-r border-border-default h-screen sticky top-0 z-30">
                <SidebarNav />
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
                        >
                            <SidebarNav />
                            <button
                                onClick={() => setIsMobileOpen(false)}
                                className="absolute top-4 right-4 p-2 text-text-muted hover:bg-gray-100 rounded-lg"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-border-light sticky top-0 z-20 px-4 sm:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="p-2 lg:hidden text-text-heading hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Search Bar (Hidden on small mobile) */}
                        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100/80 rounded-lg w-64 focus-within:ring-2 focus-within:ring-brand-primary/20 transition-all">
                            <Search className="w-4 h-4 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 relative text-text-muted hover:text-brand-primary transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
                        </button>

                        <div className="h-9 w-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer hover:scale-105 transition-transform">
                            AQ
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
