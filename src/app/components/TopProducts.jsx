
"use client";
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown, FiEye, FiShoppingCart } from 'react-icons/fi';

export default function TopProducts({ products }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-800"
        >
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Top Selling Products</h2>
                        <p className="text-gray-400 text-sm mt-1">Best performing items this month</p>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2 transition-colors">
                        View All
                        <FiEye className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="divide-y divide-gray-800">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-5 hover:bg-gray-800/50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-400 flex items-center gap-1">
                                        <FiShoppingCart className="w-3 h-3" />
                                        {product.sales} sales
                                    </span>
                                    <span className="text-gray-400">{product.revenue}</span>
                                </div>
                            </div>
                            <div className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-semibold ${product.trend === 'up'
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                {product.trend === 'up' ? (
                                    <FiTrendingUp className="w-4 h-4" />
                                ) : (
                                    <FiTrendingDown className="w-4 h-4" />
                                )}
                                <span>{product.trend === 'up' ? '+12%' : '-5%'}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}