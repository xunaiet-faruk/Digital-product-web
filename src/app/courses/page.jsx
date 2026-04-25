
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaStar,
    FaClock,
    FaShoppingCart,
    FaRocket,
    FaArrowRight,
    FaGraduationCap,
    FaInfinity,
    FaPlayCircle,
    FaChartLine
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import coursesData from '@/app/data/courses.json';
import {  useRouter } from 'next/navigation';

const Page = () => {
    const { courses } = coursesData;
    const router = useRouter();
    const [hoveredCourse, setHoveredCourse] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };



    return (
        <div className="bg-black">
           
            <div className="h-20 md:h-24 lg:h-28"></div>

            <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <motion.div
                    className="absolute top-0 -left-40 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div className="relative container mx-auto px-4 py-28 md:py-40">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-indigo-500/30 mb-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaRocket className="text-indigo-400 text-sm animate-pulse" />
                                <span className="text-indigo-300 text-sm font-semibold">Limited Time Offer - 70% OFF</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Master Digital
                                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Skills That Matter
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Join 50,000+ professionals who transformed their careers with industry-leading courses taught by experts.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <FaGraduationCap className="text-indigo-400" />
                                    <span className="text-gray-300 text-sm">50+ Courses</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaInfinity className="text-indigo-400" />
                                    <span className="text-gray-300 text-sm">Lifetime Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdSecurity className="text-indigo-400" />
                                    <span className="text-gray-300 text-sm">Certificate</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Learning Now
                                    <FaArrowRight />
                                </motion.button>
                                <motion.button
                                    className="border border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaPlayCircle />
                                    Watch Demo
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl"></div>
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <div className="text-3xl font-bold text-white">Student Success</div>
                                            <div className="text-gray-400 text-sm">Real results from real students</div>
                                        </div>
                                        <FaChartLine className="text-4xl text-indigo-400" />
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                <span>Career Transition</span>
                                                <span>95%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "95%" }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                <span>Salary Increase</span>
                                                <span>87%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "87%" }}
                                                    transition={{ duration: 1, delay: 0.7 }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                <span>Course Completion</span>
                                                <span>92%</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "92%" }}
                                                    transition={{ duration: 1, delay: 0.9 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold">⭐</span>
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold">4.8 Average Rating</div>
                                                <div className="text-gray-400 text-sm">From 10,000+ reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Featured Courses Section */}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Courses
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Hand-picked courses to accelerate your career growth
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            onMouseEnter={() => setHoveredCourse(course.id)}
                            onMouseLeave={() => setHoveredCourse(null)}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-600/20 transition-all duration-300 cursor-pointer group border border-gray-800"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCourse === course.id ? 'scale-110' : 'scale-100'}`}
                                />
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                    {course.badge || "HOT"}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-sm ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400">({course.rating})</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{course.description}</p>
                                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FaClock className="text-xs" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaGraduationCap className="text-xs" />
                                        <span>{course.students?.toLocaleString() || "1,234"}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                                    <div>
                                        <span className="text-2xl font-bold text-indigo-400">${course.price}</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice || Math.round(course.price * 1.5)}</span>
                                    </div>
                                    <motion.button
                                        onClick={() => router.push(`/courses/${course.id}`)}
                                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-1 px-2 rounded-lg"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Page;