'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaCode,
    FaBriefcase, FaUsers, FaTrophy, FaHeart,
    FaArrowRight, FaGraduationCap, FaLaptopCode,
    FaStar, FaQuoteRight
} from 'react-icons/fa';

const About = () => {
    const expertiseAreas = [
        { name: 'Frontend Development', icon: FaLaptopCode, color: 'text-indigo-400' },
        { name: 'Backend Architecture', icon: FaCode, color: 'text-indigo-400' },
        { name: 'Full Stack Solutions', icon: FaBriefcase, color: 'text-indigo-400' },
        { name: 'Mentorship', icon: FaGraduationCap, color: 'text-indigo-400' },
    ];

    const stats = [
        { value: '15,000+', label: 'Students Mentored', icon: FaUsers, iconColor: 'text-indigo-400' },
        { value: '500+', label: 'Projects Built', icon: FaCode, iconColor: 'text-indigo-400' },
        { value: '98%', label: 'Success Rate', icon: FaTrophy, iconColor: 'text-indigo-400' },
        { value: '4.9/5', label: 'Student Rating', icon: FaStar, iconColor: 'text-yellow-400' },
    ];

    return (
        <div className="relative overflow-hidden py-20 ">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
                        Meet Your{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Web Development Mentor
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        10+ years of experience transforming beginners into industry-ready developers
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto mt-20">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Side - Image with Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Main Image Card */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=500&fit=crop"
                                        alt="instructor"
                                        className="w-full h-80 md:h-96 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <stat.icon className={`text-xl ${stat.iconColor}`} />
                                            </div>
                                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                                        </div>
                                        <p className="text-sm text-gray-400">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700 shadow-2xl"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <FaQuoteRight className="text-4xl text-indigo-500/30" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">John Anderson</h3>
                            <p className="text-indigo-400 font-semibold mb-5 flex items-center gap-2">
                                <FaBriefcase className="text-sm" />
                                Senior Full Stack Developer & Instructor
                            </p>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                With over a decade of experience building applications for Fortune 500 companies, I've helped thousands of developers master web development. My teaching philosophy focuses on practical, real-world projects that prepare you for the industry.
                            </p>

                            {/* Expertise Areas */}
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Expertise Areas</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {expertiseAreas.map((area, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50 border border-gray-700"
                                        >
                                            <area.icon className={`text-sm ${area.color}`} />
                                            <span className="text-sm text-gray-300">{area.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-6">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-500/20 transition-colors group">
                                    <FaGithub className="text-gray-400 group-hover:text-indigo-400" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-500/20 transition-colors group">
                                    <FaLinkedin className="text-gray-400 group-hover:text-indigo-400" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-500/20 transition-colors group">
                                    <FaTwitter className="text-gray-400 group-hover:text-indigo-400" />
                                </a>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1"
                                >
                                   
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1"
                                >
                                    <Link
                                        href="/courses"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    >
                                        View All Courses
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </div>
    );
};

export default About;