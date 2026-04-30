export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Create your profile",
      desc: "Tell us your skills, location, and the kind of work you're looking for. Takes under 5 minutes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Get matched",
      desc: "Our system finds employers near you who need exactly your skills — no scrolling through irrelevant listings.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Connect & work",
      desc: "Speak directly with employers. No middlemen, no hidden fees. Just honest work, fairly paid.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron" />
            <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
              Simple Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            Work begins in
            <br />
            three steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-navy/10 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative z-10 group border-b md:border-b-0 md:border-r border-gray-100 px-0 pb-10 md:pb-0 md:px-8 last:border-0"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Number badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm bg-cream flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="font-display text-4xl text-navy/10 font-bold">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-xl text-navy mb-3">{step.title}</h3>
              <p className="font-body text-slate text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
