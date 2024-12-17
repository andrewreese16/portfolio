import { useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".tech-icon");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add("fade-in");
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I am <span className="highlight">Andrew Reese</span> 👨‍💻
        </h1>
        <h2>
          Full-Stack Developer | Python | Django | JavaScript | React |
          PostgreSQL
        </h2>
        <p>
          I specialize in building dynamic, scalable, and responsive web
          applications using the latest technologies.
        </p>
        <div className="tech-icons">
          <div className="tech-icon">
            <i className="fab fa-python"></i>
          </div>
          <div className="tech-icon">
            <i className="fab fa-js"></i>
          </div>
          <div className="tech-icon">
            <i className="fab fa-react"></i>
          </div>
          <div className="tech-icon">
            <i className="fab fa-node-js"></i>
          </div>
          <div className="tech-icon">
            <i className="fab fa-django"></i>
          </div>
          <div className="tech-icon">
            <i className="fas fa-database"></i>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/src/assets/images/me.jpeg" // Replace with a relevant image or your avatar
          alt="Full Stack Developer"
        />
      </div>
    </section>
  );
};

export default HeroSection;
