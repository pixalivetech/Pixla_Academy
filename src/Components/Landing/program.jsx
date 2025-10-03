import FrontendImg from "./../../assets/Land/frondend.png";
import BackendImg from "./../../assets/Land/backend.png";
import UiUxImg from "./../../assets/Land/uiux.png";
import MobileImg from "./../../assets/Land/mobile.png";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pixla Spark",
      img: FrontendImg,
      backItems: [
        "MERN",
        "MEAN",
        "AI",
        "Flutter",
        "Java",
        "Python",
        "DevOps",
        "Software Testing",
        "UI/UX Design",
        "Digital Marketing",
      ],
      dark: false,
    },
    {
      title: "Pixla Learn",
      img: BackendImg,
      backItems: [
        "MERN",
        "MEAN",
        "AI",
        "Flutter",
        "Java",
        "Python",
        "DevOps",
        "Software Testing",
        "UI/UX Design",
        "Digital Marketing",
      ],
      dark: true,
    },
    {
      title: "Pixla Elevate",
      img: UiUxImg,
      backItems: [
        "MERN/ MEAN Full Stack",
        "AI Full Stack",
        "Flutter Full Stack",
        "Java Full Stack",
        "Python Full Stack",
        "DevOps",
        "Software Testing",
        "UI/UX Design",
        "Digital Marketing",
      ],
      dark: false,
    },
    {
      title: "Pixla Deploy",
      img: MobileImg,
      backItems: [
        "MERN Full Stack",
        "MEAN Full Stack",
        "AI Full Stack",
        "Flutter Full Stack",
        "Java Full Stack",
        "Python Full Stack ",
      ],
      dark: true,
    },
    {
      title: "Pixla Edge",
      img: FrontendImg,
      backItems: [
        "MERN Full Stack",
        "MEAN Full Stack",
        "AI Full Stack",
        "Flutter Full Stack",
        "Java Full Stack",
        "Python Full Stack",
      ],
      dark: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
  <div className="px-6 md:px-24">
    {/* Section Header */}
    <p className="text-md text-black mb-2">Programs</p>
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-12 leading-snug">
      Innovative Programs <br className="hidden md:block" /> Designed For
      Future
    </h2>

    {/* Flip Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 
                    justify-items-center"> {/* 👈 this centers items */}
      {programs.map((program, idx) => (
        <div key={idx} className="w-55 h-80 perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            
            {/* Front Side */}
            <div
              className={`absolute w-full h-full rounded-md backface-hidden overflow-hidden ${
                program.dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {/* Background Image */}
              <img
                src={program.img}
                alt={program.title}
                className="w-70 h-70 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Title Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">
                  {program.title}
                </h3>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full rounded-md rotate-y-180 backface-hidden flex items-center justify-center ${
                program.dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <ul className="space-y-2 text-sm list-disc list-inside px-6">
                {program.backItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
