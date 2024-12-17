import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="socials">
        <a
          href="https://github.com/andrewreese16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-reese-123a7b26b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/andrew.reese16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a href="mailto:andrewreese1616@gmail.com">
          <FaEnvelope size={30} />
        </a>
        <a href="tel:7249313377">
          <FaPhone size={30} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
