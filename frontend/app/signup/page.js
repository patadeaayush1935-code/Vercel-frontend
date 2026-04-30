"use client";
import React, { useState } from "react";
import API from "../lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/register", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ ...form, _id: data.userId }));
      
      if (form.role === "employer") router.push("/dashboard/employer");
      else router.push("/dashboard/user");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md p-8 glass-panel z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Join the fastest hiring network</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors"
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors"
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors"
              onChange={(e) => setForm({ ...form, password: e.target.value })} 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">I am a...</label>
            <select 
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 outline-none text-white transition-colors appearance-none"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="jobseeker">Job Seeker (Looking for work)</option>
              <option value="employer">Employer (Hiring)</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400 text-sm">
          Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300 font-bold">Log in</Link>
        </p>
      </div>
    </div>
  );
}