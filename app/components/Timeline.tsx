"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Calendar } from "lucide-react";
import { JSX } from "react";

interface Milestone {
  phase: string;
  year: string;
  tasks: string[];
  icon?: JSX.Element;
}

const milestones: Milestone[] = [
  {
    phase: "Phase 1: Foundation & Launch",
    year: "2026",
    icon: <Zap size={28} className="text-[#050404]" />,
    tasks: [
      "Company registration & team hiring",
      "Secure land leases for first 5 charging stations",
      "Develop and launch MVP of digital app",
      "Finalize agreements with BYD and banks",
      "Import and sell 20 EVs",
      "Establish central workshop",
      "Launch first 5 Solar Charging Stations",
    ],
  },
  {
    phase: "Phase 2: Scaling & Growth",
    year: "2027",
    icon: <Calendar size={28} className="text-[#050404]" />,
    tasks: [
      "Secure and deploy second-year investment",
      "Launch next 5 charging stations",
      "Import and sell 50 EVs",
      "Grow user base on the digital platform",
      "Implement advanced features in the app",
    ],
  },
  {
    phase: "Phase 3: Market Consolidation",
    year: "2028",
    icon: <Zap size={28} className="text-[#050404]" />,
    tasks: [
      "Secure and deploy third-year investment",
      "Launch final 5 charging stations (total 15)",
      "Import and sell 100 EVs",
      "Achieve break-even point by end of year",
      "Explore B2B fleet partnerships",
    ],
  },
  {
    phase: "Phase 4: Self-Sufficiency & Profitability",
    year: "2029",
    icon: <Calendar size={28} className="text-[#050404]" />,
    tasks: [
      "Fund operations and growth from internal cash flow",
      "Import and sell 130 EVs",
      "Initiate shareholder dividend payments",
      "Re-invest profits for further innovation and expansion",
    ],
  },
];

export default function Timeline() {
  const itemVariants: Variants = {
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

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute top-[-120px] left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-clip-text text-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
      >
        4-Year Implementation Plan
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Central Line */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFD700]/50 to-[#FFE066]/50"></div>

        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="relative md:w-1/4 flex flex-col items-start md:items-center"
          >
            {/* Neon marker */}
            <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFE066] shadow-lg animate-pulse-slow mb-6">
              {m.icon}
            </div>

            {/* Phase Card */}
            <div className="bg-[#050404]/60 border border-[#FFD700]/50 backdrop-blur-xl p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-2 text-center">
                {m.phase}
              </h3>
              <span className="block text-[#FFE066] font-semibold mb-3 text-center">
                {m.year}
              </span>
              <ul className="text-[#FFE066] list-disc list-inside space-y-1 text-left md:text-center">
                {m.tasks.map((task, tIdx) => (
                  <li key={tIdx}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
