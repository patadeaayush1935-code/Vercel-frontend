export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Yadav",
      role: "Electrician · Pune",
      quote:
        "Maine pehle kai jagah try kiya, par RozGaarSetu pe mujhe 3 din mein kaam mila. Bahut aasaan process hai.",
      initial: "R",
    },
    {
      name: "Sunita Devi",
      role: "Cook · Mumbai",
      quote:
        "I found a full-time cooking job within a week. The employer contacted me directly — no agents, no commission cuts.",
      initial: "S",
    },
    {
      name: "Prakash Constructions",
      role: "Employer · Nagpur",
      quote:
        "We hired 8 masons for a project in 2 days. All profiles were verified. This is the fastest we've ever staffed a site.",
      initial: "P",
    },
  ];

  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-saffron" />
          <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
            Stories
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-14">
          Real people,
          <br />
          real results.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="font-display text-4xl text-saffron/40 leading-none mb-4">"</div>
              <p className="font-body text-white/80 text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center">
                  <span className="font-body font-bold text-white text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-body text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
