// app/components/BusinessUnitCard.tsx
import { Building } from "lucide-react";
import { JSX } from "react";

interface BusinessUnitCardProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

export default function BusinessUnitCard({
  title,
  description,
  icon,
}: BusinessUnitCardProps) {
  return (
    <div className="p-6 border-2 border-[#FFD700] rounded-xl shadow-md hover:shadow-lg transition bg-[#050404] text-center flex flex-col items-center gap-4">
      <div className="text-[#FFE066]">{icon ?? <Building size={36} />}</div>
      <h3 className="text-2xl font-bold text-[#FFD700]">{title}</h3>
      <p className="text-[#FFE066]">{description}</p>
    </div>
  );
}
