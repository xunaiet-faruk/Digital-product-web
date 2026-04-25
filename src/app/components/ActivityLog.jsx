
"use client";
import { motion } from 'framer-motion';
import { FiShoppingCart, FiDownload, FiUpload, FiStar, FiPlus, FiClock } from 'react-icons/fi';

const actionIcons = {
    purchased: <FiShoppingCart className="w-4 h-4" />,
    downloaded: <FiDownload className="w-4 h-4" />,
    uploaded: <FiUpload className="w-4 h-4" />,
    reviewed: <FiStar className="w-4 h-4" />,
    created: <FiPlus className="w-4 h-4" />
};

const actionColors = {
    purchased: 'bg-green-500/20 text-green-400',
    downloaded: 'bg-blue-500/20 text-blue-400',
    uploaded: 'bg-purple-500/20 text-purple-400',
    reviewed: 'bg-yellow-500/20 text-yellow-400',
    created: 'bg-indigo-500/20 text-indigo-400'
};

export default function ActivityLog({ activities }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-800"
        >
            <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                <p className="text-gray-400 text-sm mt-1">Latest user actions and updates</p>
            </div>
            <div className="divide-y divide-gray-800 max-h-[500px] overflow-y-auto">
                {activities.map((activity, idx) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-5 hover:bg-gray-800/50 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                <img
                                    src={activity.avatar}
                                    alt={activity.user}
                                    className="w-11 h-11 rounded-full object-cover border-2 border-gray-700"
                                />
                                <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full ${actionColors[activity.action]}`}>
                                    {actionIcons[activity.action]}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm text-white">
                                    <span className="font-semibold text-indigo-400">{activity.user}</span>
                                    <span className="text-gray-400 mx-1">{activity.action}</span>
                                    <span className="font-semibold text-purple-400">{activity.item}</span>
                                </p>
                                <div className="flex items-center gap-1 mt-2">
                                    <FiClock className="w-3 h-3 text-gray-500" />
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}