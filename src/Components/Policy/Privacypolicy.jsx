import React from "react";
import { Shield, Mail, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-100 py-16 px-6 md:px-20 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12 mt-20">
        <div className="flex justify-center mb-4">
          <Shield className="text-yellow-400 w-15 h-15" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Pixla Academy - Privacy Policy
        </h1>
        <br />
        <p className="text-sm text-gray-300">
          Website:{" "}
          <a
            href="https://www.pixlaacademy.com"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            www.pixlaacademy.com
          </a>
        </p>
      </div>

      {/* Company Info */}
      <div className="bg-gray-800/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 md:p-10 border-l-4 border-yellow-400 mb-10">
        <h2 className="text-xl font-semibold text-white mb-2">
          Operated By:
        </h2>
        <p className="text-gray-300">
          <span className="font-medium text-yellow-300">
            Tripalive.Me Technology Pvt Ltd
          </span>
          <br />
          Operated From:{" "}
          <span className="text-gray-400">Bangalore, Karnataka, India</span>
        </p>
      </div>

      {/* Privacy Policy Content */}
      <div className="space-y-10">
        {[
          {
            title: "1. Introduction",
            content:
              "Pixla Academy, operated by Tripalive.Me Technology Pvt Ltd, respects your privacy and is committed to safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or enroll in our training programs. By using www.pixlaacademy.com, you consent to the practices described in this policy.",
          },
          {
            title: "2. Information We Collect",
            content:
              "We may collect personal details (name, email, phone), educational information (academic qualifications, skills, course interests), payment information (billing details for fee processing), and technical data (IP, browser type, usage statistics).",
          },
          {
            title: "3. How We Use Your Information",
            content:
              "We use your data to process enrollments, deliver materials, communicate updates, improve our services, send relevant updates (with consent), and comply with legal obligations.",
          },
          {
            title: "4. Data Protection and Security",
            content:
              "We apply industry-standard security measures to protect your data from unauthorized access or disclosure. While we ensure confidentiality, no online platform can guarantee 100% security, and users share information at their own discretion.",
          },
          {
            title: "5. Data Sharing and Disclosure",
            content:
              "We do not sell or trade personal data. Information is shared only with authorized staff, trusted third-party providers (like payment gateways), or legal authorities when required by law.",
          },
          {
            title: "6. Cookies and Tracking Technologies",
            content:
              "Our website uses cookies to enhance functionality and analyze usage. You can disable cookies in your browser, but some features may not work properly as a result.",
          },
          {
            title: "7. Your Rights",
            content:
              "You may access, correct, or request deletion of your data. You may also withdraw consent, subject to academic or legal obligations. Requests can be made by emailing info@pixlaacademy.com.",
          },
          {
            title: "8. Third-Party Links",
            content:
              "Our website may contain external links. Pixla Academy is not responsible for third-party site practices or content. We recommend reviewing their respective privacy policies.",
          },
          {
            title: "9. Updates to This Policy",
            content:
              "We may update this Privacy Policy periodically to reflect changes in practices or laws. Updated versions will be posted here with a revised effective date.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800/40 p-6 rounded-xl hover:bg-gray-800/60 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-yellow-100/10 border border-yellow-400/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
        <h3 className="text-5xl font-semibold text-yellow-400 mb-4">
           Contact Information
        </h3>
        <div className="flex flex-col items-center gap-2 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-yellow-400" />
            <p>info@pixlaacademy.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025{" "}
        <span className="text-yellow-400 font-medium">Pixla Academy</span>. All
        Rights Reserved. Operated by Tripalive.Me Technology Pvt Ltd.
      </div>
    </section>
  );
}
