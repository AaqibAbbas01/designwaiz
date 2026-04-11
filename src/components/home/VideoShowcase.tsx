import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="section-padding bg-[#EDEAE5]">
      <div className="container-dw">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop"
              alt="Interior walkthrough video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-dw-mustard group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center">
                <svg className="w-8 h-8 text-white group-hover:text-dw-mustard ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-h2 mb-4">See Our Work Come Alive</h2>
            <p className="text-dw-text-secondary leading-relaxed mb-6">
              Take a virtual tour of our recently completed projects. From concept sketches to stunning reality — watch how DesignWaiz transforms empty spaces into dream homes.
            </p>
            <a href="/designs" className="inline-flex items-center gap-2 text-dw-mustard font-semibold hover:gap-3 transition-all">
              Watch More Projects
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
