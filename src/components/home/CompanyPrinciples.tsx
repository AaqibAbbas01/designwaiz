import { Shield, Clock, BadgeIndianRupee, Hammer } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Shield,
    title: "Quality Control",
    description:
      "Every stage is reviewed for finish quality, material fit, and execution accuracy.",
  },
  {
    icon: Clock,
    title: "Timeline Discipline",
    description:
      "Clear project schedules keep design, procurement, and installation moving predictably.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Value",
    description:
      "Premium planning and dependable materials are balanced with practical budget control.",
  },
  {
    icon: Hammer,
    title: "Built To Last",
    description:
      "Details, hardware, and finishes are selected for everyday use and long-term performance.",
  },
];

export default function CompanyPrinciples() {
  return (
    <section className="section-padding bg-white">
      <div className="container-dw">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="text-left p-6 rounded-lg border border-dw-border bg-white hover:border-dw-mustard hover:bg-dw-mustard/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dw-olive/10 mb-5 group-hover:bg-dw-mustard/15 transition-colors">
                  <Icon className="text-dw-olive group-hover:text-dw-mustard transition-colors" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-dw-text-primary">
                  {principle.title}
                </h3>
                <p className="text-sm text-dw-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
