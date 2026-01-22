
import { useState } from "react";
import FullPageLoader from "./components/FullPageLoader";
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">

      {isLoading && (
        <FullPageLoader onFinish={() => setIsLoading(false)} />
      )}
      {!isLoading && (
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
      )}
    </ThemeProvider>
  );
}

export default App;
