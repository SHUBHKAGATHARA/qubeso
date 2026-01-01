"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Clock, CheckCircle2 } from "lucide-react";

const stats = [
    {
        label: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1%",
        trend: "up"
    },
    {
        label: "Active Projects",
        value: "12",
        change: "+4",
        trend: "up"
    },
    {
        label: "Pending Tasks",
        value: "45",
        change: "-12%",
        trend: "down"
    },
    {
        label: "Client Satisfaction",
        value: "98%",
        change: "+2.4%",
        trend: "up"
    },
];

const activities = [
    {
        title: "Project Milestone Reached",
        project: "Fintech Dashboard Redesign",
        time: "2 hours ago",
        status: "completed"
    },
    {
        title: "New Ticket Assigned",
        project: "E-commerce Mobile App",
        time: "4 hours ago",
        status: "in-progress"
    },
    {
        title: "Client Meeting Scheduled",
        project: "Healthcare Portal",
        time: "Tomorrow, 10:00 AM",
        status: "upcoming"
    },
    {
        title: "Deployment Successful",
        project: "SaaS Landing Page",
        time: "Yesterday",
        status: "completed"
    }
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-text-heading">Dashboard Overview</h1>
                    <p className="text-text-muted">Welcome back, here's what's happening today.</p>
                </div>
                <button className="btn-primary">
                    + New Project
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-sm font-medium text-text-muted">{stat.label}</p>
                            <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-text-heading">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area (Placeholder) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 glass-card p-6 h-[400px] flex flex-col"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-text-heading">Revenue Overview</h3>
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-text-muted">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chart Placeholder / Skeleton */}
                    <div className="flex-1 flex items-end gap-4 p-4 border-b border-border-default relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between text-xs text-text-muted pointer-events-none pb-8">
                            <span>$50k</span>
                            <span>$25k</span>
                            <span>$0</span>
                        </div>

                        {/* Animated Bars */}
                        {[40, 70, 45, 90, 60, 80, 50, 75, 65, 85, 95, 60].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.8, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-brand-primary/80 hover:bg-brand-primary rounded-t-sm transition-colors relative group"
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ${h}k
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-text-muted mt-4 px-2">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card p-6"
                >
                    <h3 className="text-lg font-bold text-text-heading mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {activities.map((activity, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="relative">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${activity.status === 'completed' ? 'bg-green-50 border-green-200 text-green-600' :
                                            activity.status === 'in-progress' ? 'bg-blue-50 border-blue-200 text-blue-600' :
                                                'bg-orange-50 border-orange-200 text-orange-600'
                                        }`}>
                                        {activity.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                                    </div>
                                    {i !== activities.length - 1 && (
                                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-100" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium text-text-heading text-sm group-hover:text-brand-primary transition-colors cursor-pointer">
                                        {activity.title}
                                    </p>
                                    <p className="text-xs text-text-muted mt-1">{activity.project}</p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-brand-primary font-medium hover:bg-brand-primary/5 rounded-lg transition-colors">
                        View All Activity
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
