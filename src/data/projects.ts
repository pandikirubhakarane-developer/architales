import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

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
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    category: "Interior Design",
    location: "Chennai, India",
    year: "2024",
    image: project1,
    description:
      "A luxurious penthouse interior that celebrates panoramic city views while maintaining warmth and intimacy through careful material selection and spatial planning.",
    concept:
      "The design concept centers on 'framed horizons'—every seating area and circulation path offers a deliberately curated view of the cityscape. The interior becomes a gallery where the city itself is the art.",
    designApproach:
      "We employed an open-plan layout that maximizes sight lines while creating distinct functional zones through furniture arrangement and ceiling treatments. Natural materials ground the space, preventing it from feeling cold or impersonal.",
    materials:
      "American walnut paneling, brushed brass fixtures, Venetian plaster walls, Italian porcelain flooring, and custom-woven wool rugs in neutral earth tones.",
    style:
      "Contemporary Minimalism with Scandinavian influences, emphasizing clean lines, natural light, and tactile materials.",
  },
  {
    id: "modern-villa",
    title: "Serene Villa",
    category: "Architecture",
    location: "Coimbatore, India",
    year: "2024",
    image: project2,
    description:
      "A contemporary residential villa designed to harmonize with its natural surroundings while providing modern comfort and architectural distinction.",
    concept:
      "Inspired by the principle of 'inside-outside living,' the villa dissolves traditional boundaries between interior and exterior. Large glazed surfaces and strategically placed courtyards bring nature into daily life.",
    designApproach:
      "The building mass is articulated as a series of interconnected volumes, each with its own character while maintaining visual and physical connections. The material palette emphasizes permanence and natural aging.",
    materials:
      "Exposed concrete with board-formed texture, composite wood cladding, floor-to-ceiling low-iron glass, and landscaping integrated with native plant species.",
    style:
      "Modern Tropical Architecture with contextual sensitivity to local climate and landscape.",
  },
  {
    id: "tranquil-bedroom",
    title: "Tranquil Master Suite",
    category: "Interior Design",
    location: "Bangalore, India",
    year: "2023",
    image: project3,
    description:
      "A spa-inspired master bedroom suite designed as a private sanctuary, where every element contributes to rest and rejuvenation.",
    concept:
      "The design philosophy of 'quiet luxury' guides every decision—nothing screams for attention, yet everything is of the highest quality. The room should feel like a perpetual weekend retreat.",
    designApproach:
      "Indirect lighting, acoustic considerations, and temperature control are integrated invisibly. The bed is positioned to maximize natural light exposure while maintaining privacy. Custom joinery conceals all storage.",
    materials:
      "Oiled walnut millwork, hand-plastered walls with subtle texture, Belgian linen upholstery, cashmere throws, and handmade ceramic accent pieces.",
    style:
      "Quiet Luxury with Japanese-inspired restraint and attention to materiality.",
  },
  {
    id: "gourmet-kitchen",
    title: "Gourmet Kitchen",
    category: "Interior Design",
    location: "Hyderabad, India",
    year: "2023",
    image: project4,
    description:
      "A professional-grade kitchen designed for serious home cooking, combining ergonomic excellence with aesthetic sophistication.",
    concept:
      "We approached this kitchen as a 'home restaurant'—where serious culinary work happens in a space that remains welcoming for family and guests. Function drives form, but beauty is never sacrificed.",
    designApproach:
      "The work triangle is optimized for efficiency, with multiple prep zones for collaborative cooking. The island serves as both workspace and gathering point. High-end appliances are integrated seamlessly.",
    materials:
      "Calacatta marble countertops, steam-bent European oak cabinetry, brushed nickel hardware, hand-blown glass pendant lights, and restaurant-grade stainless steel accents.",
    style:
      "Contemporary Artisanal, celebrating the craft of both design and cooking.",
  },
  {
    id: "spa-bathroom",
    title: "Marble Spa Bathroom",
    category: "Interior Design",
    location: "Mumbai, India",
    year: "2023",
    image: project5,
    description:
      "A hotel-inspired bathroom that transforms daily rituals into moments of luxury through generous proportions and premium materials.",
    concept:
      "Drawing inspiration from Roman baths and Japanese onsen, this bathroom is designed for true relaxation—a space where time slows and the body is celebrated.",
    designApproach:
      "The freestanding tub serves as the focal point, positioned to capture natural light. Heated stone floors, steam shower, and carefully planned storage eliminate any friction in the daily routine.",
    materials:
      "Book-matched Statuario marble, unlacquered brass fixtures, teak wood accents, heated limestone flooring, and frameless glass enclosures.",
    style:
      "Timeless Luxury with references to classical Roman bathing culture.",
  },
  {
    id: "corporate-tower",
    title: "Innovation Hub",
    category: "Architecture",
    location: "Chennai, India",
    year: "2024",
    image: project6,
    description:
      "A commercial office building designed to attract innovative companies with its progressive architecture and sustainable design features.",
    concept:
      "The building is conceived as a 'vertical campus'—each floor offers unique spatial qualities while the whole maintains visual coherence. Transparency and openness reflect the collaborative culture of modern work.",
    designApproach:
      "The curtain wall system maximizes daylight while managing solar gain. Common areas are distributed vertically to encourage spontaneous interaction. Green terraces at multiple levels provide outdoor workspace options.",
    materials:
      "High-performance glazing with ceramic frit patterns, weathering steel accents, polished concrete floors, and extensive interior plantings with automated irrigation.",
    style:
      "Sustainable Modernism with emphasis on workplace wellness and environmental responsibility.",
  },
];
