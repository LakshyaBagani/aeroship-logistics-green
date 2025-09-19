import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import RenewableEnergySection from "./RenewableEnergySection";
import SectionBadge from "@/components/ui/SectionBadge";
import airImg from "@/assets/air.png";
import oceanImg from "@/assets/ocean.png";
import bulkCargoImg from "@/assets/bulkCargo.png";
import projectImg from "@/assets/project.png";
import transportImg from "@/assets/transport.png";
import customImg from "@/assets/custom.png";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    title: "Air Freight",
    description:
      "Polar Bear is the fastest growing air freight forwarding specialist in China, Middle East and USA besides covering all the major airports worldwide.",
    image: airImg,
  },
  {
    title: "Ocean Freight",
    description:
      "Aeroship Logistics to deliver the most flexible sea freight services through its network of agents, carriers.",
    image: oceanImg,
  },
  {
    title: "Break Bulk Cargo",
    description:
      "Cargo that is too big or too heavy to be loaded onto a flat rack container can be loaded directly onto the vessel. These are known as Break Bulk Cargo.",
    image: bulkCargoImg,
  },
  {
    title: "Project Logistics",
    description:
      "Aeroship Logistics uses the most efficient methods available for transportation and order fulfillment and coupled with our many years of experience, we can be a single-source solution to meet your total logistics and distribution needs.",
    image: projectImg,
  },
  {
    title: "Transportation",
    description:
      "The Challenge for Aeroship Logistics is to minimize costs, improve transport efficiencies, overcome trade, technical and paper barriers and apply improving technologies to ensure completion of project requirements in the time allotted.",
    image: transportImg,
  },
  {
    title: "Custom Clearance",
    description:
      "Since Aeroship Logistics inception, we have been growing day by day as a trustworthy and popular Custom Broking Agents, offering world class Custom Clearing Services from India.",
    image: customImg,
  },
];

export default function ServicesSection() {
  const header = useInView<HTMLDivElement>({ threshold: 0.2 });
  const grid = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`text-center mb-12 reveal-up ${header.isInView ? "reveal-in" : ""}`}
        >
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six core offerings tailored to your freight needs, delivered with quality
            and a modern, eco-conscious design.
          </p>
        </div>

        {/* Services Grid (6 only) */}
        <div
          ref={grid.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-0 reveal-stagger ${grid.isInView ? "reveal-in" : ""}`}
        >
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden rounded-xl border bg-card shadow-md hover:-translate-y-2 hover:shadow-xl transition-smooth reveal-item mx-auto w-[95%] md:w-[88%]"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden h-60 md:h-72 bg-white w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-smooth duration-300 ease-out group-hover:scale-[1.03] brightness-105 contrast-110 select-none pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}