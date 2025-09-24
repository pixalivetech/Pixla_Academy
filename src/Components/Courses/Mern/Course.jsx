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


// Dummy student reviews for a full-stack course
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
      title: "Fundamentals of Web Development",
      details: [
        "HTML5, CSS3, JavaScript ES6+ Fundamentals",
        "Git and GitHub for Version Control",
        "Responsive Design with Tailwind CSS",
        "Introduction to Frontend and Backend",
      ],
    },
    {
      id: 2,
      title: "Backend Development with Node.js & Express.js",
      details: [
        "Setting up a Node.js environment",
        "RESTful API design and development",
        "Middleware and routing in Express.js",
        "Introduction to server-side rendering",
      ],
    },
    {
      id: 3,
      title: "Database Management with MongoDB",
      details: [
        "Understanding NoSQL databases",
        "CRUD operations with Mongoose",
        "Data modeling and schema design",
        "Database security and best practices",
      ],
    },
    {
      id: 4,
      title: "Frontend Development with React.js",
      details: [
        "React fundamentals and JSX",
        "Component-based architecture",
        "State management with Hooks",
        "React Router for navigation",
      ],
    },
    {
      id: 5,
      title: "Authentication & Authorization",
      details: [
        "User authentication with JWT (JSON Web Tokens)",
        "Implementing password hashing (bcrypt)",
        "Role-based access control",
        "Securing routes and APIs",
      ],
    },
    {
      id: 6,
      title: "Deployment and DevOps Basics",
      details: [
        "Deploying a MERN stack application on Heroku/Vercel",
        "Using environment variables",
        "CI/CD pipeline basics",
        "Server-side optimization",
      ],
    },
    {
      id: 7,
      title: "Building Real-World Projects",
      details: [
        "E-commerce application with a shopping cart",
        "Social media clone with user profiles",
        "Real-time chat application with WebSockets",
        "Portfolio website to showcase your work",
      ],
    },
  ];

  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left Image */}
          <div>
            <img src={banner} alt="Full Stack Course" className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Right Info Box */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-gray-200">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Course <span className="font-medium ml-4">Mern/Full Stack Web Development</span>
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
                Batch <span className="font-medium ml-4">20 Students</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-gray-700" />
              <p className="text-gray-700 text-sm">
                Language <span className="font-medium ml-4">English / Tamil</span>
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
                Batch <span className="font-medium ml-4">Online</span>
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
              Our comprehensive MERN stack program is designed to transform you from a beginner into a job-ready full stack developer. You will learn to build dynamic and responsive web applications from the ground up, covering all four pillars: MongoDB for the database, Express.js and Node.js for the backend, and React for the user interface. Our hands-on approach includes live projects, code reviews, and mock interviews to ensure you gain practical experience and confidence.
            </p>
          </div>
        )}

        {activeTab === "Curriculum" && (
          <div className="space-y-4">
            {curriculum.map((module) => (
              <div
                key={module.id}
                className="border-b border-gray-200 pb-3"
              >
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
              Gain proficiency in essential tools and technologies like VS Code, Git, MongoDB Compass, and Postman to streamline your development workflow and build robust applications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center ">
                <img src="https://placehold.co/48x48/1A75BB/fff?text=VSCode" alt="VS Code" className="w-12 h-12" />
                <p className="text-sm mt-2">VS Code</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/F14E32/fff?text=Git" alt="Git" className="w-12 h-12" />
                <p className="text-sm mt-2">Git</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/4DB33D/fff?text=Node" alt="Node.js" className="w-12 h-12" />
                <p className="text-sm mt-2">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/68A063/fff?text=Mongo" alt="MongoDB Compass" className="w-12 h-12" />
                <p className="text-sm mt-2">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/EF5B25/fff?text=Postman" alt="Postman" className="w-12 h-12" />
                <p className="text-sm mt-2">Postman</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/48x48/61DAFB/fff?text=React" alt="React" className="w-12 h-12" />
                <p className="text-sm mt-2">React</p>
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
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">E-commerce App</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Social Media Clone</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Real-time Chat</div>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-center text-gray-500">Portfolio Website</div>
          </div>
        )}
      </div>
    </section>
  );
}