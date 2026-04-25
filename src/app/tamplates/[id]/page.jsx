
"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FiArrowLeft,
    FiArrowRight,
    FiDownload,
    FiHeart,
    FiShare2,
    FiStar,
    FiClock,
    FiShoppingCart,
    FiCheckCircle,
    FiPackage
} from 'react-icons/fi';
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';


const templatesData = [
    {
        id: 1,
        title: 'Modern Business Presentation',
        category: 'presentation',
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
        author: 'Sarah Johnson',
        authorAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        downloads: '12.4k',
        level: 'Advanced',
        duration: '15 Templates',
        description: 'Professional business presentation template with modern design and animations.',
        tags: ['Business', 'Modern', 'Animated'],
        price: 49,
        originalPrice: 99,
        format: 'PowerPoint + Keynote',
        fileSize: '245 MB',
        lastUpdated: 'January 15, 2025',
        features: [
            '15 Unique Slide Designs',
            'Customizable Color Schemes',
            'Drag & Drop Images',
            'Vector Icons & Graphics'
        ],
        includes: [
            'PowerPoint File (.pptx)',
            'Keynote File (.key)',
            'Google Slides Link'
        ],
        compatible: ['PowerPoint', 'Keynote', 'Google Slides']
    },
    {
        id: 2,
        title: 'Social Media Kit 2025',
        category: 'social-media',
        rating: 4.9,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
        author: 'Mike Chen',
        authorAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        downloads: '34.5k',
        level: 'Beginner',
        duration: '25 Templates',
        description: 'Complete social media kit for Instagram, Facebook, and TikTok.',
        tags: ['Social Media', 'Instagram', 'TikTok'],
        price: 39,
        originalPrice: 79,
        format: 'PSD + Figma',
        fileSize: '189 MB',
        lastUpdated: 'February 1, 2025',
        features: [
            '25 Ready-to-Use Templates',
            'Instagram Posts & Stories',
            'Facebook Cover & Posts'
        ],
        includes: [
            'PSD Files',
            'Figma Files',
            'Canva Templates Link'
        ],
        compatible: ['Photoshop', 'Figma', 'Canva']
    }
];

export default function SingleTemplatePage() {
    const params = useParams();
    const router = useRouter();
    const [template, setTemplate] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [isLiked, setIsLiked] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
  
        const id = parseInt(params.id);
        const found = templatesData.find(t => t.id === id);
        setTemplate(found);

        console.log('Template ID from URL:', params.id);
        console.log('Found template:', found);
    }, [params.id]);

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

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        setTimeout(() => setIsAddedToCart(false), 2000);
    };

    if (!template) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading template...</p>
                    <p className="text-sm text-gray-400 mt-2">Template ID: {params.id}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group"
                >
                    <FiArrowLeft className="w-5 h-5" />
                    <span>Back to Templates</span>
                </button>
            </div>

            {/* Template Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                        <img
                            src={template.image}
                            alt={template.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                                {template.level}
                            </span>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                                {isLiked ? (
                                    <FaHeart className="w-5 h-5 text-red-500" />
                                ) : (
                                    <FiHeart className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-indigo-50 transition-colors">
                                <FiShare2 className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full">
                                    {template.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    {renderStars(template.rating)}
                                    <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
                                    <span className="text-sm text-gray-400">({template.reviews} reviews)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                {template.title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {template.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 py-4 border-y border-gray-200">
                            <div className="flex items-center gap-2">
                                <img src={template.authorAvatar} alt={template.author} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-sm text-gray-500">Created by</p>
                                    <p className="font-medium text-gray-900">{template.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiDownload className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-500">Downloads</p>
                                    <p className="font-medium text-gray-900">{template.downloads}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-500">Updated</p>
                                    <p className="font-medium text-gray-900">{template.lastUpdated}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-gray-900">${template.price}</span>
                                <span className="text-lg text-gray-400 line-through">${template.originalPrice}</span>
                                <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-full">
                                    Save ${template.originalPrice - template.price}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                                >
                                    <FiShoppingCart className="w-5 h-5" />
                                    {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {template.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-8">
                        {['overview', 'features', 'whats-included'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 text-lg font-semibold transition-colors relative ${activeTab === tab ? 'text-indigo-600' : 'text-gray-500'
                                    }`}
                            >
                                {tab === 'overview' && 'Overview'}
                                {tab === 'features' && 'Features'}
                                {tab === 'whats-included' && "What's Included"}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Format</h3>
                            <p className="text-gray-600">{template.format}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-3">File Size</h3>
                            <p className="text-gray-600">{template.fileSize}</p>
                        </div>
                    </div>
                )}

                {activeTab === 'features' && (
                    <div className="grid md:grid-cols-2 gap-4">
                        {template.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <FiCheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'whats-included' && (
                    <div className="grid md:grid-cols-2 gap-4">
                        {template.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <FiPackage className="w-5 h-5 text-indigo-600" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}