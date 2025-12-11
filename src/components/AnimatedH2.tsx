import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animations/motionVariants';

interface AnimatedH2Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const AnimatedH2 = ({ className = '', id, children }: AnimatedH2Props) => {
  return (
    <motion.h2
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedH2;
