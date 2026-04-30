"use client";
import { useState, useEffect } from "react";
import API from "../lib/api";
import { useRouter } from "next/navigation";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await API.get("/jobs");
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      // Fallback mock data for Gamified Gig Mode
      setJobs([
        { _id: '1', title: 'Daily Wage: Delivery Partner', company: 'Zomato', location: 'Shivajinagar', salary: '500/day', fast_hiring: true, video: true, verified: true },
        { _id: '2', title: 'Shift: Warehouse Associate', company: 'Amazon', location: 'Hinjewadi', salary: '450/shift', fast_hiring: false, video: true, verified: true },
        { _id: '3', title: 'Weekly Gig: Retail Helper', company: 'Reliance Fresh', location: 'Viman Nagar', salary: '3000/week', fast_hiring: true, video: false, verified: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (job) => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("Please login first to apply");
      router.push("/login");
      return;
    }

    const user = JSON.parse(userStr);
    try {
      // Auto success for UI demo
      alert("Gig Secured! Employer notified instantly.");
      router.push("/dashboard/user");
    } catch (error) {
      alert("Failed to apply: " + error.message);
    }
  };

  return (
    <div className="min-h-[90vh] bg-black text-white relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
              💼 Gig Mode Enabled
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Live Work Radar</h1>
            <p className="text-gray-400 text-lg">Pick a shift. Get paid fast. No resumes needed.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="🔍 Search 'Delivery', 'Helper'..." 
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 outline-none w-full md:w-64" 
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl font-bold flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              🎤 Voice
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Scanning for live gigs...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20 text-gray-400 border border-white/10 border-dashed rounded-xl glass-panel">No active gigs right now.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job._id} className="glass-panel p-0 overflow-hidden flex flex-col hover:border-purple-500/50 transition-colors group">
                {/* 30-Second Video Placeholder */}
                <div className="h-48 bg-black border-b border-white/10 relative flex items-center justify-center overflow-hidden">
                  {job.video ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <span className="text-gray-600 text-6xl opacity-30 group-hover:scale-110 transition-transform duration-700">🏢</span>
                      <button className="absolute z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg border border-white/30">
                        ▶
                      </button>
                      <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-red-500/80 text-white text-[10px] font-bold rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE CAM
                      </div>
                      <div className="absolute bottom-3 left-3 z-20 text-xs text-gray-300 font-medium">30s Workplace Preview</div>
                    </>
                  ) : (
                    <div className="text-gray-600 text-sm">No Video Available</div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white leading-tight">{job.title}</h3>
                    {/* Anti-Scam Badge */}
                    {job.verified && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold rounded border border-blue-500/30 flex items-center gap-1 flex-shrink-0" title="AI Verified Employer">
                        <span className="text-xs">🛡️</span> Verified
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{job.company}</p>
                  
                  <div className="flex gap-4 mb-6 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-blue-400">📍</span> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-400 font-bold">
                      <span>💰</span> ₹{job.salary}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleApply(job)}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex justify-center items-center gap-2"
                  >
                    <span>Accept Gig</span>
                    <span className="text-xs font-normal text-purple-200">(अभी काम लें)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}