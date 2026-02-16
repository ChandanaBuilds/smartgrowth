'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: 'Social Media Marketing',
      description:
        'Engage your Business with strategic social media campaigns across Facebook, Instagram, LinkedIn, and TikTok.',
      features: [
        'Content calendar planning',
        'Daily posts and stories',
        'Community engagement',
        'Social listening and analytics',
      ],
      image: '/social.jpg',
    },
    {
      title: 'WhatsApp Marketing',
      description:
        'Direct communication with clients through personalized WhatsApp campaigns and updates.',
      features: [
        'Broadcast messages',
        'Automated campaigns',
        'Student alerts',
        'Parent notifications',
      ],
      image: '/whatsapp.jpeg',
    },
    {
      title: 'Email Marketing',
      description:
        'Personalized email campaigns to nurture leads, maintain client engagement, and boost conversions.',
      features: [
        'Newsletter creation',
        'Lead nurturing sequences',
        'Event invitations',
        'Performance tracking',
      ],
      image: '/email.jpeg',
    },
    {
      title: 'Creative Design',
      description:
        'Professional graphics, videos, and visual content that brings your brand story to life.',
      features: [
        'Graphic design',
        'Video production',
        'Branding materials',
        'Social media assets',
      ],
      image: '/creative.jpeg',
    },
    {
      title: 'SEO & GMB Optimization',
      description:
        'Ensure your school appears at the top of search results when parents look for schools in your area.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Local SEO',
        'Google My Business setup',
      ],
      image: '/seo.jpeg',
    },
    {
      title: 'Growth Strategy',
      description:
        "Comprehensive digital marketing strategy tailored to your school's unique goals and challenges.",
      features: [
        'Market analysis',
        'Competitor research',
        'Strategy development',
        'Monthly reporting',
      ],
      image: '/growth.jpeg',
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
                Our Complete Service Suite
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
                Everything your business needs to thrive in the digital age
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Content */}
                  <motion.div
                    className={isEven ? 'lg:order-1' : 'lg:order-2'}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
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

                  {/* Image Visual */}
                  <motion.div
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
