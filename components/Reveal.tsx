import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string; // Allow passing custom classes
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(75px)';
      case 'down': return 'translateY(-75px)';
      case 'left': return 'translateX(-75px)';
      case 'right': return 'translateX(75px)';
      default: return 'translateY(75px)';
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
