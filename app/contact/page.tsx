'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Instagram,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 7981237933',
      description: 'Speak directly with our team.',
      link: 'tel:+917981237933',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'smartgrowth402@gmail.com',
      description: 'We usually reply within 24 hours.',
      link: 'mailto:smartgrowth402@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91 7981237933',
      description: 'Quick messaging and support.',
      link: 'https://wa.me/917981237933',
    },
    {
      icon: MapPin,
      title: 'Our Office',
      info: 'LB Nagar, Hyderabad',
      description: 'Serving businesses across India.',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://youtube.com/@smartgrowth-x1s?si=X3zD2PO9vVox2UTK',
      label: 'YouTube',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/smartgrowth.digitalmarketing?igshid=MXBoc3M4a2UxbDQwbQ==',
      label: 'Instagram',
    },
  ];

  const businessHours = [
    {
      day: 'Monday - Friday',
      time: '9:00 AM - 6:00 PM',
    },
    {
      day: 'Saturday',
      time: '10:00 AM - 4:00 PM',
    },
    {
      day: 'Sunday',
      time: 'Closed',
    },
  ];

  const faqs = [
    {
      q: 'How quickly will I hear back?',
      a: 'We aim to respond to all inquiries within 24 hours, usually much faster during business hours.',
    },
    {
      q: 'Can I schedule a demo?',
      a: "Absolutely. Choose a time that works best for you and we'll walk you through our services.",
    },
    {
      q: 'Do you offer consultations?',
      a: 'Yes, we offer free 30-minute strategy consultations to understand your business needs and goals.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve businesses and educational institutions across India, with online consultations available globally.',
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
                Contact Smart Growth
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-5xl md:text-6xl lg:text-7xl">
                Let&apos;s grow
                <br className="hidden sm:block" />
                something great.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#06351D]/55 sm:text-lg">
                Have a project in mind, need help with your digital marketing,
                or simply want to understand what we can do for your business?
                Let&apos;s talk.
              </p>

            </AnimatedSection>

          </div>
        </section>


        {/* =====================================================
            CONTACT METHODS
        ===================================================== */}
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">

            <AnimatedSection className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Get In Touch
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#06351D] sm:text-4xl">
                  Choose how you&apos;d like to connect.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-[#06351D]/50 sm:text-right">
                Whether you prefer a call, email, WhatsApp, or a conversation
                through our contact form, we&apos;re here to help.
              </p>

            </AnimatedSection>


            {/* Contact List */}
            <div className="border-t border-[#06351D]/15">

              {contactMethods.map((method, idx) => {
                const Icon = method.icon;

                return (
                  <motion.a
                    key={method.title}
                    href={method.link}
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
                      delay: idx * 0.06,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex flex-col gap-4 border-b border-[#06351D]/15 py-5 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F5EA] text-primary transition-colors duration-300 group-hover:bg-[#06351D] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#06351D]/35">
                          {method.title}
                        </p>

                        <p className="mt-1 text-base font-semibold text-[#06351D] sm:text-lg">
                          {method.info}
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center justify-between gap-5 sm:justify-end">

                      <p className="text-xs text-[#06351D]/45 sm:text-sm">
                        {method.description}
                      </p>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#06351D]/10 text-[#06351D]/40 transition-all duration-300 group-hover:border-[#06351D] group-hover:bg-[#06351D] group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                      </span>

                    </div>

                  </motion.a>
                );
              })}

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT FORM
        ===================================================== */}
        <section className="bg-[#F7F5EA] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

              {/* Left Content */}
              <AnimatedSection direction="left">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Start A Conversation
                </p>

                <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-[#06351D] sm:text-4xl lg:text-5xl">
                  Tell us what
                  <br />
                  you&apos;re building.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#06351D]/55 sm:text-base">
                  Share a little about your business, your goals, and what
                  you&apos;re looking to achieve. Our team will get back to
                  you with the right next steps.
                </p>

                <div className="mt-8 border-t border-[#06351D]/15 pt-6">

                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />

                    <div>
                      <p className="text-sm font-semibold text-[#06351D]">
                        Prefer WhatsApp?
                      </p>

                      <a
                        href="https://wa.me/917981237933"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Chat with us directly
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </AnimatedSection>


              {/* Form */}
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
                className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8 lg:p-10"
              >
                <ContactForm />
              </motion.div>

            </div>

          </div>
        </section>


        {/* =====================================================
            BUSINESS HOURS + FAQ
        ===================================================== */}
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              {/* Business Hours */}
              <AnimatedSection direction="left">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Availability
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#06351D] sm:text-4xl">
                  When you can
                  <br />
                  reach us.
                </h2>

                <div className="mt-8 border-t border-[#06351D]/15">

                  {businessHours.map((schedule, idx) => (
                    <motion.div
                      key={schedule.day}
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
                        duration: 0.35,
                        delay: idx * 0.06,
                      }}
                      className="flex items-center justify-between border-b border-[#06351D]/15 py-4"
                    >

                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary" />

                        <span className="text-sm font-medium text-[#06351D]">
                          {schedule.day}
                        </span>
                      </div>

                      <span className="text-sm text-[#06351D]/50">
                        {schedule.time}
                      </span>

                    </motion.div>
                  ))}

                </div>


                {/* Social */}
                <div className="mt-8">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#06351D]/35">
                    Follow Smart Growth
                  </p>

                  <div className="flex gap-2">

                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F5EA] text-[#06351D] transition-colors hover:bg-[#06351D] hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    ))}

                  </div>

                </div>

              </AnimatedSection>


              {/* FAQ */}
              <AnimatedSection direction="right">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Quick Answers
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#06351D] sm:text-4xl">
                  Before you reach out.
                </h2>

                <div className="mt-8 border-t border-[#06351D]/15">

                  {faqs.map((item, idx) => (
                    <motion.details
                      key={item.q}
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
                        duration: 0.35,
                        delay: idx * 0.05,
                      }}
                      className="group border-b border-[#06351D]/15"
                    >

                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">

                        <div className="flex items-center gap-4">

                          <span className="text-xs font-semibold text-[#06351D]/25">
                            {String(idx + 1).padStart(2, '0')}
                          </span>

                          <span className="text-sm font-semibold text-[#06351D] sm:text-base">
                            {item.q}
                          </span>

                        </div>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#06351D]/10 text-[#06351D]/45 transition-all duration-300 group-open:rotate-45 group-open:bg-[#06351D] group-open:text-white">
                          <Plus className="h-4 w-4" />
                        </span>

                      </summary>

                      <div className="pb-5 pl-9 pr-10">

                        <p className="text-sm leading-6 text-[#06351D]/50">
                          {item.a}
                        </p>

                      </div>

                    </motion.details>
                  ))}

                </div>

              </AnimatedSection>

            </div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
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
                    Let&apos;s Work Together
                  </p>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to grow
                    <br />
                    your business?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                    Let&apos;s discuss your goals and build a digital strategy
                    that moves your business forward.
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