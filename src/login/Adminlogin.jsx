import React, { useState } from 'react'
import { motion } from "framer-motion";
import { getAdminByEmailAPI } from '../../service/allAPI';

function Adminlogin() {
 const [adlogData,setadlogData]=useState({
  email:"",
  password:""

 })

 const handleSubmit =async(e)=>{
  e.preventDefault();
 const {email,password}=adlogData

 if(!email || !password){
  alert("both fields are required")
 }

 try{
  const result= await getAdminByEmailAPI(email)
  if(!result.data || result.data.length == 0){
    alert("USer not found")
    return
  }

   const user = result.data[0];

   //compare password
   if(user.password ===password){
    alert("welcome back")
    window.location="/"
   }else{
    alert("incorrect Pawsswr")
   }

 }catch(error){
  console.log(error);
  alert("login failed plese try again lter")
  

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
              value={adlogData.email}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
             
            onChange={(e)=>setadlogData({...adlogData,email:e.target.value})}
            required
          />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={adlogData.password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            onChange={(e)=>setadlogData({...adlogData,password:e.target.value})}
            />
          </div>

         

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </motion.button>
        </form>
       

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
    </>
  )
}

export default Adminlogin