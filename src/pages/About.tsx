import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import founderImage from "@/assets/founder.jpg";
import heroImage from "@/assets/hero-architecture.jpg";

const values = [
  {
    number: "01",
    title: "Design Excellence",
    description:
      "Every detail matters. We pursue perfection in proportion, material, and execution.",
  },
  {
    number: "02",
    title: "Client Partnership",
    description:
      "We listen first. Your vision and needs shape every design decision we make.",
  },
  {
    number: "03",
    title: "Timeless Quality",
    description:
      "We create spaces that age gracefully, rejecting trends in favor of enduring beauty.",
  },
  {
    number: "04",
    title: "Sustainable Thinking",
    description:
      "Responsible design considers environmental impact alongside aesthetic goals.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Architales luxury interior design showcasing modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 container-wide text-center text-primary-foreground">
          <ScrollReveal>
            <p className="text-caption text-primary-foreground/70 mb-4">About Us</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display">
              Our <span className="font-display italic">Story</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed text-center">
              Architales Design Studio is where <span className="italic">vision meets precision</span>. 
              We believe architecture is more than building—it's about creating experiences, 
              shaping how people live, work, and feel in their spaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding surface-elevated">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] img-reveal">
                <img
                  src={founderImage}
                  alt="Ar. DeviShree J R, Founder and Principal Architect of Architales Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-caption mb-4">Founder & Principal Architect</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="heading-section mb-6">Ar. DeviShree J R</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-body mb-6">
                  With a deep passion for creating spaces that resonate with their inhabitants, 
                  Ar. DeviShree J R founded Architales with a clear vision: to bring together 
                  the art of architecture, the warmth of thoughtful interiors, and the precision 
                  of expert construction.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-body mb-6">
                  Her approach combines classical design principles with contemporary sensibilities, 
                  ensuring each project stands the test of time while meeting the unique needs 
                  of modern living. Every design begins with deep listening—understanding not 
                  just what clients want, but how they want to feel in their spaces.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-body">
                  Under her leadership, Architales has grown into a trusted name for discerning 
                  clients who seek architecture that combines beauty, functionality, and 
                  uncompromising quality.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-caption mb-4">Our Philosophy</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-section">
                Values That <span className="font-display italic">Guide</span> Us
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.number} delay={index * 0.1}>
                <div className="p-8 lg:p-10 border border-border">
                  <span className="text-caption text-muted-foreground">{value.number}</span>
                  <h3 className="heading-card mt-4 mb-4">{value.title}</h3>
                  <p className="text-body">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "8+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "3", label: "Core Services" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div>
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
                    {stat.number}
                  </p>
                  <p className="text-caption text-primary-foreground/70">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
