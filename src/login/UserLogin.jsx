import React, { useState } from "react";
import { motion } from "framer-motion";

function UserLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    var name = event.target.name;
    var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm(Object.assign({}, form, { [name]: value }));
  }

  function validate() {
    var newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);

    // Simulate async login (replace with real API call)
    setTimeout(function () {
      setLoading(false);
      // Example success action
      alert("Logged in as: " + form.email + (form.remember ? " (remembered)" : ""));
    }, 900);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function clearError(name) {
    if (errors[name]) {
      var copy = Object.assign({}, errors);
      delete copy[name];
      setErrors(copy);
    }
  }

  return (
   <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 p-6">
        <motion.div
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-blue-800">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-2">Sign in to manage hostel rooms and students</p>
          </div>
  
          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={function (e) { handleChange(e); clearError("email"); }}
                onBlur={function () { clearError("email"); }}
                placeholder="you@example.com"
                className={
                  "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 " +
                  (errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200")
                }
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
  
            {/* Password */}
            <div className="mb-2">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={function (e) { handleChange(e); clearError("password"); }}
                  placeholder="Enter your password"
                  className={
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 " +
                    (errors.password ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200")
                  }
                />
                <button
                  type="button"
                  onClick={function (e) { e.preventDefault(); toggleShowPassword(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>
  
            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
  
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
  
            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={
                "w-full py-3 rounded-lg text-white font-semibold shadow-md " +
                (loading ? "bg-blue-300 cursor-wait" : "bg-blue-600 hover:bg-blue-700")
              }
            >
              {loading ? "Signing in..." : "Sign In"}
            </motion.button>
          </form>
  
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>or continue with</p>
  
            <div className="mt-4 flex gap-3 justify-center">
              <button
                type="button"
                onClick={function () { alert("Google sign-in not implemented."); }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.2c0-.63-.06-1.24-.18-1.83H12v3.48h5.7c-.24 1.3-.98 2.4-2.08 3.12v2.58h3.36c1.97-1.82 3.1-4.5 3.1-7.35z" fill="#4285F4"/>
                  <path d="M12 22c2.7 0 4.96-.9 6.62-2.44l-3.36-2.58c-.93.62-2.12.98-3.26.98-2.5 0-4.62-1.68-5.38-3.94H3.12v2.48C4.8 19.8 8.1 22 12 22z" fill="#34A853"/>
                  <path d="M6.62 13.02A6.98 6.98 0 0 1 6.12 12c0-.65.1-1.28.3-1.87V7.65H3.12A10.98 10.98 0 0 0 2 12c0 1.78.4 3.46 1.12 4.98l3.5-3.96z" fill="#FBBC05"/>
                  <path d="M12 6.04c1.47 0 2.8.5 3.84 1.48l2.88-2.88C16.96 2.9 14.7 2 12 2 8.1 2 4.8 4.2 3.12 7.65l3.5 2.48C7.38 7.72 9.5 6.04 12 6.04z" fill="#EA4335"/>
                </svg>
                Google
              </button>
  
              <button
                type="button"
                onClick={function () { alert("Github sign-in not implemented."); }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.9 5.4.9 11.7c0 4.8 3.1 8.9 7.4 10.3.5.1.7-.2.7-.5v-1.9c-3 .7-3.6-1.4-3.6-1.4-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 .9.1-.7.4-1.3.7-1.6-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.1-1.2 3-.9 3-.9.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 2.9 0 4.2-2.5 5.1-4.9 5.4.4.3.8 1 .8 2v3c0 .3.2.6.7.5 4.3-1.5 7.4-5.5 7.4-10.3C23 5.4 18.3.5 12 .5z"/>
                </svg>
                GitHub
              </button>
            </div>
          </div>
  
          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </motion.div>
      </div>
   </>
  );
}

export default UserLogin;
