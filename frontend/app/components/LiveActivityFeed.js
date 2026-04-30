"use client";
import React from "react";

const activities = [
  { id: 1, type: 'hired', text: 'Rohit from Pune just got hired as a Delivery Partner', time: '2 mins ago' },
  { id: 2, type: 'posted', text: '5 new Warehouse jobs posted in Mumbai', time: '5 mins ago' },
  { id: 3, type: 'hired', text: 'Sneha from Delhi secured a BPO interview', time: '12 mins ago' },
  { id: 4, type: 'posted', text: 'Swiggy is actively hiring 50+ riders in Bangalore', time: '18 mins ago' },
  { id: 5, type: 'hired', text: 'Amit from Hyderabad got hired within 24 hours!', time: '25 mins ago' },
];

export default function LiveActivityFeed() {
  const duplicatedActivities = [...activities, ...activities];

  return (
    <section className="bg-black/80 py-6 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span> Live Activity
        </h2>
      </div>

      <div className="flex overflow-hidden relative w-full">
        <div className="flex space-x-6 animate-[scroll_30s_linear_infinite] whitespace-nowrap px-4">
          {duplicatedActivities.map((activity, index) => (
            <div key={`${activity.id}-${index}`} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl py-3 px-5 backdrop-blur-sm shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${activity.type === 'hired' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {activity.type === 'hired' ? '🎉' : '🏢'}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-gray-200">{activity.text}</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
