import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animations/motionVariants';

interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li';
}

const AnimatedListItem = ({ children, className = '', as = 'div' }: AnimatedListItemProps) => {
  const Component = as === 'li' ? (motion.li as any) : motion.div;
  
  return (
    <Component
      className={`flex items-start ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </Component>
  );
};

export default AnimatedListItem;
