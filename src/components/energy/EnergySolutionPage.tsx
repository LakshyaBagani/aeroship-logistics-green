import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface EnergySolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  heroImage: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  caseStudy: {
    title: string;
    description: string;
    results: string[];
    image: string;
  };
  stats: {
    value: string;
    label: string;
    icon: LucideIcon;
  }[];
}

const EnergySolutionPage: React.FC<EnergySolutionPageProps> = ({
  title,
  subtitle,
  description,
  icon: IconComponent,
  gradient,
  heroImage,
  features,
  benefits,
  caseStudy,
  stats
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {title}
                  </h1>
                  <p className="text-xl text-emerald-600 font-medium mt-2">
                    {subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get Quote
                </button>
                <button className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {title}?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive benefits and advantages of our {title.toLowerCase()} solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Success Story
                </h2>
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {caseStudy.description}
                </p>
                
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={caseStudy.image}
                  alt="Case Study"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to sustainable energy solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergySolutionPage;
