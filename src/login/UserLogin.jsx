import React, { useState } from "react";
import { motion } from "framer-motion";
import { getUserByEmailAPI } from "../../service/allAPI";

export default function UserLogin() {
  const [userlog, setUserlog] = useState({
    userDetails: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userlog.userDetails;

    if (!email || !password) {
      alert("Both fields are required");
      return;
    }

    try {
      const result = await getUserByEmailAPI(email);

      // Check if user exists
      if (!result.data || result.data.length === 0) {
        alert("User not found");
        return;
      }

      const user = result.data[0];

      // Compare password
      if (user.password === password) {
        alert("Welcome Back!");
        console.log("Login successful:", user);
        window.location = "/userhome";
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 p-6">
      <motion.div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-blue-800">Login</h1>
          <p className="text-sm text-gray-500 mt-2">
            Login to manage hostel rooms and students
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={userlog.userDetails.email}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              onChange={(e) =>
                setUserlog({
                  userDetails: {
                    ...userlog.userDetails,
                    email: e.target.value,
                  },
                })
              }
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={userlog.userDetails.password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              onChange={(e) =>
                setUserlog({
                  userDetails: {
                    ...userlog.userDetails,
                    password: e.target.value,
                  },
                })
              }
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
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
          
        </p>
      </motion.div>
    </div>
  );
}
