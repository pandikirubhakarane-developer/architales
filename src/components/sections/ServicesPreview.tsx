import { Link } from "react-router-dom";
import { ArrowRight, Building2, Palette, Hammer, Sparkles } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Comprehensive architectural solutions from concept to detailed drawings, blending form and function.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Thoughtfully curated interiors that reflect your personality while maximizing comfort and aesthetics.",
  },
  {
    icon: Hammer,
    title: "Construction & Execution",
    description:
      "End-to-end project execution with meticulous attention to quality, timelines, and craftsmanship.",
  },
  {
    icon: Sparkles,
    title: "Custom Design Solutions",
    description:
      "Bespoke design services tailored to unique requirements, from furniture design to spatial planning.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding surface-elevated">
      <div className="container-wide">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-caption mb-4">Our Expertise</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="heading-section max-w-3xl mx-auto">
              Comprehensive <span className="font-display italic">Architectural</span> Services
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group p-8 lg:p-10 bg-background border border-border hover:border-foreground/20 transition-all duration-500">
                <service.icon
                  size={32}
                  strokeWidth={1}
                  className="mb-6 text-foreground"
                />
                <h3 className="heading-card mb-4">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-outline inline-flex items-center gap-2 group"
            >
              Explore All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPreview;
