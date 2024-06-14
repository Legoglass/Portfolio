import "../css/contact.css";
import "../css/mediaq.css";
import GitHub from "../assets/icons8-github 1.png";
import Mail from "../assets/Frame 1 (5).png";

function Constact() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:mariusdumitru9595@gmail.com?subject=Web Site&body=Corpul Mesajului";
  };

  return (
    <div id="contact" className="background-contact">
      <div className="text-container-contact d-flex flex-column justify-content-around">
        <div className="text-container-content">
          <h2>
            Let's <span>talk</span> about <br />
            your project
          </h2>
          <button className="contact-btn" onClick={handleEmailClick}>
            Let's get in touch!
          </button>
        </div>
        <div className="contatc-container-info d-flex flex-column flex-lg-row justify-content-around">
          <div className="d-flex align-items-center">
            <img className="contact-img" src={GitHub} alt="GitHub"></img>
            <p>/Legooglas</p>
          </div>
          <div className="d-flex align-items-center">
            <img className="contact-img" src={Mail} alt="Gmail"></img>
            <p>mariusdumitru9595@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Constact;
