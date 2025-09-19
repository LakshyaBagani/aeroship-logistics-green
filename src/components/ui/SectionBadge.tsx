import React from "react";

type SectionBadgeProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  bg?: string; // tailwind class
  border?: string; // tailwind class
  color?: string; // tailwind text color
  className?: string;
};

export default function SectionBadge({ icon, children, bg, border, color, className }: SectionBadgeProps) {
  return (
    <div
      className={
        `inline-flex items-center gap-2 px-4 py-2 rounded-full ${bg ?? 'bg-emerald-100/50'} ${border ?? 'border border-emerald-200'} ${className ?? ''}`
      }
    >
      {icon ? icon : null}
      <span className={`text-sm font-medium ${color ?? 'text-emerald-600'}`}>{children}</span>
    </div>
  );
}


