import React, { useState } from "react";

// Assuming these paths and imports are correct in your environment
import banner1 from './../../../assets/Courses/Mern/aibanner.png'
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
  // ... (reviews data remains the same)
  {
    id: 1,
    name: "Rajesh Sharma",
    course: "AI Full Stack Development",
    review:
      "This AI Full Stack course was a game-changer for me. The mentors are not only knowledgeable but also very patient. I learned how to build a full-fledged application from scratch and their practical approach made it easy to understand even the complex topics. Highly recommend for anyone looking to start their development career!",
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
    // ... (curriculum data remains the same)
    {
      id: 1,
      title: "Fundamentals of Programming & AI Basics",
      details: [
        "Python Fundamentals & OOP",
        "Data Structures and Algorithms",
        "Git and GitHub for Version Control",
        "Introduction to AI/ML concepts",
      ],
    },
    {
      id: 2,
      title: "Machine Learning & Deep Learning Core",
      details: [
        "Supervised and Unsupervised Learning",
        "Introduction to Neural Networks",
        "Working with TensorFlow and PyTorch",
        "Building and training ML models",
      ],
    },
    {
      id: 3,
      title: "Data Science & Data Engineering",
      details: [
        "Data Manipulation with Pandas",
        "Data Visualization with Matplotlib & Seaborn",
        "Data Cleaning and Preprocessing",
        "Feature Engineering",
      ],
    },
    {
      id: 4,
      title: "Backend Development with Python",
      details: [
        "Building APIs with Flask or Django",
        "Integrating AI models into backend services",
        "Handling data requests and responses",
        "Deployment strategies",
      ],
    },
    {
      id: 5,
      title: "Frontend Integration with React.js",
      details: [
        "React fundamentals and JSX",
        "Building user interfaces for AI applications",
        "Displaying complex data visualizations",
        "State management for dynamic apps",
      ],
    },
    {
      id: 6,
      title: "Model Deployment & MLOps",
      details: [
        "Deploying models on cloud services (AWS, Google Cloud)",
        "Containerization with Docker",
        "CI/CD pipeline basics for ML models",
        "Monitoring and maintaining deployed models",
      ],
    },
    {
      id: 7,
      title: "Building Real-World AI Projects",
      details: [
        "AI-powered Recommendation Engine",
        "Sentiment Analysis Tool",
        "Chatbot with NLP",
        "Image Recognition App",
      ],
    },
  ];

  // Data for the Info Box
  const infoItems = [
    { Icon: Monitor, label: "Course", value: "AI Full Stack Development" },
    { Icon: Clock, label: "Duration", value: "9 Months" },
    { Icon: Users, label: "Batch", value: "20 Students" },
    { Icon: Globe, label: "Language", value: "English / Tamil" },
    { Icon: FileText, label: "Certificate", value: "Yes" },
    { Icon: Calendar, label: "Batch", value: "Online" },
    { Icon: MapPin, label: "Location", value: "Anywhere" },
  ];

  return (
    // Outer section padding (applies to all content except the full-width elements)
    <section className="py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Section - Keep content within the max-width container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 sm:px-6 md:px-0">
          
          {/* Left Image */}
          <div>
            <img 
                src={banner1} 
                alt="AI Full Stack Course" 
                className="w-full h-auto object-cover rounded-lg aspect-video md:aspect-auto" 
            />
          </div>

          {/* RIGHT INFO BOX - FIX APPLIED HERE */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 space-y-3 md:space-y-6 h-full flex flex-col justify-between border border-gray-200">
            {infoItems.map(({ Icon, label, value }, index) => (
                <div key={index} className="flex items-start gap-3">
                    {/* Icon - Flex-shrink-0 keeps the icon from shrinking */}
                    <Icon size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                    
                    {/* Label and Value Container - uses flex to distribute space */}
                    <div className="flex justify-between items-start w-full text-sm">
                        {/* Label */}
                        <p className="text-gray-700 flex-shrink-0 mr-4">
                            {label}
                        </p>
                        {/* Value - flex-1 allows it to take remaining space and wrap if needed */}
                        <p className="font-medium text-black text-right flex-1 break-words"> 
                            {value}
                        </p>
                    </div>
                </div>
            ))}
          </div>
          {/* END RIGHT INFO BOX FIX */}

        </div>

        {/* Tabs - This container needs to be full width (w-full) on mobile, 
           and the scrolling area needs left/right padding for the first/last item. */}
        <div className="w-full sticky top-0 z-10 bg-white border-b border-gray-300 mb-8 overflow-hidden">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
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
                    {/* Spacer element */}
                    <div className="w-4 sm:w-6 md:w-0 flex-shrink-0"></div>
                </div>
            </div>
        </div>
        
        {/* Tab Content - Keep content within the padded area */}
        <div className="px-4 sm:px-6 md:px-0">
            {activeTab === "Overview" && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Our comprehensive AI Full Stack program is designed to transform you from a beginner into a job-ready developer specializing in artificial intelligence. You will learn to build dynamic and responsive web applications that integrate powerful AI and machine learning models. The curriculum covers foundational programming, data science, and model deployment, ensuring you have a holistic skill set. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
                    </p>
                </div>
            )}

            {activeTab === "Curriculum" && (
                <div className="space-y-4">
                    {/* ... (Curriculum rendering) ... */}
                    {curriculum.map((module) => (
                        <div
                            key={module.id}
                            className="border-b border-gray-200 pb-3"
                        >
                            <button
                                onClick={() =>
                                    setOpenModule(openModule === module.id ? null : module.id)
                                }
                                className="flex justify-between items-center w-full text-left py-2" // Added py-2 for touch targets
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
                    {/* ... (Tools & Software's rendering) ... */}
                    <h3 className="text-lg font-semibold mb-3">
                        Master Industry-Standard Tools
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                        Gain proficiency in essential tools and technologies like VS Code, Git, Jupyter, and Postman to streamline your development workflow and build robust applications.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                        {[
                            { name: "VS Code", text: "VSCode", color: "1A75BB", text_color: "fff" },
                            { name: "Git", text: "Git", color: "F14E32", text_color: "fff" },
                            { name: "Python", text: "Python", color: "3776AB", text_color: "fff" }, 
                            { name: "TensorFlow", text: "Tensor", color: "FF6F00", text_color: "fff" },
                            { name: "Jupyter", text: "Jupyter", color: "F37726", text_color: "fff" },
                            { name: "React", text: "React", color: "61DAFB", text_color: "000" }, 
                        ].map((tool) => (
                            <div key={tool.name} className="flex flex-col items-center">
                                <img 
                                    src={`https://placehold.co/48x48/${tool.color}/${tool.text_color}?text=${tool.text}`} 
                                    alt={tool.name} 
                                    className="w-10 h-10 sm:w-12 sm:h-12" 
                                />
                                <p className="text-xs sm:text-sm mt-2 text-center font-medium">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "Student Reviews" && (
                <div className="space-y-6">
                    {/* ... (Student Reviews rendering) ... */}
                    {reviews.map((review) => (
                        <div key={review.id} className="flex gap-4 border-b pb-6">
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0" 
                            />
                            <div>
                                <h4 className="font-semibold text-base sm:text-sm">{review.name}</h4>
                                <p className="text-xs text-gray-500 mb-1">
                                    {review.course}
                                </p>
                                <div className="flex text-yellow-500 mb-2 text-base"> 
                                    {"★".repeat(review.rating)}
                                </div>
                                <p className="text-sm text-gray-600 italic">"{review.review}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Projects" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {/* ... (Projects rendering) ... */}
                    {[
                        "AI-powered Recommendation Engine",
                        "Sentiment Analysis Tool",
                        "Chatbot with NLP",
                        "Image Recognition App"
                    ].map((project, index) => (
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