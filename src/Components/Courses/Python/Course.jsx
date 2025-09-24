import React, { useState } from "react";
import banner from './../../../assets/Courses/Mern/pythonbanner.png'
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


// Student reviews updated for a Python full-stack course
const reviews = [
  {
    id: 1,
    name: "Aman Sharma",
    course: "Python Full Stack Development",
    review:
      "This Python course was a game-changer for me. The instructors explained Flask and Django in a way that was easy to understand. The hands-on projects were fantastic, and I now have a portfolio I'm proud of. Highly recommended!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: 2,
    name: "Neha Singh",
    course: "Web Development",
    review:
      "I came into this with zero experience, but the curriculum was so well-structured. I loved building a real-time web app from scratch. The mentors were always there to help, and the career coaching prepared me perfectly for my job search.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "Vikram Kumar",
    course: "Full Stack Development",
    review:
      "The combination of Python and JavaScript was seamless. The course demystified concepts like REST APIs and authentication, and the live projects gave me the confidence to tackle any project. A truly comprehensive program.",
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
      title: "Python & Backend Fundamentals",
      details: [
        "Python Language Essentials",
        "Introduction to Backend Development",
        "Building RESTful APIs with Flask",
        "Database Management with SQL",
      ],
    },
    {
      id: 2,
      title: "Django Framework & ORMs",
      details: [
        "Introduction to Django",
        "Django ORM and Models",
        "Building Web Applications with Django",
        "User Authentication and Authorization",
      ],
    },
    {
      id: 3,
      title: "Frontend Development with React",
      details: [
        "Introduction to React",
        "Component-Based Architecture",
        "State Management with Redux/Context API",
        "Connecting Frontend to Backend APIs",
      ],
    },
    {
      id: 4,
      title: "DevOps & Cloud Deployment",
      details: [
        "Containerization with Docker",
        "CI/CD Pipelines",
        "Deployment on Cloud Platforms (AWS/Heroku)",
        "Monitoring and Logging",
      ],
    },
    {
    id: 5,
    title: "Data Science with Python",
    details: [
        "Numpy for Numerical Operations",
        "Pandas for Data Analysis",
        "Matplotlib for Data Visualization",
        "Introduction to Machine Learning",
    ],
    },
    {
      id: 6,
      title: "Real-World Projects",
      details: [
        "E-commerce Website with Django",
        "Social Media Clone",
        "Real-time Chat Application",
        "Task Management System",
      ],
    },
  ];

  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left Image */}
          <div>
              <img src={banner} alt="Python Full Stack Course" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Right Info Box */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course <span className="font-medium ml-4">Python Full Stack Development</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Duration <span className="font-medium ml-4">12 Months</span>
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
                Batch <span className="font-medium ml-4">Online</span>
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
              Our comprehensive Python Full Stack program is designed to transform you from a beginner into a job-ready developer. You will learn to build robust web applications using industry-standard frameworks like Flask and Django on the backend and modern JavaScript libraries like React on the frontend. The curriculum covers foundational Python programming, database management, and full-stack integration. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
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
              Gain proficiency in essential tools and technologies like VS Code, Git, Python, Flask, Django, and React to streamline your development workflow and build robust full-stack applications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center ">
                <img src="https://placehold.co/48x48/1A75BB/fff?text=VSCode" alt="VS Code" className="w-12 h-12" />
                <p className="text-sm mt-2">VS Code</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/F14E32/fff?text=Git" alt="Git" className="w-12 h-12" />
                <p className="text-sm mt-2">Git</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/3776AB/fff?text=Python" alt="Python" className="w-12 h-12" />
                <p className="text-sm mt-2">Python</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/000000/fff?text=Flask" alt="Flask" className="w-12 h-12" />
                <p className="text-sm mt-2">Flask</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/005A31/fff?text=Django" alt="Django" className="w-12 h-12" />
                <p className="text-sm mt-2">Django</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/61DAFB/fff?text=React" alt="React" className="w-12 h-12" />
                <p className="text-sm mt-2">React</p>
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
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">E-commerce App</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Social Media Clone</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Real-time Chat App</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Task Management System</div>
          </div>
        )}
      </div>
    </section>
  );
}
