'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = '917981237933';

    return (
        <div className="fixed bottom-5 right-5 z-[100]">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 flex flex-col gap-3"
                    >

                        {/* WhatsApp */}
                        <motion.a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </motion.a>

                        {/* Call */}
                        <motion.a
                            href="tel:+917981237933"
                            aria-label="Call Smart Growth"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                        >
                            <Phone className="h-5 w-5" />
                        </motion.a>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact Smart Growth"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#06351D] text-white shadow-xl"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <MessageCircle className="h-6 w-6" />
                    )}
                </motion.div>
            </motion.button>

        </div>
    );
}