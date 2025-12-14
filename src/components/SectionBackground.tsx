import React from 'react';
import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  opacity?: number;
}

const colors = [
  '#f0f9ff', // light cyan
  '#ecfeff',
  '#fff7ed', // light warm
  '#fef3c7',
  '#f0fdf4',
];

const SectionBackground = ({ children, className = '', rounded = true, opacity = 0.08 }: SectionBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        aria-hidden
        className={`absolute inset-0 pointer-events-none ${rounded ? 'rounded-xl' : ''}`}
        style={{ zIndex: -1, opacity }}
        animate={{ backgroundColor: colors }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'linear' } as any}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
