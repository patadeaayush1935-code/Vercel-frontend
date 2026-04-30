"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const jobSets = [
  [
    { title: "Delivery Executive", company: "Swiggy", salary: "₹18,000/mo" }, 
    { title: "Driver", company: "Uber", salary: "₹25,000/mo" },
  ],
  [
    { title: "Warehouse Worker", company: "Amazon", salary: "₹15,000/mo" },
    { title: "Shop Helper", company: "Local Store", salary: "₹12,000/mo" },
  ],
  [
    { title: "Security Guard", company: "Society", salary: "₹14,000/mo" },
    { title: "Cleaner", company: "Office Hub", salary: "₹10,000/mo" },
  ],
];

export default function DashboardPreview() {
  const [index, setIndex] = useState(0);

  // Auto swipe effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobSets.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center">
      
      {/* Glow */}
      <div className="absolute w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

      {/* iPhone Frame */}
      <div className="relative w-[260px] h-[520px] bg-black rounded-[40px] p-2 shadow-2xl">
        
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
          
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10"></div>

          {/* App Content */}
          <div className="pt-10 px-4">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm">Nearby Jobs</h3>
              <span className="text-xs text-gray-500">Pune</span>
            </div>

            {/* Swipe Cards */}
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {jobSets[index].map((job, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-gray-50 shadow-sm border"
                >
                  <p className="text-sm font-medium">{job.title}</p>
                  <p className="text-xs text-gray-500">{job.company}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-600 text-sm font-semibold">
                      {job.salary}
                    </span>
                    <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom nav */}
            <div className="absolute bottom-4 left-0 w-full flex justify-around text-xs text-gray-500">
              <span>🏠</span>
              <span>🔍</span>
              <span>💼</span>
              <span>👤</span>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-10 top-16 bg-white shadow-lg px-3 py-2 rounded-lg text-xs border"
      >
        ⚡ 1-tap apply
      </motion.div>
    </div>
  );
}