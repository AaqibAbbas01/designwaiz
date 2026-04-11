"use client";

import { useState } from "react";
import Image from "next/image";

export default function BottomCTA() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll send you a quote shortly.");
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#E8E2D8] via-[#F0EDE8] to-[#E8D58E]">
      <div className="container-dw">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div>
            <h2 className="text-h1 mb-2">Beautiful Interiors</h2>
            <p className="text-h3 text-dw-mustard mb-6">At The Best Price</p>
            <p className="text-lg text-dw-text-secondary mb-8">
              Your dream home is just a consultation away. Get personalized interior design solutions from India's most trusted design studio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-xl">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-dw-border focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-dw-border focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-dw-border focus:outline-none focus:ring-2 focus:ring-dw-mustard"
                required
              />

              <button
                type="submit"
                className="w-full bg-dw-mustard hover:bg-dw-mustard-dark text-white font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-xl"
              >
                Get Free Quote
              </button>

              <p className="text-center text-sm text-dw-text-muted pt-2">
                ✓ Trusted by 5000+ happy homeowners across India
              </p>
            </form>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop"
              alt="Beautiful living room interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
