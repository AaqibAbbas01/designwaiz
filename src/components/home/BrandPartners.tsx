import Image from "next/image";

const ASSOCIATES = [
  { name: "Worlds of Wonder", logo: "/client-logos/worlds-of-wonder.png" },
  { name: "Country Inn & Suites", logo: "/client-logos/country-inn-suites.png" },
  { name: "Cafe Coffee Day", logo: "/client-logos/cafe-coffee-day.png" },
  { name: "World Trade Center Noida", logo: "/client-logos/world-trade-center-noida.png" },
  { name: "Chaayos", logo: "/client-logos/chaayos.png" },
  { name: "Parker Deluxe", logo: "/client-logos/parker-deluxe.png" },
  { name: "Muskan", logo: "/client-logos/muskan.png" },
  { name: "Paras Irene", logo: "/client-logos/paras-irene.png" },
  { name: "Hotel Rajvanshi", logo: "/client-logos/hotel-rajvanshi.png" },
  { name: "Paras Buildtech", logo: "/client-logos/paras-buildtech.png" },
  { name: "The Paras World School", logo: "/client-logos/paras-world-school.png" },
  { name: "Salcon", logo: "/client-logos/salcon.png" },
  { name: "Silverglades", logo: "/client-logos/silverglades.png" },
  { name: "Worlds of Wonder Water Park", logo: "/client-logos/worlds-of-wonder-water-park.png" },
  { name: "City Public School", logo: "/client-logos/city-public-school.png" },
  { name: "Jamia Co-operative Bank", logo: "/client-logos/jamia-cooperative-bank.png" },
  { name: "Magnum", logo: "/client-logos/magnum.png" },
  { name: "FK Entertainment", logo: "/client-logos/fk-entertainment.png" },
  { name: "MF Perfect Construction", logo: "/client-logos/mf-perfect-construction.png" },
  { name: "Engineer Ply", logo: "/client-logos/engineer-ply.png" },
];

export default function BrandPartners() {
  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Prestigious Clients</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            Organizations that trust DesignWaiz for facade, interior, and execution solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {ASSOCIATES.map((associate) => (
            <div
              key={associate.name}
              className="h-28 bg-white rounded-lg border border-dw-border shadow-sm hover:border-dw-mustard hover:shadow-md transition-all duration-300 flex items-center justify-center p-3"
            >
              <Image
                src={associate.logo}
                alt={associate.name}
                width={260}
                height={176}
                className="object-contain max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
