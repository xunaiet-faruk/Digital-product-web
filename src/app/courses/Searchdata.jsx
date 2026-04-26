"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchdata = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto"
        >
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition">

                {/* Input */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition"
                >
                    <FaSearch />
                </button>
            </div>
        </form>
    );
};

export default Searchdata;