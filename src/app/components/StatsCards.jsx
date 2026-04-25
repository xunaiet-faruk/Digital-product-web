
"use client";
import { motion } from 'framer-motion';
import {
    FiPackage,
    FiBookOpen,
    FiUsers,
    FiDollarSign,
    FiDownload,
    FiActivity
} from 'react-icons/fi';

const iconMap = {
    FiPackage: FiPackage,
    FiBookOpen: FiBookOpen,
    FiUsers: FiUsers,
    FiDollarSign: FiDollarSign,
    FiDownload: FiDownload,
    FiActivity: FiActivity
};

export default function StatsCards({ stats }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon];
                return (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <span className={`text-sm font-semibold px-2 py-1 rounded-lg ${stat.changeType === 'increase'
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">{stat.title}</p>

                            {/* Progress Bar */}
                            <div className="mt-2">
                                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${stat.color}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.floor(Math.random() * 100)}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}