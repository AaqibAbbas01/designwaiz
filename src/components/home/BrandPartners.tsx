import Image from "next/image";

const ASSOCIATES = [
  { name: "CenturyPly", logo: null as string | null },
  { name: "Greenlam Industries", logo: null as string | null },
  { name: "Jaquar", logo: null as string | null },
  { name: "ICA", logo: null as string | null },
  { name: "Sika", logo: null as string | null },
  { name: "Hettich", logo: null as string | null },
  { name: "Hafele", logo: null as string | null },
  { name: "Ebco", logo: null as string | null },
  { name: "Asian Paints", logo: null as string | null },
  { name: "Berger Paints", logo: null as string | null },
];

export default function BrandPartners() {
  const allLogos = [...ASSOCIATES, ...ASSOCIATES];

  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Brand Associates</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            An elite list of associates who strengthen our brand promise.
          </p>
        </div>

        <div className="marquee-container overflow-hidden relative">
          <div className="flex gap-8 animate-marquee">
            {allLogos.map((associate, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
              >
                <div className="h-16 w-48 flex items-center justify-center px-5 bg-white rounded-xl border border-dw-border shadow-sm hover:border-dw-mustard hover:shadow-md transition-all duration-300">
                  {associate.logo ? (
                    <Image
                      src={associate.logo}
                      alt={associate.name}
                      width={160}
                      height={48}
                      className="object-contain max-h-10"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-dw-text-secondary text-center leading-tight tracking-wide">
                      {associate.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
