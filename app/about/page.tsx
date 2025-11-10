"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative bg-[#050404] text-[#FFD700] min-h-screen px-6 md:px-12 py-28 overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute top-[-120px] left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          About Voltera Investments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#FFE066] text-lg md:text-xl mb-6"
        >
          Voltera Investments SARL is pioneering the first integrated Electric
          Vehicle & Digital Mobility ecosystem in Djibouti.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#FFE066] text-lg md:text-xl mb-6"
        >
          Our mission is to accelerate EV adoption with a complete solution
          including charging infrastructure, affordable EVs, a digital platform,
          and maintenance support.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl"
        >
          Motto:{" "}
          <span className="text-[#FFD700] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFE066] animate-pulse-slow">
            Empowering the Youth
          </span>
        </motion.p>
      </div>
    </main>
  );
}
