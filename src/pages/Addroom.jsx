import React, { useState } from "react";
import { motion } from "framer-motion";

function AddRoom() {
  const [roomData, setRoomData] = useState({
    roomNumber: "",
    type: "",
    capacity: "",
    status: "Available",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setRoomData({ ...roomData, image: file });
      const reader = new FileReader();
      reader.onloadend = function () {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Room Data Submitted:", roomData);
    alert("Room added successfully!");
    // TODO: connect this form to backend (using FormData for image upload)
  }

  return (
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

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form Fields */}
            <div className="space-y-4">
              {/* Room Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Room Number
                </label>
                <input
                  type="text"
                  name="roomNumber"
                  value={roomData.roomNumber}
                  onChange={handleChange}
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
                  value={roomData.type}
                  onChange={handleChange}
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
                  type="number"
                  name="capacity"
                  value={roomData.capacity}
                  onChange={handleChange}
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
                  name="status"
                  value={roomData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Room Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Right Column - Image Preview */}
            <div className="flex flex-col justify-center items-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Room Preview"
                  className="w-72 h-48 object-cover rounded-xl shadow-md border border-gray-300"
                />
              ) : (
                <div className="w-72 h-48 flex flex-col justify-center items-center rounded-xl border-2 border-dashed border-gray-300 text-gray-400">
                  <p className="text-center">No image selected</p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-8 hover:bg-blue-700 shadow-md text-lg"
          >
            Add Room
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default AddRoom;
