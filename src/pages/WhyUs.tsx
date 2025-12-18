import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { seoConfig } from '../data/seoConfig';

const WhyUs = () => {
  return (
    <div className="pt-20">
      <SEO
        title={seoConfig.whyUs.title}
        description={seoConfig.whyUs.description}
      />
      {/* Simple hero (matches About / Prices pages) */}
      <section className="relative overflow-hidden bg-teal-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          {/* Optional hero image — replace path if you have a specific image */}
          <img
            src="/images/Aboutus/hero.png"
            alt="Why choose Body First UK"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />

          <div className="absolute inset-0 bg-black/35 bg-gradient-to-r from-teal-900/80 via-teal-900/70 to-transparent" />
        </div>

        <div className="container relative">
          <div className="max-w-3xl text-white text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Body First UK</h1>
            <p className="text-xl text-teal-50">
              We provide high-quality, evidence-based physiotherapy with compassionate, personalised care focused on helping you recover and get back to what matters.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                All clinicians are HCPC and CSP registered physiotherapists with many years of clinical experience across musculoskeletal, sports and rehabilitation settings. We prioritise safety and clinical best practice.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalised Care</h3>
              <p className="text-gray-600">
                Every patient receives a thorough assessment and a tailored treatment plan that reflects their diagnosis, goals and lifestyle — not a generic checklist.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Techniques</h3>
              <p className="text-gray-600">
                We use evidence-based manual therapy, exercise prescription, dry needling and modern rehab equipment to speed recovery and improve performance.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Central Location</h3>
              <p className="text-gray-600">
                Our London clinic is easy to reach with excellent transport links and local parking options — making appointments simple to attend.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Hours</h3>
              <p className="text-gray-600">
                We offer extended opening hours, including evenings and Sundays, to fit around work and family commitments.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, upfront pricing with no hidden fees. We accept major insurance providers — check our Prices &amp; Insurance page for details.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Commitment to You</h2>
            <p className="text-gray-700">
              We focus on measurable outcomes, open communication and creating treatment plans that fit your life. Our team will explain options, expected recovery timelines and how to self-manage between sessions.
            </p>

            <div className="mt-6 bg-teal-50 ring-1 ring-teal-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900">Our Promise</h3>
              <p className="text-gray-700 mt-2">
                You will be treated with respect, receive evidence-based care, and leave each appointment with a clear plan. If you need help between visits, our team is available to support you.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition"
            >
              Book Your Appointment
            </a>

            <Link to="/contact" className="inline-flex items-center justify-center ml-4 rounded-lg border border-teal-600 text-teal-600 px-6 py-3 text-lg font-semibold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
