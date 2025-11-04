import React from 'react'
import { Link } from "react-router-dom";
import { FaBed, FaRegCommentDots, FaWallet } from "react-icons/fa";

function Userhome() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex flex-col justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-6">Welcome to Hostel Management</h1>
        <p className="text-gray-600 mb-10">Choose an option below to get started</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* View Rooms */}
          <Link to="/viewrooms" className="bg-sky-100 hover:bg-sky-200 p-6 rounded-xl shadow transition flex flex-col items-center">
            <FaBed className="text-5xl text-sky-600 mb-3" />
            <h2 className="text-xl font-semibold text-sky-800">View Rooms</h2>
          </Link>

          {/* Give Complaints */}
          <Link to="/complaints" className="bg-sky-100 hover:bg-sky-200 p-6 rounded-xl shadow transition flex flex-col items-center">
            <FaRegCommentDots className="text-5xl text-sky-600 mb-3" />
            <h2 className="text-xl font-semibold text-sky-800">Give Complaints</h2>
          </Link>

          {/* Pay Fee */}
          <Link to="/payfee" className="bg-sky-100 hover:bg-sky-200 p-6 rounded-xl shadow transition flex flex-col items-center">
            <FaWallet className="text-5xl text-sky-600 mb-3" />
            <h2 className="text-xl font-semibold text-sky-800">Pay Fee</h2>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Userhome