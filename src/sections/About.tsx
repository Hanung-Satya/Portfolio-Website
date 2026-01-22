import BlurText from "@/components/BlurText";
import CountUp from "@/components/CountUp";
import GradientText from "@/components/GradientText";
import ProfileCard from "@/components/ProfileCard";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function AboutSection() {
  const aboutMeText = `My name is Hanung Satya Adi Wicaksono, a student at SMK Negeri 2 Surakarta who is passionate about web development. I enjoy building clean, modern, and interactive websites while exploring how design and code create engaging user experiences. I work with technologies such as HTML, CSS, JavaScript, Tailwind, React, PHP, and Laravel, and I continuously improve my skills by experimenting with new tools and building personal projects. My goal is to grow as a web developer and create useful digital products through continuous learning and practice.`;

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-8 py-16 md:py-24"
    >
      <div className="relative mx-auto w-full max-w-6xl p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 shadow-[0_0_70px_rgba(255,255,255,0.35)] before:absolute before:-inset-[1px] before:rounded-3xl before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-white/10 before:blur-xl before:opacity-40 before:pointer-events-none">
        <div className=" grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-10">
          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-center mt-8 md:mt-0">
            <ProfileCard />
          </div>
          
          <div className="col-span-1 md:col-span-6">
            <h1 className="font-inter-black text-4xl">About Me</h1>
            <BlurText
              text={aboutMeText}
              delay={50}
              animateBy="words"
              direction="top"
              className="mt-3 text-base text-start leading-relaxed text-gray-300"
            />

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4  ">
              <div className="card flex flex-col p-2">
                <div className="flex items-baseline gap-0 font-poppins font-semibold text-2xl leading-none">
                  <CountUp
                    from={100}
                    to={3}
                    direction="up"
                    duration={2}
                    className="inline-block"
                  />
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="inline-block ml-0"
                  >
                    +
                  </GradientText>
                </div>
                <span className="font-poppins mt-2">Web Project Built</span>
              </div>
              <div className="card flex flex-col p-2">
                <div className="flex items-baseline gap-0 font-poppins font-semibold text-2xl leading-none">
                  <CountUp
                    from={100}
                    to={3}
                    direction="up"
                    duration={2}
                    className="inline-block"
                  />
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="inline-block ml-0"
                  >
                    +
                  </GradientText>
                </div>
                <span className="font-poppins mt-2">Stacks Explored</span>
              </div>
              <div className="card flex flex-col p-2">
                <div className="flex items-baseline gap-0 font-poppins font-semibold text-2xl leading-none">
                  <CountUp
                    from={100}
                    to={4}
                    direction="up"
                    duration={2}
                    className="inline-block"
                  />
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="inline-block ml-0"
                  >
                    +
                  </GradientText>
                </div>
                <span className="font-poppins mt-2">Library Used</span>
              </div>
              <div className="card flex flex-col p-2">
                <div className="flex items-baseline gap-0 font-poppins font-semibold text-2xl leading-none">
                  <CountUp
                    from={0}
                    to={100}
                    direction="up"
                    duration={2}
                    className="inline-block"
                  />
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="inline-block ml-0"
                  >
                    %
                  </GradientText>
                </div>
                <span className="font-poppins mt-2">Clean Code Focus</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 mb-2 ">
              <a
                href="https://github.com/Hanung-Satya"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <IconBrandGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/hnung0_0"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <IconBrandInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hanung-satya-1a473833a"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <IconBrandLinkedin size={24} />
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
