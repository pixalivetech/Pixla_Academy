import React, { useState } from "react";
import banner from "./../../../assets/Courses/Mern/Devops2.png";
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

// Dummy data (reviews, tabs, curriculum, infoItems, tools) remains the same for brevity
const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    course: "DevOps Engineering",
    review:
      "This DevOps program gave me a clear understanding of CI/CD, containerization, and cloud deployment. The real-world labs helped me gain confidence to work in production-like environments.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: 2,
    name: "Sneha Patel",
    course: "Cloud & DevOps",
    review:
      "The hands-on sessions on CI/CD, Terraform, Kubernetes, and monitoring tools were incredible. I could build pipelines, deploy apps on the cloud, and monitor them. This course made me industry-ready.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "Arjun Nair",
    course: "DevOps with Cloud",
    review:
      "The instructors explained complex DevOps tools in an easy way. Now I can automate deployments, monitor apps, and manage cloud infrastructure confidently.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=51",
  },
];

const infoItems = [
    { Icon: Monitor, label: "Course", value: "DevOps Engineering" },
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
    {
        id: 1,
        title: "Linux & Scripting Fundamentals",
        details: [
            "Linux Basics and Shell Commands",
            "Bash Scripting for Automation",
            "File System & User Management",
            "Networking Basics",
        ],
    },
    {
        id: 2,
        title: "Version Control & CI/CD",
        details: [
            "Git and GitHub Workflow",
            "Jenkins Pipelines",
            "Automated Build & Test",
            "Continuous Integration Concepts",
        ],
    },
    {
        id: 3,
        title: "Containerization & Orchestration",
        details: [
            "Docker Basics",
            "Building & Running Containers",
            "Kubernetes Architecture",
            "Deploying Microservices with Kubernetes",
        ],
    },
    {
        id: 4,
        title: "Cloud & Infrastructure as Code",
        details: [
            "AWS Cloud Services (EC2, S3, IAM)",
            "Terraform for IaC",
            "Ansible for Configuration Management",
            "Cloud Deployment Strategies",
        ],
    },
    {
        id: 5,
        title: "Monitoring & Logging",
        details: [
            "Prometheus for Metrics",
            "Grafana Dashboards",
            "ELK/Loki for Logging",
            "Incident Management & Alerts",
        ],
    },
    {
        id: 6,
        title: "Real-World DevOps Projects",
        details: [
            "CI/CD Pipeline for a Web App",
            "Deploying on AWS EKS/ECS",
            "Infrastructure Provisioning with Terraform",
            "Monitoring a Microservices Cluster",
        ],
    },
];

const tools = ["Git", "Jenkins", "Docker", "Kubernetes", "AWS", "Terraform"];


export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState(1);

  return (
    // 1. Remove all horizontal padding (px-...) from the outer section.
   
        <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Section: Apply padding here for alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 sm:px-6 md:px-0">
          
          {/* Left Image */}
          <div>
            <img
              src={banner}
              alt="DevOps Course"
              className="w-full h-auto object-cover rounded-lg aspect-video md:aspect-auto" 
            />
          </div>
          
          {/* Right Info Box: Responsive layout for info items */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 space-y-3 md:space-y-6 h-full flex flex-col justify-between border border-gray-200">
            {infoItems.map(({ Icon, label, value }, index) => (
                <div key={index} className="flex items-start gap-3">
                    <Icon size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                    
                    {/* Key Fix: Flexible distribution of label and value */}
                    <div className="flex justify-between items-start w-full text-sm">
                        <p className="text-gray-700 flex-shrink-0 mr-4">
                            {label}
                        </p>
                        <p className="font-medium text-black text-right flex-1 break-words"> 
                            {value}
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* 3. Tabs: Full-Width Mobile Scrolling & Alignment */}
        {/* Outer Tabs Wrapper: w-full and sticky top for mobile scrolling experience */}
        <div className="w-full sticky top-0 z-10 bg-white border-b border-gray-300 mb-8 overflow-hidden">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
                {/* Inner Padding for Alignment (must match the content padding) */}
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

        {/* 4. Tab Content: Apply padding here for alignment */}
        <div className="px-4 sm:px-6 md:px-0">
            
            {activeTab === "Overview" && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        This comprehensive DevOps program trains you in modern development
                        and operations practices. You'll master continuous integration,
                        containerization, infrastructure automation, and cloud deployment.
                        The curriculum includes hands-on labs, real-world projects, and
                        expert mentorship to prepare you as a job-ready DevOps engineer.
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
                                    <ChevronUp size={16} className="flex-shrink-0" />
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
                        Gain hands-on experience with essential DevOps tools to automate,
                        deploy, and monitor applications efficiently.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                        {tools.map((tool) => (
                            <div key={tool} className="flex flex-col items-center">
                                <img src={`https://placehold.co/40x40?text=${tool}`} alt={tool} className="w-10 h-10 sm:w-12 sm:h-12" />
                                <p className="text-xs sm:text-sm mt-2 text-center">{tool}</p>
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
                                <p className="text-xs text-gray-500 mb-1">
                                    {review.course}
                                </p>
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
                    {["CI/CD Pipeline Project", "Kubernetes Cluster Setup", "Terraform Infrastructure", "Monitoring with Prometheus"].map((project, index) => (
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