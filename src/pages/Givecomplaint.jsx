import React, { useState } from 'react';
import { FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import { complaint } from '../../service/allAPI';

function Givecomplaint() {
  const [complaintData, setComplaintData] = useState({
    name: "",
    roomNo: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintData({ ...complaintData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the POST API
    const result = await complaint(complaintData);
    if (result.status === 200 || result.status === 201) {
      alert("Complaint submitted successfully!");
      setComplaintData({ name: "", roomNo: "", type: "", message: "" });
    } else {
      alert("Failed to submit complaint. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-lg w-full border border-indigo-100">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center flex items-center justify-center gap-2">
          <FaExclamationCircle className="text-indigo-500" /> Lodge a Complaint
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={complaintData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Room Number</label>
            <input
              type="text"
              name="roomNo"
              value={complaintData.roomNo}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your room number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Complaint Type</label>
            <select
              name="type"
              value={complaintData.type}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select a type</option>
              <option>Maintenance</option>
              <option>Cleanliness</option>
              <option>Food</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={complaintData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Describe your issue..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <FaPaperPlane /> Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default Givecomplaint;
