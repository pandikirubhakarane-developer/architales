import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import founderImage from "@/assets/founder.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] img-reveal">
                <img
                  src={founderImage}
                  alt="Ar. DeviShree J R, Founder and Principal Architect of Architales Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border hidden lg:block" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-caption mb-4">About Architales</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="heading-section mb-6">
                Crafting Spaces with <span className="font-display italic">Purpose</span> & Precision
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body mb-6">
                Founded by Ar. DeviShree J R, Architales Design Studio brings together 
                architectural expertise, interior sensibility, and construction excellence 
                to create spaces that transcend trends.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body mb-8">
                Every project begins with listening—understanding your vision, your lifestyle, 
                and your aspirations. From concept to completion, we ensure every detail 
                reflects thoughtful design and uncompromising quality.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-foreground font-medium link-underline group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
