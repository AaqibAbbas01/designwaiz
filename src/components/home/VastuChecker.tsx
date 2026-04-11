export default function VastuChecker() {
  const directions = [
    { dir: "N", label: "North", tip: "Ideal for living room & home office" },
    { dir: "NE", label: "North-East", tip: "Best for pooja room & meditation" },
    { dir: "E", label: "East", tip: "Perfect for main entrance" },
    { dir: "SE", label: "South-East", tip: "Ideal kitchen placement" },
    { dir: "S", label: "South", tip: "Good for master bedroom" },
    { dir: "SW", label: "South-West", tip: "Best for master bedroom" },
    { dir: "W", label: "West", tip: "Suitable for dining room" },
    { dir: "NW", label: "North-West", tip: "Ideal for guest room" },
  ];

  return (
    <section className="section-padding bg-[#EDEAE5]">
      <div className="container-dw">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Compass Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full border-4 border-dw-mustard/20" />
              <div className="absolute inset-8 rounded-full border-2 border-dw-olive/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                  {directions.map((d, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center text-center p-2 group cursor-pointer ${
                        i % 2 === 0 ? "font-bold text-dw-mustard" : "text-dw-olive"
                      }`}
                      title={d.tip}
                    >
                      <div>
                        <div className="text-xl font-heading">{d.dir}</div>
                        <div className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {d.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-h2 mb-4">Check Your Vastu</h2>
            <p className="text-dw-text-secondary mb-6 leading-relaxed">
              Align your home with ancient wisdom for positive energy and harmony.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Room-by-room Vastu analysis",
                "Direction-based recommendations",
                "Remedies for Vastu dosh",
                "Free Vastu consultation with every project",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-dw-olive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dw-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-dw-olive hover:bg-dw-olive/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Get Free Vastu Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
