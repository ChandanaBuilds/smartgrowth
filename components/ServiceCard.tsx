'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Icon Container */}
      <motion.div
        className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>

      {/* Accent Line */}
      <motion.div
        className="w-0 h-1 bg-primary rounded-full mt-4 group-hover:w-12 transition-all duration-300"
        initial={{ width: 0 }}
      />
    </motion.div>
  );
}
