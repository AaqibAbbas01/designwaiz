import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DesignWaiz",
  description:
    "Learn about DesignWaiz, our experience, founder story, design timeline, and the team behind our premium interior design projects.",
};

const stats = [
  { number: "5000+", label: "Happy Homes" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Expert Designers" },
  { number: "25+", label: "Cities Served" },
];

const timeline = [
  { year: "2016", milestone: "Founded in Delhi NCR with a team of 5 designers" },
  { year: "2018", milestone: "Expanded to Bangalore and Mumbai" },
  { year: "2020", milestone: "Crossed 1000+ completed projects" },
  { year: "2022", milestone: "Launched corporate interior design division" },
  { year: "2024", milestone: "Introduced AI-powered design visualization" },
  { year: "2026", milestone: "Serving 25+ cities with 50+ designers" },
];

const team = [
  { name: "Aanya Mehta", role: "Senior Interior Designer" },
  { name: "Vikram Singh", role: "Project Manager" },
  { name: "Neha Kapoor", role: "Kitchen Specialist" },
  { name: "Arjun Patel", role: "3D Visualization Expert" },
  { name: "Sakshi Jain", role: "Corporate Design Lead" },
  { name: "Rohan Deshmukh", role: "Wardrobe & Storage Expert" },
  { name: "Ishita Roy", role: "Colour & Material Consultant" },
  { name: "Karan Malhotra", role: "Client Relations Head" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <section className="bg-[#1A1A1A] text-white pt-28 pb-14">
        <div className="container-dw">
          <h1 className="text-h1 mb-4">About DesignWaiz</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            We design homes and workspaces that feel refined, practical, and deeply personal — built around the way our clients actually live.
          </p>
        </div>
      </section>

      <section className="section-padding pb-8">
        <div className="container-dw space-y-10">
          <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-sm border border-dw-border">
            <h2 className="text-h2 mb-5">Our Story</h2>
            <p className="text-dw-text-secondary leading-8">
              DesignWaiz is a premium interior design studio dedicated to transforming spaces into stunning, functional environments. We specialize in residential and commercial interiors across Delhi NCR and pan-India. Our philosophy is simple: understand the client deeply, design with clarity, and deliver with discipline. From modular kitchens and bespoke wardrobes to complete home and office interiors, we bring together design intelligence, strong execution systems, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-[20px] p-6 text-center shadow-sm border border-dw-border">
                <div className="text-3xl lg:text-4xl font-bold text-dw-mustard mb-2">{stat.number}</div>
                <div className="text-sm text-dw-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-8 bg-[#EDEAE5]">
        <div className="container-dw">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-h2 mb-4">A Decade of Design Excellence</h2>
              <p className="text-dw-text-secondary leading-8 mb-8">
                With over 10 years of experience, DesignWaiz has built a reputation for reliability, creativity, and timely delivery. Our journey has been shaped by a commitment to making world-class interiors accessible to Indian homeowners and businesses.
              </p>
            </div>

            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="bg-white rounded-[20px] p-5 shadow-sm border border-dw-border flex gap-4 items-start">
                  <div className="min-w-16 rounded-full bg-dw-mustard/15 text-dw-mustard px-4 py-2 font-semibold text-center">
                    {item.year}
                  </div>
                  <p className="text-dw-text-secondary leading-7">{item.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-dw grid lg:grid-cols-[320px_1fr] gap-10 items-center">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1200&fit=crop"
              alt="Founder portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-dw-mustard font-semibold mb-2">Meet Our Founder</p>
            <h2 className="text-h2 mb-2">Sample Founder Name</h2>
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
              <div key={member.name} className="bg-white rounded-[20px] p-6 text-center shadow-sm border border-dw-border hover:-translate-y-1 transition-transform">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#E8E2D8] to-[#F0EDE8] flex items-center justify-center text-2xl font-semibold text-dw-mustard mb-4">
                  {member.name.split(" ").map((part) => part[0]).join("")}
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
