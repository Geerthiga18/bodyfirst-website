import type { ReactNode } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string; // Additional classes
  hover?: boolean; // Whether to enable hover effects
  titleClassName?: string;
  delay?: number; // Animation delay
}

const Card = ({
  title,
  icon,
  children,
  className = '',
  hover = true,
  titleClassName,
  delay = 0,
}: CardProps) => {
  // Combine the 'card' class (defined in globals.css) with custom classes.
  // The 'card' class provides the bg-white, shadow, and basic rounded styling.
  // We add 'hover:...' classes dynamically if hover is true.

  const hoverClasses = hover
    ? 'hover:-translate-y-2 hover:shadow-2xl'
    : '';

  return (
    <ScrollAnimation
      variant="fade-up"
      delay={delay}
      className={`card p-6 ${hoverClasses} ${className}`}
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
    </ScrollAnimation>
  );
};

export default Card;
