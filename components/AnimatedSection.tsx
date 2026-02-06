'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const directions = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      className={className}
      initial={directions[direction].initial}
      whileInView={directions[direction].animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
