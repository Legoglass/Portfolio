import "./css/index.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Atu from "./components/Atu";
import Constact from "./components/Contact";
import NavBar from "./components/Nav-bar";
import { MobileMenu } from "./components/MobileMenu";
import { motion } from "framer-motion";

function App() {
  const [mobileMenu, setMobileMenu] = useState(true);

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div>
      {mobileMenu ? (
        <NavBar handleMobileMenu={handleMobileMenu} />
      ) : (
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      )}

      <Hero />
      <Skills />
      <Atu />
      <Projects />
      <Constact />
    </div>
  );
}

export default App;
