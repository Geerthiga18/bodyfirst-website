import { Link } from "react-router-dom";
import { ScrollBackground } from "../components/ScrollBackground";
import { siteContent } from "../data/content";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  fadeUp,
  scaleUp,
  staggerContainer,
} from "../animations/motionVariants";

const About = () => {
  const aboutHeroImage = "/images/Aboutus/hero.png";

  // Parallax animation
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="pt-20 relative">
      <ScrollBackground />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-teal-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          <motion.img
            src={aboutHeroImage}
            alt="About Body First UK"
            style={{ y }}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/70 to-transparent" />
        </div>

        <motion.div
          className="container relative text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Body First UK
            </h1>
            <p className="text-xl text-teal-50">
              Your trusted partner in health, recovery, and wellness
            </p>
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <motion.section
        id="mission"
        className="section bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {siteContent.about.mission}
              </p>
            </div>

            <motion.div variants={scaleUp} className="bg-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                Our Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {siteContent.about.philosophy}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        className="section bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteContent.about.values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3 text-teal-600">✓</div>
                <p className="font-semibold text-gray-900">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TEAM */}
      <motion.section
        className="section bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Experienced, qualified professionals dedicated to your recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                  <p className="text-teal-700 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualifications}</p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <motion.div
          className="container text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book your appointment today and take the first step towards better health
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-teal-700 hover:bg-gray-100 text-lg px-8"
            >
              Book Now
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="btn bg-teal-700 hover:bg-teal-800 text-lg px-8"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
