import { useRef, useEffect, useState } from 'react';
import type { JSX, ReactNode } from 'react';

interface HeadingScrollAnimationProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

const HeadingScrollAnimation = ({
  as = 'h2',
  className = '',
  children,
}: HeadingScrollAnimationProps) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Comp = as as any;
  return (
    <Comp
      ref={ref}
      className={`transition-all duration-[900ms] ease-out transform-gpu
        ${inView ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-[.95]'}
        ${className}`}
    >
      {children}
    </Comp>
  );
};

export default HeadingScrollAnimation;
