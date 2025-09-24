import React, { useState } from "react";
import banner from './../../../assets/Courses/Mern/javabanner.png'
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


// Dummy student reviews for a full-stack course
const reviews = [
  {
    id: 1,
    name: "Aarav Gupta",
    course: "Java Full Stack Development",
    review:
      "This Java Full Stack course was incredibly detailed and practical. The Spring Boot and Hibernate modules were explained with real-world examples, which made it easy to grasp complex concepts. The mentors were a great support, and I now feel confident in my skills to start a career as a Java developer.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 2,
    name: "Neha Patel",
    course: "Full Stack Development",
    review:
      "As a beginner, I was intimidated by full stack development, but this course broke everything down into manageable parts. The hands-on projects were the best part, giving me a solid portfolio. I highly recommend this to anyone looking to build a strong foundation in Java and related technologies.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 3,
    name: "Sanjay Reddy",
    course: "Java Development",
    review:
      "The curriculum is very well-structured. I particularly enjoyed the focus on microservices and API development. The mock interviews were a huge help and prepared me thoroughly for job applications. It's a fantastic course with a perfect balance of theory and practical work.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=53",
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
      title: "Core Java & OOP Concepts",
      details: [
        "Java Language Fundamentals",
        "Object-Oriented Programming (OOP) principles",
        "Data Structures and Algorithms in Java",
        "Exception Handling and Multithreading",
      ],
    },
    {
      id: 2,
      title: "Backend with Spring Framework",
      details: [
        "Introduction to Spring Core & Spring Boot",
        "Building RESTful APIs with Spring MVC",
        "Dependency Injection and IoC Container",
        "Spring Security for Authentication & Authorization",
      ],
    },
    {
      id: 3,
      title: "Database Management & ORM",
      details: [
        "Working with SQL and relational databases (MySQL/PostgreSQL)",
        "Introduction to JPA & Hibernate",
        "Data persistence and object-relational mapping",
        "Database migrations and schema management",
      ],
    },
    {
      id: 4,
      title: "Frontend Integration with React.js",
      details: [
        "React Fundamentals and JSX",
        "State Management and Hooks",
        "Connecting React to Java backend APIs",
        "Asynchronous data fetching",
      ],
    },
    {
      id: 5,
      title: "Microservices & Cloud Deployment",
      details: [
        "Microservices architecture principles",
        "Building and deploying microservices with Spring Cloud",
        "Containerization with Docker",
        "Cloud deployment on platforms like AWS or Google Cloud",
      ],
    },
    {
      id: 6,
      title: "Real-World Projects",
      details: [
        "E-commerce Platform",
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
                      <img src={banner} alt="Full Stack Course" className="w-full h-full object-cover rounded-lg" />
                    </div>
          {/* Right Info Box */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course <span className="font-medium ml-4">Java Full Stack Development</span>
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
              Our comprehensive Java Full Stack program is designed to transform you from a beginner into a job-ready developer. You will learn to build dynamic and responsive web applications using the powerful Java ecosystem, including the Spring Framework for the backend and React for the frontend. The curriculum covers foundational Java programming, database management, and full-stack integration, ensuring you have a holistic skill set. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
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
              Gain proficiency in essential tools and technologies like VS Code, Git, Spring, and MySQL to streamline your development workflow and build robust applications.
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
                <img src="https://placehold.co/48x48/61DAFB/fff?text=React" alt="React" className="w-12 h-12" />
                <p className="text-sm mt-2">React</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/61DAFB/fff?text=Java" alt="Java" className="w-12 h-12" />
                <p className="text-sm mt-2">Java</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/66bb6a/fff?text=Spring" alt="Spring" className="w-12 h-12" />
                <p className="text-sm mt-2">Spring</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/4479A1/fff?text=MySQL" alt="MySQL" className="w-12 h-12" />
                <p className="text-sm mt-2">MySQL</p>
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
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">E-commerce Platform</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Social Media Clone</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Real-time Chat App</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Task Management System</div>
          </div>
        )}
      </div>
    </section>
  );
}