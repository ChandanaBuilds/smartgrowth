'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '₹12,000 – ₹15,000',
      description: 'Best for Small Businesses',
      features: [
        'Social media management (2 platforms)',
        '4 posts per week',
        'Monthly content calendar',
        'Basic performance analytics',
        'Monthly reporting',
      ],
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '₹25,000 – ₹35,000',
      description: 'Ideal for Growing Brands',
      features: [
        'Social media management (4 platforms)',
        'WhatsApp marketing campaigns',
        'Email marketing setup',
        'SEO optimization',
        'Video content creation (2 per month)',
        'Weekly reporting',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '₹55,000 – ₹75,000+',
      description: 'For Established Brands & Enterprises',
      features: [
        'All Professional features',
        'Paid advertising management',
        'Unlimited content creation',
        'Lead generation setup',
        'Real-time analytics dashboard',
        'Daily support',
      ],
      isPopular: false,
    },
  ];


  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. Upgrades apply immediately, while downgrades take effect at the end of your billing cycle.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, we offer a 5-day free trial for new clients. No credit card is required and you get access to all features of your selected plan.',
    },
    {
      question: 'Can I get a custom marketing package?',
      answer:
        'Absolutely. We offer fully customized digital marketing solutions based on your business goals and requirements.',
    },
    {
      question: 'Is there a long-term commitment?',
      answer:
        'No long-term contracts. You can cancel anytime with 30 days notice. We focus on results, not lock-ins.',
    },
    {
      question: 'What kind of support is included?',
      answer:
        'All plans include email support. Professional and Enterprise plans come with priority support and faster response times.',
    },
    {
      question: 'What does reporting include?',
      answer:
        'Reports cover engagement, reach, leads, conversions, website traffic, and ROI insights. Custom dashboards are available for Enterprise clients.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[40vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
                Choose a digital marketing plan that fits your business goals and growth stage.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {plans.map((plan, idx) => (
                <PricingCard
                  key={idx}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>

            {/* Info Box */}
            <motion.div
              className="mt-12 bg-card border border-border rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-foreground/70 mb-4">
                All plans are billed monthly.
              </p>
              <p className="text-primary font-semibold">
                Get 2 months free with annual billing!
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What's Included In Every Plan
              </h2>
              <p className="text-lg text-foreground/70">
                Core features designed to drive real business growth
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Dedicated account manager (Professional+)',
                'Monthly growth strategy reviews',
                'Performance analytics & insights',
                'Content calendar planning',
                'Custom content creation',
                'Community & engagement management',
                'Email marketing setup',
                'SEO optimization',
                'Continuous strategy optimization',
                'Brand consultation',
                'Competitor analysis',
                'Lead tracking & funnel setup',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground/80">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.05 }}
            >
              {faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-foreground flex items-center justify-between bg-card hover:bg-secondary/5 transition-colors">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {faq.question}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-primary group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </motion.svg>
                  </summary>
                  <motion.p className="px-6 py-4 text-foreground/70 bg-background border-t border-border">
                    {faq.answer}
                  </motion.p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 text-balance">
                Start your free 5-day trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border">
                    Schedule a Demo
                  </button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
