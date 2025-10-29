import React, { useState, useEffect } from 'react';

export default function ComplaintDisplay() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      studentName: 'Abin C S',
      type: 'Water Issue',
      description: 'No water supply in the bathroom',
      status: 'Pending',
      date: '2025-10-25'
    },
    {
      id: 2,
      studentName: 'Rahul M',
      type: 'Electricity',
      description: 'Light not working in room 201',
      status: 'Resolved',
      date: '2025-10-22'
    }
  ]);

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
            {complaints.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{item.studentName}</td>
                <td className="py-3 px-4">{item.type}</td>
                <td className="py-3 px-4 text-gray-600">{item.description}</td>
                <td className={`py-3 px-4 font-semibold ${
                  item.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {item.status}
                </td>
                <td className="py-3 px-4 text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
