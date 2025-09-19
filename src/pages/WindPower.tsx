import React from 'react';
import { Wind, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import EnergySolutionPage from '@/components/energy/EnergySolutionPage';
import renewableHero from '@/assets/renewable-hero.jpg';
import windEnergy from '@/assets/windEnergy.png';

const WindPower: React.FC = () => {
  const windData = {
    title: "Wind Power",
    subtitle: "Harness the Force of Nature",
    description: "Embrace clean, renewable wind energy with our advanced wind turbine solutions. From small-scale residential systems to large commercial wind farms, we provide cutting-edge technology that converts wind into reliable, sustainable electricity.",
    icon: Wind,
    gradient: "from-blue-400 to-cyan-500",
    heroImage: renewableHero,
    features: [
      "High-efficiency turbines",
      "Smart monitoring systems", 
      "Grid integration",
      "Maintenance services"
    ],
    benefits: [
      {
        title: "Renewable Energy",
        description: "Generate clean electricity from an unlimited, free resource. Wind power produces zero emissions and helps reduce dependence on fossil fuels.",
        icon: TrendingUp
      },
      {
        title: "Cost Effective", 
        description: "Wind energy has one of the lowest levelized costs of electricity. Once installed, wind turbines provide decades of low-cost power generation.",
        icon: CheckCircle
      },
      {
        title: "Scalable Solutions",
        description: "From small residential turbines to large commercial wind farms, our solutions scale to meet any energy requirement and budget.",
        icon: Award
      }
    ],
    caseStudy: {
      title: "Commercial Wind Farm Project",
      description: "A manufacturing facility in Tamil Nadu installed our 2MW wind farm, reducing their energy costs by 60% and achieving carbon neutrality within 3 years of operation.",
      results: [
        "60% reduction in energy costs",
        "2,000 tons CO2 emissions prevented annually", 
        "3-year ROI achieved"
      ],
      image: windEnergy
    },
    stats: [
      {
        value: "20+",
        label: "Years Lifespan",
        icon: TrendingUp
      },
      {
        value: "500+",
        label: "Projects Completed", 
        icon: Users
      },
      {
        value: "4.8★",
        label: "Rating",
        icon: Award
      }
    ]
  };

  return <EnergySolutionPage {...windData} />;
};

export default WindPower;