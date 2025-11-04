import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaBed, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">

      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 py-16">
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-blue-800 leading-tight">
            Welcome to <span className="text-blue-500">HostelEase</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Simplify hostel management with an all-in-one dashboard for rooms,
            students, attendance, and more.
          </p>
          <motion.button 
          onClick={()=>navigate("/chooselogin")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
          alt="Hostel illustration"
          className="w-80 md:w-[400px] mt-10 md:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <h3 className="text-center text-3xl font-bold text-blue-800 mb-10">
          Key Features
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10">
          <motion.div
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 text-4xl mb-4"><FaBuilding /></div>
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Room Management</h4>
            <p className="text-gray-600 text-sm">Easily assign, track, and manage rooms.</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 text-4xl mb-4"><FaUsers /></div>
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Student Records</h4>
            <p className="text-gray-600 text-sm">Keep student info organized and secure.</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 text-4xl mb-4"><FaBed /></div>
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Availability Tracking</h4>
            <p className="text-gray-600 text-sm">Monitor room availability in real time.</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 text-4xl mb-4"><FaClipboardList /></div>
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Attendance</h4>
            <p className="text-gray-600 text-sm">Track daily attendance effortlessly.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4 mt-auto">
        <p>© {new Date().getFullYear()} HostelEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
