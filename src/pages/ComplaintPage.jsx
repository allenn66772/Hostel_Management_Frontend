import React, { useState, useEffect } from 'react';
import { getcomplaint } from '../../service/allAPI';

 function ComplaintDisplay() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    const result = await getcomplaint();
    if (result.status === 200) {
      setComplaints(result.data);
    } else {
      console.error("Failed to fetch complaints");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Complaint List</h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Student Name</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((item, index) => (
              <tr key={item._id || index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{item.name}</td>
                <td className="py-3 px-4">{item.type}</td>
                <td className="py-3 px-4 text-gray-600">{item.message}</td>
                <td className={`py-3 px-4 font-semibold ${
                  item.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {item.status || "Pending"}
                </td>
                <td className="py-3 px-4 text-gray-500">{item.date || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintDisplay