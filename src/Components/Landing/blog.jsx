// src/components/BlogsSection.jsx
import Blog1 from "./../../assets/Land/blog1.jpg";
import Blog2 from "./../../assets/Land/blog2.jpg";
import Blog3 from "./../../assets/Land/blog3.jpg";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      image: Blog1, // ✅ fixed
      title: "Student Startup Wins National Tech Award",
      desc: "What, I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
    {
      id: 2,
      image: Blog2, // ✅ fixed
      title: "Global Partnership With Seoul Tech Announced",
      desc: "What, I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
    {
      id: 3,
      image: Blog3, // ✅ fixed
      title: "Graduation Ceremony Celebrates Over 2,000 Alumni",
      desc: "What, I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
  ];

  return ( 
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="px-6 md:px-24">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-10">Blogs</h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover "
              />

              {/* Content */}
              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {blog.desc}
                </p>

                {/* Button */}
                <button className="mt-4 self-start bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-full shadow-sm transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
