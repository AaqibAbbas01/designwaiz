"use client";

const REVIEWS = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely loved the modular kitchen design. The team was professional and delivered on time. Highly recommended!",
    date: "2 weeks ago",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "DesignWaiz transformed our 3BHK into a dream home. The wardrobe designs are stunning and the quality is top-notch.",
    date: "1 month ago",
    avatar: "RK",
  },
  {
    name: "Anita Verma",
    rating: 5,
    text: "Great value for money. The team understood our requirements perfectly and the final result exceeded expectations.",
    date: "3 weeks ago",
    avatar: "AV",
  },
  {
    name: "Mohammed Irfan",
    rating: 4,
    text: "Professional team, good designs, and reasonable pricing. The corporate office interior they did for us looks fantastic.",
    date: "1 month ago",
    avatar: "MI",
  },
];

export default function GoogleReviews() {
  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <h2 className="text-h2 text-center mb-12">What Google Says About Us</h2>

        {/* Overall Rating */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl font-bold text-dw-text-primary">4.8</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-dw-mustard" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-dw-text-muted mt-1">Based on 520 reviews</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-dw-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-dw-mustard/20 flex items-center justify-center font-semibold text-dw-mustard">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dw-text-primary">{review.name}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-dw-mustard" : "text-dw-border"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-dw-text-secondary leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs text-dw-text-muted">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
