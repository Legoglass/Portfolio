import "../css/projects.css";
import MacBook from "../assets/Device - Macbook Pro.png";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Photo from "../assets/full web1.png";
import Photo2 from "../assets/coffe shope.png";
import Photo3 from "../assets/sparks.png";
import Photo4 from "../assets/photo 1 deskptop.png";

function Projects() {
  const images = [Photo, Photo2, Photo3, Photo4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Schimbă imaginea la fiecare 3 secunde

    return () => clearInterval(interval); // Curăță intervalul la demontarea componentei
  });
  return (
    <div className="background-projects">
      <Container fluid className="container-project">
        <Row>
          <div className="main-project-container d-flex flex-lg-row flex-column align-items-center my-0 ">
            <div
              id="projects"
              className="text-project-container col-lg-3 offset-3 offset-lg-1 col-8 align-self-center"
            >
              <motion.p
                initial={{ x: "-100%", opacity: 0, scale: "200%" }}
                whileInView={{ x: 0, opacity: 1, scale: "100%" }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="projects-text"
              >
                <span>Featured Projects</span>
                <br />
                Explore my diverse portfolio showcasing innovative projects,
                highlighting my skills and creativity in web development.
              </motion.p>
            </div>
            <div className="img-project-container col-9 col-lg-6 d-flex justify-content-center ">
              <img className="mac-img " src={MacBook} alt="MacBook"></img>
              <div className="animation-container-project">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Iphone-${currentImageIndex}`}
                    initial={{ y: "100%", opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="photo-bg-project"
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="text-project-container col-lg-3 offset-3 offset-lg-1 col-8 align-self-center d-block d-lg-none">
              <motion.p
                initial={{ x: "100%", opacity: 0, scale: "200%" }}
                whileInView={{ x: 0, opacity: 1, scale: "100%" }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="projects-text"
              >
                <span>Creative Solutions</span>
                <br />
                Crafting innovative web solutions tailored to your needs,
                ensuring optimal performance across all devices and engaging
                user experiences.
              </motion.p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
