"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function ValuesMotto() {
  const values = [
    {
      title: "Quality of Services",
      description:
        "Delivering reliable and top-notch EV and mobility services consistently.",
    },
    {
      title: "Affordability",
      description:
        "Providing cost-effective solutions for taxi operators and urban commuters.",
    },
    {
      title: "Relevance",
      description:
        "Addressing Djibouti's urban transport needs with sustainable solutions.",
    },
    {
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology in EVs, apps, and charging infrastructure.",
    },
    {
      title: "Integrity",
      description:
        "Maintaining transparency, trust, and accountability in all operations.",
    },
  ];
  const motto = "Empowering the Youth";

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  // For tilt effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Neon Background Orbs */}
      <div className="absolute top-[-150px] left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
      >
        Our Values & Motto
      </motion.h2>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-20">
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
            }}
            className="relative p-6 border-2 border-[#FFD700]/50 rounded-3xl shadow-lg backdrop-blur-xl bg-[#050404]/50 hover:shadow-[#FFD700]/60 transition-all duration-500 cursor-pointer flex flex-col gap-3"
          >
            {/* Floating mini neon orb */}
            <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFE066] blur-md animate-pulse-fast pointer-events-none"></div>

            <p className="text-lg font-bold text-[#FFD700]">{value.title}</p>
            <p className="text-[#FFE066] text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Motto */}
      {/* Motto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative max-w-xl mx-auto p-12 border-2 border-[#FFD700] rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-[#050404]/50 backdrop-blur-xl flex flex-col justify-center items-center text-center"
      >
        {/* Neon glow background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFE066]/20 blur-2xl animate-pulse-slow pointer-events-none"></div>

        {/* Motto Text */}
        <h3 className="relative text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFE066] animate-pulse-slow">
          {motto}
        </h3>

        {/* Animated underline */}
        <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFE066] rounded-full animate-pulse-slow"></span>
      </motion.div>
    </section>
  );
}
