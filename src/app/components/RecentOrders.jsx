"use client";
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle, FiEye, FiShoppingBag, FiUser, FiMail, FiDollarSign } from 'react-icons/fi';

const statusColors = {
    completed: 'bg-green-500/20 text-green-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    processing: 'bg-blue-500/20 text-blue-400',
    cancelled: 'bg-red-500/20 text-red-400'
};

const statusIcons = {
    completed: <FiCheckCircle className="w-4 h-4" />,
    pending: <FiClock className="w-4 h-4" />,
    processing: <FiAlertCircle className="w-4 h-4" />,
    cancelled: <FiAlertCircle className="w-4 h-4" />
};

export default function RecentOrders({ orders }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-gray-800"
        >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-white">Recent Orders</h2>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Latest transactions from customers</p>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center justify-center gap-2 transition-colors w-full sm:w-auto px-4 py-2 sm:px-0 sm:py-0 bg-indigo-400/10 sm:bg-transparent rounded-lg sm:rounded-none">
                        View All
                        <FiEye className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-800/50">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Order ID</th>
                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</th>
                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {orders.map((order, idx) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="hover:bg-gray-800/50 transition-colors"
                            >
                                <td className="px-4 sm:px-6 py-4">
                                    <span className="text-sm font-medium text-white">{order.id}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4">
                                    <div>
                                        <p className="text-sm font-medium text-white">{order.customer}</p>
                                        <p className="text-xs text-gray-400 mt-1">{order.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 sm:px-6 py-4">
                                    <span className="text-sm text-gray-300">{order.product}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4">
                                    <span className="text-sm font-semibold text-white">{order.amount}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4">
                                    <span className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold ${statusColors[order.status]}`}>
                                        {statusIcons[order.status]}
                                        <span className="capitalize">{order.status}</span>
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View - Visible only on mobile/tablet */}
            <div className="md:hidden divide-y divide-gray-800">
                {orders.map((order, idx) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-4 hover:bg-gray-800/30 transition-colors"
                    >
                        {/* Order Header */}
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="text-xs text-gray-500">Order ID</span>
                                <p className="text-sm font-semibold text-white">{order.id}</p>
                            </div>
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${statusColors[order.status]}`}>
                                {statusIcons[order.status]}
                                <span className="capitalize">{order.status}</span>
                            </span>
                        </div>

                        {/* Customer Info */}
                        <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                                <FiUser className="text-gray-500 text-sm" />
                                <span className="text-sm text-white">{order.customer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiMail className="text-gray-500 text-sm" />
                                <span className="text-xs text-gray-400">{order.email}</span>
                            </div>
                        </div>

                        {/* Product & Amount */}
                        <div className="flex justify-between items-center pt-2 border-t border-gray-800/50">
                            <div>
                                <span className="text-xs text-gray-500">Product</span>
                                <p className="text-sm text-gray-300">{order.product}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs text-gray-500">Amount</span>
                                <p className="text-sm font-bold text-indigo-400">{order.amount}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {orders.length === 0 && (
                <div className="text-center py-12">
                    <FiShoppingBag className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400">No orders found</p>
                    <p className="text-gray-500 text-sm mt-1">Orders will appear here once customers make purchases</p>
                </div>
            )}
        </motion.div>
    );
}