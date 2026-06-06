import Image from "next/image";

const ASSOCIATES = [
  { name: "CenturyPly", logo: "/brand-logos/centuryply.svg" },
  { name: "Greenlam Industries", logo: "/brand-logos/greenlam.svg" },
  { name: "Jaquar", logo: "/brand-logos/jaquar.svg" },
  { name: "ICA", logo: "/brand-logos/ica.svg" },
  { name: "Sika", logo: "/brand-logos/sika.svg" },
  { name: "Hettich", logo: "/brand-logos/hettich.svg" },
  { name: "Hafele", logo: "/brand-logos/hafele.svg" },
  { name: "Ebco", logo: "/brand-logos/ebco.svg" },
  { name: "Asian Paints", logo: "/brand-logos/asian-paints.svg" },
  { name: "Berger Paints", logo: "/brand-logos/berger-paints.svg" },
];

export default function BrandPartners() {
  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Brand Associates</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            An elite list of associates who strengthen our brand promise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {ASSOCIATES.map((associate) => (
            <div
              key={associate.name}
              className="h-24 bg-white rounded-2xl border border-dw-border shadow-sm hover:border-dw-mustard hover:shadow-md transition-all duration-300 flex items-center justify-center px-5"
            >
              <Image
                src={associate.logo}
                alt={associate.name}
                width={180}
                height={64}
                className="object-contain max-h-14 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
