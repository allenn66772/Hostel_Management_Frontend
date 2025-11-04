import React, { useState } from 'react'

function Payfees() {

  const [userData,setUserData]=useState({
    UserDetails:{
      fullname:"",
      
    }
  })
  
  return (
    <>
   


    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-2">Pay Fees</h1>
        <p className="text-sm text-gray-500 mb-6">Fill the form below to proceed with payment.</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-gray-700">Student Name</span>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-0 focus:border-blue-400 p-3"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-0 focus:border-blue-400 p-3"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-gray-700">Amount (INR)</span>
              <input
                type="number"
                placeholder="0.00"
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-0 focus:border-blue-400 p-3"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Fee Type</span>
              <select className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:ring-0 focus:border-blue-400">
                {/* <option>Tuition Fee</option> */}
                <option>Hostel Fee</option>
                {/* <option>Exam Fee</option> */}
                {/* <option>Other</option> */}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-gray-700">Payment Method</span>
            <select className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:ring-0 focus:border-blue-400">
              <option>Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
          </label>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-600">You will be redirected to the payment gateway after clicking pay.</div>
            <button type="button" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:opacity-95">Pay Now</button>
          </div>
        </form>

        <p className="text-xs text-gray-400 mt-4">This is a static UI mock — no payment logic included.</p>
      </section>
    </main>
  
    </>
  )
}

export default Payfees