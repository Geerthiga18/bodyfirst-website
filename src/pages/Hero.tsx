import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaPrimaryLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  /**
   * Optional background video (mp4/webm).
   * e.g. "/videos/bodyfirst-hero.mp4"
   */
  bgVideoSrc?: string;
  /**
   * Optional fallback background image.
   * e.g. "/images/clinic-hero.jpg"
   */
  bgImageSrc?: string;
  /**
   * Controls vertical size. Default: 75vh (smaller than full screen).
   */
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaPrimaryLink = '/contact#book',
  ctaSecondary,
  ctaSecondaryLink = '/contact',
  bgVideoSrc,
  bgImageSrc,
  fullHeight = false,
}: HeroProps) => {
  return (
    <section
      className={`relative overflow-hidden flex items-center ${
        fullHeight ? 'min-h-screen' : 'min-h-[75vh]'
      }`}
    >
      {/* Background: video / image / gradient */}
      <div className="absolute inset-0 -z-20">
        {bgVideoSrc ? (
          <video
            className="w-full h-full object-cover"
            src={bgVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : bgImageSrc ? (
          <img
            src={bgImageSrc}
            alt="BodyFirst clinic"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-900" />
        )}
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-teal-900/70 -z-10" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-teal-200 font-semibold mb-3 text-lg">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-2xl">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {ctaPrimary && (
              <Link
                to={ctaPrimaryLink}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-teal-950 font-semibold text-base md:text-lg transition"
              >
                {ctaPrimary}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                to={ctaSecondaryLink}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-transparent border border-teal-200/70 text-teal-50 hover:bg-teal-800/60 font-medium text-base md:text-lg transition"
              >
                {ctaSecondary}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
