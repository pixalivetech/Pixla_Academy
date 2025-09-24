// src/components/SubscribeSection.jsx
import Sub from "./../../assets/Land/subscr.jpg"

export default function SubscribeSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[450px] flex items-center justify-center"
      style={{ backgroundImage: `url(${Sub})` }} // replace with your image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative text-center text-white z-10 px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Join Our Growing <br /> Community
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl font-medium mb-6 text-white leading-relaxed">
          Be a part of Pixla Academy’s vibrant network of learners, mentors,
          and innovators. <br /> Collaborate, grow, and unlock endless opportunities
        </p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full flex items-center space-x-2 hover:bg-yellow-500 transition">
            <span>Join Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
