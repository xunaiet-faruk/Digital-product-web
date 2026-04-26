"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthProvider';
import { FaUserCircle, FaChevronDown, FaTachometerAlt, FaSignOutAlt, FaBars, FaTimes, FaHome, FaBook, FaFileAlt, FaInfoCircle, FaShoppingCart, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const isActive = (path) => {
        return pathname === path;
    };

    const navItems = [
        { name: 'Home', path: '/', icon: FaHome },
        { name: 'Courses', path: '/courses', icon: FaBook },
        { name: 'Templates', path: '/tamplates', icon: FaFileAlt },
        { name: 'About', path: '/about', icon: FaInfoCircle },
        { name: 'Cart', path: '/cart', icon: FaShoppingCart },
        { name: 'Admin', path: '/admin', icon: FaUserShield },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleLogout = async () => {
        try {
            await logout();
            setIsDropdownOpen(false);
            setIsMobileMenuOpen(false);
            router.push('/');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleAddcontent = () => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        router.push('/addcourses');
    };

    const handleManageCourses = () => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        router.push('/manage-courses');
    };

    return (
        <div>
            <header className="shadow-md bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition"
                        >
                            Xunaiet
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-4 py-2 transition-all duration-300 group ${isActive(item.path)
                                    ? 'text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text font-semibold text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>

                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full text-white"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}

                                {!isActive(item.path) && (
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-300"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section - User Dropdown & Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        {/* User Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            {!user ? (
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link
                                        href="Authentication/login"
                                        className="px-5 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-indigo-600/25"
                                    >
                                        Login
                                    </Link>
                                </motion.div>
                            ) : (
                                <div>
                                    <motion.button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaUserCircle className="text-indigo-400 text-xl" />
                                        <span className="text-white text-sm hidden sm:inline">
                                            {user.email?.split('@')[0]}
                                        </span>
                                        <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </motion.button>

                                    {/* User Dropdown Menu */}
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50"
                                            >
                                                <div className="py-2">
                                                    <div className="px-4 py-3 border-b border-gray-800">
                                                        <p className="text-white text-sm font-medium truncate">
                                                            {user.email}
                                                        </p>
                                                        <p className="text-gray-500 text-xs mt-1">
                                                            Logged In
                                                        </p>
                                                    </div>

                                                    <button
                                                        onClick={handleAddcontent}
                                                        className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
                                                    >
                                                        <FaTachometerAlt className="text-indigo-400 text-sm" />
                                                        <span>Add Courses</span>
                                                    </button>
                                                    <button
                                                        onClick={handleManageCourses}
                                                        className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
                                                    >
                                                        <FaTachometerAlt className="text-indigo-400 text-sm" />
                                                        <span>Manage Courses</span>
                                                    </button>

                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex cursor-pointer items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-red-600/20 transition-colors duration-200"
                                                    >
                                                        <FaSignOutAlt className="text-red-400 text-sm" />
                                                        <span>Logout</span>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button - Visible only on mobile/tablet */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors mobile-menu-button"
                        >
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Sidebar Menu */}
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-64 sm:w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="p-6 border-b border-gray-800">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Menu
                                    </h2>
                                    {user && (
                                        <p className="text-gray-400 text-sm mt-2 truncate">
                                            {user.email}
                                        </p>
                                    )}
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 overflow-y-auto py-4">
                                    <div className="space-y-1 px-3">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                href={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive(item.path)
                                                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-400 border-l-2 border-indigo-500'
                                                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                                                    }`}
                                            >
                                                <item.icon className="text-lg" />
                                                <span className="font-medium">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-gray-800 my-4 mx-3"></div>

                                    {/* Course Management Links (for logged in users) */}
                                    {user && (
                                        <div className="space-y-1 px-3">
                                            <div className="px-4 py-2">
                                                <p className="text-gray-500 text-xs uppercase tracking-wider">Course Management</p>
                                            </div>
                                            <button
                                                onClick={handleAddcontent}
                                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-indigo-600/20 hover:text-white transition-all duration-200"
                                            >
                                                <FaTachometerAlt className="text-indigo-400" />
                                                <span className="font-medium">Add Courses</span>
                                            </button>
                                            <button
                                                onClick={handleManageCourses}
                                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-indigo-600/20 hover:text-white transition-all duration-200"
                                            >
                                                <FaTachometerAlt className="text-indigo-400" />
                                                <span className="font-medium">Manage Courses</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="p-4 border-t border-gray-800">
                                    {user ? (
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-200"
                                        >
                                            <FaSignOutAlt />
                                            <span>Logout</span>
                                        </button>
                                    ) : (
                                        <Link
                                            href="Authentication/login"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;