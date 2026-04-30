"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EmployerDashboard() {
  const [user, setUser] = useState(null);
  const [jobsFilled, setJobsFilled] = useState(100);
  const [postJobState, setPostJobState] = useState("idle"); // idle, loading, success, flow
  const [flowStep, setFlowStep] = useState(0);
  const router = useRouter();

  // Animated Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setJobsFilled(prev => prev < 124 ? prev + 1 : prev);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else setUser({ name: "Zomato HR", role: "employer" });
  }, []);

  const handlePostJobClick = () => {
    if (postJobState !== "idle") return;
    setPostJobState("loading");
    
    // Simulate API request
    setTimeout(() => {
      setPostJobState("success");
      // Open 3-step flow after success
      setTimeout(() => {
        setPostJobState("flow");
        setFlowStep(1);
      }, 1500);
    }, 2000);
  };

  const handleCloseFlow = () => {
    setPostJobState("idle");
    setFlowStep(0);
  };

  // Typewriter effect state
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Bolke job post karo...";
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypewriterText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) i = 0; // Loop the typewriter
    }, 150);
    return () => clearInterval(typing);
  }, []);

  const dummyJobs = [
    { id: 1, role: "Delivery Partner", salary: "₹18,000/mo", location: "Pune East", urgent: true },
    { id: 2, role: "Warehouse Associate", salary: "₹15,000/mo", location: "Hinjewadi", urgent: false },
    { id: 3, role: "Retail Helper", salary: "₹12,000/mo", location: "Viman Nagar", urgent: true },
  ];

  if (!user) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
      
      {/* Sidebar - Kept minimal to focus on dashboard */}
      <aside className="hidden md:flex w-64 glass-panel border-r border-white/5 p-6 flex-col gap-4 sticky top-0 h-screen rounded-none bg-black/60 z-20">
        <div className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">Rozgaar Setu</div>
        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white font-medium border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">Dashboard</div>
        <div className="px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 transition-colors cursor-pointer">Active Gigs</div>
        <div className="px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 transition-colors cursor-pointer">Billing</div>
        <div className="mt-auto pt-4 border-t border-white/10">
          <button onClick={() => router.push('/login')} className="text-red-400 text-sm hover:underline">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 relative overflow-y-auto">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header & Live Counter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}</h1>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-yellow-400 font-bold">⚡</span>
                <span className="text-blue-300 font-bold">{jobsFilled}</span>
                <span className="text-sm text-gray-400">jobs filled in last 24 hours</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">👤 12 workers available nearby</span>
            </div>
          </div>

          {/* MAIN POST JOB BUTTON AREA */}
          <div className="flex flex-col items-center justify-center py-16 mb-16 relative">
            <AnimatePresence>
              {postJobState === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                >
                  {/* Mock Confetti Burst */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][i % 4] }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: [0, 1.5, 0], 
                        x: (Math.random() - 0.5) * 400, 
                        y: (Math.random() - 0.5) * 400 - 100 
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={handlePostJobClick}
              className={`relative overflow-hidden rounded-full font-bold shadow-[0_0_30px_rgba(59,130,246,0.3)] group ${postJobState === "idle" ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500" : postJobState === "loading" ? "bg-gray-800" : "bg-green-600"} transition-colors`}
              animate={{
                y: postJobState === "idle" ? [0, -8, 0] : 0, // Floating
                scale: postJobState === "loading" ? 0.95 : 1, // Compress
                boxShadow: postJobState === "idle" ? ["0 0 30px rgba(59,130,246,0.3)", "0 0 50px rgba(139,92,246,0.5)", "0 0 30px rgba(59,130,246,0.3)"] : "0 0 0px rgba(0,0,0,0)",
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 },
              }}
              whileHover={postJobState === "idle" ? { scale: 1.05 } : {}}
              whileTap={postJobState === "idle" ? { scale: 0.9 } : {}}
              style={{ width: postJobState === "idle" ? "280px" : "240px", height: "72px" }}
            >
              {postJobState === "idle" && (
                <div className="absolute inset-0 flex items-center justify-center gap-3 text-white text-xl">
                  <span className="text-xl">🔥</span> 
                  <span>Post Job Instantly</span>
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }} 
                    whileHover={{ opacity: 1, x: 0 }} 
                    className="absolute right-6"
                  >
                    ➕
                  </motion.span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              )}

              {postJobState === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center gap-3 text-blue-400">
                  <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Finding Workers...</span>
                </div>
              )}

              {postJobState === "success" && (
                <div className="absolute inset-0 flex items-center justify-center gap-2 text-white text-lg">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring" }}>✅</motion.div>
                  <span>Job Posted!</span>
                </div>
              )}
            </motion.button>

            {/* Voice Subtitle */}
            <div className="mt-6 flex items-center gap-3 text-gray-400">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-400 transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                🎤
              </button>
              <span className="font-mono text-sm min-w-[150px]">{typewriterText}</span>
            </div>
          </div>

          {/* Jobs Listing Area */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Recent Job Posts
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    rotateX: 5, 
                    rotateY: -5, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(59,130,246,0.3)"
                  }}
                  style={{ transformPerspective: 1000 }}
                  className="glass-panel p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl font-bold">Z</div>
                    {job.urgent && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30 animate-pulse">
                        Urgent Hiring
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold mb-1">{job.role}</h4>
                  <p className="text-blue-400 font-bold mb-4">{job.salary}</p>

                  <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/5">
                    <span className="text-sm text-gray-400 flex items-center gap-1">📍 {job.location}</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-bold rounded-lg border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      Instant Hire
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 3-Step Animated Modal Flow (Bottom Sheet simulation) */}
      <AnimatePresence>
        {postJobState === "flow" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-xl bg-[#0a0a14] border border-white/10 md:rounded-3xl rounded-t-3xl p-8 relative overflow-hidden shadow-[0_-20px_50px_rgba(59,130,246,0.2)]"
            >
              <button onClick={handleCloseFlow} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: flowStep === 1 ? "33%" : flowStep === 2 ? "66%" : "100%" }}
                />
              </div>

              <div className="mt-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                
                {flowStep === 1 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="text-6xl mb-6">📄</div>
                    <h3 className="text-2xl font-bold mb-2">Analyzing Job Details...</h3>
                    <p className="text-gray-400 mb-8">AI is extracting skills and requirements.</p>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-blue-500" animate={{ width: ["0%", "100%"] }} transition={{ duration: 2 }} onAnimationComplete={() => setFlowStep(2)} />
                    </div>
                  </motion.div>
                )}

                {flowStep === 2 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                      <motion.div 
                        className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl">🔍</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Scanning Network</h3>
                    <p className="text-blue-400 font-bold mb-4">Matching with 12 nearby workers...</p>
                    {/* Auto transition */}
                    {setTimeout(() => setFlowStep(3), 2500) && ""}
                  </motion.div>
                )}

                {flowStep === 3 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left">
                    <div className="flex items-center justify-center gap-3 mb-8">
                      <span className="text-4xl">🎉</span>
                      <h3 className="text-2xl font-bold text-green-400">3 Ready-to-Hire Candidates Found!</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Matched Candidate */}
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center hover:border-green-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center font-bold text-xl border border-green-500/30">R</div>
                          <div>
                            <h4 className="font-bold">Rahul Sharma</h4>
                            <p className="text-sm text-gray-400">4.9 ⭐ • 1.2 km away</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors">Hire Now</button>
                      </div>
                      
                      {/* Matched Candidate */}
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center hover:border-green-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center font-bold text-xl border border-blue-500/30">A</div>
                          <div>
                            <h4 className="font-bold">Amit Kumar</h4>
                            <p className="text-sm text-gray-400">4.5 ⭐ • 2.5 km away</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors">Hire Now</button>
                      </div>
                    </div>
                    
                    <button onClick={handleCloseFlow} className="w-full py-4 mt-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors">
                      View All Matches
                    </button>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
