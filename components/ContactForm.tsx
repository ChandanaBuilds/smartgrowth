'use client';

import React from "react"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200';

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 px-8 bg-card rounded-2xl border border-border"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: 1 }}
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-foreground/70">
            We've received your message and will get back to you soon. We appreciate your interest in Smart Growth!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClasses}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={inputClasses}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className={inputClasses}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your needs..."
              rows={5}
              className={inputClasses}
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}
