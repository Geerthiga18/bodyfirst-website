import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
}

const BOOKING_URL =
  "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login";

const Hero = ({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryLink = "/contact",
  backgroundVideo,
  backgroundImage,
}: HeroProps) => {
  return (
    <section className="pt-1 pb-10">
      {/* Full-width hero wrapper */}
      <div className="relative w-full overflow-hidden min-h-[80vh] flex items-center">
        {/* Background media */}
        <div className="absolute inset-0 -z-20">
          {backgroundVideo ? (
            <video
              className="w-full h-full object-cover"
              src={backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : backgroundImage ? (
            <img
              src={backgroundImage}
              alt="BodyFirst clinic"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-900" />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/70" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16">
          <div className="max-w-3xl text-left text-teal-50">
            {subtitle && (
              <p className="mb-3 text-base md:text-lg font-semibold text-teal-400">
                {subtitle}
              </p>
            )}

            <h1 className="mb-5 text-4xl md:text-5xl lg:text-[54px] leading-tight font-semibold">
              {title}
            </h1>

            {description && (
              <p className="mb-8 text-base md:text-lg text-teal-100">
                {description}
              </p>
            )}

            {/* Pills */}
            <div className="mb-8 flex flex-wrap gap-3">
              {["Assess", "Treat", "Recover", "Maintain"].map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded-full bg-white/42 border border-white/45 backdrop-blur-sm text-sm font-medium"
                >
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base md:text-lg transition"
                >
                  {ctaPrimary}
                </a>
              )}

              {ctaSecondary && (
                <Link
                  to={ctaSecondaryLink}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/40 bg-white/25 hover:bg-white/15 text-white font-semibold text-base md:text-lg transition"
                >
                  {ctaSecondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
