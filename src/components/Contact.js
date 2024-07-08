import "../css/contact.css";
import "../css/mediaq.css";
import GitHub from "../assets/icons8-github 1.png";
import Mail from "../assets/Frame 1 (5).png";
import { motion } from "framer-motion";

function Contact() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:mariusdumitru9595@gmail.com?subject=Web Site&body= Hello ...";
  };

  function handleGitHubClick() {
    window.open("https://github.com/Legoglass");
  }

  return (
    <div className="background-contact">
      <div className="text-container-contact d-flex flex-column justify-content-around">
        <div className="text-container-content">
          <motion.h2
            initial={{ x: "0", opacity: 0, scale: "200%" }}
            whileInView={{ x: 0, opacity: 1, scale: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's <span>talk</span> about <br />
            your project
          </motion.h2>
          <button className="contact-btn" onClick={handleEmailClick}>
            <p className="link-btn">Let's get in touch!</p>
          </button>
        </div>
        <div
          id="contact"
          className="contatc-container-info d-flex flex-column flex-lg-row justify-content-around"
        >
          <div className="d-flex align-items-center">
            <img
              className="contact-img"
              src={GitHub}
              alt="GitHub"
              onClick={handleGitHubClick}
            ></img>
            <p>/Legooglas</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              className="contact-img"
              src={Mail}
              alt="Gmail"
              onClick={handleEmailClick}
            ></img>
            <p>mariusdumitru9595@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
