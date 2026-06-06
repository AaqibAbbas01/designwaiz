"use client";

import ConsultationForm from "@/components/ui/ConsultationForm";

export default function FreeConsultation() {
  return (
    <section id="consultation" className="section-padding bg-[#1A1A1A] text-white">
      <div className="container-dw">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          {/* Left: Heading + Trust Badges */}
          <div>
            <p className="text-xs font-semibold uppercase text-dw-mustard mb-3">
              Project Consultation
            </p>
            <h2 className="text-h2 mb-4">
              Speak With A Design Specialist
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Share your requirements and receive clear guidance on layout, finishes, budget, and next steps.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Free", "No Obligation", "Expert Designers"].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg"
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
          <ConsultationForm className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10" />
        </div>
      </div>
    </section>
  );
}
