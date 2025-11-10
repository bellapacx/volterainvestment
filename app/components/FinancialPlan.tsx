"use client";

import { motion, Variants } from "framer-motion";
import { DollarSign, BarChart2 } from "lucide-react";

const capex = [
  {
    year: "Year 1",
    value: "$100,000",
    description: "App development, initial setup, marketing, working capital",
  },
  {
    year: "Year 2",
    value: "$500,000",
    description: "Scaling operations, 5 new stations, vehicle inventory",
  },
  {
    year: "Year 3",
    value: "$1,000,000",
    description:
      "Major expansion, 5 new stations, significant vehicle inventory",
  },
  { year: "Total", value: "$1,600,000", description: "Total Investment" },
];

const revenueProjections = [
  {
    metric: "EV Sales Revenue",
    values: ["$500,000", "$1,250,000", "$2,500,000", "$3,250,000"],
  },
  {
    metric: "Digital Mobility (5% commission)",
    values: ["$15,000", "$75,000", "$200,000", "$350,000"],
  },
  {
    metric: "Maintenance & Support ($25k/mth)",
    values: ["$300,000", "$300,000", "$300,000", "$300,000"],
  },
  {
    metric: "Charging Station & Café Income",
    values: ["$60,000", "$180,000", "$300,000", "$360,000"],
  },
  {
    metric: "Total Gross Profit",
    values: ["$529,000", "$940,000", "$1,570,000", "$2,011,000"],
  },
  {
    metric: "Net Profit Before Tax",
    values: ["$197,000", "$537,000", "$1,092,000", "$1,483,000"],
  },
];

const financialRatios = [
  { label: "Gross Profit Margin (Year 4)", value: "~49%" },
  { label: "Net Profit Margin (Year 4)", value: "~36%" },
  {
    label: "ROI",
    value: "Investment recovered by Year 3, strong profit Year 4",
  },
];

export default function FinancialPlan() {
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

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050404] overflow-hidden">
      {/* Neon background orbs */}
      <div className="absolute top-[-100px] left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFD700]/30 to-[#FFE066]/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#FFD700]/20 to-[#FFE066]/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#FFE066]"
        >
          Financial Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#FFE066] text-lg md:text-xl mb-16"
        >
          Detailed investment, revenue projections, operating costs, net profit,
          and key financial ratios.
        </motion.p>

        {/* CapEx Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {capex.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-[#050404]/40 backdrop-blur-xl text-center"
            >
              <DollarSign size={32} className="mx-auto mb-4 text-[#FFE066]" />
              <h4 className="text-xl font-bold mb-2">{item.year}</h4>
              <p className="text-[#FFD700] font-semibold mb-2">{item.value}</p>
              <p className="text-[#FFE066] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Revenue & Profit Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="overflow-x-auto mb-16"
        >
          <table className="w-full table-auto border-collapse text-[#FFE066]">
            <thead>
              <tr className="border-b-2 border-[#FFD700] text-left">
                <th className="px-4 py-2">Metric</th>
                <th className="px-4 py-2">Year 1</th>
                <th className="px-4 py-2">Year 2</th>
                <th className="px-4 py-2">Year 3</th>
                <th className="px-4 py-2">Year 4</th>
              </tr>
            </thead>
            <tbody>
              {revenueProjections.map((item, idx) => (
                <tr key={idx} className="border-b border-[#FFD700]">
                  <td className="px-4 py-2 font-semibold">{item.metric}</td>
                  {item.values.map((v, i) => (
                    <td key={i} className="px-4 py-2">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Financial Ratios */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {financialRatios.map((ratio, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative p-6 rounded-3xl shadow-inner shadow-[#FFD700]/20 hover:shadow-[#FFD700]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-[#050404]/40 backdrop-blur-xl text-center"
            >
              <BarChart2 size={32} className="mx-auto mb-4 text-[#FFE066]" />
              <h4 className="text-xl font-bold mb-2 text-[#FFD700]">
                {ratio.label}
              </h4>
              <p className="text-[#FFE066] text-sm">{ratio.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
