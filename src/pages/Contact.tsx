import { useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';
import { seoConfig } from '../data/seoConfig';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <SEO
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
      />
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/Contact/contact_hero.png"
            alt="Body First UK Contact"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/50" />
        {/* Content */}
        <div className="container relative z-0">
          <div className="max-w-3xl text-white text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Book your appointment or contact us for any questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <ScrollAnimation variant="fade-up" className="text-center p-6 bg-teal-50 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
              <a
                href={`tel:${siteContent.company.phone}`}
                className="text-teal-700 font-semibold text-lg hover:underline"
              >
                {siteContent.company.phone}
              </a>
              <p className="text-gray-600 mt-2">Mon-Fri: 9am-8pm</p>
            </ScrollAnimation>

            {/* WhatsApp */}
            <ScrollAnimation variant="fade-up" className="text-center p-6 bg-teal-50 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
              <div className="mx-auto mb-4">
                <img
                  src="/images/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-12 h-12 mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">WhatsApp</h3>
              <a
                href={`https://wa.me/${siteContent.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold text-lg hover:underline"
              >
                Message Us
              </a>
              <p className="text-gray-600 mt-2">Quick replies guaranteed</p>
            </ScrollAnimation>

            {/* Email */}
            <ScrollAnimation variant="fade-up" className="text-center p-6 bg-teal-50 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
              <a
                href={`mailto:${siteContent.company.email}`}
                className="text-teal-700 font-semibold text-lg hover:underline break-all"
              >
                {siteContent.company.email}
              </a>
              <p className="text-gray-600 mt-2">We reply within 24 hours</p>
            </ScrollAnimation>
          </div>

          {/* Opening Hours */}
          <ScrollAnimation className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
            <HeadingScrollAnimation as="h2" className="text-2xl font-bold text-center mb-6 text-gray-900" variant="fade-up">
              Opening Hours
            </HeadingScrollAnimation>
            <div className="space-y-3 text-center">
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="font-semibold text-gray-900">Monday – Friday</span>
                <span className="text-gray-700">9am – 8pm</span>
              </div>
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span className="text-gray-700">Closed</span>
              </div>
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span className="text-gray-700">11am – 8pm</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="book" className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation className="card p-6">
              <ContactForm />
            </ScrollAnimation>

            {/* Map & Address */}
            <div id="map" className="h-full">
              <ScrollAnimation className="card p-1 h-full">
                <Map />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <HeadingScrollAnimation as="h2" className="text-3xl font-bold text-center mb-12 text-gray-900" variant="slide-in-left">
              Frequently Asked Questions
            </HeadingScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How do I book an appointment?
                </h3>
                <p className="text-gray-600">
                  You can book by calling us at {siteContent.company.phone}, sending a WhatsApp
                  message, emailing us, or filling out the contact form above. We&apos;ll confirm
                  your appointment within a few hours during business days.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do you offer same-day appointments?
                </h3>
                <p className="text-gray-600">
                  Yes, we often have same-day availability. Please call or WhatsApp us to check
                  current availability for urgent appointments.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Where can I park?
                </h3>
                <p className="text-gray-600">
                  [Add specific parking information for your location here, including nearby car
                  parks, street parking availability, and any parking validation you offer]
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Is the clinic wheelchair accessible?
                </h3>
                <p className="text-gray-600">
                  [Add information about accessibility features at your location]
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What should I bring to my first appointment?
                </h3>
                <p className="text-gray-600">
                  Please bring any relevant medical reports or scans, your insurance details if
                  applicable, and wear comfortable clothing that allows access to the area being
                  treated.
                </p>
              </ScrollAnimation>

              <ScrollAnimation className="card p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Can I reschedule my appointment?
                </h3>
                <p className="text-gray-600">
                  Yes, you can reschedule at any time with at least 24 hours&apos; notice. Please
                  contact us as soon as possible if you need to change your appointment time.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <HeadingScrollAnimation as="h2" className="text-3xl font-bold mb-6" variant="scale">
            Ready to Take the First Step?
          </HeadingScrollAnimation>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Don&apos;t let pain hold you back. Book your appointment today and start your
            journey to better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteContent.company.phone}`}
              className="btn bg-white text-teal-700 hover:bg-gray-100 text-lg px-8"
            >
              Call Now
            </a>
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-teal-700 hover:bg-teal-800 text-lg px-8"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
