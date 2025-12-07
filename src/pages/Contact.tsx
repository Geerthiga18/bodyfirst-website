import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { siteContent } from '../data/content';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#book') {
      const el = document.getElementById('book');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Coming to /contact without #book → go to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/Contact/contact_hero.png"
            alt="BodyFirst Contact"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/50" />
        {/* Content */}
        <div className="container text-center relative z-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Book your appointment or contact us for any questions about our services
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
              <a
                href={`tel:${siteContent.company.phone}`}
                className="text-teal-700 font-semibold text-lg hover:underline"
              >
                {siteContent.company.phone}
              </a>
              <p className="text-gray-600 mt-2">Mon-Fri: 9am-8pm</p>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-5xl mb-4">💬</div>
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
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
              <a
                href={`mailto:${siteContent.company.email}`}
                className="text-teal-700 font-semibold text-lg hover:underline break-all"
              >
                {siteContent.company.email}
              </a>
              <p className="text-gray-600 mt-2">We reply within 24 hours</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Opening Hours
            </h2>
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
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="book" className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Address */}
            <div>
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How do I book an appointment?
                </h3>
                <p className="text-gray-600">
                  You can book by calling us at {siteContent.company.phone}, sending a WhatsApp
                  message, emailing us, or filling out the contact form above. We&apos;ll confirm
                  your appointment within a few hours during business days.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do you offer same-day appointments?
                </h3>
                <p className="text-gray-600">
                  Yes, we often have same-day availability. Please call or WhatsApp us to check
                  current availability for urgent appointments.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Where can I park?
                </h3>
                <p className="text-gray-600">
                  [Add specific parking information for your location here, including nearby car
                  parks, street parking availability, and any parking validation you offer]
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Is the clinic wheelchair accessible?
                </h3>
                <p className="text-gray-600">
                  [Add information about accessibility features at your location]
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What should I bring to my first appointment?
                </h3>
                <p className="text-gray-600">
                  Please bring any relevant medical reports or scans, your insurance details if
                  applicable, and wear comfortable clothing that allows access to the area being
                  treated.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Can I reschedule my appointment?
                </h3>
                <p className="text-gray-600">
                  Yes, you can reschedule at any time with at least 24 hours&apos; notice. Please
                  contact us as soon as possible if you need to change your appointment time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>
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
