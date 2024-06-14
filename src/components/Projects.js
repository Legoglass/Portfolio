import "../css/projects.css";
import MacBook from "../assets/Device - Macbook Pro.png";
import { Container, Row } from "react-bootstrap";

function Projects() {
  return (
    <div id="projects" className="background-projects">
      <Container fluid className="container-project">
        <Row>
          <div className="main-project-container d-flex flex-lg-row flex-column align-items-center my-5">
            <div className="text-project-container col-lg-3 offset-3 offset-lg-1 col-8 align-self-center">
              <p className="projects-text">
                <span>Featured Projects</span>
                <br />
                "Explore my diverse portfolio showcasing innovative projects,
                highlighting my skills and creativity in web development."
              </p>
            </div>
            <div className="img-project-container col-9 col-lg-6 d-flex justify-content-center ">
              <img className="mac-img " src={MacBook} alt="MacBook"></img>
            </div>
            <div className="text-project-container col-lg-3 offset-3 offset-lg-1 col-8 align-self-center d-block d-lg-none">
              <p className="projects-text">
                <span>Featured Projects</span>
                <br />
                "Explore my diverse portfolio showcasing innovative projects,
                highlighting my skills and creativity in web development."
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
