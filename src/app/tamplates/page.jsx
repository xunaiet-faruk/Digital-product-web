"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FiSearch,
    FiGrid,
    FiList,
    FiStar,
    FiEye,
    FiTrendingUp,
    FiClock,
    FiUsers,
    FiArrowRight,
    FiDownload,
    FiBookmark,
    FiZap,
    FiAward,
    FiCheckCircle
} from 'react-icons/fi';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TemplatesPage() {
    const router = useRouter();
    const [viewMode, setViewMode] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'all', name: 'All Templates', icon: <FiZap className="w-4 h-4" /> },
        { id: 'social-media', name: 'Social Media', icon: <FiTrendingUp className="w-4 h-4" /> },
        { id: 'presentation', name: 'Presentation', icon: <FiGrid className="w-4 h-4" /> },
        { id: 'business', name: 'Business', icon: <FiAward className="w-4 h-4" /> },
        { id: 'marketing', name: 'Marketing', icon: <FiTrendingUp className="w-4 h-4" /> },
        { id: 'youtube', name: 'YouTube', icon: <FiClock className="w-4 h-4" /> }
    ];

    const templates = [
        {
            id: 1,
            title: 'Modern Business Presentation',
            category: 'presentation',
            rating: 4.8,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
            author: 'Sarah Johnson',
            authorAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
            downloads: '12.4k',
            level: 'Advanced',
            duration: '15 Templates',
            description: 'Professional business presentation template with modern design and animations.',
            tags: ['Business', 'Modern', 'Animated']
        },
        {
            id: 2,
            title: 'Social Media Kit 2025',
            category: 'social-media',
            rating: 4.9,
            reviews: 567,
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
            author: 'Mike Chen',
            authorAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
            downloads: '34.5k',
            level: 'Beginner',
            duration: '25 Templates',
            description: 'Complete social media kit for Instagram, Facebook, and TikTok.',
            tags: ['Social', 'Instagram', 'TikTok']
        },
        {
            id: 3,
            title: 'Corporate Brand Guide',
            category: 'business',
            rating: 4.7,
            reviews: 189,
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
            author: 'Emily Rodriguez',
            authorAvatar: 'https://randomuser.me/api/portraits/women/3.jpg',
            downloads: '8.9k',
            level: 'Intermediate',
            duration: '12 Templates',
            description: 'Complete brand identity guide with logos, colors, and typography.',
            tags: ['Branding', 'Corporate', 'Identity']
        },
        {
            id: 4,
            title: 'YouTube Thumbnail Pack',
            category: 'youtube',
            rating: 4.6,
            reviews: 892,
            image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
            author: 'Alex Turner',
            authorAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
            downloads: '56.7k',
            level: 'Beginner',
            duration: '50 Templates',
            description: 'Eye-catching YouTube thumbnails that increase click-through rate.',
            tags: ['YouTube', 'Thumbnail', 'Viral']
        },
        {
            id: 5,
            title: 'Email Newsletter Templates',
            category: 'marketing',
            rating: 4.5,
            reviews: 456,
            image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
            author: 'Jessica Lee',
            authorAvatar: 'https://randomuser.me/api/portraits/women/5.jpg',
            downloads: '21k',
            level: 'Intermediate',
            duration: '20 Templates',
            description: 'Responsive email templates compatible with all major email clients.',
            tags: ['Email', 'Newsletter', 'Marketing']
        },
        {
            id: 6,
            title: 'Instagram Stories Bundle',
            category: 'social-media',
            rating: 4.9,
            reviews: 1234,
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
            author: 'David Kim',
            authorAvatar: 'https://randomuser.me/api/portraits/men/6.jpg',
            downloads: '78.9k',
            level: 'All Levels',
            duration: '100+ Templates',
            description: 'Trendy Instagram story templates for engagement and growth.',
            tags: ['Instagram', 'Stories', 'Trendy']
        },
        {
            id: 7,
            title: 'Annual Report Template',
            category: 'presentation',
            rating: 4.7,
            reviews: 345,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            author: 'Rachel Green',
            authorAvatar: 'https://randomuser.me/api/portraits/women/7.jpg',
            downloads: '15.6k',
            level: 'Advanced',
            duration: '8 Templates',
            description: 'Professional annual report design with data visualization.',
            tags: ['Report', 'Data', 'Corporate']
        },
        {
            id: 8,
            title: 'Facebook Ad Designs',
            category: 'marketing',
            rating: 4.4,
            reviews: 678,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            author: 'Chris Evans',
            authorAvatar: 'https://randomuser.me/api/portraits/men/8.jpg',
            downloads: '43.2k',
            level: 'Beginner',
            duration: '30 Templates',
            description: 'High-converting Facebook ad templates for any industry.',
            tags: ['Facebook', 'Ads', 'Marketing']
        },
        {
            id: 9,
            title: 'Product Catalog Template',
            category: 'business',
            rating: 4.8,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&h=400&fit=crop',
            author: 'Lisa Wong',
            authorAvatar: 'https://randomuser.me/api/portraits/women/9.jpg',
            downloads: '9.8k',
            level: 'Intermediate',
            duration: '15 Templates',
            description: 'Beautiful product catalog for showcasing your products.',
            tags: ['Catalog', 'Product', 'E-commerce']
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="w-4 h-4 text-yellow-400" />);
        }
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
        }
        return stars;
    };

    const filteredTemplates = templates.filter(template => {
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
        const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="">
            {/* Hero Section with Animation */}
            <div className="relative overflow-hidden pt-32 pb-20 lg:pt-30 lg:pb-28">
               

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            <FiZap className="w-4 h-4" />
                            <span>Premium Design Resources</span>
                            <FiTrendingUp className="w-4 h-4" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Professional Templates
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                                for Modern Creators
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                        >
                            Access 500+ premium design templates created by world-class designers.
                            Save time and create stunning visuals in minutes.
                        </motion.p>

                      

                       

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <FiUsers className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-400">10,000+</div>
                                    <div className="text-sm text-gray-500">Active Creators</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <FiClock className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-400">24/7</div>
                                    <div className="text-sm text-gray-500">Support Available</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <FiStar className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-400">4.9/5</div>
                                    <div className="text-sm text-gray-500">Rating from 5k+ reviews</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap items-center justify-center  gap-4">
                        <div className="flex flex-wrap justify-center items-center gap-3">
                            {categories.map((category, idx) => (
                                <motion.button
                                    key={category.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center justify-center  gap-2 px-8 py-4 rounded-full font-medium transition-all duration-200 text-sm ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md shadow-indigo-200'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {category.icon}
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>

                      
                    </div>
                </motion.div>



                {/* Templates Grid/List */}
                <AnimatePresence mode="wait">
                    {viewMode === 'grid' ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {filteredTemplates.map((template, index) => (
                                <motion.div
                                    key={template.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden bg-gray-100 h-56">
                                        <img
                                            src={template.image}
                                            alt={template.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                                                {template.level}
                                            </span>
                                        </div>
                                        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                                            <FiBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-indigo-600 font-medium  px-2 py-1 rounded">
                                                {template.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                {renderStars(template.rating)}
                                                <span className="text-xs text-gray-400 ml-1">({template.reviews})</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-400 mb-2 ">
                                            <Link href={`/templates/${template.id}`}>
                                                {template.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{template.description}</p>

                                        <div className="flex items-center gap-2 mb-4">
                                            <img src={template.authorAvatar} alt={template.author} className="w-3 h-3 rounded-full" />
                                            <span className="text-xs text-gray-500">by {template.author}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {template.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs text-gray-500 px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                                    <FiDownload className="w-4 h-4" />
                                                    <span>{template.downloads}</span>
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {template.duration}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => router.push(`/templates/${template.id}`)}
                                                className="inline-flex items-center gap-2 text-indigo-600 font-medium"
                                            >
                                                View Details
                                                <FiArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) 
                    : (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {filteredTemplates.map((template, index) => (
                                <motion.div
                                    key={template.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 4 }}
                                    className="bg-white rounded-xl hover:shadow-lg transition-all duration-200 border border-gray-100 p-6"
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Image - Left Side */}
                                        <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                                            <img
                                                src={template.image}
                                                alt={template.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-2 left-2">
                                                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-0.5 rounded-full">
                                                    {template.level}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content - Right Side */}
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap items-start justify-between gap-4">
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded">
                                                            {template.category}
                                                        </span>
                                                        <div className="flex items-center gap-0.5">
                                                            {renderStars(template.rating)}
                                                            <span className="text-xs text-gray-500 ml-1">({template.reviews})</span>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                                                        <Link href={""}>
                                                            {template.title}
                                                        </Link>
                                                    </h3>

                                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                        {template.description}
                                                    </p>

                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <img src={template.authorAvatar} alt={template.author} className="w-3 h-3 rounded-full" />
                                                            <span className="text-xs text-gray-500">by {template.author}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                                            <FiDownload className="w-3 h-3" />
                                                            <span>{template.downloads} downloads</span>
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {template.duration}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {template.tags.map((tag, idx) => (
                                                            <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <Link
                                                    href={""}
                                                    className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium whitespace-nowrap flex items-center gap-2"
                                                >
                                                    View Details
                                                    <FiEye className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Empty State */}
                {filteredTemplates.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiSearch className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
                        <p className="text-gray-500 mb-6">We couldn't find any templates matching your search.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
                        >
                            Clear all filters
                            <FiArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
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
}