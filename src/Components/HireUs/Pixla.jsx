import React from "react";

const PixlaAdvantage = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          The Pixla Advantage : Why Recruiters Choose Pixla
        </h2>
        <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          Our expertise combined with our experience, eliminates hiring hassles
          and makes recruitment a smooth, efficient and fast process.
        </p>

        {/* Table */}
        <div className="mt-8 sm:mt-12 overflow-x-auto">
          <table className="w-full border border-yellow-300 rounded-lg text-left text-gray-800 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300 font-medium"></th>
                <th className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300 font-semibold">
                  Traditional Hiring
                </th>
                <th className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300 font-bold text-yellow-400">
                  Hiring From Pixla
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "Time",
                  traditional: "3–4 week hiring cycle",
                  pixla: (
                    <>
                      Hire skilled talent in{" "}
                      <strong className="font-bold">just 3 hours</strong>
                    </>
                  ),
                },
                {
                  label: "Resume matchmaking",
                  traditional: "Sifting through endless resumes",
                  pixla: (
                    <>
                      <strong className="font-bold">Pre-vetted</strong> candidates
                      matched to your requirements
                    </>
                  ),
                },
                {
                  label: "Cultural Fit",
                  traditional: "Culturally misaligned hires",
                  pixla: (
                    <>
                      Graduates trained in soft skills for{" "}
                      <strong className="font-bold">50+ hours</strong>
                    </>
                  ),
                },
                {
                  label: "Offer Dropouts",
                  traditional: "Candidates ghosting after offer",
                  pixla: (
                    <>
                      <strong className="font-bold">Zero offer dropouts</strong>,
                      guaranteed commitment
                    </>
                  ),
                },
                {
                  label: "Retention",
                  traditional: "0–1 yr attrition is high",
                  pixla: (
                    <>
                      <strong className="font-bold">93% retention rate</strong>,
                      keeping talent long-term
                    </>
                  ),
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300 font-medium">
                    {row.label}
                  </td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300">
                    {row.traditional}
                  </td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 border border-yellow-300 font-semibold text-gray-900">
                    {row.pixla}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 sm:mt-10 text-center">
          <div className="inline-block border border-yellow-300 rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg">
            Experience all of this at{" "}
            <span className="text-yellow-500">ZERO COST</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixlaAdvantage;
  