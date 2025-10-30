import React, { useState } from 'react';

export default function FeesPage() {
  const [feesData, setFeesData] = useState([
    {
      id: 1,
      studentName: 'Abin C S',
      amount: 15000,
      status: 'Paid',
      dueDate: '2025-11-01'
    },
    {
      id: 2,
      studentName: 'Rahul M',
      amount: 15000,
      status: 'Unpaid',
      dueDate: '2025-11-10'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Fees Management</h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Student Name</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Due Date</th>
            </tr>
          </thead>

          <tbody>
            {feesData.map((fee) => (
              <tr key={fee.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{fee.id}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{fee.studentName}</td>
                <td className="py-3 px-4">₹{fee.amount}</td>
                <td className={`py-3 px-4 font-semibold ${
                  fee.status === 'Paid' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {fee.status}
                </td>
                <td className="py-3 px-4 text-gray-500">{fee.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Click on a student row to view payment details or send reminders (coming soon).</p>
        </div>
      </div>
    </div>
  );
}
