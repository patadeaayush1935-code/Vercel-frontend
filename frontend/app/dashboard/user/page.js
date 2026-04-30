"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser({ name: "Rahul Sharma", role: "jobseeker", reputation: 4.8, jobsCompleted: 12 });
    }
  }, []);

  if (!user) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 glass-panel border-r border-white/10 p-6 flex-col gap-4 sticky top-0 h-screen rounded-none">
        <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Vibe Menu</div>
        <div className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 font-medium border border-purple-500/30 cursor-pointer">Dashboard</div>
        <div className="px-4 py-2 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer">My Aura (Profile)</div>
        <div className="px-4 py-2 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer">Applications</div>
        
        <div className="mt-auto pt-4 border-t border-white/10">
          <button onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push('/login');
          }} className="text-red-400 text-sm hover:underline">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Welcome back, {user.name}</h1>
            <p className="text-gray-400">Your current reputation is solid. Keep it up!</p>
          </div>

          {/* Instant Hiring Toggle */}
          <div className={`glass-panel p-4 flex items-center gap-4 border ${isAvailable ? 'border-green-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-white/10'}`}>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Instant Match</span>
              <span className="text-xs text-gray-400">{isAvailable ? 'Employers can see you' : 'You are invisible'}</span>
            </div>
            <button 
              onClick={() => setIsAvailable(!isAvailable)}
              className={`w-14 h-8 rounded-full p-1 transition-colors ${isAvailable ? 'bg-green-500' : 'bg-gray-700'}`}
            >
              <motion.div 
                layout
                className="w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: isAvailable ? 24 : 0 }}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Reputation Card */}
          <div className="glass-panel p-6 border-white/10 hover:border-purple-500/30 transition-colors">
            <h3 className="text-gray-400 text-sm mb-2">Reputation Score</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">{user.reputation || 4.8}</span>
              <span className="text-yellow-400 mb-1">⭐</span>
            </div>
            <p className="text-xs text-green-400 mt-2">↑ Top 10% in Pune</p>
          </div>

          {/* V-Upgrade Path (Gamification) */}
          <div className="glass-panel p-6 border-blue-500/30 bg-blue-500/5 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="text-6xl">📈</span>
            </div>
            <h3 className="text-blue-400 text-sm font-bold mb-2 uppercase tracking-wider">V-Upgrade Path</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="font-bold text-xl">Helper</div>
              <div className="h-px bg-white/20 flex-1 relative">
                <div className="absolute left-0 top-0 h-full bg-blue-500 w-1/2"></div>
              </div>
              <div className="font-bold text-xl text-gray-500">Supervisor</div>
            </div>
            <p className="text-sm text-gray-400">Complete <span className="text-white font-bold">3 more highly-rated gigs</span> to unlock Supervisor roles (approx +₹5,000/mo).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Video Profile UI */}
          <div className="glass-panel p-6 border-white/10">
            <h3 className="text-xl font-bold mb-4">Your Video Intro</h3>
            <div className="aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
                <span className="text-sm font-medium">Rahul's Intro</span>
              </div>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform">
                ▶
              </button>
            </div>
            <button className="w-full mt-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/5 transition-colors">
              Re-record Intro
            </button>
          </div>

          {/* Recommended Gigs */}
          <div className="glass-panel p-6 border-white/10">
            <h3 className="text-xl font-bold mb-4">Recommended Gigs</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-bold text-purple-300">Zomato Delivery</h4>
                  <p className="text-sm text-gray-400">Shivajinagar • ₹600/shift</p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                  98% Match
                </div>
              </div>
              <div className="p-4 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-bold text-blue-300">Warehouse Helper</h4>
                  <p className="text-sm text-gray-400">Hinjewadi • ₹450/shift</p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                  85% Match
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
