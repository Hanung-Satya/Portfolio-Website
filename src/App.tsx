
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import AboutSection from "./sections/About";
import ContactSection from "./sections/Contact";
import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import TechSection from "./sections/TechAndTools";


function App() {
  const NavLinks = ["Home", "About", "Project", "Contact"];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="h-screen w-full">
        <header>
          <Navbar navList={NavLinks} />
        </header>

        <main id="main">
          <HeroSection/>

          <AboutSection/>
          
          <TechSection/>

          <ProjectsSection/>
          
          <ContactSection/>

          <Footer/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
