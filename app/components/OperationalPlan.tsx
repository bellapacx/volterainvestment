"use client";

import { motion } from "framer-motion";
import { Truck, ServerIcon, Zap, Home, Users } from "lucide-react";

const dailyOperations = [
  {
    icon: <Zap size={32} />,
    title: "Charging Stations",
    description:
      "24/7 operation of fast-chargers. Solar Cafés operate from 6 AM to 10 PM.",
  },
  {
    icon: <Home size={32} />,
    title: "EV Sales",
    description: "Showroom operations and field sales to taxi unions.",
  },
  {
    icon: <Users size={32} />,
    title: "Digital Platform",
    description:
      "Continuous monitoring for uptime, ride/dispatch matching, and customer support.",
  },
  {
    icon: <ServerIcon size={32} />,
    title: "Maintenance Workshop",
    description:
      "Scheduled servicing, warranty repairs, and spare parts sales during business hours.",
  },
];

const keyPartnerships = [
  {
    icon: <Truck size={32} />,
    title: "Vehicle Supplier",
    description: "BYD for a steady supply of EVs and technical training.",
  },
  {
    icon: <Users size={32} />,
    title: "Financial Institutions",
    description:
      "Local banks for consumer vehicle financing (70% loan-to-value).",
  },
  {
    icon: <Home size={32} />,
    title: "Landlords & Government",
    description: "For securing strategic locations for charging stations.",
  },
  {
    icon: <Zap size={32} />,
    title: "Solar EPC Contractor",
    description:
      "For the design and installation of solar canopies and battery storage.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function OperationalPlan() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Neon background orbs */}
      <div className="absolute top-[-120px] left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          Operational Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#FFE066] text-lg md:text-xl mb-16"
        >
          Daily operations and strategic partnerships driving Voltera
          Investments' EV ecosystem.
        </motion.p>

        {/* Daily Operations */}
        <motion.div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">
            Daily Operations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dailyOperations.map((op, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="relative p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-[#050404]/40 backdrop-blur-xl text-center"
              >
                <div className="mb-4 text-[#FFE066] flex justify-center">
                  {op.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#FFD700]">
                  {op.title}
                </h4>

                <p className="text-[#FFE066] text-sm">{op.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Partnerships */}
        <motion.div>
          <h3 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">
            Key Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPartnerships.map((kp, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="relative p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-[#050404]/40 backdrop-blur-xl text-center"
              >
                <div className="mb-4 text-[#FFE066] flex justify-center">
                  {kp.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#FFD700]">
                  {kp.title}
                </h4>

                <p className="text-[#FFE066] text-sm">{kp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
