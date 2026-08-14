'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Social Media Marketing', href: '#' },
      { label: 'Email Marketing', href: '#' },
      { label: 'SEO & SMO', href: '#' },
      { label: 'Creative Design', href: '#' },
    ],

    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],

    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://youtube.com/@smartgrowth-x1s?si=va7pW8OjuCSU4hvD',
      label: 'YouTube',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/smartgrowth.digitalmarketing?igsh=MXBoc3M4a2UxbDQwbQ%3D%3D',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1DeZBPuFJH/',
      label: 'Facebook',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/smart-growth-288146277',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.threads.com/@smartgrowth.digitalmarketing',
      label: 'Threads',
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-[#F7F8F6]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="Smart Growth Logo"
                width={170}
                height={45}
                className="h-auto w-[150px] object-contain sm:w-[170px]"
              />
            </Link>

            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-foreground/60">
              Transforming businesses through expert digital marketing
              solutions.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {title}
              </h3>

              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* ================= CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 grid grid-cols-1 gap-4 border-t border-gray-200 py-6 sm:grid-cols-2 lg:grid-cols-3"
        >

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <Phone className="h-4 w-4 text-primary" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                Phone
              </p>

              <p className="text-sm font-medium text-foreground">
                +91 7981237933
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <Mail className="h-4 w-4 text-primary" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                Email
              </p>

              <p className="break-all text-sm font-medium text-foreground">
                smartgrowth402@gmail.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <MapPin className="h-4 w-4 text-primary" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                Location
              </p>

              <p className="text-sm font-medium text-foreground">
                LB Nagar
              </p>
            </div>
          </div>

        </motion.div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-5 sm:flex-row">

          <p className="text-xs text-foreground/50">
            © {currentYear} Smart Growth. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-foreground/50
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-white
                "
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
}