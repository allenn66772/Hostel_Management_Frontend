import React, { useState } from "react";
import { motion } from "framer-motion";
import { getStaffByEmailAPI } from "../../service/allAPI";

function Staff_Login() {
  const [stafflog, setstafflog] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = stafflog;

    if (!email || !password) {
      alert("All fields are necessary.");
      return;
    }

    try {
      const result = await getStaffByEmailAPI(email);

      if (!result.data || result.data.length === 0) {
        alert("User not found.");
        return;
      }

      const user = result.data[0];

      if (user.password === password) {
        alert("Welcome back!");
        window.location = "/";
      } else {
        alert("Incorrect password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 p-6">
        <motion.div
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-blue-800">Staff Login</h1>
            <p className="text-sm text-gray-500 mt-2">
              Please log in to manage hostel operations and student data.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={stafflog.email}
                onChange={(e) => setstafflog({ ...stafflog, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={stafflog.password}
                onChange={(e) => setstafflog({ ...stafflog, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold shadow-md bg-blue-600 hover:bg-blue-700"
            >
              Login
            </motion.button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Do not have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Staff_Login;
