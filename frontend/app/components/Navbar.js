"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Rozgaar Setu" width={36} height={36} />
          <span className="font-bold text-2xl text-gray-900">Rozgaar Setu</span>
        </Link>

        <div className="hidden md:flex gap-5 items-center">
          <Link
            href="/jobs"
            className="group relative px-5 py-2.5 rounded-full backdrop-blur-lg bg-white/40 border border-blue-200/40 text-gray-600 transition-all duration-300 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-white/70 hover:border-blue-300/60 hover:shadow-[0_8px_24px_rgba(59,130,246,0.16)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Jobs
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link
            href="/post-job"
            className="group post-job-cta relative px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_30px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-visible"
          >
            <span className="absolute -top-2 -right-2 rounded-full border border-white/40 bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/95 badge-float">
              NEW
            </span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 -translate-x-0.5 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Post Job
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1"></span>
            <span className="absolute inset-0 rounded-full bg-white/30 scale-0 opacity-0 group-active:scale-[2.1] group-active:opacity-40 transition-all duration-300 ease-out pointer-events-none"></span>
          </Link>
          
          {user ? (
            <button 
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95">
                Login
              </button>
            </Link>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white/95 backdrop-blur-md">
          <Link href="/jobs" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600">Jobs</Link>
          <Link href="/post-job" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600">Post Job</Link>
          {user ? (
            <button onClick={handleLogout} className="text-red-500 px-4 py-2">Logout</button>
          ) : (
            <Link href="/login" className="block px-4 py-2 rounded-lg text-blue-600 font-medium">Login</Link>
          )}
        </div>
      )}
      <style jsx>{`
        .post-job-cta {
          background-size: 200% 200%;
          animation: ctaPulse 3s ease-in-out infinite, gradientShift 6s ease-in-out infinite;
        }

        .post-job-cta:hover {
          animation-play-state: running;
        }

        .badge-float {
          animation: badgeFloat 3s ease-in-out infinite;
        }

        @keyframes ctaPulse {
          0%,
          100% {
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.22);
          }
          50% {
            box-shadow: 0 10px 26px rgba(147, 51, 234, 0.3);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </nav>
  );
}