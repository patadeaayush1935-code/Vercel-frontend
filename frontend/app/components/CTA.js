export default function CTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }}>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Start your journey today</h2>
        <p className="text-blue-100 mb-8">Join thousands who found their dream job through Rozgaar Setu</p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition font-semibold">
            Find Jobs
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Hire Now
          </button>
        </div>
      </div>
    </section>
  );
}