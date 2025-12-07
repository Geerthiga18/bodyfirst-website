// src/pages/WhatWeTreatDetail.tsx

import { useParams, Link, Navigate } from "react-router-dom";
import treatmentCategories from "../data/whatWeTreatData";

const WhatWeTreatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = treatmentCategories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/what-we-treat" replace />;
  }

  const { detailContent } = category;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
     {/* Hero (single dynamic hero for ALL slugs) */}
      <section className="relative text-white overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[420px]">
        {/* Background */}
        {category.heroImage ? (
          <>
            <div className="absolute inset-0 z-0">
              <img
                src={category.heroImage}
                alt={category.heroAlt ?? category.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay for readability */}
            <div className="absolute inset-0 z-[1] bg-black/60" />
          </>
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600 to-teal-700" />
        )}

        {/* Content */}
        <div className="relative z-10 container py-10 lg:py-14">
          <nav className="mb-4" aria-label="Breadcrumb">
            <Link
              to="/what-we-treat"
              className="inline-flex items-center text-teal-100 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all conditions
            </Link>
          </nav>

          <div className="mb-3">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {category.title}
            </h1>
          </div>

          <p className="text-lg lg:text-xl text-gray-100 max-w-3xl">
            {detailContent.overview}
          </p>
        </div>
      </section>

      {/* Sections */}
      <main className="container py-10 lg:py-14 space-y-8">
        {detailContent.sections.map((section, index) => (
          <section
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 lg:p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-500/70">
              {section.heading}
            </h2>
            <p className="text-gray-700 mb-4">{section.content}</p>

            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-5 h-5 mt-1 mr-3 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                    </span>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQs */}
        {detailContent.faqs && detailContent.faqs.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6 lg:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-500/70">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {detailContent.faqs.map((faq, i) => (
                <div key={i} className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-lg p-8 lg:p-10 text-white mt-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Concerned about your {category.title}?
            </h2>
            <p className="text-teal-100 mb-5">
              Book an assessment or contact our team to discuss your symptoms
              and the best treatment options for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-700 px-7 py-3 rounded-lg font-semibold text-sm lg:text-base hover:bg-gray-100 transition"
              >
                Book Now
              </a>
              <Link
                to="/contact"
                className="inline-block bg-teal-700/80 text-white px-7 py-3 rounded-lg font-semibold text-sm lg:text-base hover:bg-teal-800 transition border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link
            to="/what-we-treat"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-sm"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all conditions
          </Link>
        </div>
      </main>
    </div>
  );
};

export default WhatWeTreatDetail;
