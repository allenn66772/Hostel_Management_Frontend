import React, { useEffect, useState } from "react";
import { getRoomAPI } from "../../service/allAPI";
import { FaBed, FaUsers, FaDoorClosed, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function ViewRooms() {
    const [rooms, setRooms] = useState([]);

    // Fetch room data from backend
    const fetchRooms = async () => {
        try {
            const response = await getRoomAPI();
            if (response.status >= 200 && response.status < 300) {
                setRooms(response.data);
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error...!",
                text: "Room Fetch Failed...!",
                icon: "error"
            });
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
            <h2 className="text-4xl font-bold text-blue-800 text-center mb-10">
                🏨 All Rooms
            </h2>

            {rooms.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">No rooms found.</p>
            ) : (
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-semibold text-blue-700">
                                    Room {room.roomNumber}
                                </h3>
                                <FaDoorClosed className="text-blue-500 text-3xl" />
                            </div>

                            <div className="space-y-3 text-gray-700">
                                <p className="flex items-center gap-2">
                                    <FaBed className="text-blue-500" />
                                    <span className="font-medium">Type:</span> {room.roomType}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaUsers className="text-green-500" />
                                    <span className="font-medium">Capacity:</span> {room.roomCapacity}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaTools className="text-yellow-500" />
                                    <span className="font-medium">Status:</span>{" "}
                                    <span
                                        className={`px-2 py-1 rounded-md text-white text-sm ${room.roomStatus === "Available"
                                                ? "bg-green-500"
                                                : room.roomStatus === "Occupied"
                                                    ? "bg-red-500"
                                                    : "bg-yellow-500"
                                            }`}
                                    >
                                        {room.roomStatus}
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewRooms;
