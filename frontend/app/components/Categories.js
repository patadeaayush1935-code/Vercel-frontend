export default function Categories() {
  const jobs = ["Delivery Jobs", "Shop Helper", "Driver", "Warehouse"];

  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Explore Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer border border-gray-100">
              <p className="font-medium">{job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}