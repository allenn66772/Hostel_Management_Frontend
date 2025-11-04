import React, { useEffect, useState } from "react";
import { getUserByEmailAPI } from "../../service/allAPI";

function Payfees() {
  const [userlog, setUserlog] = useState({
    name: "",
    email: "",
  });

  // ✅ Fetch user data
  const getAllData = async () => {
    try {
      // get user email from session (or wherever you store it)
      const email = sessionStorage.getItem("email");

      if (!email) {
        alert("User email not found. Please log in again.");
        return;
      }

      const result = await getUserByEmailAPI(email);

      if (result.status === 200 && result.data) {
        setUserlog({
          name: result.data.name || "",
          email: result.data.email || "",
        });
      } else {
        alert("Network error");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Something went wrong while fetching user details!");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  // ✅ Example submit
  const handlePay = () => {
    console.log("Payment initiated for:", userlog);
    alert(`Proceeding to payment for ${userlog.name}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-2">Pay Fees</h1>
        <p className="text-sm text-gray-500 mb-6">
          Confirm your details before proceeding with payment.
        </p>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Student Name</span>
            <input
              type="text"
              name="name"
              value={userlog.name}
              readOnly
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm bg-gray-100 cursor-not-allowed p-3"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={userlog.email}
              readOnly
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm bg-gray-100 cursor-not-allowed p-3"
            />
          </label>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-600">
              You will be redirected to the payment gateway after clicking pay.
            </div>
            <button
              type="button"
              onClick={handlePay}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:opacity-95"
            >
              Pay Now
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          This is a static UI mock — no payment logic included.
        </p>
      </section>
    </main>
  );
}

export default Payfees;
