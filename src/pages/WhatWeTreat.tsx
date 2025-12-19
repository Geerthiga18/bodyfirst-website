// src/pages/WhatWeTreat.tsx

import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Card from '../components/Card';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import treatmentCategories from '../data/whatWeTreatData';
import { seoConfig } from '../data/seoConfig';

const WhatWeTreat = () => {
  return (
    <div>
      <SEO
        title={seoConfig.whatWeTreat.title}
        description={seoConfig.whatWeTreat.description}
      />
      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Condition We Treat/whatwetreat.png"
            alt="People receiving physiotherapy treatment"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Conditions We <span className="text-teal-400">Treat</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Expert physiotherapy for musculoskeletal conditions,
              sports injuries, and chronic pain management.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid from treatmentCategories */}
      <section className="py-20 bg-slate-50/50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentCategories.map((category) => (
              <div key={category.slug} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                {/* Background Image Container */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={category.heroImage || '/images/logo.jpg'}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="p-8 flex-1 flex flex-col pt-0 -mt-8 relative z-10">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl mb-4 border border-slate-50">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors mb-3">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {category.conditions.slice(0, 4).map((condition, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                        {condition.name}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/what-we-treat/${category.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-900 px-6 py-3 rounded-xl font-bold transition-all group/btn"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold text-center mb-12 text-gray-900" variant="fade-up">
              Our Treatment Approach
            </HeadingScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation className="card p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-9 h-9 mr-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Comprehensive Assessment
                    </h3>
                    <p className="text-gray-600">
                      We begin with a detailed assessment of your condition, medical history,
                      and movement patterns to identify the root cause of your problem.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-9 h-9 mr-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Personalised Treatment Plan
                    </h3>
                    <p className="text-gray-600">
                      Based on our assessment, we create a tailored plan combining
                      hands-on therapy, exercise rehabilitation, and education.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-9 h-9 mr-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Active Treatment
                    </h3>
                    <p className="text-gray-600">
                      We use evidence-based techniques including manual therapy, exercise therapy,
                      and advanced modalities to accelerate your recovery.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-9 h-9 mr-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Long-term Management
                    </h3>
                    <p className="text-gray-600">
                      We give you the tools and knowledge to manage your condition
                      independently and prevent future injuries.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold text-center mb-12 text-gray-900" variant="slide-in-left">
              Common Questions
            </HeadingScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How quickly will I see results?
                </h3>
                <p className="text-gray-600">
                  Many patients experience improvement within 2–3 sessions, but timelines vary.
                  We'll give you a realistic plan during your initial assessment.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do I need a referral from my GP?
                </h3>
                <p className="text-gray-600">
                  No referral is needed for private physiotherapy. If using insurance,
                  check your provider's requirements.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What should I wear?
                </h3>
                <p className="text-gray-600">
                  Comfortable, loose clothing that allows access to the area being treated.
                  Shorts for lower limb; vest/t-shirt for upper body.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Will treatment be painful?
                </h3>
                <p className="text-gray-600">
                  Some techniques may cause brief discomfort, but we always work within your
                  comfort levels and explain everything beforehand.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <HeadingScrollAnimation as="h2" className="text-3xl lg:text-4xl font-bold mb-6" variant="scale">
            Ready to Start Your Recovery Journey?
          </HeadingScrollAnimation>
          <p className="text-xl mb-8 text-teal-100">
            Book your appointment today and take the first step towards better health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-teal-700 hover:bg-gray-100 text-lg px-8"
            >
              Book Now
            </a>
            <Link
              to="/contact"
              className="btn bg-teal-700 hover:bg-teal-800 text-lg px-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeTreat;