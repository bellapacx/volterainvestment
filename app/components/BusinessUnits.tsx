"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Truck,
  Smartphone,
  Settings,
  Package,
} from "lucide-react";

export default function BusinessUnits() {
  const units = [
    {
      title: "Charging Infrastructure",
      description:
        "15 solar-powered fast-charging stations with integrated Solar Cafés over three years.",
      icon: <BatteryCharging size={36} className="text-[#FFD700]" />,
    },
    {
      title: "EV Sales",
      description:
        "Import and sale of BYD Yuan Plus EVs to taxi owner-operators on a facilitated financing model.",
      icon: <Truck size={36} className="text-[#FFD700]" />,
    },
    {
      title: "Digital Mobility",
      description:
        "A proprietary mobile platform for EV taxi hailing and delivery services.",
      icon: <Smartphone size={36} className="text-[#FFD700]" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Central workshop dedicated to EV servicing, repairs, and spare parts sales.",
      icon: <Settings size={36} className="text-[#FFD700]" />,
    },
    {
      title: "Forwarding & Transit Services",
      description:
        "Management of import logistics and customs clearance through a rented license.",
      icon: <Package size={36} className="text-[#FFD700]" />,
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

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Floating Neon Background Orbs */}
      <div className="absolute top-[-150px] left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-1/4 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          Our Core Business Units
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-8 rounded-3xl bg-[#050404]/40 border border-[#FFD700]/50 shadow-inner shadow-[#FFD700]/10 hover:shadow-[#FFD700]/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/30 shadow-lg">
                  {unit.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700]">
                  {unit.title}
                </h3>
              </div>
              <p className="text-[#FFE066] text-lg leading-relaxed">
                {unit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
