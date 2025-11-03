import React, { useEffect, useState } from "react";
import { getUSerAPI } from "../../service/allAPI";

function Allstudents() {
  // ✅ State should be an array (not object) to store multiple users
  const [userData, setUserData] = useState([]);

  // ✅ Fetch all users
  const getAllData = async () => {
    try {
      const result = await getUSerAPI();
      if (result.status === 200) {
        setUserData(result.data); // make sure your API returns an array
      } else {
        alert("Network error");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  // ✅ Correct useEffect syntax
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6">All Students</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
              
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {userData && userData.length > 0 ? (
                userData.map((student, index) => (
                  <tr key={student.id || index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {student.fullname || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {student.email || "N/A"}
                    </td>
                  
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-gray-500 py-6 italic"
                  >
                    No student data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Data fetched from API using <code>getUSerAPI()</code>.
        </p>
      </section>
    </main>
  );
}

export default Allstudents;
