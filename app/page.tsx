'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

import {
  Share2,
  MessageSquare,
  Palette,
  Search,
  TrendingUp,
  ArrowRight,
  CodeIcon,
} from 'lucide-react';

const AnimatedSection = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const servicesSliderRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      image: '/service/social.webp',
      title: 'Social Media Marketing',
      description:
        'Build a strong online presence with targeted social media campaigns that attract, engage, and convert audiences.',
    },

    {
      image: '/service/email.webp',
      title: 'Email Marketing',
      description:
        'Convert leads into loyal customers with strategic, data-driven email marketing campaigns.',
    },
    {
      image: '/service/creative.webp',
      title: 'Creative Design',
      description:
        'High-impact designs including social media creatives, ads, banners, and complete brand visuals.',
    },
    {
      image: '/service/web.webp',
      title: 'Web Development',
      description:
        'Complete website development and optimization services to build fast, modern, and high-performing websites.',
    },
    {
      image: '/service/seo.webp',
      title: 'SEO & SMO',
      description:
        'Improve search rankings and online visibility with optimized SEO and social media strategies.',
    },
    {
      image: '/service/growth.webp',
      title: 'Growth Strategy',
      description:
        'Custom digital growth strategies focused on lead generation, conversions, and long-term success.',
    },
  ];

  const scrollServices = (direction: 'left' | 'right') => {
    if (!servicesSliderRef.current) return;

    servicesSliderRef.current.scrollBy({
      left: direction === 'left' ? -370 : 370,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative min-h-[100svh] w-full overflow-hidden">

          {/* Hero Image */}
          <picture className="absolute inset-0 h-full w-full">
            {/* Mobile 9:16 image */}
            <source
              media="(max-width: 767px)"
              srcSet="/hero/hero.jpg"
            />

            {/* Desktop 16:9 image */}
            <Image
              src="/hero/hero.jpg"
              alt="Smart Growth Digital Marketing"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </picture>

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex max-w-5xl flex-col items-center"
            >

              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="mb-4 text-md font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm"
              >
                Smart Growth
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:whitespace-nowrap md:text-5xl lg:text-5xl"
              >
                Transform Your Brand&apos;s Digital Growth
              </motion.h1>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="mt-7"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 sm:px-8 sm:py-3.5"
                  >
                    Get Started Today
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium tracking-wide text-white/80"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span>Scroll to explore</span>

            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>

        </section>

        {/* =====================================================
            STATS SECTION
        ===================================================== */}
        <section className="bg-[#F7F5EA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.75fr_1fr_1fr_1fr] lg:items-end lg:gap-4 xl:gap-5">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start lg:pb-16"
              >
                <h2 className="text-center text-3xl font-bold uppercase leading-[1] tracking-tight text-[#06351D] sm:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
                  Our
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>
                  Growth
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>
                  Impact
                </h2>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:contents">

                {/* Clients */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
            flex
            min-h-[100px]
            items-center
            justify-between
            rounded-[16px]
            bg-[#C7E3FF]
            px-5
            py-4
            text-left
            sm:min-h-[130px]
            sm:flex-col
            sm:items-start
            sm:justify-between
            sm:p-5
            lg:h-[270px]
            lg:rounded-t-[18px]
            lg:p-7
            lg:text-center
            xl:h-[300px]
          "
                >
                  <p className="text-4xl font-medium tracking-tight text-[#06351D] sm:text-5xl lg:text-6xl xl:text-7xl">
                    25+
                  </p>

                  <p className="max-w-[190px] text-right text-xs font-medium leading-relaxed text-[#06351D] sm:text-left sm:text-sm lg:mx-auto lg:text-center lg:text-base">
                    Clients growing their businesses with Smart Growth
                  </p>
                </motion.div>

                {/* Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="
            flex
            min-h-[100px]
            items-center
            justify-between
            rounded-[16px]
            bg-[#CDB8DF]
            px-5
            py-4
            text-left
            sm:min-h-[130px]
            sm:flex-col
            sm:items-start
            sm:justify-between
            sm:p-5
            lg:h-[340px]
            lg:rounded-t-[18px]
            lg:p-7
            lg:text-center
            xl:h-[390px]
          "
                >
                  <p className="text-4xl font-medium tracking-tight text-[#06351D] sm:text-5xl lg:text-6xl xl:text-7xl">
                    5+
                  </p>

                  <p className="max-w-[190px] text-right text-xs font-medium leading-relaxed text-[#06351D] sm:text-left sm:text-sm lg:mx-auto lg:text-center lg:text-base">
                    Years of experience in digital marketing and growth
                  </p>
                </motion.div>

                {/* Leads */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="
            flex
            min-h-[100px]
            items-center
            justify-between
            rounded-[16px]
            bg-[#B9C5B3]
            px-5
            py-4
            text-left
            sm:min-h-[130px]
            sm:flex-col
            sm:items-start
            sm:justify-between
            sm:p-5
            lg:h-[410px]
            lg:rounded-t-[18px]
            lg:p-7
            lg:text-center
            xl:h-[480px]
          "
                >
                  <p className="text-4xl font-medium tracking-tight text-[#06351D] sm:text-5xl lg:text-6xl xl:text-7xl">
                    500+
                  </p>

                  <p className="max-w-[190px] text-right text-xs font-medium leading-relaxed text-[#06351D] sm:text-left sm:text-sm lg:mx-auto lg:text-center lg:text-base">
                    Quality leads generated for our clients
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
    SERVICES SECTION
===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="mb-10 text-center">

              <p className="mb-3 text-xl font-semibold uppercase tracking-[0.25em] text-primary">
                What We Do
              </p>

              <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Our Services
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
                Comprehensive digital marketing solutions designed to help
                businesses scale faster.
              </p>

            </div>

            {/* Services Slider */}
            <div className="relative">

              {/* Left Arrow */}
              <button
                type="button"
                aria-label="Previous services"
                onClick={() => scrollServices('left')}
                className="
          absolute
          left-0
          top-1/2
          z-20
          hidden
          h-11
          w-11
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-foreground
          shadow-md
          transition-all
          duration-300
          hover:bg-primary
          hover:text-white
          hover:shadow-lg
          md:flex
        "
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                aria-label="Next services"
                onClick={() => scrollServices('right')}
                className="
          absolute
          right-0
          top-1/2
          z-20
          hidden
          h-11
          w-11
          translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-foreground
          shadow-md
          transition-all
          duration-300
          hover:bg-primary
          hover:text-white
          hover:shadow-lg
          md:flex
        "
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Horizontal Cards */}
              <div
                ref={servicesSliderRef}
                className="
          flex
          gap-5
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-4
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
              >

                {services.map((service, idx) => (
                  <motion.div
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
                    }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                    }}
                    className="
              group
              flex
              h-[380px]
              w-[290px]
              min-w-[290px]
              shrink-0
              snap-start
              flex-col
              overflow-hidden
              rounded-[22px]
              border
              border-gray-200
              bg-[#F8F9F7]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:w-[320px]
              sm:min-w-[320px]
              lg:w-[340px]
              lg:min-w-[340px]
            "
                  >

                    {/* Service Image */}
                    <div className="relative h-[175px] w-full overflow-hidden">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="340px"
                        className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      {/* Number */}
                      <span className="
                absolute
                left-5
                top-5
                rounded-full
                bg-white/90
                px-3
                py-1
                text-xs
                font-semibold
                tracking-wider
                text-foreground
                backdrop-blur-sm
              ">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">

                      <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/60">
                        {service.description}
                      </p>

                      {/* Bottom */}
                      <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">

                        <span className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-foreground/40
                ">
                          Learn More
                        </span>

                        <div className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-foreground
                  text-white
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                ">
                          <ArrowRight className="h-4 w-4" />
                        </div>

                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>
            </div>

            {/* Explore All Services */}
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-primary
          px-7
          py-3
          text-sm
          font-semibold
          text-primary-foreground
          transition-all
          duration-300
          hover:bg-primary/90
          hover:gap-3
        "
              >
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* =====================================================
    OUR WORK — WEB DEVELOPMENT
===================================================== */}
        <section className="bg-[#F7F5EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <AnimatedSection className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Our Work
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-[#06351D] sm:text-5xl">
                  Websites we&apos;ve built.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-[#06351D]/50 sm:text-right">
                Modern, responsive websites designed to give businesses a stronger
                digital presence and a better experience for their customers.
              </p>

            </AnimatedSection>

            {/* Projects */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

              {/* Laptopzon */}
              <motion.a
                href="https://www.laptopservicestore.com/"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
                whileHover={{
                  y: -6,
                }}
                className="group block overflow-hidden rounded-[22px] bg-[#F7F8F6] transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Website Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEFEA]">

                  <Image
                    src="/websites/laptop.png"
                    alt="Laptopzon website"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#06351D]/0 transition-all duration-300 group-hover:bg-[#06351D]/45">

                    <span className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-[#06351D] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 -rotate-45" />
                    </span>

                  </div>

                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between px-5 py-5">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Web Development
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#06351D]">
                      Laptopzone
                    </h3>
                  </div>

                  <span className="text-xs font-medium text-[#06351D]/40">
                    Visit Website
                  </span>

                </div>

              </motion.a>


              {/* GRK Prime Realty */}
              <motion.a
                href="https://vercel.com/chandanas-projects-1f2eb8e7/grkprimerealty"
                target="_blank"
                rel="noopener noreferrer"
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
                  delay: 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group block overflow-hidden rounded-[22px] bg-[#F7F8F6] transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Website Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEFEA]">

                  <Image
                    src="/websites/grk.png"
                    alt="GRK Prime Realty website"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[#06351D]/0 transition-all duration-300 group-hover:bg-[#06351D]/45">

                    <span className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-[#06351D] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 -rotate-45" />
                    </span>

                  </div>

                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between px-5 py-5">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Web Development
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#06351D]">
                      GRK Prime Realty
                    </h3>
                  </div>

                  <span className="text-xs font-medium text-[#06351D]/40">
                    Visit Website
                  </span>

                </div>

              </motion.a>


              {/* ARA Edu Hub */}
              <motion.a
                href="https://araeduhub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
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
                  delay: 0.2,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group block overflow-hidden rounded-[22px] bg-[#F7F8F6] transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Website Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEFEA]">

                  <Image
                    src="/websites/ara.png"
                    alt="ARA Edu Hub website"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[#06351D]/0 transition-all duration-300 group-hover:bg-[#06351D]/45">

                    <span className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-[#06351D] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 -rotate-45" />
                    </span>

                  </div>

                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between px-5 py-5">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Web Development
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#06351D]">
                      ARA Edu Hub
                    </h3>
                  </div>

                  <span className="text-xs font-medium text-[#06351D]/40">
                    Visit Website
                  </span>

                </div>

              </motion.a>

            </div>

          </div>
        </section>


        {/* =====================================================
    FAQ SECTION
===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-6xl">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xl font-semibold uppercase tracking-[0.25em] text-primary">
                FAQs
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#06351D] sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#06351D]/60 sm:text-lg">
                Everything you need to know about our digital marketing services
                and how we can help your business grow.
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="mx-auto max-w-4xl space-y-3">

              {/* FAQ 1 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    What digital marketing services do you provide?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    We provide social media marketing, WhatsApp marketing, email
                    marketing, creative design, web development, SEO, SMO, and
                    customized digital growth strategies.
                  </p>
                </div>
              </motion.details>

              {/* FAQ 2 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    How can digital marketing help my business?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    Digital marketing can help increase your online visibility,
                    attract the right audience, generate quality leads, improve
                    customer engagement, and create consistent opportunities for
                    business growth.
                  </p>
                </div>
              </motion.details>

              {/* FAQ 3 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    How long does it take to see results?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    Results depend on your industry, goals, competition, and the
                    services being used. Some campaigns can generate early results,
                    while SEO and long-term growth strategies generally require
                    consistent effort over time.
                  </p>
                </div>
              </motion.details>

              {/* FAQ 4 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    Do you create content for social media?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    Yes. Our creative services can include social media creatives,
                    promotional designs, campaign visuals, and other digital content
                    based on your business requirements.
                  </p>
                </div>
              </motion.details>

              {/* FAQ 5 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    Can you manage our social media accounts?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    Yes. Depending on your selected service, we can help with
                    content planning, creative development, posting, campaign
                    management, audience engagement, and performance tracking.
                  </p>
                </div>
              </motion.details>

              {/* FAQ 6 */}
              <motion.details
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="group rounded-2xl bg-white px-5 py-1 shadow-sm sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-[#06351D] [&::-webkit-details-marker]:hidden">
                  <span className="text-base sm:text-lg">
                    Do you offer customized marketing packages?
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-gray-100 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#06351D]/60 sm:text-base">
                    Yes. We can create a marketing approach around your business
                    goals, target audience, industry, budget, and growth objectives.
                  </p>
                </div>
              </motion.details>

            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 text-center"
            >
              <p className="mb-4 text-sm text-[#06351D]/60">
                Still have questions?
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary hover:gap-3"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

          </div>
        </section>

        {/* =====================================================
    CTA SECTION
===================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">

            <motion.div
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
              }}
              transition={{
                duration: 0.7,
              }}
              className="
        relative
        overflow-hidden
        rounded-[28px]
        bg-[#06351D]
        px-6
        py-10
        sm:px-10
        sm:py-12
        lg:px-14
        lg:py-14
      "
            >

              {/* Decorative Elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

                {/* Left Content */}
                <div className="max-w-2xl">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                    Let&apos;s Grow Together
                  </p>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to take your
                    <br className="hidden sm:block" />
                    business to the next level?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                    Turn your digital presence into a growth engine with
                    strategies built around your business goals.
                  </p>

                </div>

                {/* Right CTA */}
                <div className="shrink-0">

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
                      className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                text-[#06351D]
                shadow-lg
                transition-all
                duration-300
                hover:bg-primary
                hover:text-white
                sm:px-8
              "
                    >
                      Start Growing

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06351D] text-white transition-colors duration-300 group-hover:bg-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>

                </div>

              </div>

            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}