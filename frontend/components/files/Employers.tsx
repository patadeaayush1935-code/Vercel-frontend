export default function Employers() {
  const benefits = [
    {
      title: "Pre-screened talent",
      desc: "Every worker profile is verified. Skills, location, and references are checked before you see them.",
    },
    {
      title: "Hire in hours, not weeks",
      desc: "Post a requirement and receive matched applicants within the day. No long recruitment cycles.",
    },
    {
      title: "Pay only when you hire",
      desc: "No upfront subscription fees. A small success fee applies only when a hire is confirmed.",
    },
    {
      title: "Dedicated support",
      desc: "Our team is available in Hindi, Marathi, Tamil and English to help resolve any hiring issues.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="bg-cream rounded-sm p-8 relative overflow-hidden">
              {/* Decorative lines */}
              <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-navy/10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-saffron/20" />

              <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-saffron mb-6">
                Sample requirement
              </p>

              {/* Mock job card */}
              <div className="bg-white rounded-sm p-5 shadow-sm mb-3">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-body font-semibold text-navy text-sm">Need 2 Electricians</h4>
                    <p className="text-xs text-slate font-body mt-0.5">Andheri West, Mumbai · Immediate</p>
                  </div>
                  <span className="text-xs bg-green-50 text-green-700 font-body font-medium px-2 py-1 rounded-sm">Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["R", "S", "M"].map((l) => (
                      <div key={l} className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-xs text-white font-body font-semibold border-2 border-white">
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate font-body">12 workers matched</p>
                </div>
              </div>

              {/* Stat row */}
              <div className="flex gap-4">
                <div className="bg-white rounded-sm p-4 flex-1 text-center shadow-sm">
                  <p className="font-display text-2xl text-saffron">4h</p>
                  <p className="text-xs text-slate font-body">Avg. response</p>
                </div>
                <div className="bg-white rounded-sm p-4 flex-1 text-center shadow-sm">
                  <p className="font-display text-2xl text-navy">93%</p>
                  <p className="text-xs text-slate font-body">Fill rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-saffron" />
              <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
                For Employers
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-8">
              Hire with
              <br />
              confidence.
            </h2>

            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={b.title} className="flex gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-sm bg-saffron/10 flex items-center justify-center flex-shrink-0 group-hover:bg-saffron transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-saffron group-hover:bg-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy text-sm mb-1">{b.title}</h3>
                    <p className="font-body text-slate text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-10 bg-navy text-white font-body font-medium px-8 py-4 rounded-sm hover:bg-saffron transition-colors duration-300 group text-sm"
            >
              Post a Requirement
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
