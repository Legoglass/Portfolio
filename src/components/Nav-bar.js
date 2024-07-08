import { Container, Row } from "react-bootstrap";
import "../css/navbar.css";
import MobileMenu from "../assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.png";

function NavBar({ handleMobileMenu }) {
  return (
    <Container fluid className="nav-bar-container">
      <Row className="nav-bar-row col-12">
        <div className="d-flex d-lg-none justify-content-end">
          <img
            className="menu-mobile-img "
            src={MobileMenu}
            alt="menu mobile"
            onClick={() => {
              handleMobileMenu();
            }}
          ></img>
        </div>

        <ul className="nav-bar-list d-none d-lg-flex justify-content-end  ">
          <li>
            <a className="link-web" href="#skills">
              About
            </a>
          </li>
          <li>
            <a className="link-web" href="#atu">
              Projects
            </a>
          </li>
          <li>
            <a className="link-web" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default NavBar;
