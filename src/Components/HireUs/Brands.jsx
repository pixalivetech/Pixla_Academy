import React from "react";
import { motion } from "framer-motion";

// Sample logos (replace with your imported images or logo URLs)
import google from "./../../assets/Hireus/google.png";
import uipath from "./../../assets/Hireus/uipath.png";
import iso from "./../../assets/Hireus/iso.png";
import intel from "./../../assets/Hireus/intel.png";
import empower from "./../../assets/Hireus/empower.png";
import autodesk from "./../../assets/Hireus/autodesk.png";
import aicte from "./../../assets/Hireus/aicte.png";
import gcloud from "./../../assets/Hireus/gcloud.png";
import jio from "./../../assets/Hireus/jio.png";
import hcl from "./../../assets/Hireus/hcl.png";
import openai from "./../../assets/Hireus/openai.png";
import github from "./../../assets/Hireus/github.png";
import infosys from "./../../assets/Hireus/infosys.png";
import airtel from "./../../assets/Hireus/airtel.png";
import bajaj from "./../../assets/Hireus/bajaj.png";
import amazon from "./../../assets/Hireus/amazon.png";
import nivea from "./../../assets/Hireus/nivea.png";
import netflix from "./../../assets/Hireus/netflix.png";


const logos = [
  [google, uipath, iso, intel, empower, autodesk],
  [aicte, gcloud, jio, hcl, openai, github],
  [infosys, airtel, bajaj, amazon, nivea, netflix],
];

const SnakeMotion = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Our Hiring Heroes: A Glimpse Of Our 5000+ Hiring Partners
        </h2>

        {/* Logo Grid with Snake Motion */}
        <div className="space-y-8 overflow-hidden">
          {logos.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-6 justify-center"
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate logos for seamless infinite loop */}
              {[...row, ...row].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white shadow-md rounded-xl px-6 py-4 min-w-[150px] h-20"
                >
                  <img
                    src={logo}
                    alt="brand"
                    className="max-h-10 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnakeMotion;
