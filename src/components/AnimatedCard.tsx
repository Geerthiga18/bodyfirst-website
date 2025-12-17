import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animations/motionVariants';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const AnimatedCard = ({ children, className = '', hover = true }: AnimatedCardProps) => {
  return (
    <motion.div
      className={`rounded-xl shadow-lg ${className}`}
      style={{ backgroundColor: '#ffffff', position: 'relative', zIndex: 50 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
