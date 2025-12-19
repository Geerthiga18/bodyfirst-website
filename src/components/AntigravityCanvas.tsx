import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'grain' | 'bubble';
  hue?: number;
  lightness?: number;
}

const AntigravityCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const area = canvas.width * canvas.height;

      // High-density tiny grains (dark)
      const grainCount = Math.floor(area / 3000);
      for (let i = 0; i < grainCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.2,
          type: 'grain',
        });
      }

      // Lower-density bubbles (shades of green)
      const bubbleCount = Math.floor(area / 25000);
      for (let i = 0; i < bubbleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 10 + 2, // Varied sizes (2px to 12px)
          opacity: Math.random() * 0.3 + 0.1, // More transparent
          type: 'bubble',
          hue: Math.random() * 60 + 85, // 85-145 (Leafy greens to Emerald)
          lightness: Math.random() * 25 + 20, // 20-45% (Darker range)
        });
      }

      particlesRef.current = particles;
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const mouseSpeed = Math.sqrt(
        Math.pow(mouse.x - mouse.prevX, 2) + Math.pow(mouse.y - mouse.prevY, 2)
      );

      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius && mouse.x > 0) {
          // Repulsion force (inverse square law)
          const force = (1 - distance / interactionRadius) * 3;
          const angle = Math.atan2(dy, dx);

          // Radial repulsion
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;

          // Swirling/vortex force (perpendicular to radial)
          const swirl = (1 - distance / interactionRadius) * 0.8;
          const tangentAngle = angle + Math.PI / 2;
          particle.vx += Math.cos(tangentAngle) * swirl * (mouseSpeed * 0.1);
          particle.vy += Math.sin(tangentAngle) * swirl * (mouseSpeed * 0.1);
        }

        // Gentle drift (global wind)
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Drift towards upper-right (like the reference)
        particle.vx += 0.015;
        particle.vy -= 0.01;

        // Apply damping (friction)
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Soft return to base position (settling back)
        const baseDistX = particle.baseX - particle.x;
        const baseDistY = particle.baseY - particle.y;
        particle.vx += baseDistX * 0.001;
        particle.vy += baseDistY * 0.001;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -50) {
          particle.x = canvas.width + 50;
          particle.baseX = particle.x;
        }
        if (particle.x > canvas.width + 50) {
          particle.x = -50;
          particle.baseX = particle.x;
        }
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.baseY = particle.y;
        }
        if (particle.y > canvas.height + 50) {
          particle.y = -50;
          particle.baseY = particle.y;
        }

        // Draw particle
        ctx.beginPath();

        if (particle.type === 'grain') {
          // Small dark grains
          ctx.fillStyle = `rgba(50, 50, 50, ${particle.opacity})`;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        } else {
          // Glass-like green bubbles
          const hue = particle.hue || 120;
          const lightness = particle.lightness || 30;

          // Bubble fill (very transparent)
          ctx.beginPath();
          ctx.fillStyle = `hsla(${hue}, 60%, ${lightness}%, 0.15)`;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Bubble stroke (outline)
          ctx.strokeStyle = `hsla(${hue}, 60%, ${lightness}%, 0.4)`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bubble highlight (reflection)
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
          ctx.arc(
            particle.x - particle.size * 0.3,
            particle.y - particle.size * 0.3,
            particle.size * 0.2,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default AntigravityCanvas;
