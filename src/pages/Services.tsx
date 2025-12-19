import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Card from '../components/Card';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { seoConfig } from '../data/seoConfig';

const Services = () => {
  return (
    <div>
      <SEO
        title={seoConfig.services.title}
        description={seoConfig.services.description}
      />
      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Condition We Treat/whatwetreat.png"
            alt="Physiotherapy treatment session"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Our <span className="text-teal-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Experience peak physical performance through our comprehensive suite of
              evidence-based wellness and recovery treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            {servicesData.map((service) => (
              <ScrollAnimation
                variant="fade-up"
                key={service.slug}
                className="bg-white rounded-3xl p-6 md:p-8 group overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Service Image */}
                  <div className="w-full md:w-56 h-56 flex-shrink-0 overflow-hidden rounded-2xl shadow-inner bg-slate-100">
                    <img
                      src={service.heroImage || '/images/logo.jpg'}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                        {service.name}
                      </h3>

                      <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-100">
                          Expertise
                        </span>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                          Results-Driven
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-600 transition-all group/btn shadow-lg"
                      >
                        Explore Treatment
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold mb-4 text-gray-900" variant="fade-up">
              What to Expect
            </HeadingScrollAnimation>
            <p className="text-lg text-gray-600">
              Every treatment session is designed to maximise your recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card image="/images/features/assessment.png" title="Detailed Assessment">
              <p className="text-gray-600">
                Comprehensive evaluation of your condition, movement patterns, and goals
                to create a personalised treatment plan.
              </p>
            </Card>

            <Card image="/images/features/treatment.png" title="Hands-On Treatment">
              <p className="text-gray-600">
                Expert manual therapy techniques to reduce pain, improve mobility, and
                accelerate healing.
              </p>
            </Card>

            <Card image="/images/features/rehab.png" title="Exercise Rehabilitation">
              <p className="text-gray-600">
                Tailored exercise programmes to strengthen, stabilise, and prevent
                future injuries.
              </p>
            </Card>

            <Card image="/images/features/education.png" title="Education & Advice">
              <p className="text-gray-600">
                Clear explanations about your condition and practical advice for
                self-management and prevention.
              </p>
            </Card>

            <Card image="/images/features/advanced.png" title="Advanced Techniques">
              <p className="text-gray-600">
                Access to specialised treatments like dry needling, shockwave therapy,
                and cupping when appropriate.
              </p>
            </Card>

            <Card image="/images/features/assessment.png" title="Progress Tracking">
              <p className="text-gray-600">
                Regular reassessments to monitor your progress and adjust treatment as
                needed for optimal outcomes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <ScrollAnimation className="max-w-4xl mx-auto card p-8">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold text-center mb-12 text-gray-900" variant="slide-in-left">
              Benefits of Our Treatments
            </HeadingScrollAnimation>

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
                  <span className="text-teal-600 flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <HeadingScrollAnimation as="h2" className="text-3xl lg:text-4xl font-bold mb-6" variant="scale">
            Ready to Start Your Recovery Journey?
          </HeadingScrollAnimation>
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
