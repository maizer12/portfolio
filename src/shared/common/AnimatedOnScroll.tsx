'use client';
import { ReactNode, useEffect, ElementType } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedOnScrollProps {
  children: ReactNode;
  animation?: 'top' | 'left' | 'right';
  tag?: ElementType;
  className?: string;
  speed?: number;
}

const AnimatedOnScroll = ({ children, animation = 'top', tag = 'div', className, speed }: AnimatedOnScrollProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: speed ? speed : 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const getVariants = (): Variants => {
    switch (animation) {
      case 'left':
        return {
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        };
      case 'right':
        return {
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        };
      case 'top':
      default:
        return {
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        };
    }
  };

  const variants = getVariants();
  //@ts-ignore
  const MotionTag = motion[tag as keyof JSX.IntrinsicElements];

  return (
    <MotionTag
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedOnScroll;
