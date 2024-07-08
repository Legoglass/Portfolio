import React from "react";
import { motion } from "framer-motion";
import "../css/skills.css";
import "../css/mediaq.css";
import Bootstrap from "../assets/Bootstrap.png";
import CSS3 from "../assets/CSS3.png";
import Figma from "../assets/Figma.png";
import Visual from "../assets/Group.png";
import HTML5 from "../assets/HTML5.png";
import Javascript from "../assets/Javascript.png";
import ReactLogo from "../assets/React.png";
import jQuery from "../assets/jQuery.png";
import GitHub from "../assets/Github (1).png";

function Skills() {
  const images = [
    Figma,
    Bootstrap,
    CSS3,
    Visual,
    HTML5,
    Javascript,
    ReactLogo,
    jQuery,
    GitHub,
  ];

  // Dublăm array-ul de imagini pentru a crea un efect de scrolling infinit
  const duplicatedImages = [...images, ...images];

  const scrollAnimation = {
    animate: {
      x: [`calc(-50% - 3rem)`, "0%"], // Mutăm containerul de la stânga la dreapta
      transition: {
        x: {
          duration: 20, // Ajustează durata animației după necesitate
          ease: "linear",
          repeat: Infinity, // Face ca animația să se repete la nesfârșit
          repeatType: "loop", // Face ca repetarea să fie continuă
        },
      },
    },
  };

  return (
    <div className="background-skills">
      <div
        id="skills"
        className="content-container d-flex flex-column justify-content-around"
      >
        <motion.div
          initial={{ y: "100%", opacity: 0, scale: "200%" }}
          whileInView={{ y: 0, opacity: 1, scale: "100%" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-skill offset-1 col-10 col-xl-4"
        >
          <p className="p-skills">
            Passionate web developer skilled in crafting dynamic digital
            experiences. <span>Let's collaborate </span>and turn your web vision
            into reality. Contact me for more details!
          </p>
        </motion.div>
        <div className="img-skill-container">
          <motion.div className="imgs-skill" {...scrollAnimation}>
            {duplicatedImages.map((src, index) => (
              <img
                key={index}
                className="img"
                src={src}
                alt={`skill-${index}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
