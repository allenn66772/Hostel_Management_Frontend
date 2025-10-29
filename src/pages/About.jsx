import React from "react";
import { FaHome, FaUsers, FaBuilding, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-extrabold mb-2">About Our Hostel</h1>
        <p className="text-lg text-gray-200">
          Managing students, rooms, and staff — all in one system
        </p>
      </header>

      {/* About Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            The <span className="font-semibold text-blue-600">Hostel Management System </span> 
             is a digital platform designed to make hostel administration smooth and efficient. 
            It allows admins to manage rooms, staff, and student records while giving users 
            access to login, complaint, and room allocation features.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaBuilding className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To simplify hostel management operations through technology — 
              creating an organized, transparent, and user-friendly platform for 
              both students and administrators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaHome className="text-4xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              We aim to make every hostel digitally managed and eco-friendly, 
              reducing paperwork and enabling faster communication between 
              students and hostel authorities.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaUsers className="text-5xl text-indigo-600 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold">Admin</h4>
              <p className="text-gray-500 text-sm mt-2">
                Oversees hostel operations and student management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaUsers className="text-5xl text-blue-600 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold">Staff</h4>
              <p className="text-gray-500 text-sm mt-2">
                Handles maintenance, cleaning, and student support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaUsers className="text-5xl text-green-600 mb-3 mx-auto" />
              <h4 className="text-xl font-semibold">Students</h4>
              <p className="text-gray-500 text-sm mt-2">
                The heart of our hostel community — we care for your comfort.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-gray-200 py-6 text-center mt-10">
        <div className="flex justify-center gap-6 mb-3">
          <a href="mailto:info@hostel.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
          <a href="/" className="hover:text-white transition">
            <FaHome />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Hostel Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
