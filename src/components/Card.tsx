import type { ReactNode } from 'react';

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
    <div className={`card p-6 ${hover ? 'hover:scale-105 transform transition-transform' : ''} ${className}`}>
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
    </div>
  );
};

export default Card;
