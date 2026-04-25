"use client";
import { motion } from 'framer-motion';
import { FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

export default function RevenueChart({ data }) {
    const totalRevenue = data.values.reduce((sum, val) => sum + val, 0);

    const chartData = data.labels.map((label, index) => ({
        name: label,
        revenue: data.values[index],
    }));

    
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="text-white font-semibold text-lg">
                        ${payload[0].value.toLocaleString()}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-800"
        >
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
                        <p className="text-gray-400 text-sm mt-1">Monthly revenue trends</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-2 rounded-xl">
                        <FiTrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">+18.5%</span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-baseline gap-3 mb-8">
                    <div className="p-2 bg-indigo-500/20 rounded-xl">
                        <FiDollarSign className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">${totalRevenue.toLocaleString()}</span>
                        <p className="text-gray-400 text-sm mt-1">Total revenue (last 6 months)</p>
                    </div>
                </div>

                {/* Recharts Area Chart */}
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#374151"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="name"
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value.toLocaleString()}`}
                                dx={-10}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#6366F1"
                                strokeWidth={2}
                                fill="url(#colorRevenue)"
                                fillOpacity={1}
                                animationDuration={1500}
                                animationBegin={0}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
}