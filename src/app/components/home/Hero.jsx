'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaArrowRight,
    FaPlay,
    FaStar,
    FaCheckCircle,
    FaRocket,
    FaChartLine,
    FaUsers,
    FaTrophy
} from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const stats = [
        { icon: FaUsers, value: '10,000+', label: 'Active Students', color: 'from-blue-500 to-cyan-500' },
        { icon: FaChartLine, value: '500+', label: 'Courses', color: 'from-purple-500 to-pink-500' },
        { icon: FaTrophy, value: '98%', label: 'Success Rate', color: 'from-yellow-500 to-orange-500' },
        { icon: FaRocket, value: '24/7', label: 'Support', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <div className="relative min-h-screen  overflow-hidden ">
            <div className="absolute inset-0 ">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative container mx-auto px-4 pt-32 pb-20 md:pt-40  md:pb-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Limited Time Offer</span>
                            <span className="text-sm font-bold text-indigo-600">40% OFF</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Master Digital{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Skills
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                                    <path d="M0 5.5C50 1 100 1 150 5.5C200 10 250 10 300 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366F1" />
                                            <stop offset="50%" stopColor="#A855F7" />
                                            <stop offset="100%" stopColor="#EC4899" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <br />
                            <span className="text-gray-400">Transform Your Career</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Join 10,000+ students learning cutting-edge skills from industry experts. Get access to premium courses, templates, and a supportive community.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/courses"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    <span className="relative z-10">Start Learning Today</span>
                                    <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 inline-flex items-center gap-2">
                                    <FaPlay className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
                                    Watch Demo
                                </button>
                            </motion.div>
                        </div>

                        <div className="flex items-center gap-6 pt-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                                    >
                                        <img
                                            src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`}
                                            alt="student"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-700">4.9/5</span>
                                <span className="text-sm text-gray-500">(2,500+ reviews)</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=550&fit=crop"
                                alt="hero"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -30 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaCheckCircle className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">30-Day Guarantee</p>
                                    <p className="text-sm text-gray-500">Money back guarantee</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                            <img
                                                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`}
                                                alt="student"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Join 10,000+</p>
                                    <p className="text-xs text-gray-500">Happy students</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute bottom-20 right-0 bg-white rounded-xl shadow-lg p-3 backdrop-blur-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <FaStar key={i} className="text-yellow-400 text-xs" />
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-gray-700">4.9/5</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">From 2,500+ reviews</p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-gray-200"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="text-white text-xl" />
                            </div>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default Hero;