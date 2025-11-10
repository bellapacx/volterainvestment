import BusinessUnitCard from "../components/BusinessUnitCard";

const businessUnits = [
  {
    title: "Charging Infrastructure",
    description:
      "15 solar-powered fast-charging stations with integrated Solar Cafés.",
  },
  {
    title: "EV Sales",
    description:
      "BYD Yuan Up EVs available with facilitated financing for taxi operators.",
  },
  {
    title: "Digital Mobility",
    description:
      "Proprietary mobile app for ride-hailing and delivery services.",
  },
  {
    title: "Maintenance & Support",
    description: "Central workshop for EV servicing, repairs, and spare parts.",
  },
  {
    title: "Forwarding & Transit Services",
    description:
      "Import logistics and customs clearance through a rented license.",
  },
];

export default function UnitsPage() {
  return (
    <main className="bg-[#050404] text-[#FFD700] min-h-screen px-6 md:px-12 py-20">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Core Business Units
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {businessUnits.map((unit, idx) => (
          <BusinessUnitCard
            key={idx}
            title={unit.title}
            description={unit.description}
          />
        ))}
      </div>
    </main>
  );
}
