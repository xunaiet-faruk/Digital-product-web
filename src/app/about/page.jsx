"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaStar,
    FaUsers,
    FaGlobe,
    FaAward,
    FaChalkboardTeacher,
    FaQuoteLeft,
    FaArrowRight,
    FaPlayCircle,
    FaCheckCircle,
    FaRocket,
    FaInfinity,
    FaGraduationCap,
    FaTrophy,
    FaHeart,
    FaEye
} from 'react-icons/fa';
import { MdSecurity, MdVerified } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AboutPage = () => {
    const router = useRouter();

    const stats = [
        { id: 1, value: "50,000+", label: "Happy Students", icon: FaUsers, color: "from-blue-500 to-cyan-500" },
        { id: 2, value: "50+", label: "Expert Courses", icon: FaGraduationCap, color: "from-green-500 to-emerald-500" },
        { id: 3, value: "4.8", label: "Average Rating", icon: FaStar, color: "from-yellow-500 to-orange-500" },
        { id: 4, value: "120+", label: "Countries", icon: FaGlobe, color: "from-purple-500 to-pink-500" },
    ];

    const team = [
        { name: "Sarah Johnson", role: "Founder & CEO", image: "👩‍💼", bio: "15+ years in EdTech" },
        { name: "Michael Chen", role: "Head of Curriculum", image: "👨‍🏫", bio: "Former Google Engineer" },
        { name: "Priya Patel", role: "Lead Instructor", image: "👩‍🎓", bio: "MIT Graduate" },
    ];

    return (
        <>
            {/* SEO Metadata */}
            <head>
                <title>About LearnHub | Transform Your Career With Expert-Led Courses</title>
                <meta name="description" content="LearnHub is a leading online learning platform with 50,000+ students worldwide. Join us to learn from industry experts and advance your career with practical skills." />
                <meta name="keywords" content="online learning, education platform, career development, learn online, skill development" />
                <meta property="og:title" content="About LearnHub - Online Learning Platform" />
                <meta property="og:description" content="Join 50,000+ students learning from industry experts. Get certified and advance your career." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://learnhub.com/about" />
            </head>

            <div className="bg-black">
                {/* Spacer */}
                <div className="h-16 md:h-20"></div>

                {/* Hero Section with Background Animation */}
                <div className="relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                    </div>

                    <div className="relative container mx-auto px-4 py-16 md:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-indigo-500/30 mb-6"
                            >
                                <FaRocket className="text-indigo-400 text-sm animate-pulse" />
                                <span className="text-indigo-300 text-sm font-semibold">Empowering Learners Worldwide Since 2020</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                            >
                                We're on a Mission to
                                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Democratize Education
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
                            >
                                LearnHub isn't just another learning platform. We're a community of passionate educators
                                and lifelong learners building the future of education together.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <motion.button
                                    onClick={() => router.push('/courses')}
                                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Courses
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaPlayCircle />
                                    Watch Story
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Floating Cards */}
                <div className="container mx-auto px-4 -mt-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center border border-gray-800 shadow-xl backdrop-blur-sm"
                            >
                                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                                    <stat.icon className="text-white text-xl" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="container mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To provide accessible, high-quality education that empowers individuals to achieve
                                    their career goals and transform their lives.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    A world where anyone, anywhere can access world-class education and build the skills
                                    they need to succeed in the digital economy.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <MdVerified className="text-indigo-400 text-xl" />
                                    <span className="text-gray-300">Industry Recognized</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaInfinity className="text-indigo-400 text-xl" />
                                    <span className="text-gray-300">Lifetime Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdSecurity className="text-indigo-400 text-xl" />
                                    <span className="text-gray-300">Verified Certificate</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                <FaQuoteLeft className="text-5xl text-indigo-400 opacity-30 mb-4" />
                                <p className="text-gray-300 text-xl italic mb-6 leading-relaxed">
                                    "Education is the most powerful weapon which you can use to change the world.
                                    We're building the future of learning, one student at a time."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                        L
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-lg">LearnHub Team</div>
                                        <div className="text-gray-400">Building Tomorrow's Education</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-gradient-to-b from-gray-900/50 to-black py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Why Choose LearnHub?
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We're different from other platforms. Here's why students love learning with us.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: FaChalkboardTeacher, title: "Expert Instructors", desc: "Learn from industry professionals with real-world experience", color: "from-blue-500 to-cyan-500" },
                                { icon: FaTrophy, title: "Practical Learning", desc: "Build real projects and create a portfolio that stands out", color: "from-yellow-500 to-orange-500" },
                                { icon: FaHeart, title: "Supportive Community", desc: "Join a global community of learners and get support", color: "from-red-500 to-pink-500" },
                                { icon: FaEye, title: "Career Focused", desc: "Courses designed to help you advance in your career", color: "from-green-500 to-emerald-500" },
                                { icon: FaInfinity, title: "Lifetime Access", desc: "Learn at your own pace with lifetime course access", color: "from-purple-500 to-indigo-500" },
                                { icon: FaAward, title: "Verified Certificates", desc: "Earn recognized certificates for every course", color: "from-orange-500 to-red-500" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                                        <item.icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="container mx-auto px-4 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Meet Our Leadership
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Passionate educators and industry experts dedicated to your success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="text-center group"
                            >
                                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-indigo-400 mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="bg-gradient-to-b from-gray-900/50 to-black py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                What Our Students Say
                            </h2>
                            <p className="text-gray-400 text-lg">Real success stories from our global community</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Sarah Johnson", role: "Product Manager", content: "This platform changed my career! The courses are practical and the instructors are amazing.", rating: 5 },
                                { name: "Michael Chen", role: "Software Engineer", content: "Best investment I ever made. Got a promotion within 3 months of completing the course.", rating: 5 },
                                { name: "Priya Patel", role: "Marketing Director", content: "Finally a learning platform that delivers real value. Highly recommended!", rating: 5 },
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800"
                                >
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                                    <div>
                                        <p className="text-white font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-10 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                        </div>
                        <div className="relative">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Join over 50,000 students who are already learning and growing with LearnHub
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    onClick={() => router.push('/courses')}
                                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Learning Now
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Sales
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;