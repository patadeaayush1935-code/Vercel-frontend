export default function TrustBar() {
  const stats = [
    { value: "2.4L+", label: "Workers placed" },
    { value: "18K+", label: "Verified employers" },
    { value: "340+", label: "Cities covered" },
    { value: "98%", label: "Satisfaction rate" },
  ];

  return (
    <section className="bg-navy py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <p className="font-display text-3xl md:text-4xl text-saffron mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-body text-white/60 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
