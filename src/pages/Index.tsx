import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
