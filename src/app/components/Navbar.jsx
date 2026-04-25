"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthProvider';
import { FaUserCircle, FaChevronDown, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const isActive = (path) => {
        return pathname === path;
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Templates', path: '/tamplates' },
        { name: 'About', path: '/about' },
        { name: 'Cart', path: '/cart' },
        { name: 'Admin', path: '/admin' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setIsDropdownOpen(false);
            router.push('/');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleAddcontent = () => {
        setIsDropdownOpen(false);
        router.push('/addcourses');
    };

    return (
        <div>
            <header className="shadow-md bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
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

                    {/* Auth Section */}
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
                                {/* Dropdown Button */}
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

                                {/* Dropdown Menu */}
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
                                                {/* User Info */}
                                                <div className="px-4 py-3 border-b border-gray-800">
                                                    <p className="text-white text-sm font-medium truncate">
                                                        {user.email}
                                                    </p>
                                                    <p className="text-gray-500 text-xs mt-1">
                                                        Logged In
                                                    </p>
                                                </div>

                                                {/* Dashboard Link */}
                                                <button
                                                    onClick={handleAddcontent}
                                                        className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
                                                >
                                                    <FaTachometerAlt className="text-indigo-400 text-sm" />
                                                    <span>Add Courses</span>
                                                </button>

                                                {/* Logout Button */}
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
                </nav>
            </header>
        </div>
    );
};

export default Navbar;