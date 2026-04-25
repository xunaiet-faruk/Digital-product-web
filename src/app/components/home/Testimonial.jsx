'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCode, FaLinkedin, FaTwitter } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Senior Frontend Developer at Google',
        content: 'The React course completely transformed my career. I went from a junior developer to senior frontend at Google within 6 months. The projects were incredibly practical and interview-ready.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        achievement: 'Hired at Google',
        tech: 'React, Next.js'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Full Stack Developer at Meta',
        content: 'Best investment I ever made. The MERN stack course gave me the confidence to apply for senior roles. I landed my dream job at Meta thanks to the portfolio projects.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        achievement: 'Promoted to Senior Dev',
        tech: 'MERN Stack'
    },
    {
        id: 3,
        name: 'Emma Watson',
        role: 'Tech Entrepreneur',
        content: 'The Next.js course helped me build my SaaS product in record time. I launched my startup within 3 months of completing the course. Now generating $10k MRR!',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        achievement: 'SaaS Launched',
        tech: 'Next.js, Tailwind'
    }
];

const Testimonial = () => {
    return (
        <div className=" py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                   
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Students Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join 10,000+ developers who launched their careers with us
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl relative"
                        >
                            <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-indigo-100" />
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-indigo-100">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className=" text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-sm" />
                                ))}
                            </div>
                            <p className="text-gray-400 mb-4 leading-relaxed">"{testimonial.content}"</p>
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent px-3 py-1 rounded-full">
                                    <FaCode className=" mr-1 text-xs" />
                                    {testimonial.tech}
                                </span>
                            </div>
                            <div className="pt-3 border-t border-gray-100">
                                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                    🎉 {testimonial.achievement}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;