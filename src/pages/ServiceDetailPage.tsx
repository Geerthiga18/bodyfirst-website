// src/pages/ServiceDetailPage.tsx

import { useParams, Link, Navigate } from "react-router-dom";
import { ScrollBackground } from "../components/ScrollBackground";
import AnimatedH2 from "../components/AnimatedH2";
import AnimatedListItem from "../components/AnimatedListItem";
import { findServiceBySlug } from "../data/servicesData";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? findServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative">
      <ScrollBackground />
      {/* Hero (same pattern as WhatWeTreatDetail) */}
      <section className="relative text-white overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[420px]">
        {/* Background */}
        {service.heroImage ? (
          <>
            <div className="absolute inset-0 z-0">
              <img
                src={service.heroImage}
                alt={service.heroAlt ?? service.name}
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
        <div className="relative z-10 container py-12 lg:py-16">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link
              to="/services"
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
              Back to all services
            </Link>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {service.name}
          </h1>

          {service.heroDescription && (
            <p className="text-lg lg:text-xl max-w-3xl text-gray-100">
              {service.heroDescription}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <article className="container py-12 lg:py-16">
        <div className="space-y-8">
          {service.sections.map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 lg:p-8 border border-gray-100"
            >
              <AnimatedH2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-teal-500">
                {section.title}
              </AnimatedH2>

              <div className="max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.body}
                </p>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((bullet, i) => (
                      <AnimatedListItem key={i} as="li">
                        <span className="w-5 h-5 mt-1 mr-3 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-teal-600" />
                        </span>
                        <span className="text-gray-700">{bullet}</span>
                      </AnimatedListItem>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl p-8 lg:p-10 text-white text-center">
          <AnimatedH2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Book Your {service.name} Session?
          </AnimatedH2>
          <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
            Take the first step towards recovery. Secure your appointment online
            or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Book Now
            </a>
            <Link
              to="/contact"
              className="inline-block bg-teal-700/70 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-teal-800 transition border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            <svg
              className="w-5 h-5 mr-1"
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
            Back to all services
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ServiceDetailPage;
