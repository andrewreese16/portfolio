import { Link } from "react-router-dom";
import "./ProjectSection.css";

const projects = [
  {
    id: "project1",
    title: "Vehicle Maintenance Tracker",
    image: "/src/assets/images/vehicle.png",
    description:
      "An application for users to track the maintenance of their vehicles.",
    projectLink: "https://example.com",
  },
  {
    id: "project2",
    title: "The Listening Ear",
    image: "/src/assets/images/ear.png",
    description: "A Therapy booking site.",
  },
  {
    id: "project3",
    title: "Reader Realm",
    image: "/src/assets/images/book.png",
    description:
      "An application for book lovers to share and find their favorite books.",
    projectLink: "https://example.com",
  },
  {
    id: "project4",
    title: "Active Vibe",
    image: "/src/assets/images/active.png",
    description: "A fitness tracking application.",
    projectLink: "https://example.com",
  },
  {
    id: "project5",
    title: "Community Resource",
    image: "/src/assets/images/resource.png",
    description: "Application for users to search and save local resources.",
  },
  {
    id: "project6",
    title: "Wordle",
    image: "/src/assets/images/wordle.png",
    description: "A clone of the popular NY Times Wordle.",
  },
  
];

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Navigate to the ProjectDetail page */}
            <Link to={`/project/${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                className="project-thumbnail"
              />
            </Link>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
