import React, { useState } from "react";
import banner from './../../../assets/Courses/Mern/banner.png'
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
    name: "Rajesh Sharma",
    course: "MERN Stack Development",
    review:
      "This MERN stack course was a game-changer for me. The mentors are not only knowledgeable but also very patient. I learned how to build a full-fledged application from scratch and their practical approach made it easy to understand even the complex topics. Highly recommend for anyone looking to start their development career!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Priya Singh",
    course: "Full Stack Development",
    review:
      "I am Priya from Pune, and I recently completed the full stack program. The teaching style is very effective, and the hands-on projects helped me build a strong portfolio. The mentors and staff were incredibly supportive throughout the entire journey, always ready to help with any query.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Vivek Kumar",
    course: "MEAN Stack Development",
    review:
      "Hi, this is Vivek. I've studied the MEAN stack course here. The curriculum was well-structured, covering everything from MongoDB to Angular. The mock interviews and resume reviews were particularly helpful in landing my first job as a junior developer. An outstanding experience with a great balance of theory and practical work.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=56",
  },
];

// Data structure for Info Box
const infoItems = [
    { Icon: Monitor, label: "Course", value: "MERN/Full Stack Web Development" },
    { Icon: Clock, label: "Duration", value: "6 Months" },
    { Icon: Users, label: "Batch", value: "20 Students" },
    { Icon: Globe, label: "Language", value: "English / Tamil" },
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
    { id: 1, title: "Fundamentals of Web Development", details: ["HTML5, CSS3, JavaScript ES6+ Fundamentals", "Git and GitHub for Version Control", "Responsive Design with Tailwind CSS", "Introduction to Frontend and Backend",] },
    { id: 2, title: "Backend Development with Node.js & Express.js", details: ["Setting up a Node.js environment", "RESTful API design and development", "Middleware and routing in Express.js", "Introduction to server-side rendering",] },
    { id: 3, title: "Database Management with MongoDB", details: ["Understanding NoSQL databases", "CRUD operations with Mongoose", "Data modeling and schema design", "Database security and best practices",] },
    { id: 4, title: "Frontend Development with React.js", details: ["React fundamentals and JSX", "Component-based architecture", "State management with Hooks", "React Router for navigation",] },
    { id: 5, title: "Authentication & Authorization", details: ["User authentication with JWT (JSON Web Tokens)", "Implementing password hashing (bcrypt)", "Role-based access control", "Securing routes and APIs",] },
    { id: 6, title: "Deployment and DevOps Basics", details: ["Deploying a MERN stack application on Heroku/Vercel", "Using environment variables", "CI/CD pipeline basics", "Server-side optimization",] },
    { id: 7, title: "Building Real-World Projects", details: ["E-commerce application with a shopping cart", "Social media clone with user profiles", "Real-time chat application with WebSockets", "Portfolio website to showcase your work",] },
];

const tools = [
    { name: "VS Code", text: "VSCode", color: "1A75BB" },
    { name: "Git", text: "Git", color: "F14E32" },
    { name: "Node.js", text: "Node", color: "4DB33D" },
    { name: "MongoDB", text: "Mongo", color: "68A063" },
    { name: "Postman", text: "Postman", color: "EF5B25" },
    { name: "React", text: "React", color: "61DAFB" },
];

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  return (
    // Outer section: Removed fixed padding (px-6 md:px-24)
   <section className=" px-6 md:px-24 py-16 flex justify-center">
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

          {/* Right Info Box: FIXED FOR CONTENT WRAPPING AND SPACING */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 space-y-3 md:space-y-6 h-full flex flex-col justify-between border border-gray-200">
            {infoItems.map(({ Icon, label, value }, index) => (
                <div key={index} className="flex items-start gap-3">
                    {/* Icon: Small size (16) and flex-shrink-0 for mobile stability */}
                    <Icon size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                    
                    {/* KEY FIX: flex container for label/value */}
                    <div className="flex justify-between items-start w-full text-sm">
                        {/* Label: flex-shrink-0 to maintain its width */}
                        <p className="text-gray-700 flex-shrink-0 mr-4">
                            {label}
                        </p>
                        {/* Value: flex-1 for max space, text-right for alignment, break-words for overflow */}
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
                        Our comprehensive **MERN stack** program is designed to transform you from a beginner into a job-ready full stack developer. You will learn to build dynamic and responsive web applications from the ground up, covering all four pillars: **MongoDB** for the database, **Express.js** and **Node.js** for the backend, and **React** for the user interface. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
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
                        Gain proficiency in essential tools and technologies like **VS Code, Git, MongoDB Compass, and Postman** to streamline your development workflow and build robust applications.
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
                    {["E-commerce App", "Social Media Clone", "Real-time Chat", "Portfolio Website"].map((project, index) => (
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