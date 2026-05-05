import { Paintbrush, BadgeIndianRupee, ClipboardCheck, Truck, Shield } from "lucide-react";

const FEATURES = [
  {
    icon: Paintbrush,
    title: "Made To Order",
    description: "We create personalised spaces that cater to your every requirement.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Lowest Prices Guaranteed",
    description: "We provide the best possible solutions that suit your finances.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Checks At Every Step",
    description: "We guarantee thorough quality checks till project completion.",
  },
  {
    icon: Truck,
    title: "Timely Delivery Assurance",
    description: "We proactively work on commitments to maintain our benchmark of on-time delivery.",
  },
  {
    icon: Shield,
    title: "11-Year Warranty",
    description: "We invigorate client relationships by offering warranties that last a decade.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Why Choose Us</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto mb-6">
            With us, you experience the power of ideas, design and craftsmanship come alive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="card-base p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-dw-olive/10 mb-4">
                  <Icon className="text-dw-olive" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2 text-dw-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-dw-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
