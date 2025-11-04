import React from "react";
import { FaUserShield, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center from-blue-50 to-blue-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-blue-600">
        Hostel <span className="text-blue-400">Ease</span>
      </h1>

      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] md:w-[70%] lg:w-[60%]">
        
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <FaUserShield className="text-green-600 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Admin</h2>
          <p className="text-gray-500 text-center mb-6">
            Manage rooms, students, staff, and hostel operations efficiently.
          </p>
          <Link
            to="/adlog"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login as Admin
          </Link>
        </div>

          {/* Student Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <FaUserGraduate className="text-purple-600 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Student</h2>
            <p className="text-gray-500 text-center mb-6">
              View your room details, fees, and submit complaints easily.
            </p>
            <Link
              to="/userlog"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login as Student
            </Link>
          </div>

        
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <FaUserGraduate className="text-purple-600 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Student</h2>
          <p className="text-gray-500 text-center mb-6">
            View your room details, fees, and submit complaints easily.
          </p>
          <Link
            to="/userlog"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login as Student
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mb-6 text-gray-600 text-sm text-center">
        © 2025 HostelEase. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
