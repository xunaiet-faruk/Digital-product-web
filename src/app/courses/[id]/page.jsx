
"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FaStar,
    FaClock,
    FaShoppingCart,
    FaArrowLeft,
    FaArrowRight,
    FaGraduationCap,
    FaPlayCircle,
    FaDownload,
    FaUserGraduate,
    FaVideo,
    FaFileAlt,
    FaCertificate,
    FaHeart,
    FaShare,
    FaCheckCircle
} from 'react-icons/fa';
import { MdLanguage, MdAccessTime } from 'react-icons/md';
import coursesData from '@/app/data/courses.json';

export default function SingleCoursePage() {
    const params = useParams();
    const router = useRouter();
    const [course, setCourse] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        
        const courseId = parseInt(params.id);
        const foundCourse = coursesData.courses.find(c => c.id === courseId);
        setCourse(foundCourse);
    }, [params.id]);

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 2000);
    };

    const handleBuyNow = () => {
        router.push('/checkout');
    };

    if (!course) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading course...</p>
                </div>
            </div>
        );
    }

    const curriculum = [
        { id: 1, title: 'Introduction to Modern Design', duration: '15:30', type: 'video' },
        { id: 2, title: 'Understanding Design Principles', duration: '22:45', type: 'video' },
        { id: 3, title: 'Color Theory Masterclass', duration: '18:20', type: 'video' },
        { id: 4, title: 'Typography Fundamentals', duration: '25:10', type: 'video' },
        { id: 5, title: 'Layout Design Techniques', duration: '30:00', type: 'video' },
        { id: 6, title: 'Project: Create Your First Design', duration: '45:00', type: 'project' },
    ];

    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-8">
                <motion.button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                    whileHover={{ x: -5 }}
                >
                    <FaArrowLeft className="w-4 h-4" />
                    <span>Back to Courses</span>
                </motion.button>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black"></div>
                </div>

                <div className="relative container mx-auto px-4 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <FaStar className="text-yellow-400" />
                                <span className="text-white text-sm">{course.rating} Rating</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {course.description}
                            </p>
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <FaUserGraduate className="text-indigo-400" />
                                    <span className="text-gray-300">{course.students?.toLocaleString() || "5,000+"} Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-indigo-400" />
                                    <span className="text-gray-300">{course.duration} Total Hours</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdLanguage className="text-indigo-400" />
                                    <span className="text-gray-300">English</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    onClick={handleBuyNow}
                                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-600/25 transition-all duration-300 flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Buy Now - ${course.price}
                                    <FaArrowRight />
                                </motion.button>
                                <motion.button
                                    onClick={handleAddToCart}
                                    className="border border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaShoppingCart />
                                    {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full rounded-xl mb-6"
                                />
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">What's included:</span>
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                                <FaHeart className="text-gray-400 hover:text-red-400" />
                                            </button>
                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                                <FaShare className="text-gray-400 hover:text-indigo-400" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <FaVideo className="text-indigo-400" />
                                            <span>48+ Video Lessons</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <FaDownload className="text-indigo-400" />
                                            <span>Downloadable Resources</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <FaCertificate className="text-indigo-400" />
                                            <span>Certificate of Completion</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <MdAccessTime className="text-indigo-400" />
                                            <span>Lifetime Access</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Course Content Tabs */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-wrap gap-4 border-b border-gray-800 mb-8">
                    {['overview', 'curriculum', 'reviews'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-lg font-semibold transition-colors relative ${activeTab === tab ? 'text-indigo-400' : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid lg:grid-cols-3 gap-8"
                    >
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-4">Course Description</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {course.description} This comprehensive course covers everything you need to know about {course.title.toLowerCase()}.
                                Whether you're a beginner or looking to enhance your skills, this course provides practical knowledge and hands-on projects.
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-4">What You'll Learn</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    'Master core concepts and techniques',
                                    'Build real-world projects',
                                    'Get expert tips and tricks',
                                    'Access downloadable resources',
                                    'Learn industry best practices',
                                    'Get certificate of completion'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-indigo-400 text-sm" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 h-fit">
                            <h4 className="text-lg font-bold text-white mb-4">This Course Includes:</h4>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-300">
                                    <span>Duration:</span>
                                    <span>{course.duration} hours</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Lectures:</span>
                                    <span>48 lessons</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Students:</span>
                                    <span>{course.students?.toLocaleString() || "5,000"}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Level:</span>
                                    <span>All Levels</span>
                                </div>
                            </div>
                            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Course Curriculum</h3>
                        <div className="space-y-3">
                            {curriculum.map((item, idx) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="text-indigo-400 font-bold">#{idx + 1}</span>
                                        <div>
                                            <p className="text-white font-medium">{item.title}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                {item.type === 'video' && <FaVideo className="text-xs text-gray-500" />}
                                                {item.type === 'project' && <FaFileAlt className="text-xs text-gray-500" />}
                                                <span className="text-xs text-gray-500">{item.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-indigo-400 hover:text-indigo-300">
                                        <FaPlayCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 text-center"
                    >
                        <p className="text-gray-400">Reviews coming soon...</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}