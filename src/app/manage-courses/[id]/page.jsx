"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash, FaStar, FaUser, FaClock, FaTag, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute";

const ManageDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        const found = courses.find(c => c.id == id);
        setCourse(found);
    }, [id]);

    if (!course) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return (
     <ProtectedRoute>
            <div className="min-h-screen bg-black py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <FaArrowLeft />
                        Back to Courses
                    </button>

                    {/* Course Details Card */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800">
                        {/* Image Section */}
                        {course.image && (
                            <div className="w-full h-64 md:h-80 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="p-6 md:p-8">
                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {course.title}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-sm ${i < Math.floor(course.rating || 0)
                                                ? "text-yellow-400"
                                                : "text-gray-600"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm">
                                    ({course.rating || "No rating"})
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {course.description || "No description available"}
                            </p>

                            {/* Course Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                                    <FaUser className="text-indigo-400 text-xl" />
                                    <div>
                                        <p className="text-gray-500 text-xs">Instructor</p>
                                        <p className="text-white font-medium">{course.instructorName || "Unknown"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                                    <FaClock className="text-indigo-400 text-xl" />
                                    <div>
                                        <p className="text-gray-500 text-xs">Duration</p>
                                        <p className="text-white font-medium">{course.duration || "Not specified"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                                    <FaTag className="text-indigo-400 text-xl" />
                                    <div>
                                        <p className="text-gray-500 text-xs">Price</p>
                                        <p className="text-indigo-400 font-bold text-xl">${course.price || 0}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                                    <FaGraduationCap className="text-indigo-400 text-xl" />
                                    <div>
                                        <p className="text-gray-500 text-xs">Level</p>
                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${course.level === "Beginner" ? "bg-green-500/20 text-green-400" :
                                            course.level === "Intermediate" ? "bg-yellow-500/20 text-yellow-400" :
                                                course.level === "Advanced" ? "bg-red-500/20 text-red-400" :
                                                    "bg-gray-500/20 text-gray-400"
                                            }`}>
                                            {course.level || "Not specified"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Students Info */}
                            {course.students && (
                                <div className="mb-6 p-3 bg-gray-800/50 rounded-lg">
                                    <p className="text-gray-500 text-xs">Total Students</p>
                                    <p className="text-white font-medium text-lg">{course.students.toLocaleString()}</p>
                                </div>
                            )}



                        </div>
                    </div>
                </div>
            </div>
     </ProtectedRoute>
    );
};

export default ManageDetails;