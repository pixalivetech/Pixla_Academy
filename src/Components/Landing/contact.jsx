// src/components/ContactSection.jsx
import UniBg from "./../../assets/Land/leadhero.jpg";

export default function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 md:px-24"
      style={{ backgroundImage: `url(${UniBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 to-white/95"></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-sm font-medium text-black mt-5 mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10">
          Get In Touch
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Program</label>
              <select className="w-full text-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                <option value="">Choose a Program</option>
                <option>MERN/MEAN Full Stack Development</option>
                <option>AI Full Stack Development</option>
                <option>Flutter Full Stack Development</option>
                <option>Java Full Stack Development</option>
                <option>Python Full Stack Development</option>
                <option>DevOps</option>
                <option>Software Testing</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Write your message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-5 h-5" /> Online
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-5 h-5" /> Offline
              </label>
            </div>

            <div className="flex justify-end">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full shadow-md transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
