
"use client";
import { motion } from 'framer-motion';
import { FiBell, FiCalendar, FiUser } from 'react-icons/fi';

export default function WelcomeSection() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 mb-6 border border-gray-700"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        Welcome back, <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>Admin! </span>
                    </h1>
                    <p className="text-gray-400 mb-4">
                        Here's what's happening with your marketplace today.
                    </p>
                    <div className="flex gap-4 mb-4">
                        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-1.5  rounded-lg border border-gray-700">
                            <FiCalendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">{currentDate}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700">
                            <FiUser className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">Admin</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <button className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-xl hover:bg-gray-700 transition-all border border-gray-700">
                        <FiBell className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700">
                <div>
                    <p className="text-gray-400 text-sm">Today's Sales</p>
                    <p className="text-xl font-bold text-white">$2,345</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">New Orders</p>
                    <p className="text-xl font-bold text-white">23</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">New Users</p>
                    <p className="text-xl font-bold text-white">156</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Conversion Rate</p>
                    <p className="text-xl font-bold text-white">3.2%</p>
                </div>
            </div>
        </motion.div>
    );
}