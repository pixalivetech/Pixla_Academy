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
      "The hands-on sessions on :contentReference[oaicite:2]{index=2}, :contentReference[oaicite:3]{index=3}, :contentReference[oaicite:4]{index=4}, and :contentReference[oaicite:5]{index=5} were incredible. I could build pipelines, deploy apps on the cloud, and monitor them. This course made me industry-ready.",
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
        ":contentReference[oaicite:6]{index=6} and :contentReference[oaicite:7]{index=7} Workflow",
        ":contentReference[oaicite:8]{index=8} Pipelines",
        "Automated Build & Test",
        "Continuous Integration Concepts",
      ],
    },
    {
      id: 3,
      title: "Containerization & Orchestration",
      details: [
        ":contentReference[oaicite:9]{index=9} Basics",
        "Building & Running Containers",
        ":contentReference[oaicite:10]{index=10} Architecture",
        "Deploying Microservices with Kubernetes",
      ],
    },
    {
      id: 4,
      title: "Cloud & Infrastructure as Code",
      details: [
        ":contentReference[oaicite:11]{index=11} Cloud Services (EC2, S3, IAM)",
        ":contentReference[oaicite:12]{index=12} for IaC",
        ":contentReference[oaicite:13]{index=13} for Configuration Management",
        "Cloud Deployment Strategies",
      ],
    },
    {
      id: 5,
      title: "Monitoring & Logging",
      details: [
        ":contentReference[oaicite:14]{index=14} for Metrics",
        ":contentReference[oaicite:15]{index=15} Dashboards",
        ":contentReference[oaicite:16]{index=16} for Logging",
        "Incident Management & Alerts",
      ],
    },
    {
      id: 6,
      title: "Real-World DevOps Projects",
      details: [
        "CI/CD Pipeline for a Web App",
        "Deploying on :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18}",
        "Infrastructure Provisioning with :contentReference[oaicite:19]{index=19}",
        "Monitoring a Microservices Cluster",
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
              alt="DevOps Course"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Right Info Box */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course <span className="font-medium ml-4">DevOps Engineering</span>
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
              Gain hands-on experience with essential DevOps tools to automate,
              deploy, and monitor applications efficiently.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {["Git","Jenkins","Docker","Kubernetes","AWS","Terraform"].map((tool)=>(
                <div key={tool} className="flex flex-col items-center">
                  <img src={`https://placehold.co/48x48?text=${tool}`} alt={tool} className="w-12 h-12" />
                  <p className="text-sm mt-2">{tool}</p>
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
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              CI/CD Pipeline Project
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Kubernetes Cluster Setup
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Terraform Infrastructure
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">
              Monitoring with Prometheus
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
