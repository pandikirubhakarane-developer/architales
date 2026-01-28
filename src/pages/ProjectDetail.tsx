import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[600px]">
        <img
          src={project.image}
          alt={`${project.title} - ${project.category} project by Architales showcasing ${project.style}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16">
          <div className="container-wide text-primary-foreground">
            <ScrollReveal>
              <p className="text-caption text-primary-foreground/70 mb-4">{project.category}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="heading-display mb-4">{project.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-primary-foreground/80">
                {project.location} · {project.year}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-display leading-relaxed mb-16">
              {project.description}
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div className="border-l-2 border-border pl-8">
                <h2 className="text-caption mb-4">Design Concept</h2>
                <p className="text-body">{project.concept}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-2 border-border pl-8">
                <h2 className="text-caption mb-4">Design Approach</h2>
                <p className="text-body">{project.designApproach}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-2 border-border pl-8">
                <h2 className="text-caption mb-4">Materials & Textures</h2>
                <p className="text-body">{project.materials}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-2 border-border pl-8">
                <h2 className="text-caption mb-4">Architectural Style</h2>
                <p className="text-body">{project.style}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 md:py-12 bg-background border-t border-border">
        <div className="container-wide">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/projects"
              className="text-caption text-muted-foreground hover:text-foreground transition-colors"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="hidden sm:inline">{nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
