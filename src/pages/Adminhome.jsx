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
import Header from "../components/Header";

function Adminhome() {
  return (
    <>
    <Header/>
 <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
    {/* Add Room */}
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

    {/* All Rooms */}
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

    {/* Complaints */}
    <Link
      to="/complaints"
      className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
    >
      <FaClipboardList className="text-5xl text-yellow-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Complaints</h3>
      <p className="text-gray-500 text-sm mt-2">
        Review and resolve student complaints.
      </p>
    </Link>

    {/* Maintenance */}
    <Link
      to="/viewmain"
      className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
    >
      <FaTools className="text-5xl text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Maintenance</h3>
      <p className="text-gray-500 text-sm mt-2">
        Track maintenance requests and assign staff.
      </p>
    </Link>

    {/* Staff */}
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

    {/* Students */}
    <Link
      to="/students"
      className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
    >
      <FaUsers className="text-5xl text-teal-800 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Total Students</h3>
      <p className="text-gray-500 text-sm mt-2">120</p>
    </Link>

    {/* Pending Complaints */}
    <Link
      to="/students"
      className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
    >
      <FaExclamationTriangle className="text-5xl text-yellow-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">
        Pending Complaints
      </h3>
      <p className="text-gray-500 text-sm mt-2">7</p>
    </Link>

    {/* Example Extra Box (Optional to make full 4x4 grid) */}
    <Link
      to="/reports"
      className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition text-center hover:bg-blue-50"
    >
      <FaMoneyBillWave className="text-5xl text-indigo-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
      <p className="text-gray-500 text-sm mt-2">View monthly summaries</p>
    </Link>
  </section>
</div>

</>
  );
}

export default Adminhome;
