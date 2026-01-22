import SpotlightCard from "@/components/SpotlightCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
} from "@tabler/icons-react";
import BasicJS from "@/assets/images/BasicJS.webp";
import UIUX from "@/assets/images/BookilUIUX.webp";
import FE from "@/assets/images/FE.webp";
import BasicWeb from "@/assets/images/BasicWeb.webp";
import ChromaGrid from "@/components/ChromaGrid";

export default function TechSection() {
  const techStack = [
    { name: "React", icon: IconBrandReact },
    { name: "TypeScript", icon: IconBrandTypescript },
    { name: "Laravel", icon: IconBrandLaravel },
    { name: "Tailwind CSS", icon: IconBrandTailwind },
    { name: "JavaScript", icon: IconBrandJavascript },
    { name: "CSS", icon: IconBrandCss3 },
    { name: "HTML", icon: IconBrandHtml5 },
  ];

  const tools = [
    { name: "Visual Studio Code", icon: IconBrandVscode },
    { name: "Figma", icon: IconBrandFigma },
    { name: "Git", icon: IconBrandGit },
    { name: "Github", icon: IconBrandGithub },
  ];

  const certificate = [
    {
      image: FE,
      title: "Front-End Web Dev for Beginners",
      subtitle: "Dicoding",
      handle: "2025",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    },
    {
      image: BasicJS,
      title: "Basic JavaScript Programming",
      subtitle: "Dicoding",
      handle: "2025",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: BasicWeb,
      title: "Fundamentals of Web Programming",
      subtitle: "Dicoding",
      handle: "2025",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
    },
    {
      image: UIUX,
      title: "UI/UX Design Bootcamp",
      subtitle: "Harisenin",
      handle: "2025",
      borderColor: "#3B82F6",
      gradient: 'linear-gradient(210deg,#10B981,#000)',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-inter-black text-4xl mb-2 text-center">
          Technical Skills & Certifications
        </h1>

        <Tabs defaultValue="tech" className="w-full items-center">
          <TabsList className="mx-auto flex w-fit gap-6 sm:gap-12 bg-transparent border-b border-white/10">
            <TabsTrigger
              value="tech"
              className="relative bg-transparent px-0 pb-3 text-sm tracking-widest text-white/40 data-[state=active]:text-white data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:-bottom-[1px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-white"
            >
              OVERVIEW
            </TabsTrigger>

            <TabsTrigger
              value="cert"
              className="relative bg-transparent px-0 pb-3 text-sm tracking-widest text-white/40 data-[state=active]:text-white data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:-bottom-[1px] data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-white"
            >
              CERTIFICATE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tech" className="mt-2 max-w-7xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <SpotlightCard
                  className="flex items-center justify-center gap-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <tech.icon size={30} />
                  <span className="font-poppins">{tech.name}</span>
                </SpotlightCard>
              ))}

              {tools.map((tool) => (
                <SpotlightCard
                  className="flex items-center justify-center gap-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <tool.icon size={30} />
                  <span className="font-poppins">{tool.name}</span>
                </SpotlightCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cert" className="mt-2">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-3">
                <ChromaGrid
                  items={certificate}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
