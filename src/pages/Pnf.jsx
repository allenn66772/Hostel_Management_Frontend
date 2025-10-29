import React from "react";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-6 text-center">
      <h1 className="text-[8rem] font-extrabold drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-200 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        <FaHome />
        Back to Home
      </a>

      <div className="mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} Hostel Management System
      </div>
    </div>
  );
};

export default NotFound;
