"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import PrimaryCTA from "./PrimaryCTA";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Energy Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2],
          opacity: [0.3, 0.5],
          x: [0, 50],
          y: [0, -50],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3],
          opacity: [0.2, 0.4],
          x: [0, -30],
          y: [0, 50],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
            <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Instant Hiring Mode is LIVE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Your Work. Your Vibe. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 neon-text-purple">
              Instantly Matched.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The job system was broken. We rebuilt it. Get hired like you book a cab—instantly, securely, and with zero resume hassle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/jobs" className="group relative overflow-hidden rounded-xl bg-blue-600/10 border border-blue-500/30 px-8 h-[80px] font-bold text-white transition-all hover:bg-blue-600/20 flex flex-col justify-center items-center backdrop-blur-sm min-w-[200px]">
              <span className="relative z-10 flex flex-col items-center">
                <span className="text-xl">Find Work Now</span>
                <span className="text-xs font-normal text-blue-300 mt-1">(अभी काम शुरू करें)</span>
              </span>
            </Link>

            {/* NEW PRIMARY CTA FOR EMPLOYERS */}
            <div className="mt-8 sm:mt-0 pt-4 sm:pt-0 scale-90 sm:scale-100">
              <PrimaryCTA onClick={() => window.location.href = '/dashboard/employer'} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}