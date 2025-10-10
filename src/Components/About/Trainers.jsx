import React from "react";

// Import team images
import rajeseker from "../../assets/About/rajsekar.png";
import sathishkumar from "../../assets/About/sathishkumar.png";
import murugan from "../../assets/About/Murugan.png";
import mohan from "../../assets/About/mohanraj.png";
import sivakumar from "../../assets/About/sivakumar.png";
import mayakannan from "../../assets/About/mayakannan.png";

const TeamSection = () => {
  const team = [
    {
      name: "Rajeseker Sundaresan",
      role: "CEO & Founder",
      img: rajeseker,
    },
    {
      name: "Sathishkumar",
      role: "Chief Product Officer",
      img: sathishkumar,
    },
    {
      name: "Murugan",
      role: "Lead Product Engineer",
      img: murugan,
    },
    {
      name: "Mohan",
      role: "Senior Backend Developer",
      img: mohan,
    },
    {
      name: "Sivakumar",
      role: "Senior Full Stack Developer",
      img: sivakumar,
    },
    {
      name: "Mayakannan",
      role: "Software Developer",
      img: mayakannan,
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned heading & button */}
        <p className="uppercase text-sm tracking-wider text-gray-400">
          Start Your Journey With Our Amazing Mentor
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our team of experienced professionals is <br />
          dedicated to transforming lives through education.
        </h2>
        <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition">
          Meet Our Team →
        </button>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-40 h-48 flex items-center justify-center bg-gray-700 text-white text-xl font-bold rounded-lg mb-4">
                  {member.name.charAt(0)}
                </div>
              )}
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
