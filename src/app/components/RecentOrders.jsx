
"use client";
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle, FiEye, FiShoppingBag } from 'react-icons/fi';

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
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-800"
        >
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                        <p className="text-gray-400 text-sm mt-1">Latest transactions from customers</p>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2 transition-colors">
                        View All
                        <FiEye className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-800/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
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
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-white">{order.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="text-sm font-medium text-white">{order.customer}</p>
                                        <p className="text-xs text-gray-400 mt-1">{order.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-300">{order.product}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-semibold text-white">{order.amount}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold ${statusColors[order.status]}`}>
                                        {statusIcons[order.status]}
                                        {order.status}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}