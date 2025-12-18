import { Link } from "react-router-dom";
import { siteContent } from "../data/content";

const About = () => {
  // You can change this path to your actual About hero image
  const aboutHeroImage = "/images/Aboutus/hero.png";

  return (
    <div className="pt-20">
      {/* Header (Hero image like WhatWeTreat) */}
      <section className="relative overflow-hidden bg-teal-900 py-16 lg:py-24">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="About Body First UK"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Optional: fallback if image path is wrong
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Overlay gradient to match WhatWeTreat vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative">
          <div className="max-w-3xl text-white text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 ">
              About Body First UK
            </h1>
            <p className="text-xl text-teal-50">
              Your trusted partner in health, recovery, and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="team" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {siteContent.about.mission}
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                Our Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {siteContent.about.philosophy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteContent.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3 text-teal-600">✓</div>
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced, qualified professionals dedicated to your recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-teal-50 to-teal-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/team/fallback.png";
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-700 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.qualifications}
                  </p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section bg-teal-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Professional Standards
            </h2>
            <p className="text-lg text-gray-600">
              All our physiotherapists are fully qualified and registered with
              professional bodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {siteContent.accreditations.map((acc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="text-5xl mb-4 text-teal-600">🏅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {acc.name}
                </h3>
                <p className="text-gray-600">{acc.fullName}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
              What This Means for You
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>
                  All therapists have completed extensive university-level
                  training
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>
                  Regulated by professional bodies ensuring highest standards of
                  care
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>
                  Continuous professional development to stay current with best
                  practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>
                  Fully insured for your protection and peace of mind
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Patients Choose Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Expertise & Experience
                  </h3>
                  <p className="text-gray-600">
                    Our team brings years of clinical experience across various
                    specialties, from sports injuries to chronic pain
                    management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Patient-Centred Approach
                  </h3>
                  <p className="text-gray-600">
                    We listen to your concerns, involve you in decision-making,
                    and tailor treatment to your specific goals and lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Evidence-Based Practice
                  </h3>
                  <p className="text-gray-600">
                    We use the latest research and proven techniques to ensure
                    you receive the most effective treatment available.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Comprehensive Care
                  </h3>
                  <p className="text-gray-600">
                    We dedicate sufficient time to each appointment, ensuring
                    thorough assessment and treatment without rushing.
                  </p>
                </div>
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
            Book your appointment today and take the first step towards better
            health
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

export default About;
