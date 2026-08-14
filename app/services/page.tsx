'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: 'Social Media Marketing',
      description:
        'Build a recognizable and engaging online presence with strategic social media campaigns across Facebook, Instagram, LinkedIn, and TikTok. We create consistent content and campaigns that connect your brand with the right audience and turn attention into meaningful business opportunities.',
      image: '/service/social.webp',
    },

    {
      title: 'Email Marketing',
      description:
        'Stay connected with your audience through targeted email campaigns designed to nurture relationships and drive conversions. We create relevant communication that keeps your brand in front of customers while turning prospects into long-term customers.',
      image: '/service/email.webp',
    },
    {
      title: 'Creative Design',
      description:
        'Give your brand a strong visual identity with creative designs that communicate your message clearly. From social media graphics and promotional creatives to branding materials and visual campaigns, we create designs that make your business stand out.',
      image: '/service/creative.webp',
    },
    {
      title: 'Website Development',
      description:
        'Create a modern digital experience with fast, responsive, and high-performing websites built around your business goals. From new website development and improvements to SEO integration and performance optimization, we help your website become a powerful part of your growth strategy.',
      image: '/service/web.webp',
    },
    {
      title: 'SEO & GMB Optimization',
      description:
        'Improve your visibility when potential customers search for businesses like yours. Our SEO and Google Business Profile optimization strategies focus on improving search presence, strengthening local visibility, and helping your business attract more relevant traffic and enquiries.',
      image: '/service/seo.webp',
    },
    {
      title: 'Growth Strategy',
      description:
        'Build a clear roadmap for sustainable digital growth with a strategy designed around your business, market, audience, and goals. We combine market insights, competitor research, digital channels, and performance tracking to create a focused approach that supports long-term growth.',
      image: '/service/growth.webp',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        {/* =====================================================
    HERO
===================================================== */}
        <section className="bg-[#F7F5EA] px-4 pb-14 pt-32 text-center sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-7xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto flex max-w-4xl flex-col items-center"
            >

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                What We Do
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-5xl md:text-6xl lg:text-6xl">
                Digital solutions built for meaningful growth.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#06351D]/60 sm:text-lg">
                From building your online presence to generating quality leads,
                we create digital strategies that help your business grow with
                clarity and consistency.
              </p>

            </motion.div>

            {/* Bottom Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#06351D]/10 pt-5"
            >
              <span className="text-sm font-medium text-[#06351D]/50">
                07 Services
              </span>

              <span className="h-1 w-1 rounded-full bg-[#06351D]/30" />

              <span className="text-sm font-medium text-[#06351D]/50">
                Strategy
              </span>

              <span className="h-1 w-1 rounded-full bg-[#06351D]/30" />

              <span className="text-sm font-medium text-[#06351D]/50">
                Design
              </span>

              <span className="h-1 w-1 rounded-full bg-[#06351D]/30" />

              <span className="text-sm font-medium text-[#06351D]/50">
                Development
              </span>
            </motion.div>

          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">

            <div className="space-y-16 sm:space-y-20 lg:space-y-16">

              {services.map((service, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.article
                    key={service.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-80px',
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <div
                      className={`
                        flex
                        flex-col
                        items-center
                        gap-8
                        md:flex-row
                        md:gap-12
                        lg:gap-16
                        ${isEven ? '' : 'md:flex-row-reverse'}
                      `}
                    >

                      {/* Small Image */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isEven ? -25 : 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                        className="w-full shrink-0 md:w-[38%]"
                      >
                        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-[#F7F8F6]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 38vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Number */}
                          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#06351D] shadow-sm backdrop-blur-sm">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isEven ? 25 : -25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1,
                        }}
                        className="w-full md:flex-1"
                      >

                        <div className="mb-4 flex items-center gap-3">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                            Service {String(idx + 1).padStart(2, '0')}
                          </span>

                          <span className="h-px w-8 bg-primary/30" />
                        </div>

                        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#06351D] sm:text-4xl">
                          {service.title}
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-[#06351D]/60 sm:text-lg sm:leading-8">
                          {service.description}
                        </p>

                        <Link
                          href="/contact"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#06351D] transition-all duration-300 hover:gap-3 hover:text-primary"
                        >
                          Discuss This Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                      </motion.div>

                    </div>

                    {/* Divider */}
                    {idx !== services.length - 1 && (
                      <div className="mt-16 h-px bg-gray-100 sm:mt-20 lg:mt-24" />
                    )}
                  </motion.article>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
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
              className="relative overflow-hidden rounded-[26px] bg-[#06351D] px-6 py-10 sm:px-10 sm:py-12 lg:px-12"
            >

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                    Let&apos;s Work Together
                  </p>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    Have a goal in mind?
                    <br className="hidden sm:block" />
                    Let&apos;s make it happen.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                    Tell us what you want to achieve and let&apos;s build
                    the right digital strategy for your business.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06351D] transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Start a Conversation

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06351D] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}