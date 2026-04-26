"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthProvider';

const Addcourses = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        description: '',
        instructorName: '',
        duration: '',
        price: '',
        level: '',
        image: '',
        rating: '',
        students: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const {user} =useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {

            const newCorses = {
                ...formData,
                id: Date.now()
            }
            const existingCourse =JSON.parse(localStorage.getItem('courses')) || [];
            const update =[...existingCourse, newCorses];
            localStorage.setItem('courses', JSON.stringify(update));
            setMessage('Course added successfully!');
            setFormData({
                email: '',
                title: '',
                description: '',
                instructorName: '',
                duration: '',
                price: '',
                level: '',
                image: '',
                rating: '',
                students: ''
            });
        } catch (error) {
            setMessage('Error adding product. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
                >
                    <h1 className="text-3xl font-bold text-white mb-2">Add New Course</h1>
                    <p className="text-gray-400 mb-6">Fill in the details to add a new course</p>

                    {message && (
                        <div className={`mb-4 p-3 rounded-lg text-center ${message.includes('success')
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : 'bg-red-500/20 text-red-400 border border-red-500/50'
                            }`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={user?.email}
                                onChange={handleChange}
                                readOnly
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="instructor@example.com"
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Course Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="Complete Web Development Course"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Description *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="Course description goes here..."
                            />
                        </div>

                        {/* Instructor Name */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Instructor Name *</label>
                            <input
                                type="text"
                                name="instructorName"
                                value={formData.instructorName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Duration *</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="10 hours / 8 weeks"
                            />
                        </div>

                        {/* Price and Level Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Price *</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    step="0.01"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                    placeholder="49.99"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Level *</label>
                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                >
                                    <option value="">Select Level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="All Levels">All Levels</option>
                                </select>
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Image URL *</label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        {/* Rating and Students Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Rating *</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    required
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                    placeholder="4.5"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Students *</label>
                                <input
                                    type="number"
                                    name="students"
                                    value={formData.students}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                                    placeholder="1234"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold mt-6 disabled:opacity-50"
                        >
                            {loading ? 'Adding Course...' : 'Add Course'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Addcourses;