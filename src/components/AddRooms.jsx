import React, { useState } from 'react'
import { motion } from "framer-motion";
import { addRoomAPI } from '../../service/allAPI';
import Swal from 'sweetalert2';

function AddRooms() {
    //state for storing roomdata

    const [roomData, setRoomData] = useState({
        roomNumber: "",
        roomType: "",
        roomCapacity: "",
        roomStatus: ""
    });

    //api call

    const handleAddRoom = async () => {
        const { roomNumber, roomType, roomCapacity, roomStatus } = roomData
        if (roomNumber && roomType && roomCapacity && roomStatus) {
            try {
                const result = await addRoomAPI(roomData)
                console.log(result);
                Swal.fire({
                    title: "Success...!",
                    text: "Room added successfully!",
                    icon: "success"
                });
            } catch (error) {
                console.log(error);

            }
        } else {
            alert("Please afill The Details Completely")
            Swal.fire({
                title: "Error...!",
                text: "Room added successfully!",
                icon: "error"
            });
        }
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                <motion.div
                    className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
                        🏠 Add New Room
                    </h2>

                    <form>
                        <div className="grid grid-cols-1 lg:grid-cols-1">
                            {/* Left Column - Form Fields */}
                            <div className="space-y-4">
                                {/* Room Number */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Room Number
                                    </label>
                                    <input
                                        value={roomData.roomNumber}
                                        onChange={(e) => setRoomData({ ...roomData, roomNumber: e.target.value })}
                                        type="text"
                                        name="roomNumber"
                                        placeholder="Enter room number"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                        required
                                    />
                                </div>

                                {/* Room Type */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Room Type
                                    </label>
                                    <select
                                        name="type"
                                        value={roomData.roomType}
                                        onChange={(e) => setRoomData({ ...roomData, roomType: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                        required
                                    >
                                        <option value="">Select type</option>
                                        <option value="Single">Single</option>
                                        <option value="Double">Double</option>
                                        <option value="Dormitory">Dormitory</option>
                                    </select>
                                </div>

                                {/* Capacity */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Capacity
                                    </label>
                                    <input
                                        value={roomData.roomCapacity}
                                        type="number"
                                        name="capacity"
                                        onChange={(e) => setRoomData({ ...roomData, roomCapacity: e.target.value })}
                                        placeholder="Enter capacity"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                        required
                                    />
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Status
                                    </label>
                                    <select
                                        value={roomData.roomStatus}
                                        onChange={(e) => setRoomData({ ...roomData, roomStatus: e.target.value })}
                                        name="status"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                    >
                                        <option value="">Select status</option>
                                        <option value="Available">Available</option>
                                        <option value="Occupied">Occupied</option>
                                        <option value="Maintenance">Maintenance</option>
                                    </select>
                                </div>


                            </div>



                        </div>

                        {/* Submit Button */}
                        <motion.button
                            onClick={handleAddRoom}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-12 hover:bg-blue-700 shadow-md text-lg"
                        >
                            Add Room
                        </motion.button>


                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default AddRooms