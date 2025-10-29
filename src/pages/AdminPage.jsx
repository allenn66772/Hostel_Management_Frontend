import React from "react";
import {
  FaUserGraduate,
  FaUsersCog,
  FaBed,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col">
        <div className="p-5 text-2xl font-bold flex items-center gap-2">
          <FaHome /> Hostel Admin
        </div>
        <nav className="flex-1 px-4 mt-4 space-y-3">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaHome /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaUserGraduate /> Students
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaUsersCog /> Staff
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaBed /> Rooms
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaClipboardList /> Complaints
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <FaCog /> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-blue-500">
          <button className="flex items-center gap-3 w-full p-2 bg-red-600 rounded-lg hover:bg-red-500 transition">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, Admin 👋
          </h1>
          <span className="text-gray-600 font-medium">Today: {new Date().toDateString()}</span>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-blue-600">
            <FaUserGraduate className="text-4xl text-blue-600" />
            <div>
              <h2 className="text-2xl font-semibold">120</h2>
              <p className="text-gray-600">Students</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-green-600">
            <FaUsersCog className="text-4xl text-green-600" />
            <div>
              <h2 className="text-2xl font-semibold">25</h2>
              <p className="text-gray-600">Staff</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-indigo-600">
            <FaBed className="text-4xl text-indigo-600" />
            <div>
              <h2 className="text-2xl font-semibold">60</h2>
              <p className="text-gray-600">Rooms</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-yellow-500">
            <FaClipboardList className="text-4xl text-yellow-500" />
            <div>
              <h2 className="text-2xl font-semibold">8</h2>
              <p className="text-gray-600">Complaints</p>
            </div>
          </div>
        </section>

        {/* Additional Section */}
        <section className="mt-10 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Recent Activities
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Room 101 allocated to Rahul</li>
            <li>⚙️ New staff added: Mr. Mathew</li>
            <li>📄 Complaint resolved: WiFi issue in Block A</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
