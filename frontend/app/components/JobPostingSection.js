"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function JobPostingSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingCards = [
    { id: 1, title: "Delivery Partner", salary: "₹18,000/month", loc: "Pune", delay: 0, xOffset: -40, yOffset: -80, size: 1 },
    { id: 2, title: "Electrician", salary: "₹25,000/month", loc: "Mumbai", delay: 1, xOffset: 50, yOffset: -40, size: 0.9 },
    { id: 3, title: "Warehouse Helper", salary: "₹15,000/month", loc: "Delhi", delay: 2, xOffset: -20, yOffset: 60, size: 0.85 },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050515] to-[#000000] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        {isClient && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: Math.random() * -500,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Post a Job in Seconds
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto font-medium">
            अब नौकरी पोस्ट करना हुआ आसान — बस कुछ क्लिक में सही उम्मीदवार पाएँ
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Floating Cards (Anti-gravity) */}
          <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center hidden md:flex">
            {floatingCards.map((card) => (
              <motion.div
                key={card.id}
                className="absolute p-5 rounded-2xl glass-panel bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:shadow-[0_10px_50px_rgba(59,130,246,0.4)] transition-shadow cursor-pointer z-10"
                style={{ transformOrigin: "center" }}
                animate={{
                  y: [card.yOffset, card.yOffset - 20],
                  x: card.xOffset + mousePosition.x,
                  rotateX: 5,
                  rotateY: -5,
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                  x: { type: "spring", stiffness: 50, damping: 20 },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)" }}
              >
                <div className="flex justify-between items-start mb-3 gap-8">
                  <h3 className="font-bold text-white text-lg">{card.title}</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] uppercase font-bold rounded border border-green-500/30 flex items-center gap-1">
                    ✓ Verified
                  </span>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-gray-300 text-sm">📍 {card.loc}</span>
                  <span className="text-blue-400 font-bold text-sm">💰 {card.salary}</span>
                </div>
                <button className="w-full py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-sm font-bold transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}

            {/* Connecting Faint Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M 200 150 Q 300 100 400 200 T 500 250" 
                fill="transparent" 
                stroke="#3b82f6" 
                strokeWidth="1" 
                strokeDasharray="5,5" 
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* Quick Job Post Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-8 rounded-3xl bg-black/40 border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-[50px]"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Broadcast New Gig</h3>
              
              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Job Title</label>
                  <input type="text" placeholder="e.g. Delivery Partner" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Location</label>
                    <div className="relative">
                      <input type="text" placeholder="Auto-detecting..." className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors" />
                      <span className="absolute left-3 top-3 text-blue-400">📍</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Salary Range</label>
                    <input type="text" placeholder="₹15k - ₹20k" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Job Type</label>
                  <div className="flex gap-2">
                    {['Gig', 'Shift', 'Full-time'].map((type) => (
                      <label key={type} className="flex-1 text-center cursor-pointer">
                        <input type="radio" name="jobType" className="peer sr-only" defaultChecked={type === 'Gig'} />
                        <div className="py-2 rounded-lg border border-white/10 bg-white/5 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 text-sm font-medium transition-colors">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all overflow-hidden relative group"
                >
                  <span className="relative z-10">Post Job Instantly</span>
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            { icon: "⚡", title: "Instant Hiring", hi: "30 सेकंड में वर्कर से कनेक्ट करें" },
            { icon: "🛡️", title: "Verified Workers", hi: "सिर्फ भरोसेमंद और वेरिफाइड लोग" },
            { icon: "📍", title: "Nearby Matching", hi: "आपके आस-पास उपलब्ध कर्मचारी" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-3xl mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-blue-300 font-medium text-sm">{feature.hi}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
