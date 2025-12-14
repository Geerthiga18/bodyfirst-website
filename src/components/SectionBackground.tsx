import React from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  opacity?: number;
}

const SectionBackground = ({ children, className = '', rounded = true, opacity = 0.08 }: SectionBackgroundProps) => {
  const radius = rounded ? '12px' : '0px';

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className={`absolute inset-0 pointer-events-none`}
        style={{
          zIndex: -1,
          opacity,
          borderRadius: radius,
          background: 'linear-gradient(90deg,#f0f9ff 0%,#ecfeff 25%,#fff7ed 50%,#fef3c7 75%,#f0fdf4 100%)',
          backgroundSize: '300% 300%',
          animation: 'bf-gradient-shift 12s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes bf-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
