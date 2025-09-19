import React from 'react';
import { Sun, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import EnergySolutionPage from '@/components/energy/EnergySolutionPage';
import renewableHero from '@/assets/solar.png';
import solarBuilding from '@/assets/solarBuildeing.png';

const SolarEnergy: React.FC = () => {
  const solarData = {
    title: "Solar Energy",
    subtitle: "Harness the Power of the Sun",
    description: "Transform your energy consumption with our comprehensive solar solutions. From residential rooftop installations to large-scale commercial projects, we provide cutting-edge photovoltaic technology that maximizes efficiency and minimizes environmental impact.",
    icon: Sun,
    gradient: "from-yellow-400 to-orange-500",
    heroImage: renewableHero,
    features: [
      "High-efficiency panels",
      "Smart inverters", 
      "Battery storage",
      "Monitoring systems"
    ],
    benefits: [
      {
        title: "Cost Savings",
        description: "Reduce your electricity bills by up to 90% with our high-efficiency solar panels. Payback period typically 5-7 years with 25+ years of free energy.",
        icon: TrendingUp
      },
      {
        title: "Environmental Impact", 
        description: "Reduce your carbon footprint significantly. A typical residential system prevents 3-4 tons of CO2 emissions annually.",
        icon: CheckCircle
      },
      {
        title: "Reliability",
        description: "Our solar systems come with comprehensive warranties and 24/7 monitoring. Professional installation ensures maximum performance and longevity.",
        icon: Award
      }
    ],
    caseStudy: {
      title: "Residential Solar Installation",
      description: "A family in Mumbai installed our 5kW solar system and reduced their electricity bill from ₹8,000 to ₹800 monthly, saving ₹7,200 every month while contributing to a cleaner environment.",
      results: [
        "90% reduction in electricity bills",
        "4 tons CO2 emissions prevented annually", 
        "5-year payback period achieved"
      ],
      image: solarBuilding
    },
    stats: [
      {
        value: "25+",
        label: "Years Warranty",
        icon: TrendingUp
      },
      {
        value: "1000+",
        label: "Happy Customers", 
        icon: Users
      },
      {
        value: "5★",
        label: "Rating",
        icon: Award
      }
    ]
  };

  return <EnergySolutionPage {...solarData} />;
};

export default SolarEnergy;