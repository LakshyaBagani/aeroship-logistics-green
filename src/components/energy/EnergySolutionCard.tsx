import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface EnergySolutionCardProps {
  title: string;
  tagline?: string;
  features?: string[];
  description?: string;
  icon: LucideIcon;
  gradient: string;
  route: string;
  index: number;
  isLandingPage?: boolean;
}

const EnergySolutionCard: React.FC<EnergySolutionCardProps> = ({
  title,
  tagline,
  features,
  description,
  icon: IconComponent,
  gradient,
  route,
  index,
  isLandingPage = true
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLandingPage) {
    // Premium landing page version with frosted glass and elegant design
    return (
      <div
        onClick={handleClick}
        className="group relative rounded-3xl p-8 cursor-pointer overflow-hidden h-full flex flex-col transition-all duration-700 hover:scale-105"
        style={{ 
          transitionDelay: `${index * 150}ms`,
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)'
        }}></div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
        }}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Premium Icon Section */}
          <div className="flex flex-col items-center mb-6">
            <div 
              className={`w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl flex-shrink-0 relative`}
              style={{
                background: `linear-gradient(135deg, ${gradient.includes('from-yellow') ? '#fbbf24, #f59e0b' : 
                  gradient.includes('from-blue') ? '#3b82f6, #1d4ed8' :
                  gradient.includes('from-cyan') ? '#06b6d4, #0891b2' :
                  '#10b981, #059669'})`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 20px rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';
              }}
            >
              <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* Premium Typography Section */}
          <div className="text-center mb-6">
            <h3 
              className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-500"
              style={{
                color: '#1f2937',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                fontWeight: '800',
                letterSpacing: '-0.025em'
              }}
            >
              {title}
            </h3>
            
            {/* Elegant Tagline */}
            {tagline && (
              <p 
                className="text-base italic font-semibold mb-4 leading-relaxed"
                style={{
                  color: '#10b981',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {tagline}
              </p>
            )}
          </div>

          {/* Premium Features Section */}
          {features && features.length > 0 && (
            <div className="flex-grow mb-6">
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span 
                      className="leading-relaxed font-medium"
                      style={{
                        color: '#374151',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fallback for description */}
          {!features && description && (
            <p 
              className="text-sm leading-relaxed mb-6 flex-grow font-medium"
              style={{
                color: '#6b7280',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {description}
            </p>
          )}

          {/* Premium CTA Section */}
          <div className="mt-auto pt-4 border-t border-white/20">
            <div 
              className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 text-center transform translate-y-2 group-hover:translate-y-0"
              style={{
                color: '#10b981',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            >
              Explore Solution →
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full page version - detailed and immersive
  return (
    <div className="group bg-white/95 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-200 hover:border-emerald-400 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/25 cursor-pointer overflow-hidden">
      {/* Enhanced hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
      
      <div className="relative z-10">
        <div className={`w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/50`}>
          <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-center">
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-emerald-700 text-sm font-medium flex items-center gap-2">
              Explore Solution
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergySolutionCard;
