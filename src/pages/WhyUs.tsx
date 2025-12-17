import { ScrollBackground } from '../components/ScrollBackground';
import AnimatedH2 from '../components/AnimatedH2';
import SectionBackground from '../components/SectionBackground';
import AnimatedCard from '../components/AnimatedCard';
import AnimatedListItem from '../components/AnimatedListItem';

const WhyUs = () => {
  return (
    <div className="pt-20 relative">
      <ScrollBackground />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/WhyUs/why_us_hero.png"
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

          <div className="mt-6">
            <SectionBackground className="p-6 rounded-xl" opacity={0.07}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
                  <p className="text-gray-600">
                    HCPC and CSP registered physiotherapists with years of clinical experience.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Personalised Care</h3>
                  <p className="text-gray-600">
                    Tailored treatment plans designed specifically for your needs and goals.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Techniques</h3>
                  <p className="text-gray-600">
                    Evidence-based treatments and modern equipment to accelerate recovery.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Central Location</h3>
                  <p className="text-gray-600">
                    Convenient London location with excellent transport links.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">🕐</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Hours</h3>
                  <p className="text-gray-600">
                    Extended opening hours including evenings and Sundays for your convenience.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="p-6 text-center">
                  <div className="text-6xl mb-4">💷</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Clear pricing with insurance accepted; no hidden fees.
                  </p>
                </AnimatedCard>
              </div>
            </SectionBackground>
          </div>
        </div>
      </section>
      {/* Our Commitment to Excellence (New Section) */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="lg:flex lg:items-center lg:justify-between gap-10">
            {/* Left Content Block */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
           <AnimatedH2 className="section-title text-gray-900">
                Our Commitment to Excellence
              </AnimatedH2>
              <p className="text-lg text-gray-700 mb-6">
                We believe that the best outcomes come from a combination of skill, experience, and the latest scientific research. At Body First UK, we don't rely on guesswork; we rely on **evidence**.
              </p>
              
              <ul className="space-y-4 text-gray-700">
                <AnimatedListItem as="li">
                  <span className="flex-shrink-0 mr-3 text-teal-500 text-xl">✓</span>
                  <span className="text-gray-800">Higher Success Rates: Our focus on root-cause analysis and personalised programming leads to more effective and lasting recoveries.</span>
                </AnimatedListItem>
                <AnimatedListItem as="li">
                  <span className="flex-shrink-0 mr-3 text-teal-500 text-xl">✓</span>
                  <span className="text-gray-800">Proactive Prevention: We equip you with the knowledge and exercises needed to prevent your injury from recurring, saving you time and money.</span>
                </AnimatedListItem>
                <AnimatedListItem as="li">
                  <span className="flex-shrink-0 mr-3 text-teal-500 text-xl">✓</span>
                  <span className="text-gray-800">Integrative Approach: We look at your whole body, not just the painful area, ensuring maximum long-term function and well-being.</span>
                </AnimatedListItem>
              </ul>
            </div>

            {/* Right Did You Know Block (styled as white card for consistency) */}
            <div className="lg:w-1/2">
              <AnimatedCard className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-6" />
                <h3 className="text-2xl font-extrabold mb-3 relative z-10 text-gray-900">
                  Did You Know?
                </h3>
                <p className="text-xl italic relative z-10 border-l-4 border-teal-500 pl-4 text-gray-700">
                  "Research consistently shows that physiotherapy incorporating **active patient participation** (e.g., specific exercises and education) yields significantly better long-term outcomes than passive treatment alone."
                </p>
                <p className="text-sm mt-4 relative z-10 opacity-80 text-gray-600">
                  — Our clinical approach is built on this evidence, ensuring you're an active partner in your recovery.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
      {/* Our Track Record: Results You Can Trust (New Section) */}
      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedH2 className="section-title text-gray-900">
            Our Track Record: Results You Can Trust
          </AnimatedH2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We measure our success by your progress. Our patient-focused methodology delivers real, measurable improvements in mobility, pain reduction, and quality of life.
          </p>

          {/* Key Metrics/Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Metric 1 */}
            <AnimatedCard className="p-8 border border-teal-200 rounded-xl shadow-lg transition duration-300" hover={false}>
              <p className="text-5xl font-extrabold text-teal-600">92%</p>
              <h3 className="text-xl font-bold mt-3 text-gray-800">Of Patients Achieve Goals</h3>
              <p className="text-gray-600 text-sm mt-1">Reported achieving their primary rehabilitation goals within their personalised plan.</p>
            </AnimatedCard>
            
            {/* Metric 2 */}
            <AnimatedCard className="p-8 border border-teal-200 rounded-xl shadow-lg transition duration-300" hover={false}>
              <p className="text-5xl font-extrabold text-teal-600">4.9/5</p>
              <h3 className="text-xl font-bold mt-3 text-gray-800">Average Patient Rating</h3>
              <p className="text-gray-600 text-sm mt-1">Consistent high scores across professionalism, care quality, and clinical results.</p>
            </AnimatedCard>
            
            {/* Metric 3 */}
            <AnimatedCard className="p-8 border border-teal-200 rounded-xl shadow-lg transition duration-300" hover={false}>
              <p className="text-5xl font-extrabold text-teal-600">75%</p>
              <h3 className="text-xl font-bold mt-3 text-gray-800">Referral Rate</h3>
              <p className="text-gray-600 text-sm mt-1">A majority of our new patients come through direct recommendations from satisfied clients.</p>
            </AnimatedCard>

          </div>

          {/* Final Call to Action Block */}
          <div className="mt-10 p-8 bg-gray-900 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg text-teal-100 mb-6">
              Stop letting pain limit your life. Take the first step toward lasting recovery today.
            </p>
            <a 
              href="/book-appointment" // Replace with your actual booking link
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition duration-300 shadow-md uppercase tracking-wider"
            >
              Book Your Initial Assessment
            </a>
          </div>

        </div>
      </section>
    </div>
    
  );
};

export default WhyUs;
