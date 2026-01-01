"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Users,
    Settings,
    PieChart,
    MessageSquare,
    FolderKanban,
    LogOut
} from "lucide-react";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: FolderKanban, label: "Projects", href: "/dashboard/projects" },
    { icon: Users, label: "Team", href: "/dashboard/team" },
    { icon: PieChart, label: "Analytics", href: "/dashboard/analytics" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function SidebarNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col h-full">
            <div className="p-6">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-hover transition-colors shadow-lg">
                        Q
                    </div>
                    <span className="text-xl font-bold text-text-heading tracking-tight">QUIBESO</span>
                </Link>
            </div>

            <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                    Main Menu
                </p>

                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href} className="block">
                            <div
                                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "text-brand-primary bg-brand-primary/10 font-semibold"
                                        : "text-text-muted hover:text-text-heading hover:bg-gray-100/80"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute inset-0 bg-brand-primary/10 rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <item.icon className={`w-5 h-5 ${isActive ? "text-brand-primary" : "text-gray-400 group-hover:text-text-heading"}`} />
                                <span className="relative z-10">{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-border-light">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </nav>
    );
}
