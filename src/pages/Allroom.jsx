import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaDoorOpen, FaUserFriends, FaCheck, FaTimes } from 'react-icons/fa';

function Allroom() {

  const [rooms, setRooms] = useState([
    {
      id: 'R101',
      type: 'Double',
      capacity: 2,
      occupied: 1,
      students: ['Abin C S'],
      status: 'Available'
    },
    {
      id: 'R102',
      type: 'Single',
      capacity: 1,
      occupied: 1,
      students: ['Rahul M'],
      status: 'Occupied'
    },
    {
      id: 'R103',
      type: 'Triple',
      capacity: 3,
      occupied: 2,
      students: ['Arun K', 'John D'],
      status: 'Available'
    }
  ]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col items-center">
      <motion.div
        className="max-w-7xl w-full bg-white p-8 shadow-2xl rounded-3xl border border-indigo-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow-sm">
          🏠 All Rooms
        </h2>


        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="p-6 rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-white to-indigo-50 hover:shadow-2xl transition-all cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FaDoorOpen className="text-indigo-600 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">{room.id}</h3>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${room.status === 'Available'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                  }`}>
                  {room.status === 'Available' ? (
                    <FaCheck className="inline mr-1" />
                  ) : (
                    <FaTimes className="inline mr-1" />
                  )}
                  {room.status}
                </span>
              </div>


              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2">
                  <FaUserFriends className="text-indigo-500" /> Type: {room.type}
                </p>
                <p className="text-gray-700">Capacity: {room.capacity}</p>
                <p className="text-gray-700">Occupied: {room.occupied}</p>


                <div className="mt-4">
                  <p className="font-medium text-gray-800">Students:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {room.students.map((student, idx) => (
                      <li key={idx}>{student}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-10 text-center text-gray-600 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Click on a room card to view more details or assign students (feature coming soon).
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default Allroom