import Image from "next/image";

const TESTIMONIALS = [
  {
    client: "The Sharma Family",
    project: "3 BHK, Noida",
    thumbnail: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&h=400&fit=crop",
    quote: "They turned our empty flat into a masterpiece...",
  },
  {
    client: "Mr. & Mrs. Gupta",
    project: "Villa, Gurgaon",
    thumbnail: "https://images.unsplash.com/photo-1616594039964-ae56a98c8f58?w=600&h=400&fit=crop",
    quote: "Professional team, stunning results...",
  },
  {
    client: "TechNova Pvt Ltd",
    project: "Corporate Office, Delhi",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    quote: "Our workspace productivity improved 40%...",
  },
];

export default function TestimonialsVideo() {
  return (
    <section className="section-padding bg-[#1A1A1A] text-white">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Real Stories, Bona Fide Impact</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We deliver what we promise. Here's what our clients have to say…
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={testimonial.thumbnail}
                  alt={testimonial.client}
                  fill
                  className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-dw-mustard group-hover:scale-110 transition-transform flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg mb-1">{testimonial.client}</h3>
              <p className="text-dw-mustard text-sm mb-2">{testimonial.project}</p>
              <p className="text-white/70 text-sm italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
