import "../css/hero.css";
import "../css/mediaq.css";

function Hero() {
  return (
    <div className="background d-flex ">
      <div className="text-container d-flex flex-column justify-content-center">
        <h2>Hello,</h2>
        <h2>
          I am <span>Marius</span>,
        </h2>
        <h1>Front End Developer</h1>
        <p>
          Discover my projects and get <span>inspired</span> for your next big
          idea.
        </p>
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
