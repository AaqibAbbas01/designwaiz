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
    <section className="section-padding bg-dw-bg-primary">
      <div className="container-dw">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div>
            <p className="text-xs font-semibold uppercase text-dw-mustard mb-3">
              Start Your Project
            </p>
            <h2 className="text-h1 mb-4">Beautiful Interiors</h2>
            <p className="text-h3 text-dw-olive mb-6">Planned With Precision</p>
            <p className="text-lg text-dw-text-secondary mb-8">
              Get personalized interior design solutions with clear scope, practical budgets, and refined execution.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-sm border border-dw-border">
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
                className="w-full bg-dw-dark hover:bg-dw-mustard text-white font-semibold py-4 rounded-lg transition-all duration-300"
              >
                Get Free Quote
              </button>

              <p className="text-center text-sm text-dw-text-muted pt-2">
                ✓ Trusted for 700+ homes designed across North India
              </p>
            </form>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm border border-dw-border">
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
