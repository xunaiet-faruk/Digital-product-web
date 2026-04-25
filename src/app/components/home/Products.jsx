'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaShoppingCart, FaArrowRight, FaDownload } from 'react-icons/fa';

const products = [
    {
        id: 1,
        title: 'React Admin Dashboard Template',
        description: 'Complete admin dashboard with dark mode, charts, tables, and 50+ components',
        price: 49.99,
        sales: 1240,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        category: 'Dashboard',
        format: 'React + Tailwind'
    },
    {
        id: 2,
        title: 'Next.js E-commerce Starter Kit',
        description: 'Full-featured e-commerce site with cart, checkout, and payment integration',
        price: 59.99,
        sales: 856,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=250&fit=crop',
        category: 'E-commerce',
        format: 'Next.js + Stripe'
    },
    {
        id: 3,
        title: 'Tailwind CSS UI Components',
        description: '500+ ready-to-use components, templates, and page layouts',
        price: 34.99,
        sales: 2150,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=250&fit=crop',
        category: 'UI Kit',
        format: 'Tailwind + HTML'
    },
    {
        id: 4,
        title: 'Node.js API Boilerplate',
        description: 'Production-ready REST API with JWT, MongoDB, and testing setup',
        price: 39.99,
        sales: 980,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
        category: 'Backend',
        format: 'Node.js + Express'
    }
];

const Products = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <div className=" py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
                        Premium{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Web Development Templates
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready-to-use code and templates to accelerate your development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}
                                />
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                    {product.category}
                                </div>
                                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">
                                    {product.format}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-1 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">({product.rating})</span>
                                </div>
                                <h3 className="text-lg mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-sm mb-2 text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">${product.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <FaDownload className="text-xs" />
                                        <span>{product.sales} downloads</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link
                        href="/templates"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Browse All Resources
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;