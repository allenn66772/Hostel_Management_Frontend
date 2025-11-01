import React, { useState } from 'react'
import { FaLock, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [adminDetails, setAdminDetails] = useState({
    email:"admin@gmail.com",
    password:"admin"
  })

  const [newAdminDetails, setnewAdminDetails] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const handleAdminLogin = ()=>{
    if(adminDetails.email == newAdminDetails.email && adminDetails.password == newAdminDetails.password){
      localStorage.setItem("isAdminLogin", "true")
      navigate("/adminDashboard")
      
    }else{
      alert("Entered Email & Password Doesen't Match...Please Enter Correct Detail...!")
    }
  }

  
  return (
    <>
      <div className='bg-blue-500 flex justify-center items-center w-full h-screen'>
        <div className='grid rounded-xl hover:shadow bg-white w-full max-w-md p-5'>
          <h1 className='text-center text-3xl font-bold p-3'>Admin Login</h1>
          <div className='p-3'>
            <label className='block text-gray-600 font-medium mb-2' htmlFor="">Email</label>
            <div className='flex items-center border rounded-lg p-2 focus-within:border-blue-600'>
              <FaUserCircle  className='text-gray-600'/>
              <input onChange={(e)=>setnewAdminDetails({...newAdminDetails,email:e.target.value})} id='email' className='w-full ms-2 outline-none border-none' type="text" placeholder='Enter Your Email' />

            </div>
          </div>


          <div className='p-3'>
            <label className='block text-gray-600 font-medium mb-2' htmlFor="">Password</label>
            <div className='flex items-center border rounded-lg p-2 focus-within:border-blue-600'>
              <FaLock className='text-gray-600 '/>
              <input onChange={(e)=>setnewAdminDetails({...newAdminDetails,password:e.target.value})} id='password' className='w-full ms-2 outline-none border-none' type="text" placeholder='Enter Your Password' />

            </div>
          </div>

          
          <div className='my-4'>
            <button onClick={handleAdminLogin} type='button' className='cursor-pointer bg-blue-600 rounded-xl text-white w-full p-2 hover:bg-blue-800 transition'>Login</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login