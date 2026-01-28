import { Link } from "react-router-dom";
import { Building2, Palette, Hammer, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Comprehensive architectural solutions that transform your vision into reality. From initial concept to detailed construction documents, we craft spaces that inspire.",
    features: [
      "Site analysis and feasibility studies",
      "Concept design and 3D visualization",
      "Construction documentation",
      "Building permit coordination",
      "Construction administration",
    ],
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Thoughtfully curated interiors that balance aesthetics with functionality. We create spaces that reflect your personality while maximizing comfort and livability.",
    features: [
      "Space planning and layout design",
      "Material and finish selection",
      "Custom furniture design",
      "Lighting design",
      "Art and accessory curation",
    ],
  },
  {
    icon: Hammer,
    title: "Construction & Execution",
    description:
      "End-to-end project execution with meticulous attention to quality. We manage every aspect of construction to ensure your project is delivered on time and to specification.",
    features: [
      "Contractor selection and management",
      "Quality control and site supervision",
      "Timeline and budget management",
      "Material procurement",
      "Final handover and documentation",
    ],
  },
  {
    icon: Sparkles,
    title: "Custom Design Solutions",
    description:
      "Bespoke design services for unique requirements. Whether it's custom furniture, specialized spaces, or renovation projects, we deliver tailored solutions.",
    features: [
      "Custom furniture design",
      "Renovation and adaptive reuse",
      "Landscape design integration",
      "Specialty room design (home theaters, wine cellars)",
      "Design consultation services",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption text-primary-foreground/70 mb-4">Our Services</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-4xl">
              Comprehensive <span className="font-display italic">Architectural</span> Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mt-6">
              From concept to completion, we offer a full spectrum of design and 
              construction services to bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <service.icon size={48} strokeWidth={1} className="mb-6" />
                    <h2 className="heading-section mb-6">{service.title}</h2>
                    <p className="text-body mb-8">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle size={20} className="mt-0.5 text-muted-foreground" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`aspect-square surface-elevated flex items-center justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <service.icon size={120} strokeWidth={0.5} className="text-muted-foreground/30" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding surface-elevated">
        <div className="container-wide">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-caption mb-4">Our Process</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-section">
                How We <span className="font-display italic">Work</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We listen to understand your vision, needs, and aspirations.",
              },
              {
                step: "02",
                title: "Concept",
                description: "We develop design concepts that translate your vision into form.",
              },
              {
                step: "03",
                title: "Development",
                description: "We refine designs and prepare detailed documentation.",
              },
              {
                step: "04",
                title: "Execution",
                description: "We bring designs to life with precision and quality.",
              },
            ].map((phase, index) => (
              <ScrollReveal key={phase.step} delay={index * 0.1}>
                <div className="text-center p-8 bg-background border border-border">
                  <span className="font-display text-4xl text-muted-foreground/50">{phase.step}</span>
                  <h3 className="heading-card mt-4 mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="heading-section mb-6">Ready to Start Your Project?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Let's discuss how our services can transform your space. 
              Contact us for a consultation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/contact" className="btn-hero inline-flex items-center gap-2 group">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
