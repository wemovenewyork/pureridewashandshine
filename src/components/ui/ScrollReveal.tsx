"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

type Animation = "fadeUp" | "fadeDown" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const hidden: Record<Animation, CSSProperties> = {
  fadeUp:    { opacity: 0, transform: "translateY(40px)" },
  fadeDown:  { opacity: 0, transform: "translateY(-24px)" },
  fadeIn:    { opacity: 0 },
  slideLeft: { opacity: 0, transform: "translateX(-48px)" },
  slideRight:{ opacity: 0, transform: "translateX(48px)" },
  scaleIn:   { opacity: 0, transform: "scale(0.92)" },
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? {
              opacity: 1,
              transform: "none",
              transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
            }
          : {
              ...hidden[animation],
              transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
              willChange: "opacity, transform",
            }
      }
    >
      {children}
    </div>
  );
}
