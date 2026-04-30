export default function HowItWorks() {
  const steps = [
    "Browse jobs",
    "Apply in one tap",
    "Get hired fast"
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 text-center" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)' }}>
      <h2 className="text-3xl font-semibold mb-12">How it works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 rounded-xl shadow-sm border hover:shadow-md transition bg-white">
            <div className="text-blue-600 text-xl mb-4 font-bold">0{i+1}</div>
            <p className="font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}