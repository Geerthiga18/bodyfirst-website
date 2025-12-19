import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import PricingCards from "../components/PricingCards";
import InsuranceMarquee from "../components/InsuranceMarquee";
import HeadingScrollAnimation from "../components/HeadingScrollAnimation";
import SEO from "../components/SEO";
import { siteContent } from "../data/content";
import { seoConfig } from "../data/seoConfig";

const PricesInsurance = () => {
  // Change this path to your actual hero image
  const pricesHeroImage = "/images/insurance/hero.png";

  return (
    <div>
      <SEO
        title={seoConfig.prices.title}
        description={seoConfig.prices.description}
      />
      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={pricesHeroImage}
            alt="Pricing and insurance at Body First UK"
            className="w-full h-full object-cover transform scale-105"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Pricing & <span className="text-teal-400">Insurance</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Transparent pricing with no hidden fees. We work with all major private health insurance providers.
            </p>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <HeadingScrollAnimation as="h2" className="text-3xl font-bold mb-4 text-gray-900" variant="fade-up">
                Our Prices
              </HeadingScrollAnimation>
              <p className="text-lg text-gray-600">
                Competitive rates for high-quality physiotherapy and wellness
                services
              </p>
            </div>

            <div className="mt-8">
              <PricingCards />
            </div>

            <div className="mt-16 p-8 bg-teal-50 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-gray-700 leading-relaxed font-medium">
                  <strong className="text-teal-800">Note:</strong> All prices are for self-paying patients. Initial appointments
                  include a comprehensive assessment and treatment plan tailored to your specific needs.
                </p>
              </div>
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 whitespace-nowrap shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <HeadingScrollAnimation as="h2" className="text-3xl font-bold mb-4 text-gray-900" variant="slide-in-left">
                Insurance Coverage
              </HeadingScrollAnimation>
              <p className="text-lg text-gray-600">
                We work with all major private health insurance providers
              </p>
            </div>

            {/* Insurance Logos */}
            <ScrollAnimation variant="fade-up" className="bg-teal-50 rounded-xl p-8 mb-8">
              <div>
                {/* marquee component shows logos in continuous loop */}
                <InsuranceMarquee items={siteContent.insurance.accepted} duration={20} />
              </div>
            </ScrollAnimation>

            {/* Insurance Info */}
            <ScrollAnimation variant="fade-up" className="card p-8">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold text-center mb-12 text-gray-900" variant="blur-up">
              Payment Options
            </HeadingScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollAnimation variant="fade-up" className="card p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Card Payments
                </h3>
                <p className="text-gray-600">
                  All major credit and debit cards accepted
                </p>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" className="card p-6 text-center">
                <div className="text-4xl mb-4">💷</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Cash</h3>
                <p className="text-gray-600">We do accept Cash payments</p>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" className="card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Insurance
                </h3>
                <p className="text-gray-600">
                  Direct billing available for many insurers
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation variant="fade-up" className="card p-8 mt-12">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                Cancellation Policy
              </h3>
              <p className="text-gray-700 text-center">
                We require at least 24 hours&apos; notice for cancellations or
                rescheduling. Appointments cancelled with less than 24
                hours&apos; notice may be subject to the full appointment fee.
              </p>
            </ScrollAnimation>
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
