import { Link } from "react-router-dom";
import PriceTable from "../components/PriceTable";
import { siteContent } from "../data/content";

const PricesInsurance = () => {
  // Change this path to your actual hero image
  const pricesHeroImage = "/images/insurance/hero.png";

  return (
    <div className="pt-20">
      {/* Header (Hero image like WhatWeTreat) */}
      <section className="relative overflow-hidden bg-teal-900 py-16 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={pricesHeroImage}
            alt="Prices and insurance at BodyFirst"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // If image path is wrong, hide the image (fallback color remains)
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Overlay gradient for readability (same vibe as WhatWeTreat) */}
          <div className="absolute inset-0 bg-black/35 bg-gradient-to-r from-teal-900/80 via-teal-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative text-center">
         <div className="max-w-3xl text-white">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Prices & Insurance
      </h1>
      <p className="text-xl text-teal-50">
        Transparent pricing with no hidden fees. We accept all major health
        insurance providers
      </p>
    </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Our Prices
              </h2>
              <p className="text-lg text-gray-600">
                Competitive rates for high-quality physiotherapy and wellness
                services
              </p>
            </div>

            <PriceTable />
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Package Deals
            </h2>
            <p className="text-lg text-gray-600">
              Save money with our treatment packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 3-Session */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  3-Session Package
                </h3>
                <div className="text-4xl font-bold text-teal-600">£195</div>
                <p className="text-gray-600 mt-2">Save £15</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">3x 60-minute sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Valid for 3 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
              <Link
                to="/contact#book"
                className="btn bg-teal-600 hover:bg-teal-700 text-white w-full text-center"
              >
                Book Package
              </Link>
            </div>

            {/* 6-Session (Most Popular) */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-teal-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  6-Session Package
                </h3>
                <div className="text-4xl font-bold text-teal-600">£375</div>
                <p className="text-gray-600 mt-2">Save £45</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">6x 60-minute sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Valid for 6 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Priority booking</span>
                </li>
              </ul>
              <Link
                to="/contact#book"
                className="btn bg-teal-600 hover:bg-teal-700 text-white w-full text-center"
              >
                Book Package
              </Link>
            </div>

            {/* 10-Session */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  10-Session Package
                </h3>
                <div className="text-4xl font-bold text-teal-600">£600</div>
                <p className="text-gray-600 mt-2">Save £100</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">10x 60-minute sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Valid for 12 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-gray-700">Maximum savings</span>
                </li>
              </ul>
              <Link
                to="/contact#book"
                className="btn bg-teal-600 hover:bg-teal-700 text-white w-full text-center"
              >
                Book Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Insurance Coverage
              </h2>
              <p className="text-lg text-gray-600">
                We work with all major private health insurance providers
              </p>
            </div>

            {/* Insurance Logos */}
            <div className="bg-teal-50 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-8">
                {siteContent.insurance.accepted.map((insurer) => (
                  <div
                    key={insurer.name}
                    className="bg-white px-8 py-6 rounded-lg shadow-md ring-1 ring-teal-100 flex items-center justify-center"
                  >
                    <img
                      src={insurer.logo}
                      alt={insurer.name}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Using Your Insurance
              </h3>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    Coverage Information
                  </h4>
                  <p>{siteContent.insurance.note}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">How It Works</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>
                      Check your policy details or contact your insurer to
                      confirm physiotherapy coverage
                    </li>
                    <li>
                      Obtain any necessary pre-authorisation or referral if
                      required by your policy
                    </li>
                    <li>
                      Book your appointment with us and provide your insurance
                      details
                    </li>
                    <li>
                      We can submit claims directly to many insurers or provide
                      receipts for reimbursement
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">
                    What You&apos;ll Need
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        Your insurance policy number and membership details
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        Pre-authorisation code (if required by your insurer)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Photo ID for verification</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
                  <p>
                    <strong>Note:</strong> If you&apos;re unsure about your
                    coverage, we&apos;re happy to help. Contact us and we can
                    check with your insurer on your behalf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Payment Options
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Card Payments
                </h3>
                <p className="text-gray-600">
                  All major credit and debit cards accepted
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💷</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Cash</h3>
                <p className="text-gray-600">Cash payments welcome</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Insurance
                </h3>
                <p className="text-gray-600">
                  Direct billing available for many insurers
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                Cancellation Policy
              </h3>
              <p className="text-gray-700 text-center">
                We require at least 24 hours&apos; notice for cancellations or
                rescheduling. Appointments cancelled with less than 24
                hours&apos; notice may be subject to the full appointment fee.
              </p>
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

export default PricesInsurance;
