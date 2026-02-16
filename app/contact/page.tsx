'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 7981237933',
      description: 'Mon-Fri, 9 AM - 6 PM EST',
      link: 'tel:+917981237933',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'smartgrowth402@gmail.com',
      description: 'We reply within 2 hours',
      link: 'mailto:smartgrowth402@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91 7981237933',
      description: 'Quick messaging support',
      link: 'https://wa.me/917981237933',
    },
    {
      icon: MapPin,
      title: 'Office',
      info: 'Lb Nagar, Hyderabad',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@smartgrowth-x1s?si=X3zD2PO9vVox2UTK', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/smartgrowth.digitalmarketing?igsh=MXBoc3M4a2UxbDQwbQ==', label: 'Instagram' },
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
                Get In Touch
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as quickly as possible.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={method.link}
                      className="block p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/5 transition-all group h-full"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                      <p className="text-primary font-semibold text-sm mb-2">{method.info}</p>
                      <p className="text-foreground/60 text-xs">{method.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-3">Send Us a Message</h2>
              <p className="text-foreground/70">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </AnimatedSection>

            <ContactForm />
          </div>
        </section>

        {/* Business Hours & FAQ */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-8">Business Hours</h2>
              <div className="space-y-6">
                {[
                  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM ' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM ' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((schedule, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{schedule.day}</p>
                      <p className="text-foreground/70 text-sm">{schedule.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-foreground mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Quick FAQ */}
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-foreground mb-8">Quick Questions?</h2>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ staggerChildren: 0.05 }}
              >
                {[
                  {
                    q: 'How quickly will I hear back?',
                    a: 'We aim to respond to all inquiries within 24 hours, usually much faster during business hours.',
                  },
                  {
                    q: 'Can I schedule a demo?',
                    a: 'Absolutely! Choose a time that works best for you and we\'ll walk you through our services.',
                  },
                  {
                    q: 'Do you offer consultations?',
                    a: 'Yes, we offer free 30-minute strategy consultations to understand your needs.',
                  },
                  {
                    q: 'What areas do you serve?',
                    a: 'We serve schools and educational institutions nationwide. Online consultations available globally.',
                  },
                ].map((item, idx) => (
                  <motion.details
                    key={idx}
                    className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <summary className="cursor-pointer px-4 py-4 font-semibold text-foreground flex items-center justify-between bg-background hover:bg-secondary/5 transition-colors">
                      <span>{item.q}</span>
                      <motion.svg
                        className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-180 transition-transform"
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
                      </motion.svg>
                    </summary>
                    <motion.p
                      className="px-4 py-4 text-foreground/70 bg-card border-t border-border text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.a}
                    </motion.p>
                  </motion.details>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Map Section (Placeholder) */}

      </main>

      <Footer />
    </>
  );
}
