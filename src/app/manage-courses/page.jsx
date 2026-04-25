"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaEye, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const ManageCourses = () => {
    const [courses, setCourses] = useState([
        { id: 1, title: 'Complete Web Development', instructor: 'John Doe', price: 49.99, level: 'Beginner', students: 1234, rating: 4.8, status: 'Active' },
        { id: 2, title: 'React Mastery', instructor: 'Jane Smith', price: 59.99, level: 'Intermediate', students: 892, rating: 4.9, status: 'Active' },
        { id: 3, title: 'Python for Data Science', instructor: 'Mike Johnson', price: 69.99, level: 'Advanced', students: 2156, rating: 4.7, status: 'Inactive' },
        { id: 4, title: 'UI/UX Design Fundamentals', instructor: 'Sarah Williams', price: 39.99, level: 'Beginner', students: 567, rating: 4.6, status: 'Active' },
        { id: 5, title: 'Digital Marketing Masterclass', instructor: 'Alex Brown', price: 44.99, level: 'Beginner', students: 2341, rating: 4.9, status: 'Active' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this course?')) {
            setCourses(courses.filter(course => course.id !== id));
        }
    };

    // Pagination
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCourses = courses.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-black py-8 px-3 sm:py-12 sm:px-4">
            <div className="container mx-auto max-w-full lg:max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-white">Manage Courses</h1>
                            <p className="text-gray-400 text-sm sm:text-base mt-1">View and manage all your courses</p>
                        </div>
                        <Link href="/addproduct" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all w-full sm:w-auto"
                            >
                                <FaPlus className="text-sm" />
                                Add New Course
                            </motion.button>
                        </Link>
                    </div>

                    {/* Desktop Table View (hidden on mobile) */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-gray-700">
                                <tr>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">ID</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Title</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Instructor</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Price</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Level</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Students</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Rating</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Status</th>
                                    <th className="px-3 py-3 text-gray-300 font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCourses.map((course, index) => (
                                    <motion.tr
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                                    >
                                        <td className="px-3 py-3 text-gray-300 text-sm">{course.id}</td>
                                        <td className="px-3 py-3 text-white font-medium text-sm">{course.title}</td>
                                        <td className="px-3 py-3 text-gray-300 text-sm">{course.instructor}</td>
                                        <td className="px-3 py-3 text-indigo-400 font-semibold text-sm">${course.price}</td>
                                        <td className="px-3 py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-red-500/20 text-red-400'
                                                }`}>
                                                {course.level}
                                            </span>
                                        </td>
                                        <td className="px-3 py-3 text-gray-300 text-sm">{course.students.toLocaleString()}</td>
                                        <td className="px-3 py-3 text-yellow-400 text-sm">{course.rating} ★</td>
                                        <td className="px-3 py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                                }`}>
                                                {course.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-3">
                                            <div className="flex gap-2">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"
                                                    title="View"
                                                >
                                                    <FaEye size={14} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition"
                                                    title="Edit"
                                                >
                                                    <FaEdit size={14} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => handleDelete(course.id)}
                                                    className="p-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
                                                    title="Delete"
                                                >
                                                    <FaTrash size={14} />
                                                </motion.button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View (visible on mobile only) */}
                    <div className="md:hidden space-y-3">
                        {currentCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                            >
                                {/* Divider between cards - each card is separated */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-white font-semibold text-base">{course.title}</h3>
                                            <p className="text-gray-400 text-xs mt-1">ID: #{course.id}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {course.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <p className="text-gray-500 text-xs">Instructor</p>
                                            <p className="text-gray-300">{course.instructor}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Price</p>
                                            <p className="text-indigo-400 font-semibold">${course.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Level</p>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium inline-block ${course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-red-500/20 text-red-400'
                                                }`}>
                                                {course.level}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Students</p>
                                            <p className="text-gray-300">{course.students.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Rating</p>
                                            <p className="text-yellow-400">{course.rating} ★</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2 border-t border-gray-700">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium"
                                        >
                                            View
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-medium"
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleDelete(course.id)}
                                            className="flex-1 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium"
                                        >
                                            Delete
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Divider line between each card is automatically created by the gap-3 spacing */}
                    </div>

                    {/* Empty State */}
                    {courses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No courses found. Click "Add New Course" to get started.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {courses.length > 0 && totalPages > 1 && (
                        <div className="mt-6 pt-4 border-t border-gray-800">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-400 text-sm">
                                    Showing {startIndex + 1} to {Math.min(endIndex, courses.length)} of {courses.length} courses
                                </p>
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
                                    >
                                        <FaChevronLeft size={14} className="text-gray-300" />
                                    </motion.button>
                                    <span className="px-3 py-1 bg-indigo-600 rounded-lg text-white text-sm">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
                                    >
                                        <FaChevronRight size={14} className="text-gray-300" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer with Total Count */}
                    {courses.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                            <p className="text-gray-400 text-sm">Total Courses: {courses.length}</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ManageCourses;