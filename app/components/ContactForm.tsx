"use client";

import { Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ContactForm() {
  // Type-safe variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        type: "spring" as const, // TS literal type
        stiffness: 60,
      },
    }),
  };

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Neon background blobs */}
      <div className="absolute top-[-100px] left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#FFE066] mt-4 text-lg md:text-xl"
        >
          Interested in partnering or investing? Contact Voltera Investments
          today.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Contact Info */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="flex items-center gap-4">
            <Mail size={28} className="text-[#FFD700]" />
            <div>
              <p className="font-semibold text-[#FFD700]">Email</p>
              <p className="text-[#FFE066]">contact@volterainvestments.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={28} className="text-[#FFD700]" />
            <div>
              <p className="font-semibold text-[#FFD700]">Phone</p>
              <p className="text-[#FFE066]">+253 77 123 4567</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-col gap-4 relative z-10"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border-2 border-[#FFD700] bg-[#050404]/60 text-[#FFD700] placeholder-[#FFE066] focus:outline-none focus:ring-2 focus:ring-[#FFD700] backdrop-blur-xl transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border-2 border-[#FFD700] bg-[#050404]/60 text-[#FFD700] placeholder-[#FFE066] focus:outline-none focus:ring-2 focus:ring-[#FFD700] backdrop-blur-xl transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl border-2 border-[#FFD700] bg-[#050404]/60 text-[#FFD700] placeholder-[#FFE066] focus:outline-none focus:ring-2 focus:ring-[#FFD700] backdrop-blur-xl transition"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-[#FFD700] to-[#FFE066] text-[#050404] font-bold py-4 rounded-xl hover:scale-105 transform transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
