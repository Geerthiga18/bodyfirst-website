import { ScrollBackground } from '../components/ScrollBackground';
import AnimatedH2 from '../components/AnimatedH2';

const WhyUs = () => {
  return (
    <div className="pt-20 relative">
      <ScrollBackground />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/Contact/contact_hero.png"
            alt="Body First UK Why Us"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="container text-center relative z-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Body First UK?
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            We combine expert clinicians, evidence-based care and a patient-centred
            approach to help you recover faster and get back to the things you love.
          </p>
        </div>
      </section>

      {/* Why Choose Us features */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <AnimatedH2 className="section-title text-gray-900">Why Choose Body First UK?</AnimatedH2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                HCPC and CSP registered physiotherapists with years of clinical experience.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalised Care</h3>
              <p className="text-gray-600">
                Tailored treatment plans designed specifically for your needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Techniques</h3>
              <p className="text-gray-600">
                Evidence-based treatments and modern equipment to accelerate recovery.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Central Location</h3>
              <p className="text-gray-600">
                Convenient London location with excellent transport links.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Hours</h3>
              <p className="text-gray-600">
                Extended opening hours including evenings and Sundays for your convenience.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear pricing with insurance accepted; no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
