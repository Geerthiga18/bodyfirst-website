import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-teal-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="/images/Condition We Treat/whatwetreat.png"
            alt="Physiotherapy treatment session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/70 to-transparent" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-teal-50">
              Comprehensive physiotherapy and wellness treatments using the latest
              evidence-based techniques and equipment
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  {/* Optional icon placeholder */}
                  <div className="text-5xl mr-6">
                    <span>💠</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                        Evidence-Based
                      </span>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                        Professional Care
                      </span>
                    </div>

                    {/* Only Learn more */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-teal-600 font-semibold hover:underline"
                    >
                      Learn more
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600">
              Every treatment session is designed to maximise your recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card icon="🔍" title="Detailed Assessment">
              <p className="text-gray-600">
                Comprehensive evaluation of your condition, movement patterns, and goals
                to create a personalised treatment plan.
              </p>
            </Card>

            <Card icon="👐" title="Hands-On Treatment">
              <p className="text-gray-600">
                Expert manual therapy techniques to reduce pain, improve mobility, and
                accelerate healing.
              </p>
            </Card>

            <Card icon="🏋️" title="Exercise Rehabilitation">
              <p className="text-gray-600">
                Tailored exercise programmes to strengthen, stabilise, and prevent
                future injuries.
              </p>
            </Card>

            <Card icon="📚" title="Education & Advice">
              <p className="text-gray-600">
                Clear explanations about your condition and practical advice for
                self-management and prevention.
              </p>
            </Card>

            <Card icon="⚡" title="Advanced Techniques">
              <p className="text-gray-600">
                Access to specialised treatments like dry needling, shockwave therapy,
                and cupping when appropriate.
              </p>
            </Card>

            <Card icon="📈" title="Progress Tracking">
              <p className="text-gray-600">
                Regular reassessments to monitor your progress and adjust treatment as
                needed for optimal outcomes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Benefits of Our Treatments
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Pain Relief', text: 'Effective techniques to reduce and manage pain.' },
                { title: 'Improved Mobility', text: 'Restore range of motion and flexibility.' },
                { title: 'Faster Recovery', text: 'Accelerate healing from injuries and surgery.' },
                { title: 'Injury Prevention', text: 'Reduce risk of future injuries.' },
                { title: 'Enhanced Performance', text: 'Optimise movement and athletic ability.' },
                { title: 'Better Quality of Life', text: 'Return to activities you love.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <span className="text-2xl text-teal-600">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
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
            Book your appointment today and take the first step towards better health
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

export default Services;
