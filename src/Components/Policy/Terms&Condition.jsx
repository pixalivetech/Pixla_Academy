import React from "react";
import { Shield, FileText, Mail, MapPin } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-100 py-16 px-6 md:px-20 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12 mt-20">
        <div className="flex justify-center mb-4">
          <Shield className="text-yellow-400 w-15 h-15" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
         Pixla Academy - Terms & Conditions
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

      {/* Terms Content */}
      <div className="space-y-10">
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using www.pixlaacademy.com, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using the website or enrolling in any programs.",
          },
          {
            title: "2. About Pixla Academy",
            content:
              "Pixla Academy, a division of Tripalive.Me Technology Pvt Ltd, provides professional training, internships, and skill development programs. All courses aim to enhance knowledge and employability.",
          },
          {
            title: "3. Course Enrollment and Fees",
            content:
              "Enrollment is subject to availability and eligibility. Course fees must be paid as per schedule. Fees are non-refundable unless approved by management. Pixla Academy may update course details or fees without notice.",
          },
          {
            title: "4. Code of Conduct",
            content:
              "Trainees must maintain discipline and professionalism, respect trainers and peers, and not share internal materials externally. Violations may result in suspension or termination without refund.",
          },
          {
            title: "5. Intellectual Property",
            content:
              "All materials and content are owned by Tripalive.Me Technology Pvt Ltd. Unauthorized use, reproduction, or distribution is prohibited.",
          },
          {
            title: "6. Certification and Placement",
            content:
              "Certificates are awarded upon successful completion. Placement assistance is offered but not guaranteed. Performance and attendance affect outcomes.",
          },
          {
            title: "7. Limitation of Liability",
            content:
              "Pixla Academy is not responsible for losses due to downtime, third-party links, or misuse of materials. Use of the website and services is at your own risk.",
          },
          {
            title: "8. Changes to Terms",
            content:
              "Pixla Academy may update these Terms anytime. Updated versions will appear on this page with a revised effective date.",
          },
          {
            title: "9. Governing Law",
            content:
              "These Terms are governed by Indian law. Disputes fall under Bangalore jurisdiction.",
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
