import React from 'react';
import { Zap, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import EnergySolutionPage from '@/components/energy/EnergySolutionPage';
import renewableHero from '@/assets/hydro.png';
import hydroElectricity from '@/assets/hydroElectricity.png';

const HydroPower: React.FC = () => {
  const hydroData = {
    title: "Hydro Power",
    subtitle: "Harness the Flow of Water",
    description: "Generate clean, reliable electricity from water resources with our advanced hydroelectric solutions. From small micro-hydro systems to large-scale dam projects, we provide comprehensive hydro power technology for sustainable energy generation.",
    icon: Zap,
    gradient: "from-blue-500 to-indigo-600",
    heroImage: renewableHero,
    features: [
      "Micro-hydro systems",
      "Turbine technology", 
      "Water management",
      "Grid synchronization"
    ],
    benefits: [
      {
        title: "Reliable Power",
        description: "Hydro power provides consistent, predictable electricity generation with high capacity factors. Water flow can be controlled for optimal energy production.",
        icon: TrendingUp
      },
      {
        title: "Long-term Investment", 
        description: "Hydroelectric systems have lifespans of 50+ years with minimal maintenance. Once installed, they provide decades of low-cost, clean energy.",
        icon: CheckCircle
      },
      {
        title: "Water Management",
        description: "Our systems integrate water resource management with energy generation, providing dual benefits for irrigation, flood control, and power generation.",
        icon: Award
      }
    ],
    caseStudy: {
      title: "Micro-Hydro Installation",
      description: "A remote village in Himachal Pradesh installed our 50kW micro-hydro system, providing 24/7 electricity to 200 households and eliminating diesel generator dependency.",
      results: [
        "100% renewable energy coverage",
        "80% reduction in energy costs", 
        "Zero diesel consumption"
      ],
      image: hydroElectricity
    },
    stats: [
      {
        value: "50+",
        label: "Years Lifespan",
        icon: TrendingUp
      },
      {
        value: "200+",
        label: "Systems Installed", 
        icon: Users
      },
      {
        value: "4.9★",
        label: "Rating",
        icon: Award
      }
    ]
  };

  return <EnergySolutionPage {...hydroData} />;
};

export default HydroPower;