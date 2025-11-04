import React, { useState } from "react";
import {  getFeesDataAPI } from "../../service/allAPI";

export default function Payfees() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePay = async () => {
    if (!user.name || !user.email) {
      alert("Please enter your name and email before proceeding.");
      return;
    }

    // send data to JSON Server
    const result = await getFeesDataAPI(user);
    if (result) {
      alert(`Payment successful!\nName: ${user.name}\nEmail: ${user.email}`);
      setUser({ name: "", email: "" }); // clear input fields
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-2">Pay Fees</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your details before proceeding with payment.
        </p>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Student Name</span>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
