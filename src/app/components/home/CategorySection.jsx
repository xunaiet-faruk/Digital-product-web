'use client';

import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaGitAlt,
    FaFigma
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiGraphql,
    SiFirebase
} from 'react-icons/si';

const categories = [
    { icon: FaReact, title: 'React.js', bgColor: 'bg-cyan-500', iconColor: 'text-white', resources: 45, students: '3.2k', description: 'Build modern UIs with hooks, context, and Redux' },
    { icon: SiNextdotjs, title: 'Next.js', bgColor: 'bg-black', iconColor: 'text-white', resources: 32, students: '2.1k', description: 'Full-stack React framework with SSR and SSG' },
    { icon: FaNodeJs, title: 'Node.js', bgColor: 'bg-green-600', iconColor: 'text-white', resources: 38, students: '2.8k', description: 'Build scalable backend APIs with Express' },
    { icon: SiMongodb, title: 'MongoDB', bgColor: 'bg-green-700', iconColor: 'text-white', resources: 28, students: '1.9k', description: 'NoSQL database for modern applications' },
    { icon: SiTailwindcss, title: 'Tailwind CSS', bgColor: 'bg-teal-500', iconColor: 'text-white', resources: 35, students: '2.5k', description: 'Utility-first CSS framework for rapid UI' },
    { icon: SiTypescript, title: 'TypeScript', bgColor: 'bg-blue-600', iconColor: 'text-white', resources: 25, students: '1.7k', description: 'Type-safe JavaScript for better code' },
    { icon: SiGraphql, title: 'GraphQL', bgColor: 'bg-pink-600', iconColor: 'text-white', resources: 22, students: '1.4k', description: 'Query language for your API' },
    { icon: SiFirebase, title: 'Firebase', bgColor: 'bg-yellow-600', iconColor: 'text-white', resources: 30, students: '2.0k', description: 'Backend-as-a-Service for apps' }
];

const CategorySection = () => {
    return (
        <div className="  py-20 ">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* heading text */}
                    <h2 className="text-4xl md:text-5xl font-bold  text-gray-400  mb-4">
                        What Do You Want to{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Master Today?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
                        Choose from our comprehensive web development curriculum and start building real-world projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 ">
                                <div className={`w-20 h-20 mx-auto mb-4 ${category.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className={`text-5xl ${category.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{category.description}</p>
                                <div className="flex justify-center gap-4 text-sm">
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">{category.resources} resources</span>
                                    <span className="text-gray-300 ">•</span>
                                    <span className="text-gray-400 ">{category.students} students</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;