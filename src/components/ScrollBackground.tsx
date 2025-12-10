import { useEffect, useRef } from "react";
import { useScrollPosition } from "../hooks/use-scroll-position";

interface ScrollBackgroundProps {
  className?: string;
}

export const ScrollBackground = ({ className = "" }: ScrollBackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollProgress } = useScrollPosition();

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Color palette based on theme colors
    const colors = [
      { h: 210, s: 100, l: 40 }, // Primary blue
      { h: 200, s: 85, l: 50 },  // Secondary blue
      { h: 30, s: 95, l: 55 },   // Accent orange
      { h: 215, s: 100, l: 50 }, // Hero blue
      { h: 210, s: 100, l: 45 }, // Tech gradient start
      { h: 200, s: 90, l: 55 },  // Tech gradient end
    ];

    // Calculate which colors to blend based on scroll progress
    const progress = scrollProgress * (colors.length - 1);
    const index1 = Math.floor(progress);
    const index2 = Math.min(index1 + 1, colors.length - 1);
    const blend = progress - index1;

    const color1 = colors[index1];
    const color2 = colors[index2];

    // Interpolate between colors
    const h = color1.h + (color2.h - color1.h) * blend;
    const s = color1.s + (color2.s - color1.s) * blend;
    const l = color1.l + (color2.l - color1.l) * blend;

    // Create gradient with multiple stops for smooth color flow
    const gradientAngle = 135 + scrollProgress * 180; // Rotate gradient as you scroll
    const opacity = 0.04 + scrollProgress * 0.06; // Subtle opacity change
    
    // Animated radial gradient position
    const radialX = 50 + Math.sin(scrollProgress * Math.PI * 4) * 25;
    const radialY = 50 + Math.cos(scrollProgress * Math.PI * 4) * 25;

    backgroundRef.current.style.background = `
      radial-gradient(
        circle at ${radialX}% ${radialY}%,
        hsl(${h} ${s}% ${l}% / ${opacity}),
        hsl(${h + 15} ${Math.min(s + 5, 100)}% ${Math.min(l + 8, 100)}% / ${opacity * 0.8}),
        hsl(${h + 30} ${Math.min(s + 10, 100)}% ${Math.min(l + 15, 100)}% / ${opacity * 0.5}),
        transparent 70%
      ),
      linear-gradient(
        ${gradientAngle}deg,
        hsl(${h} ${s}% ${l}% / ${opacity * 0.6}),
        hsl(${h + 20} ${s}% ${Math.min(l + 10, 100)}% / ${opacity * 0.4}),
        hsl(${h + 40} ${s}% ${Math.min(l + 20, 100)}% / ${opacity * 0.2}),
        transparent
      )
    `;
    
    backgroundRef.current.style.transition = "background 0.5s ease-out";
  }, [scrollProgress]);

  return (
    <div
      ref={backgroundRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-all duration-300 ${className}`}
      aria-hidden="true"
    />
  );
};
