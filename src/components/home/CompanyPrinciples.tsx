import { Shield, Clock, BadgeIndianRupee, Hammer } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Shield,
    title: "Quality Work",
    description:
      "Every project undergoes rigorous quality checks using premium-grade materials and expert craftsmanship.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description:
      "We honour timelines like promises — your project is delivered on schedule, every single time.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Value For Money",
    description:
      "Luxury interiors at competitive prices — because great design shouldn't cost a fortune.",
  },
  {
    icon: Hammer,
    title: "Durability",
    description:
      "Built to last a decade and beyond — our interiors stand the test of time and daily use.",
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
                className="text-center p-6 rounded-xl border border-dw-border hover:border-dw-mustard transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dw-olive/10 mb-4 group-hover:bg-dw-mustard/20 transition-colors">
                  <Icon className="text-dw-olive group-hover:text-dw-mustard transition-colors" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-dw-text-primary">
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
