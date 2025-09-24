import React, { useState } from "react";
import banner from './../../../assets/Courses/Mern/testing2.png'
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

// Student reviews updated for a Software Testing course
const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Software Testing",
    review:
      "This software testing course gave me a strong foundation in manual and automation testing. The hands-on sessions on test case writing and bug tracking were very helpful. I feel confident to work in any QA team now.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: 2,
    name: "Rohan Kumar",
    course: "Software Testing",
    review:
      "Coming from a non-IT background, I found this course easy to follow. The trainers explained concepts like SDLC, STLC, and defect life cycle very clearly. The interview prep sessions helped me land my first QA job.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "Ananya Singh",
    course: "Software Testing",
    review:
      "The curriculum covered both manual and automation testing with :contentReference[oaicite:2]{index=2} and :contentReference[oaicite:3]{index=3}. The live projects gave me real-world experience, and the mentors supported me throughout.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=51",
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
    "Projects",
  ];

  const curriculum = [
    {
      id: 1,
      title: "Software Testing Fundamentals",
      details: [
        "Introduction to Software Testing",
        "SDLC and STLC",
        "Test Case Design Techniques",
        "Bug Life Cycle & Defect Reporting",
      ],
    },
    {
      id: 2,
      title: "Manual Testing Deep Dive",
      details: [
        "Requirement Analysis",
        "Writing Test Plans & Test Cases",
        "Test Execution & Reporting",
        "Functional vs Non-Functional Testing",
      ],
    },
    {
      id: 3,
      title: "Automation Testing with Selenium",
      details: [
        "Introduction to :contentReference[oaicite:4]{index=4} WebDriver",
        "Locators and Web Elements",
        "TestNG Framework",
        "Writing and Executing Automation Scripts",
      ],
    },
    {
      id: 4,
      title: "Performance & API Testing",
      details: [
        "Basics of :contentReference[oaicite:5]{index=5}",
        "Load and Stress Testing",
        "Introduction to API Testing",
        "API Automation with :contentReference[oaicite:6]{index=6}",
      ],
    },
    {
      id: 5,
      title: "Testing Tools & Bug Tracking",
      details: [
        "Working with :contentReference[oaicite:7]{index=7}",
        "Version Control with :contentReference[oaicite:8]{index=8}",
        "CI/CD Basics with :contentReference[oaicite:9]{index=9}",
        "Defect Management Tools",
      ],
    },
    {
      id: 6,
      title: "Real-World QA Projects",
      details: [
        "E-commerce Website Testing",
        "Banking Application Testing",
        "Web API Testing Project",
        "Automation Framework Design Project",
      ],
    },
  ];

  return (
    <section className="px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left Image */}
          <div>
            <img src={banner} alt="Software Testing Course" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Right Info Box */}
          <div className="bg-white  p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course <span className="font-medium ml-4">Software Testing</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Duration <span className="font-medium ml-4">6 Months</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Users size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Batch <span className="font-medium ml-4">30 Students</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Language <span className="font-medium ml-4">English</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FileText size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Certificate <span className="font-medium ml-4">Yes</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Mode <span className="font-medium ml-4">Online</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Location <span className="font-medium ml-4">Anywhere</span>
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
              Our Software Testing program equips you with the skills needed to become a professional QA Engineer. 
              You will master manual testing fundamentals, automation testing using Selenium, performance testing, 
              and API testing. The program includes real-time projects, interview prep, and resume support to 
              ensure you're job-ready.
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
              Master Testing Tools
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Gain expertise in essential tools like Selenium, JIRA, Postman, Git, Jenkins, and JMeter to become industry-ready.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center ">
                <img src="https://placehold.co/48x48/1A75BB/fff?text=Selenium" alt="Selenium" className="w-12 h-12" />
                <p className="text-sm mt-2">Selenium</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/F14E32/fff?text=JIRA" alt="JIRA" className="w-12 h-12" />
                <p className="text-sm mt-2">JIRA</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/0175C2/fff?text=Postman" alt="Postman" className="w-12 h-12" />
                <p className="text-sm mt-2">Postman</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/0175C2/fff?text=Git" alt="Git" className="w-12 h-12" />
                <p className="text-sm mt-2">Git</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/FFCA28/fff?text=Jenkins" alt="Jenkins" className="w-12 h-12" />
                <p className="text-sm mt-2">Jenkins</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/4479A1/fff?text=JMeter" alt="JMeter" className="w-12 h-12" />
                <p className="text-sm mt-2">JMeter</p>
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

        {activeTab === "Projects" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">E-commerce Website Testing</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Banking Application Testing</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Web API Testing Project</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Automation Framework Project</div>
          </div>
        )}
      </div>
    </section>
  );
}
