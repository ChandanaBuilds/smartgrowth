'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import AnimatedSection from '@/components/AnimatedSection';
import {
  ArrowRight,
  Check,
  HelpCircle,
  Plus,
} from 'lucide-react';
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
      duration: 'month',
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
      duration: 'month',
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
      duration: 'month',
    },
    {
      name: 'School Growth Package',
      price: '₹45,000',
      description: 'Special digital marketing package for schools',
      features: [
        'Valid till June',
        '15 Reels Creation',
        '8 Social Media Posts',
        '4 Meta Ads Campaigns',
        '4 Google Ads Campaigns',
        '4 Shoots for 3 Months',
        'On-site Shoots (4 Days)',
        'School Exploration & Activity Coverage',
        'Google My Business Management',
        'YouTube Channel Handling',
        'Instagram Management',
        'Facebook Management',
        'Twitter (X) Handling',
        'LinkedIn Management',
        'Creative Advertisement Strategy & Execution',
      ],
      isPopular: true,
      duration: '3 month',
    },
  ];

  const includedFeatures = [
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
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer:
        'Yes. You can upgrade or downgrade your plan at any time. Changes can be coordinated with your current billing cycle.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes. We offer a 5-day free trial for new clients. No credit card is required to get started.',
    },
    {
      question: 'Can I get a custom marketing package?',
      answer:
        'Absolutely. We can create a customized digital marketing package based on your business goals, audience, services, and budget.',
    },
    {
      question: 'Is there a long-term commitment?',
      answer:
        'No long-term contract is required. We focus on delivering results and building long-term relationships through performance.',
    },
    {
      question: 'What kind of support is included?',
      answer:
        'All plans include support for ongoing marketing activities. Professional and Enterprise plans include higher-priority communication and support.',
    },
    {
      question: 'What does reporting include?',
      answer:
        'Reports can include engagement, reach, leads, conversions, website traffic, campaign performance, and other relevant growth metrics.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#F7F5EA] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <AnimatedSection className="mx-auto max-w-4xl text-center">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Pricing
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-5xl md:text-6xl lg:text-7xl">
                Choose the right
                <br className="hidden sm:block" />
                way to grow.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#06351D]/55 sm:text-lg">
                Flexible digital marketing plans designed for different
                stages of business growth. Choose a plan or talk to us
                about a custom strategy.
              </p>

            </AnimatedSection>

            {/* Small trust line */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#06351D]/45"
            >
              <span>Flexible Plans</span>
              <span className="h-1 w-1 rounded-full bg-[#06351D]/25" />
              <span>Growth Focused</span>
              <span className="h-1 w-1 rounded-full bg-[#06351D]/25" />
              <span>No Long-Term Lock-In</span>
            </motion.div>

          </div>
        </section>

        {/* =====================================================
            PRICING
        ===================================================== */}
        {/* =====================================================
    PRICING PLANS
===================================================== */}
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">

            {/* Section Header */}
            <AnimatedSection className="mb-10">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    Our Plans
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-[#06351D] sm:text-4xl">
                    Simple pricing. Real growth.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-[#06351D]/50 sm:text-right">
                  Choose the level of marketing support that fits your current
                  business stage and scale as you grow.
                </p>

              </div>

            </AnimatedSection>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

              {plans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                  }}
                  className={`relative flex flex-col overflow-hidden rounded-[24px] border ${plan.isPopular
                      ? 'border-[#06351D] bg-[#06351D] text-white'
                      : 'border-[#06351D]/10 bg-[#F7F5EA] text-[#06351D]'
                    }`}
                >

                  {/* Popular Label */}
                  {plan.isPopular && (
                    <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#06351D]">
                      Popular
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="p-7 sm:p-8">

                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${plan.isPopular
                          ? 'text-white/40'
                          : 'text-[#06351D]/40'
                        }`}
                    >
                      {plan.duration}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-2 max-w-sm text-sm ${plan.isPopular
                          ? 'text-white/55'
                          : 'text-[#06351D]/55'
                        }`}
                    >
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-7 flex items-end gap-2">

                      <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {plan.price}
                      </span>

                      {plan.duration === 'month' && (
                        <span
                          className={`mb-1 text-xs ${plan.isPopular
                              ? 'text-white/40'
                              : 'text-[#06351D]/40'
                            }`}
                        >
                          / month
                        </span>
                      )}

                    </div>

                  </div>

                  {/* Divider */}
                  <div
                    className={`mx-7 h-px sm:mx-8 ${plan.isPopular
                        ? 'bg-white/15'
                        : 'bg-[#06351D]/10'
                      }`}
                  />

                  {/* Features */}
                  <div className="flex-1 p-7 sm:p-8">

                    <p
                      className={`mb-5 text-xs font-semibold uppercase tracking-[0.2em] ${plan.isPopular
                          ? 'text-white/40'
                          : 'text-[#06351D]/40'
                        }`}
                    >
                      What&apos;s included
                    </p>

                    <div className="space-y-3">

                      {plan.features.map((feature, featureIdx) => (
                        <motion.div
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: featureIdx * 0.03,
                          }}
                          className="flex items-start gap-3"
                        >

                          <div
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.isPopular
                                ? 'bg-white/10 text-white'
                                : 'bg-[#06351D]/8 text-primary'
                              }`}
                          >
                            <Check className="h-3 w-3" />
                          </div>

                          <p
                            className={`text-sm leading-5 ${plan.isPopular
                                ? 'text-white/70'
                                : 'text-[#06351D]/65'
                              }`}
                          >
                            {feature}
                          </p>

                        </motion.div>
                      ))}

                    </div>

                  </div>

                  {/* Bottom CTA */}
                  <div className="p-7 pt-0 sm:p-8 sm:pt-0">

                    <Link
                      href="/contact"
                      className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${plan.isPopular
                          ? 'bg-white text-[#06351D] hover:bg-primary hover:text-white'
                          : 'bg-[#06351D] text-white hover:bg-primary'
                        }`}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </div>

                </motion.div>
              ))}

            </div>

            {/* Billing Note */}
            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">

              <span className="text-sm text-[#06351D]/45">
                All plans are billed monthly.
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#06351D]/25 sm:block" />

              <span className="text-sm font-semibold text-primary">
                Get 2 months free with annual billing.
              </span>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHAT'S INCLUDED
        ===================================================== */}
        <section className="bg-[#F7F5EA] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

              {/* Heading */}
              <AnimatedSection direction="left">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Included
                </p>

                <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-4xl lg:text-5xl">
                  More than just
                  <br />
                  marketing.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#06351D]/55 sm:text-base">
                  Every Smart Growth engagement is built around strategy,
                  creative execution, measurement, and continuous improvement.
                </p>

              </AnimatedSection>

              {/* Features */}
              <div className="border-t border-[#06351D]/15">

                {includedFeatures.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                    }}
                    className="flex items-center gap-4 border-b border-[#06351D]/15 py-4"
                  >

                    <span className="w-6 shrink-0 text-xs font-semibold text-[#06351D]/30">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>

                    <p className="text-sm font-medium text-[#06351D] sm:text-base">
                      {feature}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">

            <AnimatedSection className="mb-10 text-center">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                FAQ
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#06351D] sm:text-4xl lg:text-5xl">
                Questions, answered.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#06351D]/50 sm:text-base">
                Everything you need to know before getting started with
                Smart Growth.
              </p>

            </AnimatedSection>

            <div className="border-t border-[#06351D]/15">

              {faqs.map((faq, idx) => (
                <motion.details
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.04,
                  }}
                  className="group border-b border-[#06351D]/15"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">

                    <div className="flex items-center gap-4">

                      <span className="text-xs font-semibold text-[#06351D]/30">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <span className="text-base font-semibold text-[#06351D] sm:text-lg">
                        {faq.question}
                      </span>

                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#06351D]/15 text-[#06351D]/50 transition-all duration-300 group-open:rotate-45 group-open:bg-[#06351D] group-open:text-white">
                      <Plus className="h-4 w-4" />
                    </span>

                  </summary>

                  <div className="pb-5 pl-9 pr-10 sm:pb-6">

                    <div className="flex gap-3">

                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                      <p className="max-w-2xl text-sm leading-6 text-[#06351D]/55 sm:text-base">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </motion.details>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative overflow-hidden rounded-[28px] bg-[#06351D] px-6 py-12 sm:px-10 lg:px-14 lg:py-14"
            >

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

                <div className="max-w-2xl">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Let&apos;s Talk
                  </p>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Not sure which plan
                    <br />
                    is right for you?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                    Tell us about your business and goals. We&apos;ll help
                    you find the right approach or create a custom package.
                  </p>

                </div>

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06351D] transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    Talk to Our Team

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06351D] text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>

              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}