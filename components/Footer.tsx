'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
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
    { icon: Youtube, href: 'https://youtube.com/@smartgrowth-x1s?si=X3zD2PO9vVox2UTK', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/smartgrowth.digitalmarketing?igsh=MXBoc3M4a2UxbDQwbQ==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">

              <span className="font-bold text-foreground">Smart Growth</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Transforming Business through expert digital marketing
              solutions.
            </p>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wide text-foreground/60 font-semibold">
                Phone
              </p>
              <p className="text-foreground font-medium">+91 7981237933</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wide text-foreground/60 font-semibold">
                Email
              </p>
              <p className="text-foreground font-medium">smartgrowth402@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wide text-foreground/60 font-semibold">
                Location
              </p>
              <p className="text-foreground font-medium">Lb Nagar</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Smart Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
