// src/components/ContactSection.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import UniBg from "./../../assets/Land/leadhero.jpg";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    message: "",
    mode: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        mode: checked ? value : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tjptnab", // ✅ Your service ID
        "template_2gbypv7", // ✅ Your template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          email: formData.email,
          program: formData.program,
          mode: formData.mode,
          message: formData.message,
        },
        "mOjbSAlY25mRszit8" // ✅ Your public key
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully!", result.text);
          alert("✅ Message sent successfully!");
          setLoading(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            program: "",
            message: "",
            mode: "",
          });
        },
        (error) => {
          console.error("❌ Failed to send email:", error);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 md:px-24"
      style={{ backgroundImage: `url(${UniBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 to-white/95"></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-sm font-medium text-black mt-5 mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10">
          Get In Touch
        </h2>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">
                  First Name
                </label>
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
                <label className="text-gray-700 font-medium mb-1">
                  Last Name
                </label>
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

            {/* Program */}
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
                <option value="MERN/MEAN Full Stack Development">
                  MERN/MEAN Full Stack Development
                </option>
                <option value="AI Full Stack Development">
                  AI Full Stack Development
                </option>
                <option value="Flutter Full Stack Development">
                  Flutter Full Stack Development
                </option>
                <option value="Java Full Stack Development">
                  Java Full Stack Development
                </option>
                <option value="Python Full Stack Development">
                  Python Full Stack Development
                </option>
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
              />
            </div>

            {/* Mode */}
            <div className="flex flex-col">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
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
                    type="checkbox"
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

            {/* Submit */}
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
