"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaTimes, FaDollarSign, FaGraduationCap } from "react-icons/fa";

const Searchdata = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        priceRange: "",
        level: ""
    });

    const priceRanges = [
        { label: "All Prices", value: "" },
        { label: "Under $300", value: "under300", min: 0, max: 300 },
        { label: "$300 - $500", value: "300-500", min: 300, max: 500 },
        { label: "$500 - $700", value: "500-700", min: 500, max: 700 },
        { label: "Over $700", value: "over700", min: 700, max: Infinity }
    ];

    const levels = ["Beginner", "Intermediate", "Advanced"];

    useEffect(() => {
        if (onSearch) {
            onSearch(query, filters);
        }
    }, [query, filters]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setQuery("");
        setFilters({
            priceRange: "",
            level: ""
        });
    };

    const activeFiltersCount = Object.values(filters).filter(f => f !== "").length;

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            {/* Search Bar */}
            <div className="relative">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Search Input */}
                    <div className="flex-1 flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-all">
                        <FaSearch className="ml-4 text-gray-500" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search courses by title..."
                            className="w-full px-3 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 outline-none text-sm sm:text-base"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="mr-3 text-gray-500 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${showFilters || activeFiltersCount > 0
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
                            }`}
                    >
                        <FaFilter className="text-sm" />
                        <span className="text-sm">Filters</span>
                        {activeFiltersCount > 0 && (
                            <span className="bg-white text-indigo-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {activeFiltersCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
                <div className="mt-4 bg-gray-900/95 border border-gray-700 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Filter Courses</h3>
                        <button
                            onClick={clearFilters}
                            className="text-gray-400 hover:text-indigo-400 text-xs sm:text-sm flex items-center gap-1 transition-colors"
                        >
                            <FaTimes className="text-xs" />
                            Clear all
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Price Range Filter */}
                        <div>
                            <label className="block text-gray-400 text-xs sm:text-sm mb-2 flex items-center gap-2">
                                <FaDollarSign className="text-indigo-400" />
                                Price Range
                            </label>
                            <select
                                value={filters.priceRange}
                                onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                {priceRanges.map(range => (
                                    <option key={range.value} value={range.value}>{range.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Level Filter */}
                        <div>
                            <label className="block text-gray-400 text-xs sm:text-sm mb-2 flex items-center gap-2">
                                <FaGraduationCap className="text-indigo-400" />
                                Level
                            </label>
                            <select
                                value={filters.level}
                                onChange={(e) => handleFilterChange("level", e.target.value)}
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="">All Levels</option>
                                {levels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {activeFiltersCount > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                            <div className="flex flex-wrap gap-2">
                                {filters.priceRange && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs">
                                        <FaDollarSign size={10} />
                                        Price: {priceRanges.find(r => r.value === filters.priceRange)?.label}
                                        <button onClick={() => handleFilterChange("priceRange", "")} className="hover:text-white">
                                            <FaTimes size={10} />
                                        </button>
                                    </span>
                                )}
                                {filters.level && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs">
                                        <FaGraduationCap size={10} />
                                        Level: {filters.level}
                                        <button onClick={() => handleFilterChange("level", "")} className="hover:text-white">
                                            <FaTimes size={10} />
                                        </button>
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Searchdata;