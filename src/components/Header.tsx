import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';
import { servicesData } from '../data/servicesData';
import treatmentCategories from '../data/whatWeTreatData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'What We Treat', path: '/what-we-treat' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Prices & Insurance', path: '/prices' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt={siteContent.company.name}
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-14'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* What We Treat with dropdown */}
            <div className="relative group">
              <Link
                to="/what-we-treat"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive('/what-we-treat')
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                <span>What We Treat</span>
                <span className="text-xs">▾</span>
              </Link>

              <div
                className="
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-150
                  absolute left-0 top-full mt-2 w-80
                  bg-white rounded-2xl shadow-2xl border border-gray-100
                  py-3 z-50
                "
              >
                <div className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Conditions We Treat
                </div>
                <div className="flex flex-col">
                  {treatmentCategories.slice(0, 10).map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/what-we-treat/${cat.slug}`}
                      className="px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                  <Link
                    to="/what-we-treat"
                    className="mt-1 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors border-t border-gray-100"
                  >
                    View all conditions →
                  </Link>
                </div>
              </div>
            </div>

            {/* Services with dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive('/services')
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                <span>Services</span>
                <span className="text-xs">▾</span>
              </Link>

              <div
                className="
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-150
                  absolute left-0 top-full mt-2 w-72
                  bg-white rounded-2xl shadow-2xl border border-gray-100
                  py-3 z-50
                "
              >
                <div className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Our Services
                </div>
                <div className="flex flex-col">
                  {servicesData.slice(0, 10).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="mt-1 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors border-t border-gray-100"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              About Us
            </Link>

            {/* Why Us */}
            <Link
              to="/why-us"
              className={`text-sm font-medium transition-colors ${
                isActive('/why-us')
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Why Us
            </Link>

            {/* Prices */}
            <Link
              to="/prices"
              className={`text-sm font-medium transition-colors ${
                isActive('/prices')
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Prices &amp; Insurance
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Contact Us
            </Link>

            {/* Book Now → external */}
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center justify-center px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold shadow-md transition-all duration-200"
            >
              Book an Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2 w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Book an Appointment
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
