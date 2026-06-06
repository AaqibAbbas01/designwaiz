"use client";

import { useState } from "react";

interface ConsultationFormProps {
  buttonLabel?: string;
  className?: string;
  onSubmitted?: () => void;
}

const DEFAULT_FORM_DATA = {
  name: "",
  phone: "",
  city: "",
  propertyType: "",
};

export default function ConsultationForm({
  buttonLabel = "Book Free Consultation",
  className,
  onSubmitted,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      [
        "Hi, I want to book a free consultation with DesignWaiz.",
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `City: ${formData.city}`,
        `Property Type: ${formData.propertyType}`,
      ].join("\n")
    );

    window.open(`https://wa.me/919999999999?text=${message}`, "_blank", "noopener,noreferrer");
    setFormData(DEFAULT_FORM_DATA);
    onSubmitted?.();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData((current) => ({ ...current, phone: e.target.value }))}
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData((current) => ({ ...current, city: e.target.value }))}
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dw-mustard"
          required
        />
        <select
          value={formData.propertyType}
          onChange={(e) => setFormData((current) => ({ ...current, propertyType: e.target.value }))}
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-dw-mustard"
          required
        >
          <option value="" disabled className="text-black">
            Property Type
          </option>
          <option value="1bhk" className="text-black">
            1 BHK
          </option>
          <option value="2bhk" className="text-black">
            2 BHK
          </option>
          <option value="3bhk" className="text-black">
            3 BHK
          </option>
          <option value="4bhk" className="text-black">
            4+ BHK
          </option>
          <option value="villa" className="text-black">
            Villa
          </option>
          <option value="office" className="text-black">
            Office
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-dw-mustard hover:bg-white hover:text-dw-dark text-white font-semibold py-4 rounded-lg transition-all duration-300"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
