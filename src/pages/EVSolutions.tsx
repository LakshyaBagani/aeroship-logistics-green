import React from 'react';
import { Car, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import EnergySolutionPage from '@/components/energy/EnergySolutionPage';
import ev from '@/assets/evs.png';

const EVSolutions: React.FC = () => {
  const evData = {
    title: "EV Solutions",
    subtitle: "Drive the Future of Transportation",
    description: "Accelerate your transition to electric mobility with our comprehensive EV solutions. From electric vehicles and charging infrastructure to fleet management systems, we provide end-to-end solutions for sustainable transportation.",
    icon: Car,
    gradient: "from-green-400 to-emerald-600",
    heroImage: ev,
    features: [
      "Electric vehicles",
      "Charging stations", 
      "Fleet management",
      "Battery solutions"
    ],
    benefits: [
      {
        title: "Zero Emissions",
        description: "Electric vehicles produce zero direct emissions, significantly reducing air pollution and contributing to cleaner, healthier cities and communities.",
        icon: TrendingUp
      },
      {
        title: "Lower Operating Costs", 
        description: "EVs have 60-80% lower operating costs compared to traditional vehicles. Reduced maintenance and fuel costs provide significant long-term savings.",
        icon: CheckCircle
      },
      {
        title: "Future-Ready Technology",
        description: "Our EV solutions integrate smart charging, battery management, and fleet optimization technologies for maximum efficiency and performance.",
        icon: Award
      }
    ],
    caseStudy: {
      title: "Corporate Fleet Electrification",
      description: "A logistics company in Bangalore converted their 50-vehicle fleet to electric, reducing operational costs by 70% and achieving carbon neutrality in transportation operations.",
      results: [
        "70% reduction in operating costs",
        "Zero direct emissions from fleet", 
        "2-year payback period"
      ],
      image: ev
    },
    stats: [
      {
        value: "500+",
        label: "EVs Delivered",
        icon: TrendingUp
      },
      {
        value: "100+",
        label: "Charging Stations", 
        icon: Users
      },
      {
        value: "4.7★",
        label: "Rating",
        icon: Award
      }
    ]
  };

  return <EnergySolutionPage {...evData} />;
};

export default EVSolutions;