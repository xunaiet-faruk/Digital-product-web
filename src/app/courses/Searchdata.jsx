"use client";
import React, { useState, useEffect } from "react";

const Searchdata = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    // live search effect
    useEffect(() => {
        if (onSearch) {
            onSearch(query);
        }
    }, [query]);

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition">

                {/* Input only */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
                />

            </div>
        </div>
    );
};

export default Searchdata;