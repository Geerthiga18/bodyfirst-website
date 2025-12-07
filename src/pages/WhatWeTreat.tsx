// src/pages/WhatWeTreat.tsx

import { Link } from 'react-router-dom';
import Card from '../components/Card';
import treatmentCategories from '../data/whatWeTreatData';

const WhatWeTreat = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert physiotherapy treatment for a wide range of musculoskeletal conditions,
            sports injuries, and chronic pain.
          </p>
        </div>
      </section>

      {/* Conditions Grid from treatmentCategories */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentCategories.map((category) => (
              <Card
                key={category.slug}
                title={category.title}
                titleClassName="text-dark-red"
                className={
                  category.slug === 'head-jaw-pain' || category.slug === 'neck-pain' || category.slug === 'shoulder-pain' || category.slug === 'back-spine-pain' || category.slug === 'elbow-pain' || category.slug === 'hand-wrist-pain' || category.slug === 'knee-leg-pain' || category.slug === 'hip-groin-pain'  || category.slug === 'foot-ankle-pain' || category.slug === 'sports-injuries' || category.slug === 'post-surgery-rehab'
                    ? 'relative overflow-hidden bg-cover bg-center'
                    : ''
                }
              >
                {category.slug === 'head-jaw-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/head_jaw.png"
                        alt="Head & Jaw"
                        className="w-full h-full object-cover"
                      />
                       <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                   
                  </>
                )}
                {category.slug === 'neck-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute">
                      <img
                        src="/images/Condition We Treat/neck.png"
                        alt="Neck"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                    
                  </>
                )}
                {category.slug === 'shoulder-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/shoulder.png"
                        alt="Shoulder"
                        className="w-full h-full object-cover"
                        
                      />
                       <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                   
                  </>
                )}
                {category.slug === 'elbow-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/elbow.png"
                        alt="Elbow"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                    
                  </>
                )}  
                {category.slug === 'back-spine-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/back_spine.png"
                        alt="Back & Spine"
                        className="w-full h-full object-cover"
                      />
                        <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                  
                  </>
                )}  
                {category.slug === 'hip-groin-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/hip_groin.png"
                        alt="Hip & Groin"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                    
                  </>
                )}
                {category.slug === 'foot-ankle-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/foot_ankle.png"
                        alt="Foot & Ankle"
                        className="w-full h-full object-cover"
                      />
                       <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                   
                  </>
                )}  
                {category.slug === 'hand-wrist-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/hand_wrist.png"
                        alt="Hand Wrist"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                    
                  </>
                )}
                {category.slug === 'knee-pain' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/knee.png"
                        alt="Knee"
                        className="w-full h-full object-cover"
                      />
                        <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                  
                  </>
                )}  
                {category.slug === 'sports-injuries' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/sports_injuries.png"
                        alt="Sports Injuries"
                        className="w-full h-full object-cover"
                      />
                       <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                   
                  </>
                )}  
                {category.slug === 'post-surgery-rehab' && (
                  <>
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                      <img
                        src="/images/Condition We Treat/post_surgery.png"
                        alt="Post Surgery"
                        className="w-full h-full object-cover"
                      />
                        <div className="absolute inset-0 -z-0 bg-white/80" />
                    </div>
                    {/* Overlay for text readability */}
                  
                  </>
                )}
                <div className="relative z-10">
                  {/* Short description */}
                  <p className="text-gray-600 mb-3 text-sm">
                    {category.shortDescription}
                  </p>

                  {/* Show some conditions */}
                  <ul className="space-y-1 text-sm">
                    {category.conditions.slice(0, 6).map((condition, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-600 mr-2 mt-[2px]">•</span>
                        <span className="text-gray-900">
                          {condition.name}
                        </span>
                      </li>
                    ))}

                    {category.conditions.length > 6 && (
                      <li className="text-xs text-gray-500 italic mt-1">
                        + {category.conditions.length - 6} more conditions
                      </li>
                    )}
                  </ul>

                  {/* Learn more link → slug page */}
                  <Link
                    to={`/what-we-treat/${category.slug}`}
                    className="mt-4 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 hover:underline"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Treatment Approach
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
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
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
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
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
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
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
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
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How quickly will I see results?
                </h3>
                <p className="text-gray-600">
                  Many patients experience improvement within 2–3 sessions, but timelines vary.
                  We'll give you a realistic plan during your initial assessment.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do I need a referral from my GP?
                </h3>
                <p className="text-gray-600">
                  No referral is needed for private physiotherapy. If using insurance,
                  check your provider's requirements.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What should I wear?
                </h3>
                <p className="text-gray-600">
                  Comfortable, loose clothing that allows access to the area being treated.
                  Shorts for lower limb; vest/t-shirt for upper body.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Will treatment be painful?
                </h3>
                <p className="text-gray-600">
                  Some techniques may cause brief discomfort, but we always work within your
                  comfort levels and explain everything beforehand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
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