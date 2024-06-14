import "../css/atu.css";
import { Container, Row } from "react-bootstrap";
import Iphone from "../assets/iphone-12-pro--silver.png";

function Atu() {
  return (
    <div className="background-atu d-flex align-items-center">
      <Container>
        <Row className="justify-content-evenly flex-column flex-lg-row align-content-center row-atu ">
          <div className="first-text-container col-lg-3 d-flex flex-column justify-content-around col-10 ">
            <p>
              <span>Modern and Responsive Design</span>
              <br />
              Experience sleek, modern designs optimized for all devices,
              ensuring your website looks stunning everywhere.
            </p>
            <p className="d-none d-lg-block">
              <span>Professional Services</span>
              <br />
              "Delivering top-tier, professional web development services with a
              commitment to excellence and client satisfaction."
            </p>
          </div>
          <div className="iphone-container col-lg-4 col-10 d-flex justify-content-center">
            <img className="iphone-img" src={Iphone} alt="Iphone-12-Pro"></img>
          </div>
          <div className="secod-text-container col-lg-3 col-10 d-flex align-self-center">
            <p>
              <span>Professional Services</span>
              <br />
              "Delivering top-tier, professional web development services with a
              commitment to excellence and client satisfaction."
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Atu;
