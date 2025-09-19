import React from "react";

type StatBadgeProps = {
  icon?: React.ReactNode;
  value: string;
  label: string;
  gradient?: string; // tailwind gradient classes e.g. from-emerald-500 to-green-600
};

export default function StatBadge({ icon, value, label, gradient }: StatBadgeProps) {
  return (
    <div
      className="group relative rounded-3xl p-8 text-center transition-all duration-700 hover:-translate-y-4 hover:scale-105 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)'
      }}></div>

      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient ?? 'from-emerald-500 to-green-600'} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`} style={{
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}>
          {icon}
        </div>

        <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-500" style={{
          color: '#2d3748',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          fontWeight: 800
        }}>
          {value}
        </div>
        <div className="text-lg font-medium group-hover:text-gray-800 transition-colors duration-300" style={{
          color: '#4a5568',
          textShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
          {label}
        </div>
      </div>
    </div>
  );
}


