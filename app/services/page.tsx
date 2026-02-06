'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Share2,
  MessageSquare,
  Mail,
  Palette,
  Search,
  TrendingUp,
  ArrowRight,
  Check,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Engage your Business with strategic social media campaigns across Facebook, Instagram, LinkedIn, and TikTok.',
      features: [
        'Content calendar planning',
        'Daily posts and stories',
        'Community engagement',
        'Social listening and analytics',
      ],
      image: '📱',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Marketing',
      description:
        'Direct communication with clients through personalized WhatsApp campaigns and updates.',
      features: [
        'Broadcast messages',
        'Automated campaigns',
        'Student alerts',
        'Parent notifications',
      ],
      image: '💬',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Personalized email campaigns to nurture leads, maintain client engagement, and boost conversions.',
      features: [
        'Newsletter creation',
        'Lead nurturing sequences',
        'Event invitations',
        'Performance tracking',
      ],
      image: '📧',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description:
        'Professional graphics, videos, and visual content that brings your brand story to life.',
      features: [
        'Graphic design',
        'Video production',
        'Branding materials',
        'Social media assets',
      ],
      image: '🎨',
    },
    {
      icon: Search,
      title: 'SEO & GMB Optimization',
      description:
        'Ensure your school appears at the top of search results when parents look for schools in your area.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Local SEO',
        'Google My Business setup',
      ],
      image: '🔍',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description:
        'Comprehensive digital marketing strategy tailored to your school\'s unique goals and challenges.',
      features: [
        'Market analysis',
        'Competitor research',
        'Strategy development',
        'Monthly reporting',
      ],
      image: '📈',
    },
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
                Our Complete Service Suite
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
                Everything your business needs to thrive in the digital age
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Content */}
                  <motion.div
                    className={isEven ? 'lg:order-1' : 'lg:order-2'}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>

                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>

                  {/* Visual */}
                  <motion.div
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="relative h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden"
                      whileHover={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
                        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
                      />
                      <motion.div
                        className="text-7xl relative z-10"
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {service.image}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Working Process
              </h2>
              <p className="text-lg text-foreground/70">
                A proven approach to deliver results
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your goals and challenges' },
                { step: '02', title: 'Strategy', desc: 'Develop a tailored marketing plan' },
                { step: '03', title: 'Execute', desc: 'Implement campaigns across channels' },
                { step: '04', title: 'Optimize', desc: 'Track and improve for best results' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-background rounded-lg p-6 text-center h-full border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>

                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 text-balance">
                Let&apos;s discuss which services are right for your school
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Schedule a Consultation
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
