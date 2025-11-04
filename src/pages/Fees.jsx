import React, { useEffect, useState } from "react";
import { getFeesDataAPI } from "../../service/allAPI";


export default function FeesPage() {
  const [feesData, setFeesData] = useState([]);

  // Fetch fees data from JSON server
  const fetchFeesData = async () => {
    try {
      const result = await getFeesDataAPI();
      if (result) {
        setFeesData(result);
      }
    } catch (error) {
      console.error("Error fetching fees data:", error);
    }
  };

  useEffect(() => {
    fetchFeesData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Fees Management
        </h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {feesData.length > 0 ? (
              feesData.map((fee, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {fee.name}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{fee.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  className="text-center py-4 text-gray-500"
                >
                  No fee records available.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Displays all student payment entries from the database.</p>
        </div>
      </div>
    </div>
  );
}
