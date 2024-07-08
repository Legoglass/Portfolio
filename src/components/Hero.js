import "../css/hero.css";
import "../css/mediaq.css";
import ScrambleText from "./ScrambleText";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="background d-flex ">
      <div className="text-container d-flex flex-column justify-content-center">
        <motion.h2>Hello,</motion.h2>
        <motion.h2>
          I am{" "}
          <ScrambleText text="Marius" duration={2500} scrambleInterval={50} />,
        </motion.h2>
        <motion.h1>Front End Developer</motion.h1>
        <motion.p>
          Discover my projects and get <span>inspired</span> for your next big
          idea.
        </motion.p>
        <button className="contact-btn">
          <a className="link-btn" href="#contact">
            Let's get in touch!
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
