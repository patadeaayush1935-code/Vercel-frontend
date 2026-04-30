"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrimaryCTA({ onClick }) {
  const [buttonState, setButtonState] = useState("idle"); // idle, loading, success
  const [textIndex, setTextIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const loopTexts = ["Post Job", "Get Workers", "Hire Instantly"];

  useEffect(() => {
    if (buttonState !== "idle") return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loopTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [buttonState, loopTexts.length]);

  const handleClick = (e) => {
    if (buttonState !== "idle") return;
    setButtonState("loading");
    
    // Simulate API request
    setTimeout(() => {
      setButtonState("success");
      if (onClick) onClick();
      
      // Reset after some time
      setTimeout(() => {
        setButtonState("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center">
      
      {/* Tooltip for Mic */}
      <AnimatePresence>
        {isHovered && buttonState === "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -15, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-12 bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5"
          >
            🎤 Speak to post job in seconds
            {/* Arrow pointing down */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/80 border-b border-r border-white/10 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-[340px] h-[80px]">
        {/* Confetti Burst */}
        <AnimatePresence>
          {buttonState === "success" && (
            <motion.div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-sm"
                  style={{ backgroundColor: ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'][i % 5] }}
                  initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
                  animate={{ 
                    scale: [0, 1.5, 0], 
                    x: (Math.random() - 0.5) * 500, 
                    y: (Math.random() - 0.5) * 500 - 50,
                    rotate: Math.random() * 360
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleClick}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`absolute inset-0 w-full h-full rounded-[40px] flex items-center justify-center font-bold text-white overflow-hidden z-10 transition-colors duration-300
            ${buttonState === "idle" ? "bg-blue-700" : ""}
            ${buttonState === "loading" ? "bg-gray-800" : ""}
            ${buttonState === "success" ? "bg-green-500" : ""}
          `}
          animate={{
            y: buttonState === "idle" ? [0, -4] : 0, // Floating
            scale: buttonState === "loading" ? 0.95 : 1, // Compress on load
            boxShadow: buttonState === "idle" 
              ? ["0 0 30px rgba(139,92,246,0.4)", "0 0 50px rgba(236,72,153,0.6)"] 
              : buttonState === "success"
                ? "0 0 40px rgba(16,185,129,0.6)"
                : "0 0 0px rgba(0,0,0,0)",
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.2 },
          }}
          whileHover={buttonState === "idle" ? { scale: 1.05 } : {}}
          whileTap={buttonState === "idle" ? { scale: 0.95 } : {}}
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-[40px]"></div>

          {/* Light Sweep Effect on Hover */}
          <motion.div 
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            initial={{ left: "-100%" }}
            animate={isHovered && buttonState === "idle" ? { left: "200%" } : { left: "-100%" }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
          />

          {/* Idle Content */}
          {buttonState === "idle" && (
            <div className="relative z-10 flex items-center justify-between w-full px-6 h-full">
              
              {/* Mic Icon */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/30 shadow-inner group/mic">
                🎤
              </div>

              {/* Animated Text Loop */}
              <div className="flex-1 flex justify-center text-xl tracking-wide relative overflow-hidden h-8 mx-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute font-black"
                  >
                    {loopTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Briefcase Icon (Slides in on hover) */}
              <motion.div 
                className="text-2xl shrink-0"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                💼
              </motion.div>

              {/* Live Badge (Absolute positioned inside button) */}
              <div className="absolute -top-3 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-pink-500/50 rounded-full text-[10px] font-bold text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)] flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></span>
                👥 12 nearby workers ready
              </div>
            </div>
          )}

          {/* Loading Content */}
          {buttonState === "loading" && (
            <div className="relative z-10 flex items-center justify-center gap-3 text-pink-400 font-bold text-lg">
              <div className="flex gap-1">
                <motion.span animate={{ y: [0, -5] }} transition={{ repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-pink-400 rounded-full"></motion.span>
                <motion.span animate={{ y: [0, -5] }} transition={{ repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-pink-400 rounded-full"></motion.span>
                <motion.span animate={{ y: [0, -5] }} transition={{ repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-pink-400 rounded-full"></motion.span>
              </div>
              <span>Matching Workers...</span>
            </div>
          )}

          {/* Success Content */}
          {buttonState === "success" && (
            <div className="relative z-10 flex items-center justify-center gap-3 text-white font-bold text-xl">
              <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", bounce: 0.6 }}>
                <span className="bg-white text-green-500 rounded-full w-8 h-8 flex items-center justify-center">✓</span>
              </motion.div>
              <span>Workers Found!</span>
            </div>
          )}

        </motion.button>
      </div>
    </div>
  );
}
