import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { projects } from "@/data/projects";

const ProjectsPreview = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div>
            <ScrollReveal>
              <p className="text-caption mb-4">Selected Work</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-section">
                Featured <span className="font-display italic">Projects</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              to="/projects"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-foreground font-medium link-underline group"
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <Link to={`/projects/${project.id}`} className="group block">
                <div className="aspect-[4/5] mb-6 img-reveal">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by Architales showcasing ${project.style}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <p className="text-caption mb-2">{project.category}</p>
                <h3 className="heading-card group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {project.location} · {project.year}
                </p> */}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
