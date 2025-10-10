import React, { useState } from "react";
import banner from "./../../../assets/Courses/Mern/Digital2.png";
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

// Student reviews for Digital Marketing (data remains the same for brevity)
const reviews = [
  {
    id: 1,
    name: "Sneha Kapoor",
    course: "Digital Marketing",
    review:
      "This digital marketing program completely transformed my understanding of online marketing. I learned SEO, Google Ads, and Social Media Marketing with real projects. I even ran my first campaign during the course!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    course: "Digital Marketing",
    review:
      "The trainers were experienced professionals who gave real industry insights. The best part was learning live campaign creation and analytics tracking. I got my first freelance client right after the course!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 3,
    name: "Divya Nair",
    course: "Digital Marketing",
    review:
      "I loved the practical assignments — from creating a blog to running ads and tracking conversions. This course gave me confidence to apply for digital marketing roles and I landed an internship within a month.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=30",
  },
];

const infoItems = [
    { Icon: Monitor, label: "Course", value: "Digital Marketing & Strategy" },
    { Icon: Clock, label: "Duration", value: "6 Months" },
    { Icon: Users, label: "Batch", value: "25 Students" },
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
    { id: 1, title: "Introduction to Digital Marketing", details: ["Traditional vs Digital Marketing", "Understanding Customer Journey", "Market Research & Competitor Analysis", "Digital Channels Overview",] },
    { id: 2, title: "Website Planning & SEO", details: ["Website Structure & Landing Pages", "On-Page & Off-Page SEO", "Keyword Research Tools", "Google Search Console Basics",] },
    { id: 3, title: "Social Media Marketing", details: ["Facebook & Instagram Ads", "LinkedIn & Twitter Marketing", "Content Planning & Scheduling", "Influencer Collaboration",] },
    { id: 4, title: "Search Engine Marketing (SEM)", details: ["Google Ads Campaign Setup", "Bidding Strategies (CPC, CPM, CPA)", "Ad Copywriting & Optimization", "Remarketing & Conversion Tracking",] },
    { id: 5, title: "Email & Content Marketing", details: ["Building Email Funnels", "Mailchimp / Email Tools", "Blog Writing & Content Strategy", "Lead Nurturing Techniques",] },
    { id: 6, title: "Analytics & Performance Tracking", details: ["Google Analytics & GA4", "Measuring KPIs & ROI", "Conversion Rate Optimization", "Campaign Reporting",] },
];

const tools = [
    { name: "Google Analytics", text: "GA", color: "34A853" },
    { name: "Google Ads", text: "Ads", color: "EA4335" },
    { name: "Facebook Ads", text: "FB", color: "4267B2" },
    { name: "Canva", text: "Canva", color: "F3722C" },
    { name: "Mailchimp", text: "Mail", color: "FFCA28" },
    { name: "SEMrush", text: "SEO", color: "5C5CFF" },
];


export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  return (
    // Outer section: Removed horizontal padding (e.g., px-6 md:px-24)
    <section className="py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Section: Added mobile padding (px-4 sm:px-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 sm:px-6 md:px-0">
          
          {/* Left Image */}
          <div>
            <img
              src={banner}
              alt="Digital Marketing Course"
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
                        Our Digital Marketing program is designed to take you from a
                        beginner to a job-ready marketer. Learn how to grow businesses
                        online using SEO, social media, paid ads, and analytics. The
                        program covers website planning, campaign creation, content
                        strategy, and performance tracking. With real-time projects and
                        live campaign execution, you'll gain the confidence to work in any
                        digital marketing team or start your freelance career.
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
                        Get hands-on experience with industry-leading tools like Google
                        Analytics, Google Ads, Facebook Ads Manager, Canva, and SEMrush to
                        plan, execute, and measure successful campaigns.
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
                    {["SEO Optimization Project", "Google Ads Campaign", "Social Media Strategy", "Email Marketing Funnel"].map((project, index) => (
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