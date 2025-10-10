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


// Student reviews updated for a Software Testing course (data remains the same)
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
            "The curriculum covered both manual and automation testing with Selenium and other tools. The live projects gave me real-world experience, and the mentors supported me throughout.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=51",
    },
];

// Data structure for Info Box
const infoItems = [
    { Icon: Monitor, label: "Course", value: "Software Testing" },
    { Icon: Clock, label: "Duration", value: "6 Months" },
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
    { id: 1, title: "Software Testing Fundamentals", details: ["Introduction to Software Testing", "SDLC and STLC", "Test Case Design Techniques", "Bug Life Cycle & Defect Reporting",] },
    { id: 2, title: "Manual Testing Deep Dive", details: ["Requirement Analysis", "Writing Test Plans & Test Cases", "Test Execution & Reporting", "Functional vs Non-Functional Testing",] },
    { id: 3, title: "Automation Testing with Selenium", details: ["Introduction to Selenium WebDriver", "Locators and Web Elements", "TestNG Framework", "Writing and Executing Automation Scripts",] },
    { id: 4, title: "Performance & API Testing", details: ["Basics of JMeter", "Load and Stress Testing", "Introduction to API Testing", "API Automation with Postman",] },
    { id: 5, title: "Testing Tools & Bug Tracking", details: ["Working with JIRA", "Version Control with Git", "CI/CD Basics with Jenkins", "Defect Management Tools",] },
    { id: 6, title: "Real-World QA Projects", details: ["E-commerce Website Testing", "Banking Application Testing", "Web API Testing Project", "Automation Framework Design Project",] },
];

const tools = [
    { name: "Selenium", text: "Sel", color: "1A75BB" },
    { name: "JIRA", text: "JIRA", color: "F14E32" },
    { name: "Postman", text: "Postman", color: "0175C2" },
    { name: "Git", text: "Git", color: "3F2A00" }, // Changed color for Git
    { name: "Jenkins", text: "Jenk", color: "FFCA28" },
    { name: "JMeter", text: "JMet", color: "4479A1" },
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
                            alt="Software Testing Course"
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
                                Our **Software Testing** program equips you with the skills needed to become a professional **QA Engineer**. You will master manual testing fundamentals, **automation testing** using **Selenium**, performance testing with **JMeter**, and **API testing** with **Postman**. The program includes real-time projects, interview prep, and resume support to ensure you're job-ready for the industry.
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
                                Master Testing Tools
                            </h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Gain expertise in essential tools like **Selenium, JIRA, Postman, Git, Jenkins, and JMeter** to become industry-ready.
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
                            {["E-commerce Website Testing", "Banking Application Testing", "Web API Testing Project", "Automation Framework Project"].map((project, index) => (
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