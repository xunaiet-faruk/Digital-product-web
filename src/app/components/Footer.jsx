'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaArrowUp,
    FaHeart
} from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        quickLinks: [
            { name: 'Home', href: '/' },
            { name: 'Courses', href: '/courses' },
            { name: 'Templates', href: '/templates' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
        ],
        resources: [
            { name: 'Blog', href: '/blog' },
            { name: 'FAQs', href: '/faqs' },
            { name: 'Support', href: '/support' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
        ],
        categories: [
            { name: 'Web Templates', href: '/templates?category=web' },
            { name: 'UI Kits', href: '/templates?category=ui' },
            { name: 'Graphics', href: '/templates?category=graphics' },
            { name: 'Video Presets', href: '/templates?category=video' },
            { name: 'Course Bundles', href: '/courses?category=bundles' },
        ]
    };

    const socialLinks = [
        { icon: FaFacebook, href: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
        { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]' },
        { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:bg-[#E4405F]' },
        { icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:bg-[#0A66C2]' },
        { icon: FaGithub, href: 'https://github.com', color: 'hover:bg-[#333]' },
        { icon: FaYoutube, href: 'https://youtube.com', color: 'hover:bg-[#FF0000]' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mt-20 text-gray-300">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Back to top"
            >
                <FaArrowUp className="text-white group-hover:animate-bounce" />
            </motion.button>

            <div className="relative container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <Link href="/" className="inline-block">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Trainer<span className="text-white">Portfolio</span>
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering creators with professional training and premium digital resources. Transform your skills into success.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2 bg-gray-800 rounded-lg ${social.color} transition-all duration-300 hover:text-white`}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaEnvelope className="text-primary" />
                                <span>support@trainerportfolio.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaPhone className="text-primary" />
                                <span>+880 1882239828</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaMapMarkerAlt className="text-primary" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="pt-2">
                            <p className="text-sm text-gray-400 mb-3">Subscribe for updates & offers</p>
                            <form onSubmit={handleSubscribe} className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 pr-24 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Subscribe
                                </button>
                            </form>
                            {subscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs text-green-400 mt-2"
                                >
                                    ✓ Subscribed successfully!
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Categories Row */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <h3 className="text-center text-sm font-semibold text-gray-400 mb-4">Popular Categories</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {footerLinks.categories.map((cat, index) => (
                            <Link
                                key={index}
                                href={cat.href}
                                className="px-4 py-2 bg-gray-800 hover:bg-primary rounded-full text-xs text-gray-400 hover:text-white transition-all duration-300"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center">
                        © {currentYear} Trainer Portfolio. All rights reserved. | Made with{' '}
                        <FaHeart className="inline text-red-500 animate-pulse" /> for creators
                    </p>

                    <div className="flex gap-6 text-xs">
                        <Link href="/privacy" className="text-gray-500 hover:text-primary transition">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-primary transition">Terms of Service</Link>
                        <Link href="/sitemap" className="text-gray-500 hover:text-primary transition">Sitemap</Link>
                    </div>
                </div>
            </div>

            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        </footer>
    );
};

export default Footer;