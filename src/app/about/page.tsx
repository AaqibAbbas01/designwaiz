import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DesignWaiz",
  description:
    "Learn about DesignWaiz, our complete facade and interior solutions, company principles, clients, and experienced design team.",
};

const stats = [
  { number: "2015", label: "DesignWaiz Established" },
  { number: "2011", label: "Facade Expertise Since" },
  { number: "360°", label: "Facade & Interior Solutions" },
];

const principles = [
  { title: "Quality Work", description: "Zero compromise in workmanship and finish quality." },
  { title: "Punctuality", description: "Disciplined project delivery within the committed time frame." },
  { title: "Value for Money", description: "Services and products designed to deliver lasting value." },
  { title: "Durability", description: "Solutions and support our clients can rely on long after delivery." },
];

const team = [
  { name: "Waseem Alam", role: "Founder" },
  {
    name: "Sajid Khan",
    role: "B.E. Civil",
    image: "/WhatsApp%20Image%202026-06-11%20at%2022.02.09%20(1).jpeg",
  },
  { name: "Arvind Kumar", role: "Project Manager" },
  {
    name: "Umaymah Sajid",
    role: "Architect",
    image: "/WhatsApp%20Image%202026-06-11%20at%2022.02.09.jpeg",
  },
];

const clients = [
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dw-bg-primary">
      <section className="bg-[#1A1A1A] text-white pt-28 pb-14">
        <div className="container-dw">
          <h1 className="text-h1 mb-4">About DesignWaiz</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Complete in-house facade and interior solutions delivered by experienced professionals.
          </p>
        </div>
      </section>

      <section className="section-padding pb-8">
        <div className="container-dw space-y-10">
          <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm border border-dw-border">
            <h2 className="text-h2 mb-5">Our Story</h2>
            <p className="text-dw-text-secondary leading-8 mb-4">
              Established in 2015, DesignWaiz provides complete in-house solutions for facade and interior requirements. DesignWaiz is an extension of The Green Solutions, a well-known name in SHERA facade work across Delhi NCR since 2011.
            </p>
            <p className="text-dw-text-secondary leading-8">
              Our team delivers creative design, renovation, project management, and execution solutions across residential, commercial, industrial, farmhouse, office, hospitality, retail, and entertainment spaces. Transparent communication, experienced professionals, and dependable delivery guide every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-sm border border-dw-border">
                <div className="text-3xl lg:text-4xl font-bold text-dw-mustard mb-2">{stat.number}</div>
                <div className="text-sm text-dw-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-8 bg-dw-bg-secondary">
        <div className="container-dw">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-dw-mustard font-semibold mb-2">How We Work</p>
              <h2 className="text-h2 mb-4">Our Company Principles</h2>
              <p className="text-dw-text-secondary leading-8 mb-8">
                Every DesignWaiz project is guided by four practical commitments that protect quality, timelines, budgets, and long-term performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={principle.title} className="bg-white rounded-lg p-5 shadow-sm border border-dw-border">
                  <div className="w-10 h-10 rounded-lg bg-dw-mustard/15 text-dw-mustard flex items-center justify-center font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-dw-text-secondary leading-7">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-dw">
          <div className="text-center mb-10">
            <p className="text-dw-mustard font-semibold mb-2">Trusted Relationships</p>
            <h2 className="text-h2 mb-3">Brand Associates & Prestigious Clients</h2>
            <p className="text-dw-text-secondary text-lg max-w-2xl mx-auto">
              Organizations that have trusted DesignWaiz for facade, interior, and execution solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="h-28 bg-white rounded-lg border border-dw-border shadow-sm flex items-center justify-center p-3"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={176}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dw-bg-secondary">
        <div className="container-dw grid lg:grid-cols-[320px_1fr] gap-10 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-sm border border-dw-border">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1200&fit=crop"
              alt="Founder portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-dw-mustard font-semibold mb-2">Meet Our Founder</p>
            <h2 className="text-h2 mb-2">Waseem Alam</h2>
            <p className="text-dw-olive font-medium mb-5">Founder & Chief Design Officer</p>
            <p className="text-dw-text-secondary leading-8 mb-6">
              A visionary designer with 15+ years of experience in residential and commercial interiors, blending Indian sensibility with global design trends. Under this leadership, DesignWaiz has grown from a boutique studio into one of India’s most trusted design firms.
            </p>
            <div className="flex gap-4 text-sm font-medium text-dw-mustard">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-dw-olive">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-dw-olive">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-dw">
          <div className="text-center mb-10">
            <h2 className="text-h2 mb-3">Our Design Team</h2>
            <p className="text-dw-text-secondary text-lg max-w-2xl mx-auto">
              A multidisciplinary team of designers, specialists, visualizers, and project leaders behind every DesignWaiz project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg p-6 text-center shadow-sm border border-dw-border hover:-translate-y-0.5 transition-transform">
                <div className="w-24 h-24 mx-auto rounded-lg overflow-hidden bg-dw-bg-secondary mb-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={240}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-dw-mustard">
                      {member.name.split(" ").map((part) => part[0]).join("")}
                    </div>
                  )}
                </div>
                <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-dw-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
