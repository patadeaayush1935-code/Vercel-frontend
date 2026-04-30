"use client";
import { motion } from "framer-motion";

export default function VoiceFeature() {
  return (
    <section className="py-20 bg-black/50 border-t border-b border-white/5 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
            🎤 Voice First
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Speak instead of typing. <br /> <span className="text-blue-400">Listen instead of reading.</span></h2>
          <p className="text-gray-400 text-lg">
            Rozgaar Setu is built for real India. Use Hindi, English, or Hinglish. Just tap the mic and tell us what you need.
          </p>

          <ul className="space-y-4 mt-6">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">1</span>
              <span className="text-gray-300">"Mujhe Pune mein delivery job chahiye"</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">2</span>
              <span className="text-gray-300">"Show me warehouse jobs nearby"</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-64 h-64 rounded-full border border-blue-500/30 flex items-center justify-center">
            {/* Outer rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/20"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border border-blue-500/40"
              animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            {/* Mic button */}
            <button className="relative z-10 w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
