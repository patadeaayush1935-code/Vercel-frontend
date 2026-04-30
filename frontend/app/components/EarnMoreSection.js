"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAREER_PATH = [
  { id: "helper", title: "Helper", icon: "👷", salary: "₹12k", duration: "Start", skills: [] },
  { 
    id: "semi_skilled", 
    title: "Semi-Skilled", 
    icon: "🔧", 
    salary: "₹18k", 
    duration: "7 Days",
    skills: ["Basic Tools Handling", "Safety Protocols"]
  },
  { 
    id: "skilled", 
    title: "Skilled Worker", 
    icon: "🛠️", 
    salary: "₹30k", 
    duration: "14 Days",
    skills: ["Machine Operations", "Blueprint Reading"]
  },
  { 
    id: "supervisor", 
    title: "Supervisor", 
    icon: "📋", 
    salary: "₹50k", 
    duration: "30 Days",
    skills: ["Team Management", "Quality Checking"]
  }
];

export default function EarnMoreSection() {
  const [activeStep, setActiveStep] = useState(1); // Semi-Skilled selected by default
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-24 bg-[#02020a] overflow-hidden min-h-[90vh] border-t border-white/5">
      {/* Deep Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {isClient && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-3 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5,
              rotate: 45
            }}
            animate={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-bold mb-6 flex items-center gap-2">
              <span>🔥</span> Recommended Next Step for You
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Earn More, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Level Up Your Life
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-md">
              We don't just give jobs — we grow your income. Upgrade your skills, upgrade your income. Higher skills = Higher pay.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all overflow-hidden relative group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start My Growth Path <span>🚀</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </motion.button>
          </div>

          {/* Right Side: Interactive Path */}
          <div className="w-full lg:w-2/3">
            <div className="glass-panel p-8 md:p-12 border-white/10 relative overflow-hidden bg-black/40 shadow-2xl">
              
              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Your Progress</span>
                  <span className="text-sm font-bold text-blue-400">30% to Supervisor</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Horizontal Path (Desktop) / Vertical (Mobile) */}
              <div className="relative flex flex-col md:flex-row justify-between mb-16 md:mb-12">
                {/* Connecting Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 md:w-auto md:h-1 md:left-0 md:right-0 md:top-6 bg-white/10 z-0">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                    initial={{ scaleX: 0, scaleY: 0 }}
                    whileInView={{ scaleX: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>

                {CAREER_PATH.map((step, index) => {
                  const isActive = index === activeStep;
                  const isPassed = index < activeStep;
                  
                  return (
                    <div 
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`relative z-10 flex md:flex-col items-center gap-4 md:gap-3 group cursor-pointer ${index !== 0 ? 'mt-8 md:mt-0' : ''}`}
                    >
                      <motion.div 
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${isActive ? 'bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-125' : isPassed ? 'bg-purple-600/50' : 'bg-gray-800'}`}
                        whileHover={{ scale: 1.15 }}
                      >
                        {step.icon}
                      </motion.div>
                      
                      <div className="md:text-center md:absolute md:top-16 w-32">
                        <h4 className={`font-bold text-sm md:text-base transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {step.title}
                        </h4>
                        <motion.div 
                          className="text-green-400 font-bold mt-1 text-sm md:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isActive ? 1 : 0.5 }}
                        >
                          {step.salary}
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Skill Cards Area */}
              <div className="mt-8 md:mt-20 h-48">
                <AnimatePresence mode="wait">
                  {CAREER_PATH[activeStep].skills.length > 0 ? (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[40px]"></div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">Skills to Learn Next</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                          ⏱️ {CAREER_PATH[activeStep].duration}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {CAREER_PATH[activeStep].skills.map((skill, i) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-sm font-medium text-gray-300"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>

                      <button className="w-full md:w-auto px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-sm transition-colors border border-white/10">
                        Unlock Skills Now
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center text-gray-500"
                    >
                      You are currently at this level. Click the next node to see how to grow!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
