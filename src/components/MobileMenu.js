import CloseMenu from "../assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png";
import "../css/mobile.css";
import { motion } from "framer-motion";

export function MobileMenu({ handleMobileMenu, mobileMenu }) {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mobile-container d-flex flex-column-reverse justify-content-around align-items-center"
    >
      <img
        src={CloseMenu}
        alt="close-button"
        className="close-btn"
        onClick={() => {
          handleMobileMenu();
        }}
        style={{ cursor: "pointer" }}
      />
      <ul className="nav-bar-list-mobile d-flex flex-column ">
        <li className="d-flex align-self-center">
          <a
            href="#skills"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            About
          </a>
        </li>
        <li className="d-flex align-self-center">
          <a
            href="#atu"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            Projects
          </a>
        </li>
        <li className="d-flex align-self-center">
          <a
            href="#contact"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
