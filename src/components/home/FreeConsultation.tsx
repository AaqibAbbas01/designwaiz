"use client";

import { useState } from "react";

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    propertyType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you! We'll contact you shortly.");
  };

  return (
    <section id="consultation" className="section-padding bg-[#1A1A1A] text-white">
      <div className="container-dw">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          {/* Left: Heading + Trust Badges */}
          <div>
            <h2 className="text-h2 mb-4">
              Free 1-To-1 Video Consultation With Top Designers
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Speak one-on-one with certified designers and start planning your dream home today.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Free", "No Obligation", "Expert Designers"].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full"
                >
                  <svg className="w-5 h-5 text-dw-mustard" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              >
                <option value="" disabled className="text-black">Property Type</option>
                <option value="1bhk" className="text-black">1 BHK</option>
                <option value="2bhk" className="text-black">2 BHK</option>
                <option value="3bhk" className="text-black">3 BHK</option>
                <option value="4bhk" className="text-black">4+ BHK</option>
                <option value="villa" className="text-black">Villa</option>
                <option value="office" className="text-black">Office</option>
              </select>

              <button
                type="submit"
                className="w-full bg-dw-mustard hover:bg-dw-mustard-dark text-white font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-xl"
              >
                Book Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
