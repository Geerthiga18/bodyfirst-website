import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Hero from '../components/Hero';
import Card from '../components/Card';
import InsuranceMarquee from '../components/InsuranceMarquee';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const Home = () => {
  return (
    <div className="pt-20">
      <SEO />
      {/* Hero Section (your existing Hero; will look teal if Option A is applied) */}
      <Hero
        title={siteContent.hero.title}
        subtitle={siteContent.company.tagline}
        description={siteContent.hero.description}
        ctaPrimary={siteContent.hero.ctaPrimary}
        ctaSecondary={siteContent.hero.ctaSecondary}
        backgroundVideo="/videos/hero.mp4"
      />

      {/* Quick Overview Cards */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/what-we-treat" className="group h-full">
              <Card icon="🩺" title="What We Treat" hover className="h-full">
                <p className="text-gray-600">
                  Expert treatment for a wide range of musculoskeletal conditions and injuries
                </p>
                <span className="inline-block mt-4 font-medium text-teal-600 group-hover:underline">
                  Learn more →
                </span>
              </Card>
            </Link>

            <Link to="/services" className="group h-full">
              <Card icon="⚕️" title="Our Services" hover className="h-full">
                <p className="text-gray-600">
                  Physiotherapy, sports massage, dry needling, and advanced wellness treatments
                </p>
                <span className="inline-block mt-4 font-medium text-teal-600 group-hover:underline">
                  View services →
                </span>
              </Card>
            </Link>

            <Link to="/prices" className="group h-full">
              <Card icon="💷" title="Prices & Insurance" hover className="h-full">
                <p className="text-gray-600">
                  Transparent pricing from £65. We accept all major insurance providers
                </p>
                <span className="inline-block mt-4 font-medium text-teal-600 group-hover:underline">
                  See pricing →
                </span>
              </Card>
            </Link>

            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full"
            >
              <Card icon="📅" title="Book Now" hover className="h-full">
                <p className="text-gray-600">
                  Easy online booking. Same-day appointments often available
                </p>
                <span className="inline-block mt-4 font-medium text-teal-600 group-hover:underline">
                  Book appointment →
                </span>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <HeadingScrollAnimation as="h2" className="section-title text-gray-900" variant="fade-up">
              Our Services
            </HeadingScrollAnimation>
            <p className="section-subtitle text-teal-800">
              Comprehensive physiotherapy and wellness treatments tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.services.slice(0, 6).map((service) => (
              <Card key={service.id} icon={service.icon} title={service.name}>
                <p className="text-gray-600">{service.shortDesc}</p>
                <Link
                  to="/services"
                  className="inline-block mt-4 font-medium text-teal-600 hover:underline"
                >
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <HeadingScrollAnimation as="h2" className="section-title text-gray-900" variant="slide-in-left">
              What Our Patients Say
            </HeadingScrollAnimation>
            <p className="section-subtitle text-teal-800">
              Trusted by hundreds of patients across London
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.testimonials.map((testimonial, index) => (
              <Card key={index} hover={false}>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-teal-50 ring-1 ring-teal-100 px-6 py-4 rounded-lg">
              <div className="text-4xl">⭐</div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Based on 200+ reviews</div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/place/BODY+FIRST+UK+-+Physio+%26+Wellbeing+Clinic/@51.4256928,-0.3568561,17z/data=!4m8!3m7!1s0x48760b5ea482eda5:0xb1dababe47d75f95!8m2!3d51.4256928!4d-0.3568561!9m1!1b1!16s%2Fg%2F11dylwm6fj?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition"
              >
                Watch All Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="section bg-gradient-to-br from-teal-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <HeadingScrollAnimation as="h2" className="section-title text-gray-900" variant="scale">
              We Accept All Major Insurance Providers
            </HeadingScrollAnimation>
            <p className="section-subtitle text-teal-800">
              Use your health insurance or work benefits to cover treatment costs
            </p>
          </div>

          <div>
            <InsuranceMarquee items={siteContent.insurance.accepted} duration={22} />
          </div>


          <div className="mt-12 text-center">
            <Link to="/prices"                 className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition">
              Learn About Insurance Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <HeadingScrollAnimation as="h2" className="section-title text-gray-900" variant="blur-up">
              Meet Our Team
            </HeadingScrollAnimation>
            <p className="section-subtitle text-teal-800">
              Experienced, qualified professionals dedicated to your recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.team.map((member, index) => (
              <ScrollAnimation
                key={index}
                className="card overflow-hidden"
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
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about#team"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition"
            >
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold mb-4 text-gray-900" variant="blur-up">
              Professional Standards
            </HeadingScrollAnimation>
            <p className="text-lg text-gray-600">
              All our physiotherapists are fully qualified and registered with professional bodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {siteContent.accreditations.map((acc, index) => (
              <ScrollAnimation
                key={index}
                className="card p-8 text-center"
              >
                <div className="h-24 mb-4 flex items-center justify-center">
                  <img
                    src={acc.logo}
                    alt={acc.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {acc.name}
                </h3>
                <p className="text-gray-600">{acc.fullName}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <HeadingScrollAnimation as="h2" className="section-title text-gray-900" variant="slide-in-right">
              Why Choose Body First UK?
            </HeadingScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                HCPC and CSP registered physiotherapists with years of experience
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalised Care</h3>
              <p className="text-gray-600">
                Tailored treatment plans designed specifically for your needs
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Techniques</h3>
              <p className="text-gray-600">
                Latest evidence-based treatments and cutting-edge equipment
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Central Location</h3>
              <p className="text-gray-600">
                Convenient London location with excellent transport links
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Hours</h3>
              <p className="text-gray-600">
                Extended opening hours including evenings and Sundays
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="card p-6 text-center" variant="fade-up">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees. Clear pricing with insurance accepted
              </p>
            </ScrollAnimation>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/why-us"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg font-semibold transition"
            >
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <HeadingScrollAnimation as="h2" className="text-3xl lg:text-4xl font-bold mb-6" variant="fade-up">
            Ready to Start Your Recovery Journey?
          </HeadingScrollAnimation>
          <p className="text-xl mb-8 text-teal-100">
            Book your appointment today and take the first step towards better health
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Goes directly to the booking form on Contact page */}
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full sm:w-auto bg-white text-teal-700 hover:bg-gray-100 text-lg px-6 py-3 rounded-lg"
            >
              Book Now
            </a>


            {/* Goes to Contact page (top) */}
            <Link
              to="/contact"
              className="btn w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white text-lg px-6 py-3 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;



