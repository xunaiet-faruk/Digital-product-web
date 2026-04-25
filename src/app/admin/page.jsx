"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import WelcomeSection from '../components/WelcomeSection';
import StatsCards from '../components/StatsCards';
import { activities, dashboardStats, recentOrders, revenueData, topProducts } from './data/dashboardData';
import RecentOrders from '../components/RecentOrders';
import ActivityLog from '../components/ActivityLog';
import TopProducts from '../components/TopProducts';
import RevenueChart from '../components/RevenueChart';

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <WelcomeSection />
                <StatsCards stats={dashboardStats} />
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <RevenueChart data={revenueData} />
                    <TopProducts products={topProducts} />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    <RecentOrders orders={recentOrders} />
                    <ActivityLog activities={activities} />
                </div>
            </div>
        </div>
    );
}