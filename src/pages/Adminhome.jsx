import React from "react";
import {
  FaBed,
  FaPlusCircle,
  FaTools,
  FaClipboardList,
  FaUserGraduate,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaUserCircle,
  FaUsers,
  FaDoorOpen,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Adminhome() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      <aside className="w-64 bg-blue-800 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-center py-6 border-b border-blue-700">
            Admin Panel
          </h2>
          <nav className="flex flex-col mt-6 space-y-2 px-4">
            <Link
              to="/adminhome"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaClipboardList /> <span>Dashboard</span>
            </Link>

            <Link
              to="/addroom"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaPlusCircle /> <span>Add Room</span>
            </Link>

            <Link
              to="/allroom"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaBed /> <span>All Rooms</span>
            </Link>

            <Link
              to="/complaintpage"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaClipboardList /> <span>Complaints</span>
            </Link>

            <Link
              to="/viewmaintenence"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaTools /> <span>View Maintenance</span>
            </Link>

            <Link
              to="/payfees"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaMoneyBillWave /> <span>Fees</span>
            </Link>
          </nav>
        </div>

        <button className="flex items-center justify-center space-x-2 py-4 bg-blue-900 hover:bg-blue-700 transition">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </aside>

      
      <main className="flex-1 p-6">
        
        <header className="flex justify-between items-center bg-white shadow rounded-xl p-4 mb-8">
          <h1 className="text-2xl font-bold text-blue-800">HostelEase</h1>
          <div className="flex items-center space-x-3">
            <FaUserCircle className="text-3xl text-blue-700" />
            <span className="font-semibold text-gray-700">Admin</span>
          </div>
        </header>

        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/addroom"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaPlusCircle className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Add Room</h3>
            <p className="text-gray-500 text-sm mt-2">
              Create new rooms and set capacity/status.
            </p>
          </Link>

          <Link
            to="/allroom"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaBed className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">All Rooms</h3>
            <p className="text-gray-500 text-sm mt-2">
              View and manage room allocations & availability.
            </p>
          </Link>

          <Link
            to="/complaintpage"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaClipboardList className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Complaints</h3>
            <p className="text-gray-500 text-sm mt-2">
              Review and resolve student complaints.
            </p>
          </Link>

          <Link
            to="/viewmaintenence"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaTools className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Maintenance</h3>
            <p className="text-gray-500 text-sm mt-2">
              Track maintenance requests and assign staff.
            </p>
          </Link>

          <Link
            to="/payfees"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaMoneyBillWave className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Fees</h3>
            <p className="text-gray-500 text-sm mt-2">
              Manage fee records, view payments & send reminders.
            </p>
          </Link>

          <Link
            to="/staffhome"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaUserGraduate className="text-5xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Staff</h3>
            <p className="text-gray-500 text-sm mt-2">
              View staff list, roles, and contact details.
            </p>
          </Link>

          {/*  */}
          <Link
            to="/students"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaUsers className="text-5xl text-teal-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Total Students</h3>
            <p className="text-gray-500 text-sm mt-2">
              120
            </p>
          </Link>

          <Link
            to="/students"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaDoorOpen className="text-5xl text-brown-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Occupied Rooms</h3>
            <p className="text-gray-500 text-sm mt-2">
              45 / 60
            </p>
          </Link>

          <Link
            to="/students"
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
          >
            <FaExclamationTriangle className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Pending Complaints</h3>
            <p className="text-gray-500 text-sm mt-2">
              7
            </p>
          </Link>


          {/* <div className="bg-white rounded-xl p-6 shadow flex items-center justify-between hover:bg-red-50 hover:shadow-lg transition">
            <div>
              <h4 className="text-sm text-gray-500">Pending Complaints</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">7</p>
            </div>
            <FaExclamationTriangle className="text-4xl text-red-500" />
          </div> */}
        </section>

        
      </main>
    </div>
  );
}

export default Adminhome;
