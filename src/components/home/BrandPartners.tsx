const PARTNERS = [
  { name: "CenturyPly" },
  { name: "Greenlam Industries" },
  { name: "Jaquar" },
  { name: "ICA" },
  { name: "Sika" },
  { name: "Hettich" },
  { name: "Hafele" },
  { name: "Ebco" },
  { name: "Asian Paints" },
  { name: "Berger Paints" },
];

export default function BrandPartners() {
  // Duplicate for seamless loop
  const allLogos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Our Brand Partners</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            An elite list of partners who strengthen our brand promise.
          </p>
        </div>

        <div className="marquee-container overflow-hidden relative">
          <div className="flex gap-12 animate-marquee">
            {allLogos.map((partner, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="h-14 w-44 flex items-center justify-center px-5 bg-white rounded-lg border border-dw-border shadow-sm">
                  <span className="text-sm font-semibold text-dw-text-secondary text-center leading-tight">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
