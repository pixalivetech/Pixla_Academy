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

// Student reviews for Digital Marketing
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
      title: "Introduction to Digital Marketing",
      details: [
        "Traditional vs Digital Marketing",
        "Understanding Customer Journey",
        "Market Research & Competitor Analysis",
        "Digital Channels Overview",
      ],
    },
    {
      id: 2,
      title: "Website Planning & SEO",
      details: [
        "Website Structure & Landing Pages",
        "On-Page & Off-Page SEO",
        "Keyword Research Tools",
        "Google Search Console Basics",
      ],
    },
    {
      id: 3,
      title: "Social Media Marketing",
      details: [
        "Facebook & Instagram Ads",
        "LinkedIn & Twitter Marketing",
        "Content Planning & Scheduling",
        "Influencer Collaboration",
      ],
    },
    {
      id: 4,
      title: "Search Engine Marketing (SEM)",
      details: [
        "Google Ads Campaign Setup",
        "Bidding Strategies (CPC, CPM, CPA)",
        "Ad Copywriting & Optimization",
        "Remarketing & Conversion Tracking",
      ],
    },
    {
      id: 5,
      title: "Email & Content Marketing",
      details: [
        "Building Email Funnels",
        "Mailchimp / Email Tools",
        "Blog Writing & Content Strategy",
        "Lead Nurturing Techniques",
      ],
    },
    {
      id: 6,
      title: "Analytics & Performance Tracking",
      details: [
        "Google Analytics & GA4",
        "Measuring KPIs & ROI",
        "Conversion Rate Optimization",
        "Campaign Reporting",
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
            <img
              src={banner}
              alt="Digital Marketing Course"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Info Box */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course{" "}
                <span className="font-medium ml-4">
                  Digital Marketing & Strategy
                </span>
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
                Batch <span className="font-medium ml-4">25 Students</span>
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
              Get hands-on experience with industry-leading tools like Google
              Analytics, Google Ads, Facebook Ads Manager, Canva, and SEMrush to
              plan, execute, and measure successful campaigns.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/34A853/fff?text=GA"
                  alt="Google Analytics"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">Google Analytics</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/EA4335/fff?text=Ads"
                  alt="Google Ads"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">Google Ads</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/4267B2/fff?text=FB"
                  alt="Facebook Ads"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">Facebook Ads</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/F3722C/fff?text=Canva"
                  alt="Canva"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">Canva</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/FFCA28/fff?text=Mail"
                  alt="Mailchimp"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">Mailchimp</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/48x48/5C5CFF/fff?text=SEO"
                  alt="SEMrush"
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2">SEMrush</p>
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
                  <p className="text-xs text-gray-500 mb-1">{review.course}</p>
                  <div className="flex mb-2">{"★".repeat(review.rating)}</div>
                  <p className="text-sm text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              SEO Optimization Project
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Google Ads Campaign
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Social Media Strategy
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Email Marketing Funnel
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
