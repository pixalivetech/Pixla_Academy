import React, { useState } from 'react';
import Image1 from "./../../assets/Franchise/f-bg.png";

const ApplicationForm = () => {
  const bgImageUrl = Image1;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    franchiseModel: "",
    reason: ""
  });

  const [status, setStatus] = useState(null); // "loading" | "success" | "error"

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/send-mail", {  // ✅ corrected endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "",
          email: formData.email,
          program: "Franchise Application",
          message: `Mobile: ${formData.mobile}\nFranchise Model: ${formData.franchiseModel}\nReason: ${formData.reason}`,
          mode: "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", franchiseModel: "", reason: "" }); // reset form
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24 font-Poppins"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Franchise Application Form
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="franchiseModel" className="block text-gray-700 font-medium mb-1">
              Preferred Franchise Model (City / District / State)
            </label>
            <input
              type="text"
              id="franchiseModel"
              value={formData.franchiseModel}
              onChange={handleChange}
              placeholder="e.g. City / District / State"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="reason" className="block text-gray-700 font-medium mb-1">
              Why do you want to partner with Pixla Academy?
            </label>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              placeholder="Write your reason..."
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#FDDA02] text-[#000000] text-xl font-semibold py-3 px-4 rounded-4xl hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300"
          >
            {status === "loading" ? "Sending..." : "Submit Application"}
          </button>
        </form>

        {/* ✅ Notifications */}
        {status === "success" && (
          <p className="mt-4 text-green-600 text-center font-medium">
            ✅ Application sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center font-medium">
            ❌ Failed to send. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
