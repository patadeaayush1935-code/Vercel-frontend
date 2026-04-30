export default function TrustBar() {
  return (
    <section className="py-10 border-y text-center" style={{ background: 'linear-gradient(90deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%)' }}>
      <p className="text-gray-600 mb-4 font-medium">
        Trusted by 1000+ job seekers and growing startups
      </p>
      <div className="flex justify-center gap-10 text-gray-400 font-semibold">
        <span>StartupX</span>
        <span>HireFast</span>
        <span>WorkNow</span>
        <span>QuickJobs</span>
      </div>
    </section>
  );
}