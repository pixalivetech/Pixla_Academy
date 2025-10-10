// CourseDetails.jsx
import React, { useState } from "react";
// Assuming these paths are correct for the user's project structure
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


// Dummy student reviews (data remains the same)
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

// Data structure for Info Box
const infoItems = [
    { Icon: Monitor, label: "Course", value: "UI/UX Design" },
    { Icon: Clock, label: "Duration", value: "4+1 Month" },
    { Icon: Users, label: "Batch", value: "10 Students" },
    { Icon: Globe, label: "Language", value: "English / Tamil" },
    { Icon: FileText, label: "Certificate", value: "Yes" },
    { Icon: Calendar, label: "Mode", value: "Offline / Online" },
    { Icon: MapPin, label: "Location", value: "Bengaluru" },
];

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
    // Populate the rest of the modules for a complete curriculum section
    { id: 2, title: "User Research & Empathy Mapping", details: ["Conducting User Interviews", "Creating Personas & Scenarios", "Empathy & Journey Mapping", "Competitive Analysis"] },
    { id: 3, title: "Information Architecture & Wireframing", details: ["Sitemaps & Navigation Design", "Low-Fidelity Sketching", "Mid-Fidelity Wireframes (Digital)", "Content Strategy Basics"] },
    { id: 4, title: "UI Design & Visual Aesthetics", details: ["Color Theory and Typography", "Visual Hierarchy and Layout", "Designing Components (Buttons, Forms)", "Accessibility Guidelines (WCAG)"] },
    { id: 5, title: "Prototyping with Figma & Adobe XD", details: ["Creating Interactive Prototypes", "Micro-interactions and Animations", "Design Handoff for Developers", "Using Design System Libraries"] },
    { id: 6, title: "Usability Testing & Feedback", details: ["Planning and Conducting Tests", "Analyzing User Feedback", "A/B Testing Strategies", "Iterative Design Process"] },
    { id: 7, title: "Responsive Design & Design Systems", details: ["Designing for Mobile, Tablet, and Desktop", "Introduction to Atomic Design", "Building a Mini Design System", "Grid Systems and Constraints"] },
    { id: 8, title: "Portfolio Development & Real Projects", details: ["Case Study Documentation", "Designing a Capstone Project", "Portfolio Review and Presentation", "Interview Preparation & Job Search Strategies"] },
];

// Data structure for tools, using imported image variables
const tools = [
    { name: "Figma", img: u11 },
    { name: "Usability Testing", img: u12 },
    { name: "Chat GPT", img: u13 },
    { name: "User Flow", img: u14 },
    { name: "Adobe XD", img: u15 },
    { name: "Sketch", img: u16 },
];

export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openModule, setOpenModule] = useState(1);

    return (
        // Outer section: Removed fixed padding (px-6 md:px-24) and applied a fluid padding to center content better
        <section className="py-16 md:py-20 flex justify-center">
            <div className="max-w-[1280px] w-full">

                {/* Top Section: Added mobile padding (px-4 sm:px-6) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10 px-4 sm:px-6 md:px-0">
                    
                    {/* Left Image spanning 2 columns */}
                    <div className="md:col-span-2">
                        <img
                            src={U4}
                            alt="UI/UX Course"
                            // Added aspect ratio for better sizing on various screens
                            className="w-full h-auto object-cover rounded-lg aspect-video md:aspect-auto"
                        />
                    </div>

                    {/* Right Info Box: FIXED FOR CONTENT WRAPPING AND FONT SIZES */}
                    <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 space-y-3 md:space-y-6 h-full flex flex-col justify-between border border-gray-200">
                        {infoItems.map(({ Icon, label, value }, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Icon: Small size (16) and flex-shrink-0 for mobile stability */}
                                <Icon size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                                
                                {/* KEY FIX: flex container for label/value with smaller text size */}
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
                                Our comprehensive **UI/UX Design** program is designed to transform you into a professional designer ready for the modern digital industry. You will explore the principles and techniques of effective UX/UI design, including creating user personas and developing a deep understanding of your target audience. The curriculum covers essential topics like information architecture, wireframing, **prototyping**, interaction design, visual design principles, and **usability testing**, using industry-standard tools like **Figma** and **Adobe XD**. By the end of the course, you will have a strong foundation and a robust portfolio showcasing your skills and creativity.
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
                                Gain proficiency in essential tools like **Figma, Adobe XD, Sketch**, along with modules on **Usability Testing** and **AI tools** like **ChatGPT**, integrated throughout the curriculum.
                            </p>
                            {/* Adjusted grid for better mobile density and consistent sizing */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                                {tools.map((tool) => (
                                    <div key={tool.name} className="flex flex-col items-center">
                                        <img
                                            src={tool.img}
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

                    {activeTab === "Photos" && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {[1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className="w-full h-32 sm:h-48 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500 p-4"
                                >
                                    Photo Placeholder {index}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}