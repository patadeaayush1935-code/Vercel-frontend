export default function CTA() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-navy rounded-sm px-8 py-16 md:px-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/5 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full border border-saffron/10 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 md:flex items-center justify-between gap-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-saffron" />
                <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
                  Join today — it's free
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
                Your next opportunity
                <br />
                is one step away.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-saffron text-white font-body font-medium px-8 py-4 rounded-sm hover:bg-white hover:text-navy transition-colors duration-300 text-sm"
              >
                Find Work Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-white/30 text-white font-body font-medium px-8 py-4 rounded-sm hover:border-white hover:bg-white/5 transition-colors duration-300 text-sm"
              >
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
