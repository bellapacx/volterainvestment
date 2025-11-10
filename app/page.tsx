// app/page.tsx
import BusinessUnits from "./components/BusinessUnits";
import ContactForm from "./components/ContactForm";
import FinancialPlan from "./components/FinancialPlan";
import Hero from "./components/Hero";
import MarketingPlan from "./components/MarketingPlan";
import OperationalPlan from "./components/OperationalPlan";
import Timeline from "./components/Timeline";
import ValuesMotto from "./components/ValuesMotto";
import VisionMission from "./components/VisionMission";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner {/* Vision & Mission Section 
      
     
     
     
      <Stats />

      
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-[var(--font-heading)] text-[var(--color-accent)] mb-10 text-center">
          Core Business Units
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <BusinessUnitCard
            Icon={Zap}
            title="Charging Infrastructure"
            description="Solar-powered stations with Solar Cafés."
          />
          <BusinessUnitCard
            Icon={Car}
            title="EV Sales"
            description="Affordable BYD Yuan EVs for taxi operators."
          />
          <BusinessUnitCard
            Icon={MapPin}
            title="Digital Mobility"
            description="Mobile app for ride-hailing & delivery."
          />
          <BusinessUnitCard
            Icon={Tools}
            title="Maintenance & Support"
            description="Workshop servicing, repairs, and spare parts."
          />
          <BusinessUnitCard
            Icon={Truck}
            title="Forwarding & Transit"
            description="Import logistics & customs management."
          />
        </div>
      </section>

      {/* Call to Action 
      <CallToAction /> */}

      <Hero />
      <VisionMission />
      <ValuesMotto />
      <BusinessUnits />
      <Timeline />
      <OperationalPlan />
      <MarketingPlan />
      <FinancialPlan />
      <ContactForm />
    </>
  );
}
