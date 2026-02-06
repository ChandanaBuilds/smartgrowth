'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: isPopular ? -12 : -8 }}
      className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
        isPopular
          ? 'border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl'
          : 'border border-border bg-card hover:border-primary/50'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          Most Popular
        </motion.div>
      )}

      <div className="p-8 md:p-10">
        {/* Header */}
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-foreground/60 text-sm mb-6">{description}</p>

        {/* Price */}
        <motion.div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">${price}</span>
            <span className="text-foreground/60 text-sm">/month</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mb-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className={`block w-full py-3 rounded-lg font-semibold transition-colors text-center text-sm ${
              isPopular
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border'
            }`}
          >
            Get Started
          </Link>
        </motion.div>

        {/* Features */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide font-semibold text-foreground/60 mb-4">
            What's Included
          </p>
          {features.map((feature, idx) => (
            <motion.div
              key={feature}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + idx * 0.05 }}
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span className="text-foreground/80 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
