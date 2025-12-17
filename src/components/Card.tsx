import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animations/motionVariants';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  hover?: boolean;
  titleClassName?: string;
}

const Card = ({
  title,
  icon,
  children,
  className = '',
  hover = true,
  titleClassName,
}: CardProps) => {
  return (
    <motion.div
      className={`rounded-xl shadow-lg p-6 ${hover ? 'transform transition-transform' : ''} ${className}`}
      style={{ backgroundColor: '#ffffff', position: 'relative', zIndex: 50 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      {(icon || title) && (
        <div className="mb-4">
          {icon && <div className="text-4xl mb-3">{icon}</div>}
          {title && (
            <h3 className={`text-xl font-bold ${titleClassName ?? 'text-gray-900'}`}>
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
