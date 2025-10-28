import React from 'react'
import { motion } from "framer-motion";

function Header() {
  return (
    <>
        <motion.header
      className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo / Title */}
      <h1 className="text-2xl font-extrabold text-blue-700 cursor-pointer">
        🏫 HostelEase
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-blue-700 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-700 transition-colors">Rooms</a>
        <a href="#" className="hover:text-blue-700 transition-colors">Students</a>
        <a href="#" className="hover:text-blue-700 transition-colors">Contact</a>
      </nav>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors"
      >
        Dashboard
      </motion.button>
    </motion.header>
    
    </>
  )
}

export default Header