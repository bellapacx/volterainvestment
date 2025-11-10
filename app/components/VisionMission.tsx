"use client";

import { Eye, Rocket, Zap, Truck, Smartphone } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Staggered card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      type: "spring" as const,
      stiffness: 60,
    },
  }),
};

// Floating icon animation
const floatVariants: Variants = {
  float: {
    y: [0, -15, 0],
    x: [0, 10, -10, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export default function VisionMission() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Animated Neon Background Orbs */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow"></div>

      {/* Floating Tech Icons */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-1/4 left-1/5 text-[#FFD700]/60"
      >
        <Truck size={40} />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-1/4 right-1/4 text-[#FFE066]/60"
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute bottom-1/10 left-1/2 text-[#FFD700]/50"
      >
        <Smartphone size={40} />
      </motion.div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
      >
        Vision & Mission
      </motion.h2>

      {/* Cards Grid */}
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
        {/* Vision Card */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-[#111111]/40 to-[#222222]/40 border border-[#FFD700]/40 backdrop-blur-xl shadow-lg shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col gap-4 overflow-hidden"
        >
          {/* Floating Accent */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-5 -left-5 w-4 h-4 rounded-full bg-[#FFD700]/50 blur-md"
          />

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/60 to-[#FFE066]/40 shadow-lg"
            >
              <Eye size={36} className="text-[#FFD700]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#FFD700]">Vision</h3>
          </div>
          <p className="text-[#FFE066] text-lg leading-relaxed">
            To be the undisputed leader in Djibouti's green transportation
            system, fostering a sustainable, technologically advanced, and
            economically viable mobility ecosystem.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-[#111111]/40 to-[#222222]/40 border border-[#FFD700]/40 backdrop-blur-xl shadow-lg shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col gap-4 overflow-hidden"
        >
          {/* Floating Accent */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-[#FFE066]/50 blur-md"
          />

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ scale: 1.3, rotate: -10 }}
              className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/60 to-[#FFE066]/40 shadow-lg"
            >
              <Rocket size={36} className="text-[#FFD700]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#FFD700]">Mission</h3>
          </div>
          <p className="text-[#FFE066] text-lg leading-relaxed">
            To accelerate the adoption of electric vehicles in Djibouti by
            providing an integrated, end-to-end solution that includes
            accessible charging infrastructure, affordable EVs, a user-friendly
            digital platform, and reliable maintenance support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
