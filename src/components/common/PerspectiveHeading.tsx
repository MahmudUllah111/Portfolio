import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PerspectiveHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  delay?: number;
  triggerOnScroll?: boolean;
}

export const PerspectiveHeading: React.FC<PerspectiveHeadingProps> = ({
  text,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.perspective-word');
    if (!words.length) return;

    gsap.set(words, {
      transformPerspective: 1000,
      transformOrigin: '50% 100%',
      rotateX: -65,
      yPercent: 100,
      opacity: 0,
    });

    const animConfig = {
      rotateX: 0,
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.035,
      ease: 'power4.out',
      delay,
    };

    let trigger: ScrollTrigger | undefined;

    if (triggerOnScroll) {
      trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(words, animConfig);
        },
      });
    } else {
      gsap.to(words, animConfig);
    }

    return () => {
      if (trigger) trigger.kill();
      gsap.killTweensOf(words);
    };
  }, [prefersReduced, delay, triggerOnScroll]);

  const words = text.split(' ');

  return (
    <Tag
      ref={containerRef as any}
      className={`${className} [perspective:1000px] select-none`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden mr-[0.28em] align-top pb-[0.1em]"
        >
          <span className="perspective-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default PerspectiveHeading;
