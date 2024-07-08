import "../css/atu.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row } from "react-bootstrap";

import Iphonepng from "../assets/iphone-12-pro--silver.png";
import Photo from "../assets/photo1.png";
import Photo2 from "../assets/cc2.png";
import Photo3 from "../assets/sparks mobile.png";
import Photo4 from "../assets/coffe shope mobile.png";

function Atu() {
  const images = [Photo, Photo2, Photo3, Photo4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Schimbă imaginea la fiecare 3 secunde

    return () => clearInterval(interval); // Curăță intervalul la demontarea componentei
  });

  return (
    <div id="atu" className="background-atu d-flex align-items-center">
      <Container>
        <Row className="justify-content-center flex-column flex-lg-row align-content-center row-atu ">
          <div className="first-text-container col-lg-3 d-flex flex-column justify-content-around col-10 ">
            <motion.p
              initial={{ x: "-100%", opacity: 0, scale: "200%" }}
              whileInView={{ x: 0, opacity: 1, scale: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <span>Modern and Responsive Design</span>
              <br />
              Experience sleek, modern designs optimized for all devices,
              ensuring your website looks stunning everywhere.
            </motion.p>
            <motion.p
              initial={{ x: "-100%", opacity: 0, scale: "200%" }}
              whileInView={{ x: 0, opacity: 1, scale: "100%" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="d-none d-lg-block"
            >
              <span>Professional Services</span>
              <br />
              Delivering top-tier, professional web development services with a
              commitment to excellence and client satisfaction.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: "100%", opacity: 0, scale: "100%" }}
            whileInView={{ y: 0, opacity: 1, scale: "100%" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="iphone-container col-lg-4 col-10 d-flex flex-column align-items-center justify-content-center"
          >
            <img src={Iphonepng} alt="Iphone" className="iphone-img" />
            <div className="animation-container">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Iphone-${currentImageIndex}`}
                  initial={{ y: "100%", opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="photo-bg"
                />
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="secod-text-container col-lg-3 col-10 d-flex align-self-center">
            <motion.p
              initial={{ x: "100%", opacity: 0, scale: "200%" }}
              whileInView={{ x: 0, opacity: 1, scale: "100%" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span>Creative Solutions</span>
              <br />
              Crafting innovative web solutions tailored to your needs, ensuring
              optimal performance across all devices and engaging user
              experiences.
            </motion.p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Atu;
