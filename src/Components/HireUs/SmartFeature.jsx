import React from "react";
import aiImage from "./../../assets/Hireus/ai-image.jpg";

// Import your logos
import customerLogo from "./../../assets/Hireus/h1.png";
import face2faceLogo from "./../../assets/Hireus/h2.png";
import chatbotLogo from "./../../assets/Hireus/h3.png";

const SmartFeatures = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-12">
          Smart a features
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left Block */}
          <div className="flex flex-col items-start text-left space-y-6 lg:w-1/4">
            <div className="flex items-center bg-white p-3 rounded shadow w-full">
              <img
                src={customerLogo}
                alt="Customer Satisfaction"
                className="w-8 h-8 mr-4"
              />
              <span className="text-gray-800 font-medium">
                Increase in Customer satisfaction
              </span>
            </div>

            <h3 className="text-4xl font-bold text-gray-900">Smart AI</h3>
            <p className="text-gray-600">
              Seamless Integration ensures that Visitors Perceive it as a live
              video chat experience
            </p>
          </div>

          {/* Center Image */}
          <div className="relative lg:w-1/3 w-full">
            <img
              src={aiImage}
              alt="Smart AI Video"
              className="rounded-xl shadow-lg w-full h-full md:h-[550px] object-cover"
            />

            {/* Desktop Only Cards */}
            <div className="hidden lg:flex absolute top-4 right-[-200px] bg-white p-3 rounded shadow items-center space-x-3 w-[250px]">
              <img
                src={face2faceLogo}
                alt="Face to Face"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-medium">
                Face to Face Experience
              </span>
            </div>

            <div className="hidden lg:flex absolute bottom-4 right-[-200px] bg-white p-3 rounded shadow items-center space-x-3 w-[280px]">
              <img
                src={chatbotLogo}
                alt="Chatbots"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-medium">
                Chatbots and Virtual Assistants
              </span>
            </div>
          </div>

          {/* Right Block (Video text) */}
          <div className="flex flex-col items-start text-left space-y-6 lg:w-1/4">
            <h3 className="text-4xl font-bold text-gray-900">Video</h3>
          </div>
        </div>

        {/* Mobile View Logos */}
        <div className="flex flex-col space-y-4 mt-8 lg:hidden w-full items-center">
          <div className="flex items-center bg-white p-3 rounded shadow w-[90%] max-w-md">
            <img src={face2faceLogo} alt="Face to Face" className="w-8 h-8 mr-4" />
            <span className="text-gray-800 font-medium">Face to Face Experience</span>
          </div>

          <div className="flex items-center bg-white p-3 rounded shadow w-[90%] max-w-md">
            <img src={chatbotLogo} alt="Chatbots" className="w-8 h-8 mr-4" />
            <span className="text-gray-800 font-medium">Chatbots and Virtual Assistants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
