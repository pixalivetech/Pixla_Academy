import React from "react";
import { motion } from "framer-motion";

// Example image imports - replace with your own images (or URLs)
import img1 from "./../../assets/Hireus/placements1.png";
import img2 from "./../../assets/Hireus/placements2.png";
import img3 from "./../../assets/Hireus/placements3.png";
import img4 from "./../../assets/Hireus/placements4.png";

export default function PlacementSection() {
  // IT/software academy placement drive video
  const VIDEO_ID = "g4QeWaUP5OE"; // You can swap this with another video ID if you prefer

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headings */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900"
        >
          Where Skills Meet Opportunities
        </motion.h1>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-gray-800"
        >
          Highlights From Our Past Placement Drives
        </motion.h2>

        {/* Video with stats */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-20">
          {/* Left Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUp}
            className="flex flex-col gap-8 text-center sm:text-right order-1 lg:order-1"
          >
            <div>
              <p className="text-yellow-500 font-bold text-2xl sm:text-3xl">300+</p>
              <p className="text-gray-700 text-sm sm:text-base">Total Offers</p>
            </div>
            <div>
              <p className="text-yellow-500 font-bold text-2xl sm:text-3xl">700+</p>
              <p className="text-gray-700 text-sm sm:text-base">Students Participated</p>
            </div>
          </motion.div>

          {/* Center Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            variants={fadeUp}
            className="w-full max-w-3xl order-2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&showinfo=0&autoplay=0`}
                title="Placement Drive Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeUp}
            className="flex flex-col gap-8 text-center sm:text-left order-3"
          >
            <div>
              <p className="text-yellow-500 font-bold text-2xl sm:text-3xl">5 LPA</p>
              <p className="text-gray-700 text-sm sm:text-base">Average CTC</p>
            </div>
            <div>
              <p className="text-yellow-500 font-bold text-2xl sm:text-3xl">12 LPA</p>
              <p className="text-gray-700 text-sm sm:text-base">Highest CTC</p>
            </div>
          </motion.div>
        </div>

        {/* Four images row below video */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[img1, img2, img3, img4].map((src, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300"
              variants={fadeUp}
            >
              <img
                src={src}
                alt={`placement-${idx + 1}`}
                className="w-full  h-52 sm:h-56 md:h-60 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
