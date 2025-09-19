import React from "react";
import { useNavigate } from "react-router-dom";

type SolutionShowcaseProps = {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  points: string[];
  route: string;
  imageLeft?: boolean;
  accentBg?: string; // tailwind bg class for icon chip
  imageFit?: 'cover' | 'contain';
};

export default function SolutionShowcase({ title, Icon, imageSrc, imageAlt, summary, points, route, imageLeft = false, accentBg = "bg-emerald-600/90", imageFit = 'cover' }: SolutionShowcaseProps) {
  const navigate = useNavigate();

  return (
    <section className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className={`grid grid-cols-1 md:grid-cols-2 items-stretch ${imageLeft ? '' : 'md:[&>div:first-child]:order-2'}`}>
        {/* Image */}
        <div className="relative h-72 md:h-96 bg-white p-6">
          <div className="relative w-full h-full">
            <img src={imageSrc} alt={imageAlt} className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} object-center rounded-2xl shadow-lg`} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col min-h-72 md:min-h-96">
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex w-10 h-10 rounded-xl ${accentBg} text-white items-center justify-center`}>
              <Icon className="w-5 h-5" />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4 text-base md:text-lg">{summary}</p>
          <ul className="grid gap-2 mb-6">
            {points.slice(0, 3).map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-flex w-5 h-5 rounded-full bg-emerald-500 text-white items-center justify-center text-[10px]">✓</span>
                <span className="text-sm md:text-base text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button
              onClick={() => { navigate(route); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-5 py-3 rounded-xl text-white font-semibold shadow-lg transition-smooth hover:shadow-emerald-400/40"
              style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
