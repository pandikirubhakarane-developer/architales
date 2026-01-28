import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="heading-section mb-6">
            Let's Create <span className="font-display italic">Meaningful</span> Spaces Together
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Every great project begins with a conversation. Share your vision with us, 
            and let's explore how we can bring it to life with thoughtful design 
            and expert execution.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link
            to="/contact"
            className="btn-hero inline-flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
