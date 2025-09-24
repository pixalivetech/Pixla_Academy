import React from "react";
import U1 from "./../../../assets/UI/u1.png";
import U2 from "./../../../assets/UI/u2.png";
import U3 from "./../../../assets/UI/u3.png";

const features = [
  {
    icon: U1,
    title: "Expert Digital Marketing Mentors",
    desc: "Learn from seasoned digital marketing professionals with years of real-world experience in SEO, social media marketing, PPC campaigns, and content strategy. Get personalized guidance to boost your career.",
  },
  {
    icon: U2,
    title: "Exclusive Masterclasses by Industry Experts",
    desc: "Attend live sessions from top marketers who have worked with leading brands. Gain insider tips, real campaign case studies, and learn cutting-edge strategies used in the industry today.",
  },
  {
    icon: U3,
    title: "Dedicated Career Coaching",
    desc: "Get 1-on-1 support from a personal career coach to help you build a winning portfolio, create an ATS-friendly resume, and prepare for interviews in the marketing industry.",
  },
  {
    icon: U1,
    title: "Interview Prep & Resume Reviews",
    desc: "Stand out from the crowd with mock interviews, personalized feedback, and expert reviews of your resume and LinkedIn profile. Become job-ready with complete confidence.",
  },
  {
    icon: U2,
    title: "Complete Digital Marketing Toolkit",
    desc: "Access exclusive resources including SEO checklists, content planning templates, ad campaign blueprints, and social media calendars to supercharge your learning.",
  },
  {
    icon: U3,
    title: "Live Campaigns & Case Studies",
    desc: "Work on real-world projects like running ad campaigns, creating social media strategies, and improving website SEO rankings. Build a strong portfolio with practical experience.",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Heading Row */}
        <div className="flex flex-col md:flex-row md:justify-center md:divide-x divide-gray-300 text-center mb-14">
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Digital Marketing Program</h3>
            <p className="text-sm text-gray-500">Beginner Friendly Curriculum</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Placement Support</h3>
            <p className="text-sm text-gray-500">100% Assistance</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Professional Certification</h3>
            <p className="text-sm text-gray-500">Industry-recognized Credential</p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4 object-contain" />
              <h4 className="text-base font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
