// CourseDetails.jsx
import React, { useState } from "react";
import U4 from "./../../../assets/UI/u4.png";
import u11 from "./../../../assets/UI/u11.png";
import u12 from "./../../../assets/UI/u12.png";
import u13 from "./../../../assets/UI/u13.png";
import u14 from "./../../../assets/UI/u14.png";
import u15 from "./../../../assets/UI/u15.png";
import u16 from "./../../../assets/UI/u16.png";
import {
  Monitor,
  Clock,
  Users,
  Globe,
  FileText,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";


// Dummy student reviews
const reviews = [
  {
    id: 1,
    name: "Praveen Kumar",
    course: "UI/UX Design",
    review:
      "Recently I have completed the Advanced UX UI design program course at softdaddy and they have the best tutor and the best mentor. They make us involved in many tasks and also they ask us to do the tasks on our own also. This institute is one of the best institutes in the city to learn UX UI design!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Sundar",
    course: "UI/UX Design",
    review:
      "I am Sundar Moorthy from Madurai, am currently studying UX/UI Design and Development at Softdaddy, and my experience has been fantastic! The teaching is highly effective and enjoyable, allowing me to learn everything from scratch with ease. The mentors and staff are incredibly supportive, always guiding us with patience and expertise.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Vinoth",
    course: "UI/UX Design",
    review:
      "Hi this is Vinoth. I've studied UI/UX Design Course. During my time at Softdaddy, I developed skills in UI/UX Design and built a network with design community's. The UI/UX Design course at Softdaddy was an outstanding experience. It provided a perfect balance of theory and practical, preparing me well for a career in design.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=56",
  },
];

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  const tabs = [
    "Overview",
    "Curriculum",
    "Tools & Software's",
    "Student Reviews",
    "Photos",
  ];

  const curriculum = [
    {
      id: 1,
      title: "Fundamentals of UX/UI Design",
      details: [
        "Understand the core concepts of UX and UI, their roles, and the design process.",
        "What is UX & UI",
        "UX vs UI",
        "Design Thinking",
        "Human-Centered Design",
        "User Goals & Pain Points",
      ],
    },
    { id: 2, title: "User Research & Empathy Mapping", details: [] },
    { id: 3, title: "Information Architecture & Wireframing", details: [] },
    { id: 4, title: "UI Design & Visual Aesthetics", details: [] },
    { id: 5, title: "Prototyping with Figma & Adobe XD", details: [] },
    { id: 6, title: "Usability Testing & Feedback", details: [] },
    { id: 7, title: "Responsive Design & Design Systems", details: [] },
    { id: 8, title: "Portfolio Development & Real Projects", details: [] },
  ];

  return (
    <section className=" px-6 md:px-24 py-16 md:py-32 flex justify-center">
      <div className=" w-full">
       {/* Top Section */}
{/* Top Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10">
  {/* Left Image spanning 2 columns */}
  <div className="md:col-span-2">
    <img
      src={U4}
      alt="UI/UX Course"
      className="w-full h-100 object-cover rounded-lg"
    />
  </div>

  {/* Right Info Box */}
  <div className="bg-white shadow-md rounded-lg p-8 space-y-6 h-full flex flex-col justify-between border border-gray-200">
    <div className="flex items-center gap-3">
      <Monitor size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Course <span className="font-medium ml-4">UI/UX Design</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <Clock size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Duration <span className="font-medium ml-4">4+1 Month</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <Users size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Batch <span className="font-medium ml-4">10 Students</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <Globe size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Language <span className="font-medium ml-4">English / Tamil</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <FileText size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Certificate <span className="font-medium ml-4">Yes</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <Calendar size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Mode <span className="font-medium ml-4">Offline / Online</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <MapPin size={18} className="text-gray-700" />
      <p className="text-gray-700 text-lg">
        Location <span className="font-medium ml-4">Bengaluru</span>
      </p>
    </div>
  </div>
</div>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mr-8 pb-3 text-sm font-medium transition ${
                activeTab === tab
                  ? "text-black border-b-2 border-black "
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Overview" && (
          <div>
            <h3 className="text-base font-semibold mb-3">Program Overview</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Throughout the course, you will explore the principles and
              techniques of effective UX/UI design. This learning will help you
              to create user personas and develop a deep understanding of your
              target audience. The course will also cover topics such as
              information architecture, creating wireframes and prototypes,
              interaction design, visual design principles, and usability
              testing, using industry-standard design tools. By the end of the
              course, you will have a strong foundation in UX/UI design
              principles and a robust portfolio showcasing your skills and
              creativity.
            </p>
          </div>
        )}

        {activeTab === "Curriculum" && (
          <div className="space-y-4">
            {curriculum.map((module) => (
              <div
                key={module.id}
                className="border-b border-gray-200 pb-3"
              >
                <button
                  onClick={() =>
                    setOpenModule(openModule === module.id ? null : module.id)
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-sm font-medium">
                    {module.id}. {module.title}
                  </span>
                  {openModule === module.id ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {openModule === module.id && module.details.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-600 space-y-1 ml-4">
                    {module.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Tools & Software's" && (
          <div>
            <h3 className="text-base font-semibold mb-3">
              Master Industry-Standard Tools
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Gain proficiency in 15+ tools like Figma, Axure RP, Balsamiq, and
              AI modules integrated throughout the curriculum.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center ">
                <img src= {u11} alt="Figma" className="w-12 h-12" />
                <p className="text-sm mt-2">Figma</p>
              </div>
              <div className="flex flex-col items-center">
                <img src= {u12}  alt="Usability Testing" className="w-12 h-12" />
                <p className="text-sm mt-2">Usability Testing</p>
              </div>
              <div className="flex flex-col items-center">
                <img src= {u13} alt="Chat GPT" className="w-12 h-12" />
                <p className="text-sm mt-2">Chat GPT</p>
              </div>
              <div className="flex flex-col items-center">
                <img src= {u14} alt="User Flow" className="w-12 h-12" />
                <p className="text-sm mt-2">User Flow</p>
              </div>
              <div className="flex flex-col items-center">
                <img src= {u15} alt="Adobe XD" className="w-12 h-12" />
                <p className="text-sm mt-2">Adobe XD</p>
              </div>
              <div className="flex flex-col items-center">
                <img src= {u16} alt="Sketch" className="w-12 h-12" />
                <p className="text-sm mt-2">Sketch</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Student Reviews" && (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex gap-4 border-b pb-6">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500 mb-1">
                    {review.course}
                  </p>
                  <div className="flex mb-2">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-sm text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Photos" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
          </div>
        )}
      </div>
    </section>
  );
}
