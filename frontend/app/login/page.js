"use client";
import React, { useState } from "react";
import API from "../lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "employer") router.push("/dashboard/employer");
      else router.push("/dashboard/user");
    } catch (error) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md p-8 glass-panel z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Log in to continue your vibe</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 outline-none text-white transition-colors"
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 outline-none text-white transition-colors"
              onChange={(e) => setForm({ ...form, password: e.target.value })} 
              required 
            />
          </div>
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400 text-sm">
          Don't have an account? <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-bold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}