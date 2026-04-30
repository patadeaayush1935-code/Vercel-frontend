export default function Categories() {
  const categories = [
    { name: "Construction", count: "12,400 jobs", emoji: "🏗️" },
    { name: "Domestic Help", count: "9,800 jobs", emoji: "🏠" },
    { name: "Driver / Delivery", count: "15,600 jobs", emoji: "🚗" },
    { name: "Cook / Catering", count: "7,200 jobs", emoji: "🍳" },
    { name: "Security Guard", count: "5,400 jobs", emoji: "🛡️" },
    { name: "Factory Work", count: "18,300 jobs", emoji: "⚙️" },
    { name: "Electrician", count: "6,100 jobs", emoji: "⚡" },
    { name: "Plumber", count: "4,800 jobs", emoji: "🔧" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-saffron" />
              <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
                Browse by category
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Every trade,
              <br />
              every craft.
            </h2>
          </div>
          <a href="#" className="text-sm font-body text-navy border-b border-navy hover:border-saffron hover:text-saffron transition-colors duration-200 pb-0.5 self-start md:self-auto">
            View all categories →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className="group bg-white p-5 rounded-sm hover:bg-navy transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-2xl mb-3">{cat.emoji}</div>
              <h3 className="font-body font-semibold text-navy group-hover:text-white text-sm mb-1 transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="font-body text-xs text-slate group-hover:text-white/60 transition-colors duration-300">
                {cat.count}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
