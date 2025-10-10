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


// Dummy student reviews for a full-stack course (data remains the same)
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

// Data structure for Info Box
const infoItems = [
    { Icon: Monitor, label: "Course", value: "Java Full Stack Development" },
    { Icon: Clock, label: "Duration", value: "12 Months" },
    { Icon: Users, label: "Batch", value: "30 Students" },
    { Icon: Globe, label: "Language", value: "English" },
    { Icon: FileText, label: "Certificate", value: "Yes" },
    { Icon: Calendar, label: "Mode", value: "Online" },
    { Icon: MapPin, label: "Location", value: "Anywhere" },
];

const tabs = [
    "Overview",
    "Curriculum",
    "Tools & Software's",
    "Student Reviews",
    "Projects",
];

const curriculum = [
    { id: 1, title: "Core Java & OOP Concepts", details: ["Java Language Fundamentals", "Object-Oriented Programming (OOP) principles", "Data Structures and Algorithms in Java", "Exception Handling and Multithreading",] },
    { id: 2, title: "Backend with Spring Framework", details: ["Introduction to Spring Core & Spring Boot", "Building RESTful APIs with Spring MVC", "Dependency Injection and IoC Container", "Spring Security for Authentication & Authorization",] },
    { id: 3, title: "Database Management & ORM", details: ["Working with SQL and relational databases (MySQL/PostgreSQL)", "Introduction to JPA & Hibernate", "Data persistence and object-relational mapping", "Database migrations and schema management",] },
    { id: 4, title: "Frontend Integration with React.js", details: ["React Fundamentals and JSX", "State Management and Hooks", "Connecting React to Java backend APIs", "Asynchronous data fetching",] },
    { id: 5, title: "Microservices & Cloud Deployment", details: ["Microservices architecture principles", "Building and deploying microservices with Spring Cloud", "Containerization with Docker", "Cloud deployment on platforms like AWS or Google Cloud",] },
    { id: 6, title: "Real-World Projects", details: ["E-commerce Platform", "Social Media Clone", "Real-time Chat Application", "Task Management System",] },
];

const tools = [
    { name: "VS Code", text: "VSCode", color: "1A75BB" },
    { name: "Git", text: "Git", color: "F14E32" },
    { name: "React", text: "React", color: "61DAFB" },
    { name: "Java", text: "Java", color: "E51D2A" }, // Updated Java color
    { name: "Spring", text: "Spring", color: "66BB6A" },
    { name: "MySQL", text: "MySQL", color: "4479A1" },
];

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  return (
    // Outer section: Removed fixed padding (px-6 md:px-24)
    <section className="py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Section: Added mobile padding (px-4 sm:px-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 sm:px-6 md:px-0">
          
          {/* Left Image */}
          <div>
            <img
              src={banner}
              alt="Full Stack Course"
              className="w-full h-auto object-cover rounded-lg aspect-video md:aspect-auto" 
            />
          </div>

          {/* Right Info Box: FIXED FOR CONTENT WRAPPING */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 space-y-3 md:space-y-6 h-full flex flex-col justify-between border border-gray-200">
            {infoItems.map(({ Icon, label, value }, index) => (
                <div key={index} className="flex items-start gap-3">
                    <Icon size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                    
                    {/* KEY FIX: flex container for label/value */}
                    <div className="flex justify-between items-start w-full text-sm">
                        <p className="text-gray-700 flex-shrink-0 mr-4">
                            {label}
                        </p>
                        {/* KEY FIX: flex-1 for max space, text-right for alignment, break-words for overflow */}
                        <p className="font-medium text-black text-right flex-1 break-words"> 
                            {value}
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Tabs: FIXED FOR SCROLLING AND ALIGNMENT */}
        <div className="w-full sticky top-0 z-10 bg-white border-b border-gray-300 mb-8 overflow-hidden">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
                {/* Inner Padding for Alignment (matches content below) */}
                <div className="flex px-4 sm:px-6 md:px-0">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        // Adjusted mr-6/mr-8 for better mobile spacing
                        className={`mr-6 sm:mr-8 pb-3 text-xs sm:text-sm font-medium transition flex-shrink-0 ${
                            activeTab === tab
                            ? "text-black border-b-2 border-black "
                            : "text-gray-500 hover:text-black"
                        }`}
                        >
                        {tab}
                        </button>
                    ))}
                    {/* Spacer to allow the last tab to be fully scrolled into view */}
                    <div className="w-4 sm:w-6 md:w-0 flex-shrink-0"></div>
                </div>
            </div>
        </div>

        {/* Tab Content: Added mobile padding (px-4 sm:px-6) */}
        <div className="px-4 sm:px-6 md:px-0">
            
            {activeTab === "Overview" && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Our comprehensive **Java Full Stack program** is designed to transform you from a beginner into a job-ready developer. You will learn to build dynamic and responsive web applications using the powerful Java ecosystem, including the **Spring Framework** for the backend and **React** for the frontend. The curriculum covers foundational Java programming, database management, and full-stack integration, ensuring you have a holistic skill set. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
                    </p>
                </div>
            )}

            {activeTab === "Curriculum" && (
                <div className="space-y-4">
                    {curriculum.map((module) => (
                        <div key={module.id} className="border-b border-gray-200 pb-3">
                            <button
                                onClick={() =>
                                    setOpenModule(openModule === module.id ? null : module.id)
                                }
                                className="flex justify-between items-center w-full text-left py-2" // Added py-2 for touch target
                            >
                                <span className="text-sm font-medium pr-4">
                                    {module.id}. {module.title}
                                </span>
                                {openModule === module.id ? (
                                    <ChevronUp size={16} className="flex-shrink-0" /> // Smaller icon for mobile
                                ) : (
                                    <ChevronDown size={16} className="flex-shrink-0" />
                                )}
                            </button>

                            {openModule === module.id && module.details.length > 0 && (
                                <ul className="mt-2 text-sm text-gray-600 space-y-1 ml-4 list-disc list-inside">
                                    {module.details.map((detail, idx) => (
                                        <li key={idx} className="ml-2">• {detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Tools & Software's" && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">
                        Master Industry-Standard Tools
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                        Gain proficiency in essential tools and technologies like **VS Code, Git, Spring, and MySQL** to streamline your development workflow and build robust applications.
                    </p>
                    {/* Adjusted grid for better mobile density and consistent sizing */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                        {tools.map((tool) => (
                            <div key={tool.name} className="flex flex-col items-center">
                                <img
                                    src={`https://placehold.co/40x40/${tool.color}/fff?text=${tool.text}`}
                                    alt={tool.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12"
                                />
                                <p className="text-xs sm:text-sm mt-2 text-center">{tool.name}</p>
                            </div>
                        ))}
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
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                            />
                            <div>
                                <h4 className="font-semibold text-base sm:text-sm">{review.name}</h4>
                                <p className="text-xs text-gray-500 mb-1">{review.course}</p>
                                <div className="flex text-yellow-500 mb-2 text-base">
                                    {"★".repeat(review.rating)}
                                </div>
                                <p className="text-sm text-gray-600">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Projects" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {["E-commerce Platform", "Social Media Clone", "Real-time Chat App", "Task Management System"].map((project, index) => (
                        <div 
                            key={index}
                            className="w-full h-32 sm:h-48 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-center text-sm sm:text-base font-medium text-gray-700 p-4 transition hover:shadow-md"
                        >
                            {project}
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </section>
  );
}