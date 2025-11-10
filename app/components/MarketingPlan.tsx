"use client";

import { motion, Variants } from "framer-motion";
import { Megaphone, Users, Calendar, Gift, Coffee } from "lucide-react";

const strategies = [
  {
    icon: <Megaphone size={32} className="text-[#050404]" />,
    title: "Digital Campaign",
    description:
      "Social media and Google Ads targeting taxi drivers, car owners, and environmentally conscious citizens.",
  },
  {
    icon: <Users size={32} className="text-[#050404]" />,
    title: "Bank Partnerships",
    description:
      "Joint marketing campaigns with local banks promoting the 70% EV financing offer.",
  },
  {
    icon: <Calendar size={32} className="text-[#050404]" />,
    title: "Launch Event & Test Drives",
    description:
      "High-profile launch with government officials, test drives for taxi unions and the press.",
  },
  {
    icon: <Gift size={32} className="text-[#050404]" />,
    title: "Loyalty Program",
    description:
      "Early adopters receive discounted charging rates and reduced platform commission for the first year.",
  },
  {
    icon: <Coffee size={32} className="text-[#050404]" />,
    title: "Solar Café Attraction",
    description:
      "Solar Cafés serve as marketing hubs, showcasing the brand and educating the public on EV benefits.",
  },
];

const cardVariants: Variants = {
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

export default function MarketingPlan() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute top-[-120px] left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-1/4 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          Marketing Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#FFE066] text-lg md:text-xl mb-12"
        >
          Strategies to promote adoption and awareness of Voltera Investments’
          EV ecosystem.
        </motion.p>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-[#050404]/40 backdrop-blur-xl text-center flex flex-col items-center gap-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-tr from-[#FFD700]/40 to-[#FFE066]/30 shadow-lg mb-2">
                {strategy.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#FFD700]">
                {strategy.title}
              </h3>
              <p className="text-[#FFE066] text-sm md:text-base">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
