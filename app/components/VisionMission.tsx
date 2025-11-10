"use client";

import { Eye, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function VisionMission() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Animated Neon Background Orb */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow"></div>

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Vision Card */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="p-8 rounded-3xl bg-[#050404]/40 border border-[#FFD700]/50 shadow-inner shadow-[#FFD700]/10 hover:shadow-[#FFD700]/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-xl flex flex-col gap-4"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/30 shadow-lg"
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
          className="p-8 rounded-3xl bg-[#050404]/40 border border-[#FFD700]/50 shadow-inner shadow-[#FFD700]/10 hover:shadow-[#FFD700]/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-xl flex flex-col gap-4"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/30 shadow-lg"
            >
              <Rocket size={36} className="text-[#FFD700]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#FFD700]">Mission</h3>
          </div>
          <p className="text-[#FFE066] text-lg leading-relaxed">
            To accelerate the adoption of electric vehicles in Djibouti by
            providing an integrated, end-to-end solution that includes
            accessible charging infrastructure, affordable EVs, a user-friendly
            digital platform, and reliable maintenance support, creating a new
            standard for urban transport.
          </p>
        </motion.div>
      </div>

      {/* Motto */}
      {/* Motto */}
    </section>
  );
}
