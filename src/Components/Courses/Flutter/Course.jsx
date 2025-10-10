import React, { useState } from "react";
import banner from './../../../assets/Courses/Mern/flutterbanner.png'
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

// Student reviews updated for a Flutter full-stack course (data remains the same)
const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Flutter Full Stack Development",
    review:
      "This Flutter course was a game-changer for me. The instructors explained state management and Firebase integration in a way that was easy to understand. The hands-on projects were fantastic, and I now have a portfolio I'm proud of. Highly recommended!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: 2,
    name: "Rohan Kumar",
    course: "Mobile App Development",
    review:
      "I came into this with zero experience, but the curriculum was so well-structured. I loved building a real-time chat app from scratch. The mentors were always there to help, and the career coaching prepared me perfectly for my job search.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "Ananya Singh",
    course: "Full Stack Development",
    review:
      "The combination of Flutter on the front end and backend services was seamless. The course demystified concepts like REST APIs and authentication, and the live projects gave me the confidence to tackle any project. A truly comprehensive program.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=51",
  },
];

// Data extracted for clean rendering
const infoItems = [
    { Icon: Monitor, label: "Course", value: "Flutter Full Stack Development" },
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
    { id: 1, title: "Dart Programming & Flutter Fundamentals", details: ["Dart Language Essentials", "Introduction to Flutter Widgets", "Building UI with Stateful and Stateless Widgets", "Layouts and Navigation",] },
    { id: 2, title: "State Management & API Integration", details: ["Provider & Bloc State Management", "Connecting to RESTful APIs", "Handling Asynchronous Operations", "Data Serialization and Deserialization",] },
    { id: 3, title: "Firebase & Backend Services", details: ["Introduction to Firebase", "Authentication with Firebase Auth", "Real-time Databases (Firestore)", "Cloud Storage and Functions",] },
    { id: 4, title: "Advanced Flutter Concepts", details: ["Animations and Gestures", "Platform-Specific Code", "Push Notifications", "App Deployment to App Store & Play Store",] },
    { id: 5, title: "Testing & Debugging", details: ["Unit Testing", "Widget Testing", "Integration Testing", "Debugging Tools and Techniques",] },
    { id: 6, title: "Real-World Projects", details: ["E-commerce App with Firebase", "Social Media Clone", "Real-time Chat Application", "Task Management System",] },
];

const tools = [
    { name: "VS Code", text: "VSCode", color: "1A75BB" },
    { name: "Git", text: "Git", color: "F14E32" },
    { name: "Flutter", text: "Flutter", color: "0175C2" },
    { name: "Dart", text: "Dart", color: "0175C2" },
    { name: "Firebase", text: "Firebase", color: "FFCA28" },
    { name: "Figma", text: "Figma", color: "4479A1" },
];


export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  return (
    // 1. FIXED: Remove horizontal padding (e.g., px-6 md:px-24) from the outermost section.
    <section className="py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Section: FIXED: Apply responsive padding here. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 sm:px-6 md:px-0">
          
          {/* Left Image */}
          <div>
            <img
              src={banner}
              alt="Flutter Full Stack Course"
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

        {/* Tab Content: FIXED: Apply responsive padding here. */}
        <div className="px-4 sm:px-6 md:px-0">
            
            {activeTab === "Overview" && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Our comprehensive **Flutter Full Stack program** is designed to transform you from a beginner into a job-ready developer. You will learn to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter and Dart. The curriculum covers foundational Dart programming, UI/UX with widgets, **state management**, and full-stack integration with backend services like **Firebase**. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
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
                                className="flex justify-between items-center w-full text-left py-2" 
                            >
                                <span className="text-sm font-medium pr-4">
                                    {module.id}. {module.title}
                                </span>
                                {openModule === module.id ? (
                                    <ChevronUp size={16} className="flex-shrink-0" /> // Smaller icon
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
                        Gain proficiency in essential tools and technologies like **VS Code, Git, Flutter, Dart, and Firebase** to streamline your development workflow and build robust cross-platform applications.
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
                    {["E-commerce App", "Social Media Clone", "Real-time Chat App", "Task Management System"].map((project, index) => (
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