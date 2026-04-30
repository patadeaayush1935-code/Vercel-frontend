"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function InstantMatchDemo() {
  const [matchStatus, setMatchStatus] = useState("idle");

  useEffect(() => {
    if (matchStatus === "searching") {
      const timer1 = setTimeout(() => setMatchStatus("found"), 2000);
      return () => clearTimeout(timer1);
    }
  }, [matchStatus]);

  const handleMatch = () => {
    setMatchStatus("searching");
  };

  const handleReset = () => {
    setMatchStatus("idle");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Jobs, Like Booking a Ride</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">No waiting for recruiters. Toggle your availability and get instantly matched with nearby verified employers.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Worker App UI */}
          <div className="relative w-full max-w-sm glass-panel p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold">R</div>
                <div>
                  <h3 className="font-bold">Rahul</h3>
                  <p className="text-xs text-gray-400">Reputation: 4.9 ⭐</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </div>
            </div>

            <div className="h-48 rounded-xl bg-black/50 border border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
              {matchStatus === "idle" && (
                <button onClick={handleMatch} className="w-32 h-32 rounded-full bg-purple-600 shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center text-xl font-bold hover:scale-105 transition-transform cursor-pointer z-10">
                  GO
                </button>
              )}

              {matchStatus === "searching" && (
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-purple-500 border-t-transparent animate-spin mb-4"></div>
                  <p className="text-purple-300 font-medium">Finding nearby jobs...</p>
                </div>
              )}

              {matchStatus === "found" && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 flex flex-col items-center justify-center p-4 text-center"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl mb-2 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    ✓
                  </div>
                  <h4 className="font-bold text-lg">Zomato Delivery</h4>
                  <p className="text-sm text-gray-300">2.5 km away • ₹500/shift</p>
                  <button onClick={handleReset} className="mt-3 text-xs underline text-gray-400">Reset Demo</button>
                </motion.div>
              )}
            </div>

            <div className="text-center text-sm text-gray-500">
              <span className="text-purple-400 font-bold">12</span> verified employers nearby
            </div>
          </div>

          {/* Employer App UI (Optional mirror view) */}
          <div className="hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

          <div className="hidden lg:block relative w-full max-w-sm glass-panel p-6 opacity-70 scale-95">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-blue-400">Employer View</h3>
              <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30">
                Zomato HR
              </div>
            </div>

            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${matchStatus === "found" ? "border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-white/10 bg-white/5"} transition-colors duration-500`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold">Rahul (Delivery)</span>
                  <span className="text-xs text-green-400">2.5 km away</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">4.9 ⭐ Reputation</span>
                  <button className="px-3 py-1 bg-blue-600 text-xs rounded-full font-bold">Hire Instantly</button>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 opacity-50 blur-[1px]">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold">Amit (Warehouse)</span>
                  <span className="text-xs text-gray-400">4.0 km away</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
