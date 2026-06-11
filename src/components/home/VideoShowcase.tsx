export default function VideoShowcase() {
  return (
    <section className="section-padding bg-dw-bg-secondary">
      <div className="container-dw">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* YouTube Video Embed */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-sm border border-dw-border">
            <iframe
              src="https://www.youtube.com/embed/pQlEj979iZ4?rel=0&modestbranding=1"
              title="DesignWaiz — Company Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-xs font-semibold uppercase text-dw-mustard mb-3">
              Meet Our Founder
            </p>
            <h2 className="text-h2 mb-4">A Vision Built From the Ground Up</h2>
            <p className="text-dw-text-secondary leading-relaxed mb-6">
              Step inside our office and workshop — and hear directly from our founder about the philosophy, craftsmanship, and attention to detail that drives every project we deliver.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-dw-mustard font-semibold hover:gap-3 transition-all">
              Learn About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
