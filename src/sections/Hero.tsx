import Galaxy from "../components/Galaxy";
import ShinyText from "../components/ShinyText";
import StarBorder from "../components/StarBorder";
import TextType from "../components/TextType";

export default function HeroSection() {
  function handleProjectView() {
    const element = document.getElementById("project");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden ">
      <Galaxy className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col h-full items-center justify-center pointer-events-none">
        <ShinyText
          className="text-2xl md:text-5xl sm:text-4xl font-inter-black text-center max-w-lg"
          text={"Hi, I'm Hanung Satya Adi Wicaksono"}
          speed={2.3}
          pauseOnHover
        ></ShinyText>

        <div className="font-poppins text-lg md:text-2xl sm:text-xl m-2 flex items-center ">
          <span className="">I'm a</span>
          <TextType
            text={[
              "Web Developer",
              "Front End Developer",
              "Web Dev Enthusiast",
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="ml-2"
          />
        </div>
        <p className=" text-sm text-center text-muted-foreground max-w-md">
          Building clean and modern web interfaces. Focused on interactive and
          user-friendly experiences.
        </p>

        <div className="mt-5 pointer-events-auto overflow-visible">
          <StarBorder
            thickness={2}
            color="white"
            className="font-poppins"
            handleFunction={handleProjectView}
          >
            Explore My Projects
          </StarBorder>
        </div>
      </div>
    </section>
  );
}
