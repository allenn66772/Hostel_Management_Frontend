import React, { useState } from "react";
import { motion } from "framer-motion";
import { registerUserAPI } from "../../service/allAPI";

function Userregister() {
  const [userreg, setuserreg] = useState({
    userDetails: {
      fullname: "",
      email: "",
      password: "",
      confrimpassword: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, password, confrimpassword } = userreg.userDetails;

    if ((!fullname, !email, !password, !confrimpassword)) {
      alert("All Fields are Required");
      return;
    }

    if (password !== confrimpassword) {
      alert("Password Doesn't match");
      return;
    }
    try {
      const result = await registerUserAPI(userreg.userDetails);
      console.log(result);
      alert("User Registerd Successfully");
      window.location = "/";
    } catch (error) {
      console.log(error);
      alert("something went wrong");
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
            <h1 className="text-3xl font-extrabold text-blue-800">
              Create an Admin Account
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Sign up to manage hostel rooms and student records
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={userreg.userDetails.fullname}
                onChange={(e) =>
                  setuserreg({
                    userDetails: {
                      ...userreg.userDetails,
                      fullname: e.target.value,
                    },
                  })
                }
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
               value={userreg.userDetails.email}
                onChange={(e) =>
                  setuserreg({
                    userDetails: {
                      ...userreg.userDetails,
                      email: e.target.value,
                    },
                  })
                }
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={userreg.userDetails.password}
                onChange={(e) =>
                  setuserreg({
                    userDetails: {
                      ...userreg.userDetails,
                      password: e.target.value,
                    },
                  })
                }
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={userreg.userDetails.confrimpassword}
                onChange={(e) =>
                  setuserreg({
                    userDetails: {
                      ...userreg.userDetails,
                      confrimpassword: e.target.value,
                    },
                  })
                }
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold shadow-md bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/adlog" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Userregister;
