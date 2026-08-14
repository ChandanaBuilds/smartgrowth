'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Users,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Heart,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      number: '01',
      title: 'Mission-Focused',
      description:
        'We understand the unique challenges of businesses and create digital solutions that stay focused on meaningful growth.',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Innovation',
      description:
        'We stay ahead of digital trends and continuously explore better strategies, tools, and creative approaches.',
    },
    {
      icon: Users,
      number: '03',
      title: 'Collaboration',
      description:
        'We work closely with our clients as an extension of their team, creating stronger ideas through collaboration.',
    },
    {
      icon: Award,
      number: '04',
      title: 'Excellence',
      description:
        'We care about the quality of every campaign, design, website, and strategy we deliver.',
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'Results-Driven',
      description:
        'Every strategy is built around measurable outcomes, continuous improvement, and sustainable business growth.',
    },
    {
      icon: Heart,
      number: '06',
      title: 'Passion',
      description:
        'We genuinely care about the businesses we work with and the people behind every brand we help grow.',
    },
  ];

  const achievements = [
    {
      number: '150+',
      label: 'Businesses Partnered',
    },
    {
      number: '50K+',
      label: 'Clients Reached',
    },
    {
      number: '300%',
      label: 'Average ROI',
    },
    {
      number: '98%',
      label: 'Client Retention',
    },
  ];

  const clients = [
    { image: '/clients/alpha.jpeg', name: 'Alpha' },
    { image: '/clients/eurokids.jpeg', name: 'Eurokids' },
    { image: '/clients/varahi.jpeg', name: 'Varahi' },
    { image: '/clients/aredu.jpeg', name: 'A Redu' },
    { image: '/clients/laptop.jpeg', name: 'Laptop Service' },
    { image: '/clients/grk.jpeg', name: 'GRK' },
    { image: '/clients/sr.jpeg', name: 'SR' },
    { image: '/clients/vjr.jpeg', name: 'VJR' },
    { image: '/clients/jaa.jpeg', name: 'JAASR GROUP' },
  ];

  const team = [
    {
      role: 'Co-Founder & Creative Director',
      name: 'Sani Azeem',
    },
    {
      role: 'Co-Founder & Growth Marketing Lead',
      name: 'Shaik Ghouse Baba',
    },
    {
      role: 'Website Developer',
      name: 'Chandana Tantanapally',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#F7F5EA] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">

          {/* Decorative Shape */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mx-auto max-w-5xl text-center"
            >

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                About Smart Growth
              </p>

              <h1 className="text-4xl font-bold leading-[1.03] tracking-tight text-[#06351D] sm:text-5xl md:text-6xl lg:text-7xl">
                We build digital
                <br className="hidden sm:block" />
                growth that matters.
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#06351D]/60 sm:text-lg">
                Smart Growth helps businesses build stronger digital
                identities, connect with the right audience, and turn
                digital opportunities into measurable growth.
              </p>

            </motion.div>

            {/* Hero Bottom Information */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mx-auto mt-14 grid max-w-4xl grid-cols-2 border-t border-[#06351D]/10 pt-6 sm:grid-cols-4"
            >

              <div className="border-r border-[#06351D]/10 px-4 text-center">
                <p className="text-2xl font-bold text-[#06351D] sm:text-3xl">
                  150+
                </p>
                <p className="mt-1 text-xs text-[#06351D]/50">
                  Businesses
                </p>
              </div>

              <div className="border-r-0 px-4 text-center sm:border-r sm:border-[#06351D]/10">
                <p className="text-2xl font-bold text-[#06351D] sm:text-3xl">
                  50K+
                </p>
                <p className="mt-1 text-xs text-[#06351D]/50">
                  People Reached
                </p>
              </div>

              <div className="border-r border-t border-[#06351D]/10 px-4 pt-4 text-center sm:border-t-0 sm:pt-0">
                <p className="text-2xl font-bold text-[#06351D] sm:text-3xl">
                  300%
                </p>
                <p className="mt-1 text-xs text-[#06351D]/50">
                  Average ROI
                </p>
              </div>

              <div className="border-t border-[#06351D]/10 px-4 pt-4 text-center sm:border-t-0 sm:pt-0">
                <p className="text-2xl font-bold text-[#06351D] sm:text-3xl">
                  98%
                </p>
                <p className="mt-1 text-xs text-[#06351D]/50">
                  Retention
                </p>
              </div>

            </motion.div>

          </div>
        </section>

        {/* =====================================================
            STORY SECTION
            SAME GENERAL LAYOUT
        ===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Content */}
              <AnimatedSection direction="left">

                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Our Story
                  </span>

                  <span className="h-px w-10 bg-primary/30" />
                </div>

                <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#06351D] sm:text-5xl">
                  Built with a simple
                  <br />
                  idea in mind.
                </h2>

                <div className="mt-7 space-y-4">

                  <p className="text-base leading-7 text-[#06351D]/60 sm:text-lg">
                    Smart Growth was founded with a simple mission: to help
                    businesses thrive in the digital age. We recognized that
                    businesses were struggling to effectively reach and
                    engage their audiences in an increasingly competitive
                    digital landscape.
                  </p>

                  <p className="text-base leading-7 text-[#06351D]/60 sm:text-lg">
                    What started as a small team has grown into a trusted
                    partner for businesses looking to strengthen their digital
                    presence, engage their customers, and create meaningful
                    growth opportunities.
                  </p>

                  <p className="text-base leading-7 text-[#06351D]/60 sm:text-lg">
                    Today, we combine data-driven strategy with creative
                    excellence to deliver digital experiences and marketing
                    solutions designed around real business goals.
                  </p>

                </div>

                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#06351D] transition-all duration-300 hover:gap-3 hover:text-primary"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </AnimatedSection>

              {/* Image */}
              <AnimatedSection direction="right">

                <motion.div
                  className="group relative aspect-[4/3] overflow-hidden rounded-[26px] bg-[#F7F8F6]"
                  whileHover={{
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >

                  <Image
                    src="/story.png"
                    alt="Smart Growth Story"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#06351D] backdrop-blur-sm">
                    Our Journey
                  </div>

                </motion.div>

              </AnimatedSection>

            </div>

          </div>
        </section>


        {/* =====================================================
    VALUES SECTION
===================================================== */}
        <section className="bg-[#F7F5EA] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">

            {/* Section Header */}
            <AnimatedSection className="mb-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    What Guides Us
                  </p>

                  <h2 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-4xl lg:text-3xl">
                    The principles behind everything we do.
                  </h2>
                </div>

                <span className="text-xs font-medium text-[#06351D]/40">
                  06 Principles
                </span>

              </div>
            </AnimatedSection>

            {/* Values List */}
            <div className="border-t border-[#06351D]/15">

              {values.map((value, idx) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.05,
                    }}
                    className="group border-b border-[#06351D]/15 py-5 sm:py-6"
                  >

                    <div className="flex items-start justify-between gap-5">

                      {/* Left Content */}
                      <div className="flex min-w-0 items-start gap-4 sm:gap-6">

                        {/* Number */}
                        <span className="w-6 shrink-0 pt-1 text-xs font-semibold text-[#06351D]/30">
                          {value.number}
                        </span>

                        {/* Heading + Description */}
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-[#06351D] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl lg:text-2xl">
                            {value.title}
                          </h3>

                          <p className="mt-1.5 max-w-2xl text-xs leading-5 text-[#06351D]/55 sm:text-sm sm:leading-6">
                            {value.description}
                          </p>
                        </div>

                      </div>

                      {/* Icon */}
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#06351D]/15 text-[#06351D]/40 transition-all duration-300 group-hover:border-[#06351D] group-hover:bg-[#06351D] group-hover:text-white sm:h-9 sm:w-9">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>


        {/* =====================================================
            NUMBERS / IMPACT
        ===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

              {/* Heading */}
              <AnimatedSection direction="left">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Our Impact
                </p>

                <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-5xl">
                  Growth you
                  <br />
                  can measure.
                </h2>

                <p className="mt-5 max-w-sm text-base leading-relaxed text-[#06351D]/55">
                  We believe great marketing should create measurable
                  business value, not just look good.
                </p>

              </AnimatedSection>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3">

                {achievements.map((item, idx) => (
                  <motion.div
                    key={item.label}
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
                      delay: idx * 0.1,
                    }}
                    className={`
                      flex
                      min-h-[190px]
                      flex-col
                      justify-between
                      rounded-[22px]
                      p-6
                      sm:min-h-[220px]
                      sm:p-8
                      ${idx === 0
                        ? 'bg-[#C7E3FF]'
                        : idx === 1
                          ? 'bg-[#CDB8DF]'
                          : idx === 2
                            ? 'bg-[#B9C5B3]'
                            : 'bg-[#F7F5EA]'
                      }
                    `}
                  >

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06351D]/40">
                      0{idx + 1}
                    </span>

                    <div>
                      <p className="text-4xl font-bold tracking-tight text-[#06351D] sm:text-5xl lg:text-6xl">
                        {item.number}
                      </p>

                      <p className="mt-2 max-w-[150px] text-sm font-medium leading-relaxed text-[#06351D]/60">
                        {item.label}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CLIENTS
        ===================================================== */}
        <section className="bg-[#F7F8F6] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <AnimatedSection className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Trusted By
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-[#06351D] sm:text-5xl">
                  Brands we&apos;ve worked with.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-[#06351D]/50 sm:text-right">
                From growing businesses to established brands, we partner
                with teams that want to build something meaningful.
              </p>

            </AnimatedSection>

            {/* Client Logo Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

              {clients.map((client, idx) => (
                <motion.div
                  key={client.name}
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    delay: idx * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="flex h-36 items-center justify-center rounded-[18px] bg-white p-4 transition-shadow duration-300 hover:shadow-md sm:h-40 sm:p-6"
                >

                  <Image
                    src={client.image}
                    alt={client.name}
                    width={280}
                    height={160}
                    className="h-auto w-auto max-h-30 max-w-[220px] object-contain sm:max-h-32 sm:max-w-[260px]"
                  />

                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            TEAM
        ===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">

            <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                The People
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#06351D] sm:text-5xl">
                Meet the team behind
                <br className="hidden sm:block" />
                Smart Growth.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#06351D]/55">
                A team combining creativity, technology, strategy, and
                business thinking to help brands move forward.
              </p>

            </AnimatedSection>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
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
                    delay: idx * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-[22px] bg-[#F7F5EA] p-6"
                >

                  {/* Profile */}
                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#06351D] text-xl font-bold text-white">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#06351D]">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-[#06351D]/50">
                        {member.role}
                      </p>
                    </div>

                  </div>

                  <div className="mt-6 h-px bg-[#06351D]/10" />

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#06351D]/35">
                      Smart Growth
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#06351D]/40 transition-all group-hover:bg-[#06351D] group-hover:text-white">
                      <ArrowRight className="h-3 w-3" />
                    </span>

                  </div>

                </motion.div>
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

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

                <div className="max-w-2xl">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Let&apos;s Grow Together
                  </p>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to take your
                    <br />
                    business forward?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                    Let&apos;s talk about your goals and find the right
                    digital strategy to move your business forward.
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
                    Start a Conversation

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