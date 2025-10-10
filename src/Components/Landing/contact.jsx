// src/components/ContactSection.jsx
import { useState } from "react";
import UniBg from './../../assets/Land/leadhero.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    message: "",
    mode: "", // online / offline
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      // Reset form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        program: "",
        message: "",
        mode: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 md:px-24"
      style={{ backgroundImage: `url(${UniBg})` }}
    >
      {/* Yellow to white gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 to-white/95"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-sm font-medium text-black mt-5 mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10">
          Get In Touch
        </h2>

        {/* Contact Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Program Dropdown */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Program</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full text-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="" disabled>
                  Choose a Program
                </option>
                <option value="MERN/MEAN Full Stack Development">MERN/MEAN Full Stack Development</option>
                <option value="AI Full Stack Development">AI Full Stack Development</option>
                <option value="Flutter Full Stack Development">Flutter Full Stack Development</option>
                <option value="Java Full Stack Development">Java Full Stack Development</option>
                <option value="Python Full Stack Development">Python Full Stack Development</option>
                <option value="DevOps">DevOps</option>
                <option value="Software Testing">Software Testing</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            {/* Mode Radio Buttons */}
            <div className="flex flex-col">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="mode"
                    value="online"
                    checked={formData.mode === "online"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />{" "}
                  Online
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="mode"
                    value="offline"
                    checked={formData.mode === "offline"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />{" "}
                  Offline
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full shadow-md transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
