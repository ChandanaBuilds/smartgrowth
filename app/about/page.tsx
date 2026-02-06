'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, Target, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Focused',
      description: 'We understand the unique challenges of businesses and tailor solutions accordingly.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and leverage the latest digital marketing strategies and tools.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Your success is our success. We work closely as an extension of your marketing team.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality results and take pride in exceeding expectations.',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Every campaign is measured, analyzed, and optimized for maximum ROI.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We genuinely care about helping businesses grow and succeed.',
    },
  ];

  const achievements = [
    { number: '150+', label: 'Businesses Partnered', icon: '🏢' },
    { number: '50K+', label: 'Clients Reached', icon: '👥' },
    { number: '300%', label: 'Average ROI', icon: '📈' },
    { number: '98%', label: 'Client Retention', icon: '⭐' },
  ];

  const team = [
    { role: 'Strategy Director', name: 'charan' },
    { role: 'Creative Lead', name: 'Ghouse' },
    { role: 'Social Media Manager', name: 'Ghouse' },
    { role: 'SEO Specialist', name: 'Ghouse' },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[60vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                About Smart Growth
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
                Empowering businesses through expert digital marketing and innovative growth strategies
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                  Smart Growth was founded with a simple mission: to help businesses thrive in the digital age. We recognized that small and medium-sized businesses were struggling to effectively reach and engage parents and students in an increasingly competitive landscape.
                </p>
                <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                  What started as a small team has grown into a trusted partner for over 150 businesses. We've helped thousands of businesses increase enrollment, engage parents, and build thriving online communities.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Today, we combine data-driven strategy with creative excellence to deliver transformative results for our partners.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
                  />
                  <motion.div
                    className="text-7xl relative z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-foreground/70">
                Guiding principles that define who we are and how we work
              </p>
            </AnimatedSection>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">By The Numbers</h2>
              <p className="text-lg text-foreground/70">
                Proven track record of success
              </p>
            </AnimatedSection>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                  >
                    {item.number}
                  </motion.h3>
                  <p className="text-foreground/70 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-foreground/70">
                Passionate professionals dedicated to your success
              </p>
            </AnimatedSection>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20 flex items-center justify-center text-5xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name.charAt(0)}
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-foreground/70 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Join 150+ Schools Growing With Us
              </h2>
              <p className="text-lg text-foreground/70 mb-8 text-balance">
                Let&apos;s build something amazing together
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Schedule a Chat
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
