import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (hash) => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the section
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" onClick={() => handleNavClick("#home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#projects" onClick={() => handleNavClick("#projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={() => handleNavClick("#contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
