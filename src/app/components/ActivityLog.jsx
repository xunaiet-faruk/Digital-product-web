"use client";
import { motion } from 'framer-motion';
import { FiShoppingCart, FiDownload, FiUpload, FiStar, FiPlus, FiClock, FiUser } from 'react-icons/fi';

const actionIcons = {
    purchased: <FiShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />,
    downloaded: <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />,
    uploaded: <FiUpload className="w-3 h-3 sm:w-4 sm:h-4" />,
    reviewed: <FiStar className="w-3 h-3 sm:w-4 sm:h-4" />,
    created: <FiPlus className="w-3 h-3 sm:w-4 sm:h-4" />
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
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-gray-800"
        >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-800">
                <h2 className="text-lg sm:text-xl font-bold text-white">Recent Activity</h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Latest user actions and updates</p>
            </div>

            {/* Activity List */}
            <div className="divide-y divide-gray-800 max-h-[500px] overflow-y-auto">
                {activities.map((activity, idx) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 sm:p-4 md:p-5 hover:bg-gray-800/50 transition-colors"
                    >
                        <div className="flex items-start gap-3 sm:gap-4">
                            {/* Avatar */}
                            <div className="relative flex-shrink-0">
                                {activity.avatar ? (
                                    <img
                                        src={activity.avatar}
                                        alt={activity.user}
                                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-gray-700"
                                    />
                                ) : (
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center border-2 border-gray-700">
                                        <FiUser className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                )}
                                <div className={`absolute -bottom-1 -right-1 p-1 sm:p-1.5 rounded-full ${actionColors[activity.action]}`}>
                                    {actionIcons[activity.action]}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow min-w-0">
                                <p className="text-xs sm:text-sm text-white break-words">
                                    <span className="font-semibold text-indigo-400">{activity.user}</span>
                                    <span className="text-gray-400 mx-1">{activity.action}</span>
                                    <span className="font-semibold text-purple-400 break-words">{activity.item}</span>
                                </p>
                                <div className="flex items-center gap-1 mt-1.5 sm:mt-2">
                                    <FiClock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500" />
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                                {/* Optional: Show additional details on mobile */}
                                {activity.details && (
                                    <p className="text-xs text-gray-600 mt-1 sm:hidden">
                                        {activity.details}
                                    </p>
                                )}
                            </div>

                            {/* Optional action button for larger screens */}
                            {activity.actionButton && (
                                <button className="hidden sm:block text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                                    View
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {activities.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 bg-gray-800 rounded-full flex items-center justify-center">
                        <FiClock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">No activity yet</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Activities will appear here as users interact</p>
                </div>
            )}

            {/* Footer with view all button (if more activities exist) */}
            {activities.length > 0 && activities.length >= 5 && (
                <div className="p-3 sm:p-4 border-t border-gray-800 text-center">
                    <button className="text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm font-medium transition-colors">
                        View All Activity →
                    </button>
                </div>
            )}
        </motion.div>
    );
}