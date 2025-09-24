import React, { useState } from "react";

const HireSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: "",
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          program: "Hiring Requirement", // to identify in inbox
          message: "", // optional (if you want extra message later)
          mode: "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ firstName: "", company: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 px-4 md:px-24 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Hire Ready-to-Deploy Tech <br className="hidden md:block" /> Talent in 3 Weeks Hours
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            Why wait weeks to hire? Get skilled, pre-vetted tech talent ready to deliver from day one in just 3 hours.
          </p>
          <h3 className="mt-8 text-xl md:text-2xl font-semibold text-gray-900">
            Hire Candidates For These High-Demand Tech Positions
          </h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Business Analyst", "Full Stack Development", "Data Analyst", "Front End Development", "Back End Development", "SDET"].map((job, idx) => (
              <span key={idx} className="px-4 py-2 border border-gray-300 rounded-full text-gray-800 text-sm md:text-base">
                {job}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-sm md:text-base">
            Want to register for a virtual drive?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">Register here</a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg shadow-md border w-full max-w-[448px] p-5 md:p-7 mx-auto lg:mx-0">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-6">
            Ready to Hire? Register for virtual drives
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Your Company"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Work-Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-full transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Share Hiring Requirement"}
            </button>

            {/* Notifications */}
            {status === "success" && (
              <p className="mt-4 text-green-600 text-center font-medium">
                ✅ Hiring request sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 text-center font-medium">
                ❌ Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireSection;
