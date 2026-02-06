'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import {
  Share2,
  MessageSquare,
  Mail,
  Palette,
  Search,
  TrendingUp,
  ArrowRight,
  Play,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Build a strong online presence with targeted social media campaigns that attract, engage, and convert audiences.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Marketing',
      description:
        'Connect directly with customers using personalized WhatsApp campaigns for promotions, updates, and support.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Convert leads into loyal customers with strategic, data-driven email marketing campaigns.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description:
        'High-impact designs including social media creatives, ads, banners, and complete brand visuals.',
    },
    {
      icon: Search,
      title: 'SEO & SMO',
      description:
        'Improve search rankings and online visibility with optimized SEO and social media strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description:
        'Custom digital growth strategies focused on lead generation, conversions, and long-term success.',
    },
  ];

  const stats = [
    { label: 'Businesses Served', value: '150+' },
    { label: 'Leads Generated', value: '50K+' },
    { label: 'Years of Experience', value: '5+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-background via-background to-secondary/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transform Your Brand’s Digital Growth
              </motion.h1>

              <motion.p
                className="text-lg text-foreground/70 mb-8 leading-relaxed text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Result-driven digital marketing services designed to help businesses grow online.
                Increase visibility, generate quality leads, and scale your brand with Smart Growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="mt-12 flex items-center gap-2 text-foreground/60 text-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Scroll to explore</span>
                <motion.svg
                  className="w-5 h-5"
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
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="hidden lg:flex justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden"
                whileHover={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
                />
                <motion.div
                  className="text-center relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                  <p className="text-foreground/60 font-semibold">
                    Your Business Growth Starts Here
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {stats.map((stat, idx) => (
                <motion.div key={idx} className="text-center">
                  <motion.p
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Our Services
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Comprehensive digital marketing solutions designed to help businesses scale faster.
              </p>
            </AnimatedSection>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>

            <AnimatedSection className="text-center mt-16">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 text-balance">
                Partner with Smart Growth and take your digital presence to the next level with proven
                marketing strategies.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
