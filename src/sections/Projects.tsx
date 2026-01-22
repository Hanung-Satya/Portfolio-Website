
import pos from "@/assets/images/pos.webp";
import fastbite from "@/assets/images/fastbite.webp";
import novatech from "@/assets/images/novatech.webp";
import soloheritage from "@/assets/images/soloheritage.webp";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandPhp,
  IconBrandBootstrap,
} from "@tabler/icons-react";
import ProjectGrid from "@/components/ProjectGrid";


export default function ProjectsSection() {
    const projects = [
  {
    image: pos,
    title: "Simple Point Of Sale App",
    subtitle: "Simple POS App to manage sales and inventory for small businesses, LKS 2025 Project",
    handle: "2025",
    tech: [
      { icon: IconBrandReact, tooltip: "React" },
      { icon: IconBrandLaravel, tooltip: "Laravel" },
      { icon: IconBrandTypescript, tooltip: "TypeScript" },
      { icon: IconBrandTailwind, tooltip: "Tailwind CSS" },
    ],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(225deg, #06B6D4, #000)",
    url: "https://github.com/Hanung-Satya/PoS-React-Laravel-LKS2025",
  },
  {
    image: fastbite,
    title: "Fastbite Restaurant Website",
    subtitle: "Fastfood restaurant website with online ordering system",
    handle: "2025",
    tech: [
      { icon: IconBrandPhp, tooltip: "PHP" },
      { icon: IconBrandJavascript, tooltip: "JavaScript" },
      { icon: IconBrandTailwind, tooltip: "Tailwind CSS" },
      { icon: IconBrandCss3, tooltip: "CSS3" },
      { icon: IconBrandHtml5, tooltip: "HTML5" },
    ],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(225deg, #F59E0B, #000)",
    url: "https://github.com/Hanung-Satya/Fast-Bite",
  },
  {
    image: novatech,
    title: "E Commerce Website Design",
    subtitle: "Simple e-commerce website design for a electronics store",
    handle: "2025",
    tech: [
      { icon: IconBrandBootstrap, tooltip: "Bootstrap" },
      { icon: IconBrandCss3, tooltip: "CSS3" },
      { icon: IconBrandHtml5, tooltip: "HTML5" },
    ],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(225deg, #E11D48, #000)",
    url: "https://github.com/Hanung-Satya/Design-Online-Shop",
  },
  {
    image: soloheritage,
    title: "Solo Heritage Website Design",
    subtitle: "Simple website design for Solo Heritage tourism site",
    handle: "2025",
    tech: [
      { icon: IconBrandBootstrap, tooltip: "Bootstrap" },
      { icon: IconBrandCss3, tooltip: "CSS3" },
      { icon: IconBrandHtml5, tooltip: "HTML5" },
    ],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(225deg, #10B981, #000)",
    url: "https://github.com/Hanung-Satya/Solo-Heritage",
  },
];

  return (
    <section id="project" className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-inter-black text-4xl mb-2 text-center">Projects</h1>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="col-span-3">
            <ProjectGrid
              items={projects}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
