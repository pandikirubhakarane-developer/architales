import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

const categories = ["All", "Architecture", "Interior Design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption text-primary-foreground/70 mb-4">Our Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-4xl">
              Selected <span className="font-display italic">Projects</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mt-6">
              Explore our portfolio of architectural and interior design projects, 
              each telling a unique story of thoughtful design and expert execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 md:top-24 z-30">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                  activeCategory === category
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
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
    </Layout>
  );
};

export default Projects;
