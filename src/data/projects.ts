import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
// import project6 from "@/assets/project-6.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  concept: string;
  designApproach: string;
  materials: string;
  style: string;
}

export const projects: Project[] = [
  {
    id: "little-lumen-house",
    title: "Little Lumen House",
    category: "Interior Design",
    location: "Chennai, Tamilnadu",
    year: "2025",
    image: project1,
    description:
      "Conceived in a modern contemporary style, this residence emphasizes simplicity, proportion, and material harmony for a refined architectural identity",
    concept:
      "The design follows a modern contemporary concept, balancing clean geometric forms with warm natural materials.Layered volumes, subtle lighting, and texture contrasts create a refined yet inviting façade.",
    designApproach:
      "A modern, clean-lined approach using layered volumes, natural textures, and subtle lighting to create depth and elegance.",
    materials:
      "The elevation uses a mix of smooth plastered surfaces, textured stone cladding, and warm wooden paneling for contrast. Matte dark frames, glass railings, and soft recessed lighting add a clean, modern finish with rich visual depth.",
    style:
      "The architectural style is Modern Contemporary.",
  },
  {
    id: "the-cozy-cube",
    title: "The Cozy Cube",
    category: "Architecture",
    location: "Chennai, Tamilnadu",
    year: "2025",
    image: project2,
    description:
      "Modern in character, the residence emphasizes clarity of form, material harmony, and visual balance",
    concept:
    "Designed with a contemporary approach, the concept emphasizes clean geometry, balanced massing,and the harmonious use of natural materials with warm ambient lighting.",
    designApproach:
      "The elevation adopts a minimal modern approach, focusing on clear geometry, well-proportioned forms,and a subtle blend of materials to achieve a clean and refined appearance.",
    materials:
      "The elevation uses a mix of smooth textured plaster, natural stone cladding, and warm wooden paneling for contrast and depth. Glass railings, matte metal accents, and soft recessed lighting add a clean, modern finish with a rich tactile feel.Exposed concrete with board-formed texture, composite wood cladding, floor-to-ceiling low-iron glass, and landscaping integrated with native plant species.",
    style:
      "The elevation reflects a contemporary architectural style, characterized by clean geometric composition, minimal ornamentation, and a refined integration of modern materials and lighting",
  },
  {
    id: "tranquil-bedroom",
    title: "Mono Home",
    category: "Interior Design",
    location: "Bangalore, India",
    year: "2023",
    image: project3,
    description:
      "This contemporary residence showcases clean geometry and harmonious proportions with a modern material palette. Layered surfaces,natural accents, and minimal detailing give the home a sophisticated and timeless appeal.",
    concept:
      "A contemporary modern design focused on clean geometric forms, balanced massing, and contrast between solid and void. Natural textures, horizontal–vertical alignment, and subtle lighting are used to create depth,elegance, and functionality.",
    designApproach:
      "Contrasting materials and layered lighting are used to add depth, warmth, and a refined modern character.The elevation follows a contemporary design approach with clean geometry, balanced massing, and strong horizontal–vertical lines.",
    materials:
      "The elevation uses a mix of smooth light-grey textured plaster, dark stone/marble cladding, and warm horizontal wooden slats for contrast. Matte black metal frames, glass railings, and soft recessed lighting add a sleek,modern finish with layered depth.",
    style:
      "The architectural style used here is Contemporary Modern architecture.",
  },
  {
    id: "the-linear-haven",
    title: "The Linear Haven",
    category: "Interior Design",
    location: "Chennai, Tamilnadu",
    year: "2026",
    image: project4,
    description:
      "A modern residential design featuring layered volumes, subtle material contrasts, and a clean architectural language that emphasizes simplicity, comfort, and visual elegance.",
    concept:
      "A contemporary residence defined by clean horizontal volumes, balanced proportions, and a strong play of solid and void.Neutral tones, warm materials, and integrated lighting create a modern, functional, and visually refined façade.",
    designApproach:
      "The elevation is approached with a modern, minimalist language using layered horizontal planes and offset volumes to create depth and visual interest. Material contrast, controlled fenestration, and integrated architectural lighting are used to balance aesthetics, functionality, and climate responsiveness",
    materials:
      "The elevation uses a combination of smooth white and grey plastered surfaces contrasted with textured vertical claddand warm wooden window frames. Glass railings, metal accents, and soft landscape elements add lightness, refinemand visual balance.",
    style:
      "The architectural style is Contemporary Modern, refined with Tropical Modern influences, expressed through clean horizontal volumes, restrained material palettes, and an emphasis on light, shadow, and indoor–outdoor continuity.",
  },
  {
    id: "the-nest-house",
    title: "The Nest House",
    category: "Interior Design",
    location: "Mumbai, India",
    year: "2026",
    image: project5,
    description:
      "A contemporary residence defined by clean forms, warm materials, and thoughtfully layered lighting, creating a calm and refined living environment.",
    concept:
      "The design concept emphasizes functional modern volumes arranged for optimal light, ventilation, and spatial clarity.Material contrast and light–shadow interplay are used to shape a clean, contemporary architectural expression.",
    designApproach:
      "Inspired by contemporary minimalism and tropical modern architecture, the elevation draws fromclean modern forms while incorporating natural materials, deep overhangs, and warm lighting to suit a climate-responsive, elegant residential design.",
    materials:
      "The elevation combines exposed concrete panels and natural stone cladding with clean, textured finishes that give a solid,contemporary character. Warm wooden soffits, balcony rail accents, and soft architectural lighting balance the raw materials with a refined, inviting look",
    style:
      "This facade reflects a contemporary modern architectural style, characterized by clean geometric forms, mixed natural materials, and an emphasis on minimalist detailing with warm accents.",
  },

];
