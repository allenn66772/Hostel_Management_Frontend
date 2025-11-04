import React, { useEffect, useState } from 'react'
import { getRoomAPI } from '../../service/allAPI'
import { motion } from 'framer-motion'
import { FaBed, FaUsers, FaTools, FaWrench } from 'react-icons/fa'
import { GrHostMaintenance } from 'react-icons/gr'


function Viewmaintenence() {
  const[mRooms, setMRooms] =useState([])

  // fetching data
  const fetchRooms = async ()=>{
    try{
      const response = await getRoomAPI()
      console.log(response.data);

      const maintenanceRooms = response.data.filter(room => room.roomStatus.toLowerCase() === 'maintenance')
      console.log(maintenanceRooms);
      setMRooms(maintenanceRooms)
      
      
      
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchRooms()
  },[])
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-grey-50 to-grey-100 p-10">
      <div className='flex flex-wrap gap-2 justify-center items-center' >
        <GrHostMaintenance  className='text-5xl text-red-500'/>
        <h2 className="text-4xl font-bold text-orange-800 text-center mb-3">
          Rooms Under Maintenance
        </h2>
  
      </div>
      {mRooms.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No rooms currently under maintenance.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
          {mRooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all border-t-4 border-yellow-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-orange-700">
                  Room {room.roomNumber}
                </h3>
                <FaWrench className="text-yellow-500 text-3xl" />
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaBed className="text-blue-500" />
                  <span className="font-medium">Type:</span> {room.roomType}
                </p>
                <p className="flex items-center gap-2">
                  <FaUsers className="text-green-500" />
                  <span className="font-medium">Capacity:</span>{" "}
                  {room.roomCapacity}
                </p>
                <p className="flex items-center gap-2">
                  <FaTools className="text-yellow-500" />
                  <span className="font-medium">Status:</span>{" "}
                  <span className="px-2 py-1 rounded-md text-white text-sm bg-yellow-600">
                    {room.roomStatus}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>

    </>
  )
}

export default Viewmaintenence